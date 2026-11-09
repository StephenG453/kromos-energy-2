# Kromos Energy — site institucional

Next.js (App Router) + Tailwind v4 + GSAP + Lenis. Três idiomas em rotas: `/pt` (padrão), `/en`, `/es`.

Quatro páginas por idioma. Home (`/pt`): hero em vídeo de tela cheia com header sobreposto, a oportunidade, o modelo de arrendamento, portfólio em títulos entre colchetes e um resumo da Integração Nacional, terminando no contato. Páginas internas: `/integration` (mapa, pilares, fases, carteira por estado), `/investors` (pipeline, rede como serviço, modelo do investidor) e `/about` (quem somos, ecossistema, liderança). Sem abertura animada: a página carrega direto no conteúdo.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000 -> redireciona para /pt, /en ou /es pelo Accept-Language
npm run build
```

## Onde mexer

| O quê | Onde |
|---|---|
| Copy e números (por idioma) | `content/pt.ts`, `content/en.ts`, `content/es.ts` (tipo em `content/types.ts`) |
| Tokens: cores, tipografia, easings | `app/globals.css` (`@theme`) |
| Seções da home | `components/sections.tsx` |
| Nav e rodapé | `components/chrome.tsx` |
| Animações (reveal, barras, parallax, magnético) | `components/motion.tsx` |
| Formulário de contato | `components/contact-form.tsx` (hoje abre `mailto:`; trocar por rota com SES) |
| Fonte | RF Dewi Regular e Semibold (`app/fonts/`, carregadas em `app/[locale]/layout.tsx`) |
| Logo | `components/logo.tsx` (paths de `../Identidade Visual/white.svg`, cor via `currentColor`: empilhada no rodapé, em linha no header), `app/icon.svg`, `app/apple-icon.png` |
| Fotos | `public/images/` (extraídas das apresentações da Kromos; trocar pelas profissionais quando chegarem) |
| Redirecionamento de idioma | `proxy.ts` |

Fonte dos dados: `documentos/Kromos_National_Integration_Executive_Summary-EN_final_s.pdf` (30/10/2026).

## Pendências

- Licença da fonte: RF Dewi é comercial (Russian Fonts). Confirmar que a licença do arquivo cobre uso web neste site.
- Fotos profissionais: as atuais vieram dos decks (resolução até 2000px). O render de baterias em `bess.jpg` mostra marca de terceiro; substituir.
- Formulário: criar `app/api/contact/route.ts` com Amazon SES (o domínio já tem DKIM/SPF/DMARC da SES configurados).
- Política de privacidade: rascunho em `/privacy` (texto em `content/*.ts`, `privacy`), fora do Google (`noindex`) até a revisão jurídica. Depois de aprovado: `draftNote: ""` e remover `robots` em `app/[locale]/privacy/page.tsx`.
- Deploy na Vercel e apontamento do DNS (hoje na HostGator).
