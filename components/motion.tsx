"use client";

import { useEffect, useRef, type ReactNode } from "react";

// ponytail: mounted at the end of the page so its effect runs after the whole segment hydrates.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const REVEAL = "reveal";
const HOVER = "hover";
/** Pinned blocks need width and some height; anything shorter (a phone on its side) keeps the static layout. */
let easesReady = false;
function ensureEases() {
  if (easesReady) return;
  CustomEase.create(REVEAL, "0.16, 1, 0.3, 1");
  CustomEase.create(HOVER, "0.25, 1, 0.5, 1");
  easesReady = true;
}

/**
 * What paints under a point: sections marked data-tone="dark" (and anything with a dark background) are "dark";
 * a photo or video on light ground is "media"; otherwise "light".
 * Takes the whole hit stack, top first: transparent layers (like copy floating over a sibling photo) are looked
 * through, so the first thing that actually paints decides.
 */
function groundTone(stack: Element[]): "dark" | "media" | "light" {
  for (const n of stack) {
    if (n === document.documentElement) break;
    if (n.closest('[data-tone="dark"]')) return "dark";
    if (n.matches("img, video, picture, canvas")) return "media";
    const bg = getComputedStyle(n).backgroundColor;
    const m = bg.match(/-?[\d.]+/g);
    if (!m) continue;
    const [x, y, z, a = 1] = m.map(Number);
    if (a < 0.5) continue;
    // Colour-mixed utilities come back as oklab/oklch, whose first channel is already lightness (0..1).
    const dark = bg.startsWith("ok") ? x < 0.6 : (0.2126 * x + 0.7152 * y + 0.0722 * z) / 255 < 0.5;
    return dark ? "dark" : "light";
  }
  return "light";
}

/** Cuts an element's text into its rendered lines: measures word positions, then wraps each line in .line > span. */
function splitLines(el: HTMLElement) {
  const text = (el.dataset.text ??= el.textContent ?? "");
  const words = text.split(/\s+/).filter(Boolean);
  el.textContent = "";
  const probes = words.map((w, i) => {
    const probe = document.createElement("span");
    probe.textContent = w;
    // Hyphenated words ("meio-dia") must not break inside the probe, or the rebuilt line overflows.
    probe.style.whiteSpace = "nowrap";
    el.append(probe, i < words.length - 1 ? " " : "");
    return probe;
  });
  const lines: string[][] = [];
  let top = Number.NaN;
  probes.forEach((probe, i) => {
    if (probe.offsetTop !== top) {
      top = probe.offsetTop;
      lines.push([]);
    }
    lines[lines.length - 1].push(words[i]);
  });
  el.textContent = "";
  for (const line of lines) {
    const mask = document.createElement("span");
    mask.className = "line";
    const inner = document.createElement("span");
    inner.textContent = line.join(" ");
    mask.append(inner);
    el.append(mask);
  }
  el.classList.add("is-split");
}

/**
 * Re-cuts several blocks at once. All go back to plain text first: a block in a grid or flex track sized by its
 * content would otherwise be measured while its neighbours still hold their old unbreakable lines, which keep the
 * track at the old (wider) width, so the new lines would run past the edge.
 */
function resplitLines(els: HTMLElement[]) {
  els.forEach((el) => {
    if (el.dataset.text === undefined) return;
    el.textContent = el.dataset.text;
    el.classList.remove("is-split");
  });
  els.forEach(splitLines);
}

/** Lenis smooth scroll + one global reveal pass over data attributes. */
/** Wraps every word of el (inside nested spans too) in span.w and returns them; safe to call twice. */
function splitWords(el: HTMLElement) {
  if (el.dataset.words === "split") return [...el.querySelectorAll<HTMLElement>(".w")];
  const words: HTMLElement[] = [];
  const walk = (node: Node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
        continue;
      }
      if (child.nodeType !== Node.TEXT_NODE) continue;
      const frag = document.createDocumentFragment();
      for (const part of (child.textContent ?? "").split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) {
          frag.append(part);
          continue;
        }
        const w = document.createElement("span");
        w.className = "w";
        w.textContent = part;
        frag.append(w);
        words.push(w);
      }
      child.replaceWith(frag);
    }
  };
  walk(el);
  el.dataset.words = "split";
  return words;
}

/**
 * Dialogs opened by [data-dialog-open="id"] (the map tags). Native <dialog> for focus and Escape;
 * GSAP for the way in and out, after icomat.co.uk: the veil fades, the card rises, the title's words climb
 * out of their masks and the body follows. Runs with reduced motion too, just without the movement.
 */
function setupDialogs(lenis: Lenis | undefined, reduced: boolean, onCleanup: (() => void)[]) {
  const closing = new WeakSet<HTMLDialogElement>();
  // Scroll lock while a dialog is up. Stopping Lenis alone leaves the browser's own scrolling on, so the page moved
  // under the card: html.dialog-open turns page overflow off (wheel, keys, scrollbar), and wheel / touch gestures
  // outside the card are cancelled outright (iOS ignores overflow on html). Inside the card they scroll its own
  // content; its overscroll-behavior keeps them from chaining to the page.
  const html = document.documentElement;
  const block = (e: Event) => {
    const t = e.target as Element | null;
    if (!t?.closest?.("[data-dialog-card]")) e.preventDefault();
  };
  const lock = () => {
    html.classList.add("dialog-open");
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
  };
  const unlock = () => {
    html.classList.remove("dialog-open");
    window.removeEventListener("wheel", block);
    window.removeEventListener("touchmove", block);
  };
  const open = (d: HTMLDialogElement) => {
    if (d.open) return;
    d.showModal();
    lenis?.stop();
    lock();
    const card = d.querySelector<HTMLElement>("[data-dialog-card]");
    // No scroll on focus: the card can still sit off-screen (the side panel parks right of the screen after it
    // closes). iOS Safari would scroll the dialog sideways to reveal it, then snap back as the slide-in runs.
    card?.focus({ preventScroll: true });
    if (reduced) return;
    // data-dialog="side": the card slides in from the right edge instead of rising in the middle.
    const side = d.dataset.dialog === "side";
    gsap
      .timeline()
      .fromTo(d.querySelector("[data-dialog-backdrop]"), { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power1.out" }, 0)
      .fromTo(
        card,
        side ? { xPercent: 104, y: 0, opacity: 1 } : { y: 60, opacity: 0 },
        side ? { xPercent: 0, duration: 0.9, ease: REVEAL } : { y: 0, opacity: 1, duration: 0.8, ease: REVEAL },
        0,
      )
      .fromTo(d.querySelectorAll("[data-dialog-title] .word-mask > span"), { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: REVEAL, stagger: 0.05 }, 0.15)
      .fromTo(d.querySelector("[data-dialog-body]")?.children ?? [], { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: REVEAL, stagger: 0.06 }, 0.25);
  };
  const close = (d: HTMLDialogElement) => {
    if (!d.open || closing.has(d)) return;
    if (reduced) return d.close();
    closing.add(d);
    gsap
      .timeline({
        onComplete: () => {
          closing.delete(d);
          d.close();
        },
      })
      .to(
        d.querySelector("[data-dialog-card]"),
        d.dataset.dialog === "side" ? { xPercent: 104, duration: 0.5, ease: "power2.in" } : { y: 30, opacity: 0, duration: 0.35, ease: "power2.in" },
        0,
      )
      .to(d.querySelector("[data-dialog-backdrop]"), { opacity: 0, duration: 0.35, ease: "power1.in" }, 0.05);
  };
  const onClick = (e: MouseEvent) => {
    const target = e.target as Element | null;
    const opener = target?.closest<HTMLElement>("[data-dialog-open]");
    if (opener) {
      // An opener can sit inside the mobile menu: close that first so it isn't left open behind the panel.
      opener.closest("details")?.removeAttribute("open");
      const d = document.getElementById(opener.dataset.dialogOpen ?? "");
      if (d instanceof HTMLDialogElement) open(d);
      return;
    }
    const closer = target?.closest("[data-dialog-close]");
    const d = closer?.closest("dialog");
    if (d) close(d);
  };
  const dialogs = [...document.querySelectorAll<HTMLDialogElement>("dialog[data-dialog]")];
  const onCancel = (e: Event) => {
    e.preventDefault();
    close(e.currentTarget as HTMLDialogElement);
  };
  const onClose = () => {
    unlock();
    lenis?.start();
  };
  document.addEventListener("click", onClick);
  dialogs.forEach((d) => {
    d.addEventListener("cancel", onCancel);
    d.addEventListener("close", onClose);
  });
  onCleanup.push(() => {
    unlock();
    document.removeEventListener("click", onClick);
    dialogs.forEach((d) => {
      d.removeEventListener("cancel", onCancel);
      d.removeEventListener("close", onClose);
    });
  });
}

/** [data-words], after icomat.co.uk: every word goes 0.2 -> 1 in reading order, scrubbed with a little lag. */
function setupWords() {
  document.querySelectorAll<HTMLElement>("[data-words]").forEach((el) => {
    const timeline = el.closest("[data-int-timeline]");
    // The phases title keeps its first word lit, like icomat's "End-to-end production"; only the rest brightens.
    const words = splitWords(el).filter((w) => !timeline || w.parentElement === el);
    gsap.fromTo(
      words,
      // Unread words start at the dimmed lead-in's level (about 3:1, AA for large text), never fainter.
      { opacity: 0.45 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: timeline
          ? { trigger: timeline, start: "top 85%", end: "top 25%", scrub: 1 }
          : { trigger: el, start: "top 90%", end: "bottom 40%", scrub: 1 },
      },
    );
  });
}

/** National integration, block by block after icomat.co.uk (values measured there at 1440px). */
function setupIntegration(root: HTMLElement, lenis: Lenis | undefined, onCleanup: (() => void)[]) {
  // Map: the frame drifts against the map, state outlines draw with the scroll, then plant dots and tags land.
  const figure = root.querySelector<HTMLElement>("[data-int-figure]");
  if (figure) {
    const paths = figure.querySelectorAll<SVGPathElement>("[data-int-state]");
    gsap.fromTo(
      paths,
      { strokeDasharray: 1, strokeDashoffset: 1 },
      { strokeDashoffset: 0, ease: "none", stagger: 0.02, scrollTrigger: { trigger: figure, start: "top 85%", end: "center 55%", scrub: 1 } },
    );
    gsap.fromTo(
      figure.querySelectorAll(".is-on"),
      { fillOpacity: 0 },
      { fillOpacity: 1, ease: "none", scrollTrigger: { trigger: figure, start: "center 70%", end: "center 45%", scrub: 1 } },
    );
    gsap.from(figure.querySelectorAll("[data-int-dot]"), {
      scale: 0,
      duration: 0.9,
      ease: REVEAL,
      stagger: 0.08,
      scrollTrigger: { trigger: figure, start: "center 65%", once: true },
    });
    const chips = figure.querySelectorAll("[data-int-chip]");
    gsap
      .timeline({ scrollTrigger: { trigger: figure, start: "center 70%", once: true } })
      .from(chips, { opacity: 0, duration: 0.6, ease: "power1.out", stagger: 0.12 }, 0)
      .from([...chips].map((c) => c.querySelector(".chip-label > span")), { yPercent: 110, duration: 0.9, ease: REVEAL, stagger: 0.12 }, 0.1);
    const map = root.querySelector("[data-int-map]");
    // From md only: on phones the frame holds the map and its tags, so the two can't drift apart.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const scrub = { trigger: map, start: "top bottom", end: "bottom top", scrub: true };
      gsap.fromTo(root.querySelector("[data-int-frame]"), { y: 90 }, { y: -90, ease: "none", scrollTrigger: scrub });
      gsap.fromTo(figure, { y: 40 }, { y: -40, ease: "none", scrollTrigger: scrub });
    });
    onCleanup.push(() => mm.revert());
  }

  // Photos: 1.3x inside rounded frames, drifting -12% -> 12% while the frame crosses the screen.
  root.querySelectorAll<HTMLElement>("[data-int-photo]").forEach((frame) => {
    gsap.fromTo(
      frame.querySelector("img"),
      { scale: 1.3, yPercent: -12 },
      { yPercent: 12, ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });
}

/**
 * [data-row], after icomat.co.uk's comparison table: each row's text rises out of its .mline mask while its .rule
 * (and any [data-bar] inside) draws from the left, scrubbed as the row comes up the screen.
 * [data-draw]: dotted rules unroll left to right the same way.
 */
function setupRows() {
  document.querySelectorAll<HTMLElement>("[data-row]").forEach((row) => {
    gsap
      .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: row, start: "top 95%", end: "top 65%", scrub: 1 } })
      .fromTo(row.querySelectorAll(".mline > span"), { yPercent: 100 }, { yPercent: 0, stagger: 0.08 }, 0)
      .fromTo(row.querySelectorAll(".rule, [data-bar]"), { scaleX: 0 }, { scaleX: 1 }, 0);
  });
  document.querySelectorAll<HTMLElement>("[data-draw]").forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: el, start: "top 90%", end: "top 55%", scrub: 1 } },
    );
  });
}

/**
 * [data-slider]: a native sideways track (snap, touch and trackpad) driven card by card by its arrows,
 * which grey out at either end. Works with reduced motion too, just without the smooth glide.
 */

function setupSliders(reduced: boolean, onCleanup: (() => void)[]) {
  document.querySelectorAll<HTMLElement>("[data-slider]").forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-slider-track]");
    const prev = root.querySelector<HTMLButtonElement>("[data-slider-prev]");
    const next = root.querySelector<HTMLButtonElement>("[data-slider-next]");
    if (!track) return;
    const step = () => {
      const [a, b] = track.querySelectorAll<HTMLElement>("[data-slider-card]");
      return b ? b.offsetLeft - a.offsetLeft : track.clientWidth;
    };
    const bar = root.querySelector<HTMLElement>("[data-slider-progress]");
    const sync = () => {
      const max = track.scrollWidth - track.clientWidth;
      if (prev) prev.disabled = track.scrollLeft < 4;
      if (next) next.disabled = track.scrollLeft > max - 4;
      // The rule under the cards fills as the track moves; full when everything fits.
      if (bar) bar.style.transform = `scaleX(${max > 0 ? track.scrollLeft / max : 1})`;
    };
    const go = (dir: number) => track.scrollBy({ left: dir * step(), behavior: reduced ? "auto" : "smooth" });
    const onPrev = () => go(-1);
    const onNext = () => go(1);
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
    onCleanup.push(() => {
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    });
  });
}

/**
 * [data-slider="scroll"], from md: the stage pins and the page scroll walks the track card by card (snapping),
 * while the arrows scroll the page to the previous or next card. Below md it stays a swipeable track.
 */

/** [data-reveal]: cards open upward out of a clip as they arrive, their photo settling from 1.15x. */
/**
 * Footer, after icomat.co.uk: while it comes up, its content starts 30% higher and settles as the page bottoms out,
 * so the footer seems to be uncovered rather than pushed in; the hairlines drift the other way.
 */
function setupFooter() {
  const footer = document.querySelector<HTMLElement>("[data-footer]");
  const inner = footer?.querySelector("[data-footer-inner]");
  if (!footer || !inner) return;
  gsap
    .timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: footer, start: "top bottom", end: "bottom bottom", scrub: true } })
    .fromTo(inner, { yPercent: -30 }, { yPercent: 0 }, 0);
  // The symbol, the name and the nav rise out of their masks once, as the footer takes most of the screen.
  gsap.fromTo(
    footer.querySelectorAll("[data-footer-rise] > *"),
    { yPercent: 105 },
    { yPercent: 0, duration: 1.2, ease: REVEAL, stagger: 0.05, scrollTrigger: { trigger: footer, start: "top 45%", once: true } },
  );
}

/**
 * Footer hairlines, after icomat.co.uk: a fan of curves climbing from lower left to upper right that keeps
 * undulating, with a brighter band drifting across. Only runs while the footer is on screen; still with reduced motion.
 */
function setupFooterLines(reduced: boolean, onCleanup: (() => void)[]) {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-footer-lines]");
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;
  const COUNT = 72;
  let w = 0;
  let h = 0;
  let t = 0;
  let last = 0;
  let frame = 0;

  const size = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    // The highlight band wanders between a third and two thirds of the width.
    const p = 0.5 + 0.17 * Math.sin(t * 0.21);
    const g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, "rgba(244,244,242,0.26)");
    g.addColorStop(Math.max(0.01, p - 0.22), "rgba(244,244,242,0.1)");
    g.addColorStop(p, "rgba(244,244,242,0.24)");
    g.addColorStop(Math.min(0.99, p + 0.22), "rgba(244,244,242,0.08)");
    g.addColorStop(1, "rgba(244,244,242,0.03)");
    ctx.strokeStyle = g;
    ctx.lineWidth = 1;
    const steps = Math.max(24, Math.round(w / 24));
    for (let i = 0; i < COUNT; i++) {
      const y0 = h * (-0.05 + (i / (COUNT - 1)) * 1.75);
      ctx.beginPath();
      for (let k = 0; k <= steps; k++) {
        const u = k / steps;
        const bow =
          0.13 * Math.sin(Math.PI * u * 1.15 + t * 0.35 + i * 0.035) + 0.05 * Math.sin(Math.PI * u * 1.6 - t * 0.23 + i * 0.02);
        const y = y0 + h * (-0.62 * u + bow);
        if (k === 0) ctx.moveTo(-2, y);
        else ctx.lineTo(u * (w + 4) - 2, y);
      }
      ctx.stroke();
    }
  };
  const tick = (now: number) => {
    t += Math.min(now - (last || now), 50) / 1000;
    last = now;
    draw();
    frame = requestAnimationFrame(tick);
  };
  const start = () => {
    if (frame || reduced) return;
    last = 0;
    frame = requestAnimationFrame(tick);
  };
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };

  size();
  draw();
  const resize = new ResizeObserver(() => {
    size();
    draw();
  });
  resize.observe(canvas);
  const seen = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
  seen.observe(canvas);
  onCleanup.push(() => {
    stop();
    resize.disconnect();
    seen.disconnect();
  });
}

function setupReveals() {
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 85%",
    once: true,
    onEnter: (batch) => {
      gsap.fromTo(batch, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: REVEAL, stagger: 0.1 });
      gsap.fromTo(
        batch.flatMap((el) => [...el.querySelectorAll("img")]),
        { scale: 1.15 },
        { scale: 1, duration: 1.6, ease: REVEAL, stagger: 0.1 },
      );
    },
  });
}

/**
 * Mobile menu (<details>): closes on Escape (focus back on the toggle), on a tap outside, and once an item
 * is chosen, so it never stays open over the section it just jumped to.
 */
function setupMenu(onCleanup: (() => void)[]) {
  const menu = document.querySelector<HTMLDetailsElement>("details[data-menu]");
  if (!menu) return;
  const close = (focus = false) => {
    if (!menu.open) return;
    menu.open = false;
    if (focus) menu.querySelector("summary")?.focus();
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") close(true);
  };
  const onPointer = (e: PointerEvent) => {
    if (!menu.contains(e.target as Node)) close();
  };
  const onPick = (e: MouseEvent) => {
    if ((e.target as Element).closest("a")) close();
  };
  document.addEventListener("keydown", onKey);
  document.addEventListener("pointerdown", onPointer);
  menu.addEventListener("click", onPick);
  onCleanup.push(() => {
    document.removeEventListener("keydown", onKey);
    document.removeEventListener("pointerdown", onPointer);
    menu.removeEventListener("click", onPick);
  });
}

/**
 * States ledger on phones: a tap accordion instead of the pinned, scroll-driven one (md up, setupIntegration).
 * One row open at a time, the first to start; tapping the open row closes it. Runs with reduced motion too.
 */
function setupLedgerAccordion(onCleanup: (() => void)[]) {
  const ledger = document.querySelector<HTMLElement>("[data-int-ledger]");
  if (!ledger) return;
  const rows = [...ledger.querySelectorAll<HTMLElement>("[data-int-row]")];
  const buttons = rows.map((r) => r.querySelector<HTMLButtonElement>("[data-int-row-button]")!);
  const show = (i: number) =>
    rows.forEach((r, k) => {
      r.classList.toggle("is-open", k === i);
      buttons[k].setAttribute("aria-expanded", String(k === i));
    });
  const onClick = (e: MouseEvent) => {
    const button = (e.target as Element).closest<HTMLElement>("[data-int-row-button]");
    if (!button) return;
    const i = Number(button.dataset.intRowButton);
    show(rows[i].classList.contains("is-open") ? -1 : i);
  };
  // At every width: the first state open, a click opens another (or closes the open one). The page scrolls past
  // freely; nothing is driven by the scroll any more.
  // The first collapse happens with transitions off: animated, the page would still be ~750px taller while the
  // scroll triggers measure it, leaving the footer's reveal past the real bottom of the page.
  ledger.classList.add("is-instant", "is-accordion");
  ledger.addEventListener("click", onClick);
  show(0);
  void ledger.offsetHeight;
  ledger.classList.remove("is-instant");
  onCleanup.push(() => {
    ledger.removeEventListener("click", onClick);
    ledger.classList.remove("is-accordion");
    rows.forEach((r) => r.classList.remove("is-open"));
    buttons.forEach((b) => b.removeAttribute("aria-expanded"));
  });
}

/**
 * In-page links (menu, skip link, "voltar ao topo"): Lenis scrolls smoothly but leaves focus where it was.
 * Move focus to the target too, so the next Tab or screen-reader swipe continues from the section.
 */
function setupAnchorFocus(onCleanup: (() => void)[]) {
  const onClick = (e: MouseEvent) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
    const id = a?.getAttribute("href")?.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  };
  document.addEventListener("click", onClick);
  onCleanup.push(() => document.removeEventListener("click", onClick));
}

export function Motion() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    ensureEases();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // False once this effect is cleaned up. React's dev mode mounts, unmounts and remounts every component, and the
    // fonts.ready promise below can't be cancelled: without this flag the first, already torn-down mount would still
    // run setup(), and its pins would fight the live ones (the phases track pinned 700px down the screen).
    let alive = true;
    let lenis: Lenis | undefined;
    let raf: ((t: number) => void) | undefined;
    if (!reduced) {
      lenis = new Lenis({ lerp: 0.1, anchors: { offset: -72 } });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (t: number) => lenis?.raf(t * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const onCleanup: (() => void)[] = [];
    const ctx = gsap.context(() => {});
    setupDialogs(lenis, reduced, onCleanup);
    setupSliders(reduced, onCleanup);
    setupMenu(onCleanup);
    setupLedgerAccordion(onCleanup);
    setupAnchorFocus(onCleanup);
    setupFooterLines(reduced, onCleanup);

    ctx.add(() => {
      const header = document.querySelector("header");
      const blur = document.querySelector(".header-blur");
      const mark = document.querySelector("[data-header-mark]");
      const footer = document.querySelector("[data-footer]");
      if (!header) return;
      // What sits under the header sets its mode. Dark ground: solid white text, no paper fade (blur only).
      // A photo on light ground: no fade either, and the text inverts over it pixel by pixel (CSS blend).
      // Light ground: dark text over the paper fade.
      let frame = 0;
      const sync = () => {
        frame = 0;
        const tone = groundTone(
          document
            .elementsFromPoint(window.innerWidth / 2, 24)
            .filter((el) => !header.contains(el) && !blur?.contains(el)),
        );
        header.classList.toggle("on-dark", tone === "dark");
        blur?.classList.toggle("no-tint", tone !== "light");
        // The footer carries its own name and nav, so the header steps aside once the footer reaches it.
        const over = (footer?.getBoundingClientRect().top ?? Infinity) < header.offsetHeight;
        header.classList.toggle("is-away", over);
        blur?.classList.toggle("is-away", over);
        mark?.classList.toggle("is-away", over);
      };
      const queue = () => {
        if (!frame) frame = requestAnimationFrame(sync);
      };
      sync();
      window.addEventListener("scroll", queue, { passive: true });
      window.addEventListener("resize", queue);
      onCleanup.push(() => {
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", queue);
        window.removeEventListener("resize", queue);
      });
    });

    // Reveals and parallax measure the page, so they wait for the real font metrics.
    const setup = () => {
      if (reduced || !alive) return;
      ctx.add(() => {
        // [data-split]: plain copy cut into its rendered lines, each in a .line mask, then revealed like [data-lines].
        const splits = [...document.querySelectorAll<HTMLElement>("[data-split]")];
        splits.forEach((el) => {
          splitLines(el);
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            once: true,
            onEnter: () => {
              el.dataset.revealed = "";
              gsap.to(el.querySelectorAll(".line > span"), { y: 0, duration: 1.2, ease: REVEAL, stagger: 0.08 });
            },
          });
        });
        // Lines depend on width: re-cut on resize, or hand back plain text once a block has been revealed.
        let lastWidth = window.innerWidth;
        let timer: number | undefined;
        const onResize = () => {
          window.clearTimeout(timer);
          timer = window.setTimeout(() => {
            if (window.innerWidth === lastWidth) return;
            lastWidth = window.innerWidth;
            splits.forEach((el) => {
              if ("revealed" in el.dataset) el.textContent = el.dataset.text ?? "";
            });
            resplitLines(splits.filter((el) => !("revealed" in el.dataset)));
            ScrollTrigger.refresh();
          }, 150);
        };
        window.addEventListener("resize", onResize);
        onCleanup.push(() => {
          window.clearTimeout(timer);
          window.removeEventListener("resize", onResize);
        });

        const integration = document.querySelector<HTMLElement>("#integracao");
        if (integration) setupIntegration(integration, lenis, onCleanup);
        setupRows();
        setupReveals();
        setupFooter();
        // Scrubbed word reveals go after every pinned block above them, so their start and end include the pin spacing.
        setupWords();
        ScrollTrigger.sort();

        document.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
          const targets = el.querySelectorAll(".line > span");
          gsap.to(targets, {
            y: 0,
            duration: 1.2,
            ease: REVEAL,
            stagger: 0.08,
            delay: Number(el.dataset.delay ?? 0),
            scrollTrigger: { trigger: el, start: el.closest("#hero") ? "top bottom" : "top 88%", once: true },
          });
        });

        // The hero sits in the first screen whatever its height: reveal it now, not at a scroll threshold.
        gsap.to("#hero [data-fade]", { opacity: 1, y: 0, duration: 1.1, ease: REVEAL });
        ScrollTrigger.batch("[data-fade]:not(#hero [data-fade])", {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: REVEAL, stagger: 0.08 }),
        });

        document.querySelectorAll<HTMLElement>("[data-bars]").forEach((el) => {
          gsap.to(el.querySelectorAll("[data-bar]"), {
            scaleX: 1,
            duration: 1.4,
            ease: REVEAL,
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          });
        });

        // Figures count up from zero, keeping the locale's separators: "2,0", "2.0", "2.000" (thousands).
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const text = el.dataset.count ?? "";
          const tail = text.match(/([.,])(\d+)$/);
          const thousandsOnly = tail?.[2].length === 3;
          const decimals = tail && !thousandsOnly ? tail[2].length : 0;
          const decimalSep = tail && !thousandsOnly ? tail[1] : "";
          const intPart = decimals ? text.slice(0, -tail![0].length) : text;
          const groupSep = intPart.match(/[.,]/)?.[0] ?? "";
          const target = Number(text.replace(/[.,]/g, "")) / 10 ** decimals;
          const format = (v: number) => {
            const [i, d] = v.toFixed(decimals).split(".");
            const grouped = groupSep ? i.replace(/\B(?=(\d{3})+(?!\d))/g, groupSep) : i;
            return d ? grouped + decimalSep + d : grouped;
          };
          // Hold the final width so the unit beside it doesn't slide while the digits grow. In em, so a resize
          // before the count runs (fluid type) can't leave a desktop-wide box that pushes the page sideways.
          el.style.display = "inline-block";
          el.style.minWidth = `${el.getBoundingClientRect().width / parseFloat(getComputedStyle(el).fontSize)}em`;
          const n = { v: 0 };
          el.textContent = format(0);
          gsap.to(n, {
            v: target,
            duration: 1.8,
            ease: REVEAL,
            onUpdate: () => {
              el.textContent = format(n.v);
            },
            onComplete: () => {
              el.textContent = text;
              el.style.minWidth = "";
            },
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax || 80);
          gsap.fromTo(
            el,
            { y: -amount / 2 },
            {
              y: amount / 2,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });
    };

    // Line splitting measures text, so it needs the real font metrics.
    document.fonts.ready.then(setup);

    // Scroll triggers are measured once; when the page's height changes afterwards (a state opened, an image loaded
    // late), measure again, so every reveal below the change still fires where it should.
    let pageHeight = document.documentElement.scrollHeight;
    let remeasure = 0;
    const heightWatch = new ResizeObserver(() => {
      const h = document.documentElement.scrollHeight;
      if (Math.abs(h - pageHeight) < 2) return;
      pageHeight = h;
      window.clearTimeout(remeasure);
      remeasure = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    });
    heightWatch.observe(document.body);
    onCleanup.push(() => {
      heightWatch.disconnect();
      window.clearTimeout(remeasure);
    });

    return () => {
      alive = false;
      onCleanup.forEach((fn) => fn());
      ctx.revert();
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}

/** Magnetic hover for primary CTAs. */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    ensureEases();
    const inner = el.firstElementChild as HTMLElement | null;
    if (!inner) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      gsap.to(inner, { x, y, duration: 0.6, ease: HOVER });
    };
    const leave = () => gsap.to(inner, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" });

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  return (
    <div ref={ref} className="inline-block p-2 -m-2">
      {children}
    </div>
  );
}
