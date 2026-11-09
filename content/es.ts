import type { Content } from "./types";

export const es: Content = {
  meta: {
    title: "Kromos Energy | Energía solar distribuida, de la red al consumidor",
    description:
      "Kromos desarrolla y arrienda plantas de minigeneración distribuida y opera el programa de Integración Nacional: 2 GW en 667 plantas, con US$ 2.000 millones de inversión prevista en cinco años.",
  },
  nav: {
    items: [
      { href: "/integration", label: "Integración" },
      { href: "/investors", label: "Inversionistas" },
      { href: "/about", label: "Nosotros" },
      { href: "#contato", label: "Contacto" },
    ],
    cta: "Hable con nosotros",
    menu: "Menú",
    skip: "Saltar al contenido",
    close: "Cerrar",
  },
  hero: {
    cta: "Hable con nuestro equipo",
    image: "/images/hero-sunset.jpg",
    headline: ["Energía solar", "a gran escala."],
    tagline: ["La primera en desarrollar e implementar la metodología de minigeneración distribuida.", "Plantas solares hechas para arrendamiento a consumidores y distribuidoras, en Brasil y Estados Unidos."],
    figures: {
      label: "Kromos en cifras",
      intro: "Escala comprobada en minigeneración distribuida: cartera, presencia y capital para llevar energía solar de la red al consumidor.",
    },
    stats: [
      { value: "2 GWac", label: "cartera de Integración Nacional" },
      { value: "667", label: "plantas en seis estados" },
      { value: "US$ 2.000 M", label: "inversión prevista en cinco años" },
      { value: "2019", label: "fundación, Brasil y Estados Unidos" },
    ],
  },
  ecosystem: {
    index: "01",
    title: "Una cadena completa, cinco empresas",
    summary:
      "Cada eslabón del ecosistema responde por una etapa: del terreno a la subestación, de la construcción a la factura del consumidor.",
    companies: [
      {
        name: "Kromos Energy",
        role: "Desarrolla y arrienda plantas de minigeneración distribuida. Operadora del Pilar I del acuerdo con el Ministerio de Minas y Energía de Brasil.",
        figure: "2 GW",
        figureLabel: "667 plantas",
      },
      {
        name: "TransAmerica Grid Infrastructure",
        role: "Subestaciones, almacenamiento en baterías y líneas de transmisión como servicio. Responsable del Pilar II.",
        figure: "US$ 220 M",
        figureLabel: "infraestructura de red",
      },
      {
        name: "Grupo CESBE",
        role: "Constructora con más de 80 años en generación, transmisión e infraestructura pesada.",
        figure: "+10.000 MW",
        figureLabel: "instalados",
      },
      {
        name: "Giya",
        role: "Brazo de energía del Grupo CESBE: desarrollo, EPC, operación y mantenimiento e ingeniería del propietario.",
        figure: "472,54 MWp",
        figureLabel: "planta Luiz Carlos, Paracatu, MG",
      },
      {
        name: "Nextron Energia",
        role: "Marketplace digital de energía solar por suscripción, sin paneles en el inmueble.",
        figure: "+300",
        figureLabel: "plantas en 11 estados",
      },
      {
        name: "Barocco Group",
        role: "Estructuración financiera y captación de recursos para energía limpia e infraestructura.",
        figure: "US$ 2,0 mil M",
        figureLabel: "captación del acuerdo con el MME",
      },
    ],
  },
  problem: {
    label: "La oportunidad",
    lead: "El auge solar de Brasil superó a su red.",
    statement:
      "La generación solar distribuida pasó de 17 MW a 43 GW en diez años. En 2025, un récord de una quinta parte de la generación eólica y solar potencial fue recortada, mientras más de 54 GW de centros de datos e hidrógeno verde esperan conexión. La respuesta es generar cerca del consumidor, con una red hecha para transportar esa energía.",
    stats: [
      { value: "43 GW", label: "de solar distribuida en septiembre de 2025, frente a 17 MW en 2015" },
      { value: "~20%", label: "de la generación renovable potencial recortada en 2025" },
      { value: "US$ 1.250 M", label: "en pérdidas estimadas, en gran parte sin compensación" },
      { value: "> 54 GW", label: "de centros de datos e hidrógeno verde esperando conexión" },
    ],
  },
  model: {
    cta: "Arriende una planta con Kromos",
    index: "02",
    title: "Plantas solares en arriendo",
    summary:
      "Fundada en 2019 en Brasil y Estados Unidos, Kromos usa las reglas de la minigeneración distribuida para producir energía a gran escala bajo la Ley 14.300.",
    body: [
      "Kromos desarrolla plantas de hasta 3 MWac y las arrienda a distribuidoras, cooperativas y consumidores de media y alta tensión. El cliente recibe energía sin invertir en la planta; el excedente diario se convierte en crédito en el sistema brasileño de compensación de energía.",
      "Pueden incorporarse baterías al modelo para compensar los picos de demanda, desplazando la generación del mediodía al inicio de la noche.",
    ],
    label: "Modelo de negocio",
    claimsTitle: "Por qué Kromos",
    claims: [
      "Integradora de sistemas que más crece en Brasil",
      "Primera en desarrollar y aplicar la metodología de minigeneración distribuida",
      "Arquitecta de las leyes y normas de minigeneración distribuida en Brasil",
    ],
    meansTitle: "Para los clientes, esto significa:",
    compare: {
      othersTitle: "Planta propia",
      kromosTitle: "El modelo Kromos",
      others: ["Inversión inicial en la planta", "Proyecto, licencias y obra a cargo del cliente", "Operación y mantenimiento bajo riesgo del cliente"],
      kromos: ["Arriendo, sin inversión inicial", "Planta desarrollada y construida por Kromos", "Operación y mantenimiento por Kromos"],
    },
    stats: [
      { value: "> 2 GW", label: "de demanda actual de las distribuidoras clientes" },
      { value: "< 5 años", label: "de retorno de la inversión" },
      { value: "20+ años", label: "de vida útil del proyecto" },
    ],
    timelineTitle: "Tres normas llevaron la generación distribuida de 17 MW a 43 GW",
    timeline: [
      {
        year: "2012",
        rule: "REN ANEEL 482",
        text: "Creó la microgeneración y la minigeneración hasta 1 MW, con compensación de energía y créditos válidos por 36 meses.",
        figure: "17 MW",
        figureLabel: "cerca de 1.700 sistemas a fines de 2015",
      },
      {
        year: "2015",
        rule: "REN ANEEL 687",
        text: "Minigeneración hasta 5 MW, generación compartida y autoconsumo remoto. Nace el modelo de arriendo de Kromos.",
        figure: "1,72 GW",
        figureLabel: "en noviembre de 2019, cien veces el nivel de 2015",
      },
      {
        year: "2022",
        rule: "Ley Federal 14.300",
        text: "Las reglas pasan a ser ley, garantizando seguridad jurídica. Fernando Augusto Filho contribuyó al texto como asesor de energía de la Comisión de Constitución y Justicia.",
        figure: "43 GW",
        figureLabel: "de solar distribuida en septiembre de 2025",
      },
    ],
  },
  integration: {
    index: "01",
    title: "Integración Nacional: 2 GW en 667 plantas",
    summary:
      "Acuerdo de cooperación técnica con el Ministerio de Minas y Energía: US$ 2.000 millones en cinco años, con Kromos como desarrolladora y operadora.",
    lead: "Integración Nacional.",
    statement:
      "2 GW en 667 plantas, en seis estados. Un acuerdo de cooperación técnica con el Ministerio de Minas y Energía prevé US$ 2,0 mil millones en cinco años, con Kromos como desarrolladora y operadora de todas las plantas.",
    mapLabel: "Portafolio del acuerdo, por estado",
    agreementLabel: "El acuerdo",
    agreementTitle: "US$ 2,0 mil millones en cinco años.",
    mou: [
      { value: "US$ 1.780 M", label: "Pilar I, generación solar distribuida" },
      { value: "US$ 220 M", label: "Pilar II, infraestructura de red TGI" },
      { value: "4.205 GWh", label: "generación en el primer año" },
      { value: "25 años", label: "contratos de disponibilidad" },
    ],
    pillars: [
      {
        title: "Pilar I",
        value: "Generación solar distribuida",
        text: "2.000 MWac, cerca de 2.600 MWp, en 667 plantas de hasta 3 MWac, conectadas en media tensión de 13,8 o 34,5 kV.",
        chip: "2.000 MWac",
      },
      {
        title: "Pilar II",
        value: "Infraestructura de red",
        text: "12 subestaciones de 138/34,5 kV con 24 bahías, 90 km de alimentadores, SCADA y telecomunicaciones.",
        chip: "12 subestaciones",
      },
    ],
    more: "Conozca el programa",
    partners:
      "Ministerio de Minas y Energía, signatario. Kromos Energia S.A., desarrolla y opera. Barocco Group, captación de recursos. TGI, infraestructura de transmisión y distribución.",
    ledgerTitle: "Cartera por estado",
    ledgerNote: "FC es el factor de capacidad medio. Máximo de 3 MWac por planta.",
    columns: { state: "Estado", mw: "MWac", plants: "Plantas", cf: "FC", utilities: "Distribuidoras" },
    rows: [
      { code: "MG", name: "Minas Gerais", mw: 520, plants: 169, cf: "26,5%", utilities: "CEMIG" },
      { code: "SP", name: "São Paulo", mw: 420, plants: 145, cf: "24,5%", utilities: "Enel SP, CPFL, Neoenergia Elektro" },
      { code: "RS", name: "Rio Grande do Sul", mw: 380, plants: 119, cf: "23,0%", utilities: "RGE, CEEE Equatorial, CPFL" },
      { code: "PR", name: "Paraná", mw: 360, plants: 124, cf: "22,5%", utilities: "Copel" },
      { code: "SC", name: "Santa Catarina", mw: 200, plants: 69, cf: "21,5%", utilities: "Celesc" },
      { code: "ES/RJ", name: "Espírito Santo y Río de Janeiro", mw: 120, plants: 41, cf: "23,5%", utilities: "EDP ES, Light, Enel" },
    ],
    total: { label: "Total", mw: "2.000", plants: "667", cf: "24,0%", utilities: "12 distribuidoras" },
    nocChip: "Centro de operaciones",
    close: "Cerrar",
    nocTitle: "Un centro de operaciones para todas las plantas",
    nocText:
      "Cada planta lleva inversores, medidor de frontera, estación meteorológica y un gateway de borde. Fibra o 4G/5G, con respaldo satelital, entregan la telemetría en menos de dos segundos a un centro de control 24x7 con SCADA/EMS abierto, data lake, motor de IA y SOC de ciberseguridad.",
    targets: [
      { value: "< 8%", label: "error de pronóstico solar para el día siguiente" },
      { value: "> 90%", label: "de recall en la detección de fallas y anomalías" },
      { value: "> 7 días", label: "de anticipación en la alerta de falla de inversor" },
      { value: "99,9%", label: "de disponibilidad de la plataforma" },
    ],
    roadmapTitle: "Cuatro fases en 60 meses",
    roadmap: [
      { phase: "Fase 1", window: "T+0 a T+6", name: "Planificación", text: "Equipo central de IA y energía, especificación abierta de SCADA/EMS y piloto en 10 plantas." },
      { phase: "Fase 2", window: "T+6 a T+24", name: "Infraestructura", text: "Licitación de SCADA, telecomunicaciones y borde. NOC físico y en la nube, medición en 150 plantas." },
      { phase: "Fase 3", window: "T+24 a T+48", name: "Integración", text: "400 plantas conectadas, 25 por mes, con informes regulatorios automatizados." },
      { phase: "Fase 4", window: "T+48 a T+60", name: "Operación plena", text: "667 plantas conectadas, operación asistida por IA, baterías y red inteligente." },
    ],
  },
  pipeline: {
    index: "01",
    label: "Cartera licenciada",
    title: "56 proyectos licenciados, con acceso a la red aprobado",
    summary:
      "Cartera propia de desarrollo en nueve estados, con licencia ambiental y dictamen de acceso emitidos, en crecimiento.",
    totals: [
      { value: "133,45", label: "MWac en total" },
      { value: "173,49", label: "MWcc en total" },
      { value: "56", label: "proyectos" },
      { value: "9", label: "estados" },
    ],
    columns: { state: "Estado", mw: "MWac", count: "Proyectos" },
    rows: [
      { code: "GO", mw: 31.1, count: 12 },
      { code: "PI", mw: 25.1, count: 11 },
      { code: "BA", mw: 22.8, count: 11 },
      { code: "SC", mw: 12.2, count: 4 },
      { code: "SP", mw: 11.5, count: 4 },
      { code: "CE", mw: 11.45, count: 5 },
      { code: "PE", mw: 10.8, count: 5 },
      { code: "RJ", mw: 6.5, count: 2 },
      { code: "RN", mw: 2.0, count: 2 },
    ],
  },
  grid: {
    cta: "Hable con nosotros sobre invertir",
    index: "07",
    title: "La red como servicio",
    summary:
      "TransAmerica Grid Infrastructure arrienda subestaciones, líneas y baterías. El cliente no inmoviliza capital; el inversionista recibe contratos a 25 años.",
    body: [
      "En 2025, cerca del 20% de la generación eólica y solar potencial fue recortada, un récord, con pérdidas estimadas en US$ 1.250 millones, en gran parte sin compensación. Al mismo tiempo, más de 54 GW de centros de datos e hidrógeno verde esperan conexión.",
      "La respuesta de TGI combina subestaciones arrendadas como servicio con almacenamiento en baterías. La batería se carga con el excedente solar del mediodía y se descarga en la rampa del final de la tarde, ofrece capacidad firme y servicios de estabilidad a la red y posterga refuerzos de transmisión.",
    ],
    stats: [
      { value: "~20%", label: "de la generación renovable potencial recortada en 2025" },
      { value: "US$ 1.250 M", label: "en pérdidas estimadas, en gran parte sin compensación" },
      { value: "54+ GW", label: "en cola de conexión de centros de datos e hidrógeno verde" },
      { value: "105 GW", label: "pico récord de demanda instantánea, febrero de 2025" },
    ],
    investorLabel: "Modelo para inversionistas",
    investorFigures: [
      { value: "US$ 100 M", label: "modelo de referencia en subestaciones" },
      { value: "25 años", label: "de contratos de arriendo" },
      { value: "17,4%", label: "de rendimiento bruto anual" },
      { value: "1,71x", label: "de cobertura del servicio de la deuda en los diez primeros años" },
    ],
    serviceTitle: "Infraestructura como servicio",
    service: [
      "CAPEX cero para el contratante: el servicio se presta sin deuda nueva.",
      "Costo previsible: cuota mensual fija durante el contrato.",
      "Sin riesgo de obsolescencia, mantenimiento o desempeño para el operador.",
    ],
    investor:
      "Modelo de referencia de US$ 100 millones en subestaciones: contratos a 25 años, rendimiento bruto anual del 17,4% y cobertura del servicio de la deuda de 1,71 veces en los primeros diez años.",
  },
  leadership: {
    index: "08",
    title: "Cuatro ejecutivos, Brasil y Estados Unidos",
    summary:
      "Una dirección con trayectoria en energía, infraestructura, telecomunicaciones, derecho regulatorio y mercado financiero.",
    label: "Dirección",
    figures: [
      { value: "30+", label: "años desarrollando proyectos de energía" },
      { value: "4,5 GWp", label: "en generación centralizada" },
      { value: "5.000+", label: "proyectos concluidos" },
      { value: "1.566", label: "estaciones base implantadas" },
    ],
    prev: "Anterior",
    next: "Siguiente",
    people: [
      {
        name: "Fernando Augusto Filho",
        image: "/images/team-fernando.jpg",
        role: "Fundador y Director General",
        bio: "Desarrolla proyectos desde 1994. Fue asesor de energía de la Comisión de Constitución y Justicia durante cinco años y contribuyó a la Ley 14.300/2022. Entregó 488 proyectos del BID, instaló 1.566 radiobases en Brasil, fue director de activos de VIVO Telecom y, en FAAD, desarrolló y construyó 49 edificios en Curitiba. Suma 4,5 GWp en seis proyectos de generación centralizada y, en Kromos, 124 proyectos de minigeneración distribuida.",
      },
      {
        name: "Phil Walsh",
        image: "/images/team-phil.jpg",
        role: "Director de Operaciones, EE. UU. y Brasil",
        bio: "Más de veinte años de experiencia en gestión de sistemas y años de trabajo en energía solar y eólica en Estados Unidos. Liderazgo comprobado en entornos diversos. Fundó y escaló empresas de infraestructura hasta su venta.",
      },
      {
        name: "Marcos Antonio Nogas",
        image: "/images/team-marcos.jpg",
        role: "Director de Gestión de Programas, EE. UU. y Brasil",
        bio: "Gestionó diversos proyectos de construcción urbana de varios pisos. Tiene años de experiencia con soluciones de energía alternativa, trayectoria comprobada en los sectores bancario y financiero y una carrera en tecnología de la información y marketing.",
      },
      {
        name: "Leonardo Della Costa",
        image: "/images/team-leonardo.jpg",
        role: "Director de Negocios y Asuntos Jurídicos, EE. UU. y Brasil",
        bio: "Abogado especializado en derecho de energía y contratos de energía. Más de doce años en el sector y más de 5.000 proyectos concluidos. Fundador de Usesol Energia, red nacional de franquicias solares. Estructura proyectos listos para construir en sus aspectos jurídico, contable, fiscal y comercial.",
      },
    ],
  },
  contact: {
    index: "Contacto",
    title: "Toda alianza empieza con una conversación",
    summary:
      "Inversionistas, distribuidoras, cooperativas y propietarios de terrenos: escriba directamente a la dirección.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      org: "Empresa o institución",
      message: "¿Cómo podemos ayudar?",
      submit: "Enviar mensaje",
      note: "O escriba a info@kromosenergy.com",
      subject: "Contacto desde el sitio Kromos Energy",
    },
    offices: [
      {
        country: "Brasil",
        company: "Kromos Energy Ltda",
        address: ["Rua XV de Novembro, 556, sala 1006, Centro", "CEP 80020-310, Curitiba, PR"],
        phone: "+55 41 98864-5652",
      },
      {
        country: "Estados Unidos",
        company: "Kromos Energy, LLC",
        address: ["1177 Crossvine Drive", "Burleson, TX 76028"],
        phone: "+1 817 475-9917",
      },
    ],
    email: "info@kromosenergy.com",
    cta: "Contáctenos",
    panel: { title: "Contáctenos", close: "Cerrar", reach: "Contacto", message: "Mensaje", maps: "Ver en el mapa" },
  },
  manifesto: {
    title: "En resumen",
    text: "Kromos desarrolla y arrienda plantas solares de minigeneración distribuida en Brasil y Estados Unidos. Con el ecosistema que reunió, conecta 667 plantas a un único centro nacional de operaciones y lleva energía de la red al consumidor en una sola cadena.",
    image: "/images/stock-sunrise-field.jpg",
    facts: [
      { label: "Fundación", value: "2019" },
      { label: "Oficinas", value: "Curitiba, Brasil · Burleson, Texas" },
      { label: "Base regulatoria", value: "Ley 14.300, el marco legal de la generación distribuida en Brasil" },
      { label: "Presencia", value: "Seis estados de Brasil y Estados Unidos" },
      { label: "Operación", value: "Un centro nacional de operaciones para 667 plantas" },
    ],
  },
  works: {
    index: "01",
    title: "Portafolio",
    period: "2019–2026",
    cta: "Descubrir",
    items: [
      { title: "Integración Nacional", category: "Programa con el Ministerio · 2 GW en 667 plantas", status: "En estructuración", image: "/images/stock-aerial-vast.jpg", href: "/integration" },
      { title: "Plantas en arriendo", category: "Minigeneración distribuida · 56 proyectos", status: "Licenciados", image: "/images/stock-aerial-rural.jpg", href: "#modelo" },
      { title: "Red como servicio", category: "TGI · subestaciones, líneas y baterías", status: "US$ 220 M", image: "/images/stock-substation.jpg", href: "/investors" },
      { title: "Ingeniería y construcción", category: "Grupo CESBE y Giya · +10.000 MW instalados", status: "80 años", image: "/images/stock-crane.jpg", href: "/about" },
      { title: "Energía por suscripción", category: "Nextron · +300 plantas en 11 estados", status: "Hasta 20% de ahorro", image: "/images/stock-aerial-rows.jpg", href: "/about" },
    ],
  },
  vision: {
    index: "02",
    label: "Ecosistema",
    items: [
      { title: "Desarrollo", text: "Kromos Energy. Desarrolla y arrienda plantas de minigeneración distribuida. Operadora del Pilar I del acuerdo con el Ministerio de Minas y Energía de Brasil." },
      { title: "Transmisión", text: "TransAmerica Grid Infrastructure. Subestaciones, almacenamiento en baterías y líneas de transmisión como servicio. Responsable del Pilar II." },
      { title: "Ingeniería", text: "Grupo CESBE. Constructora con más de 80 años en generación, transmisión e infraestructura pesada." },
      { title: "Operación", text: "Giya. Brazo de energía del Grupo CESBE: desarrollo, EPC, operación y mantenimiento e ingeniería del propietario." },
      { title: "Comercialización", text: "Nextron Energia. Marketplace digital de energía solar por suscripción, sin paneles en el inmueble." },
      { title: "Inteligencia", text: "Kromos trata la tecnología como infraestructura. Un centro nacional de operaciones, con SCADA abierto, data lake y motor de IA, conecta cada planta a un único panel y automatiza el pronóstico de generación, el mantenimiento predictivo y los informes regulatorios. La decisión sigue siendo humana; la escala pasa a ser digital." },
    ],
    image: "/images/stock-aerial-rows.jpg",
  },
  pages: {
    integration: {
      label: "Integración Nacional",
      title: "2 GW en 667 plantas, un solo centro de operaciones.",
      summary:
        "Un acuerdo de cooperación técnica con el Ministerio de Minas y Energía de Brasil: US$ 2.000 millones en cinco años, con Kromos desarrollando y operando cada planta.",
    },
    investors: {
      label: "Inversionistas",
      title: "Contratos de largo plazo respaldados por activos reales.",
      summary:
        "56 proyectos solares licenciados con acceso a la red aprobado, e infraestructura de red arrendada como servicio en contratos de 25 años.",
    },
    about: {
      label: "Sobre Kromos",
      title: "Una empresa, toda la cadena.",
      summary:
        "Desde la prospección de tierras hasta el crédito en la factura, en una sola cadena de valor digital. Fundada en 2019 en Brasil y Estados Unidos.",
    },
    privacy: {
      label: "Legal",
      title: "Política de privacidad",
      summary: "Cómo este sitio trata sus datos personales.",
    },
  },
  privacy: {
    draftNote: "Borrador para revisión legal: este texto describe cómo funciona el sitio hoy y aún no ha sido aprobado.",
    updated: "Borrador, noviembre de 2026",
    sections: [
      {
        title: "Quiénes somos",
        paragraphs: [
          "Este sitio es operado por Kromos Energy Ltda, en Curitiba, Brasil, y Kromos Energy, LLC, en Burleson, Texas, Estados Unidos. Para cualquier asunto sobre sus datos personales, escriba a info@kromosenergy.com.",
        ],
      },
      {
        title: "Qué recopilamos",
        paragraphs: [
          "No usamos cookies, herramientas de analítica ni rastreadores publicitarios en este sitio.",
          "El formulario de contacto no almacena nada. Al enviarlo, se abre su propia aplicación de correo con su nombre, correo electrónico, empresa y mensaje completados, y usted decide si nos envía ese correo.",
          "Cuando nos escribe, por el formulario o directamente, recibimos lo que incluya: normalmente nombre, correo electrónico, empresa y mensaje.",
          "Como cualquier sitio web, nuestro proveedor de alojamiento registra datos técnicos de cada visita, como dirección IP, navegador y hora, para mantener el sitio en funcionamiento y seguro.",
        ],
      },
      {
        title: "Para qué los usamos",
        paragraphs: [
          "Usamos su mensaje y sus datos de contacto solo para responderle y dar seguimiento a la conversación que usted inició. Usamos los registros técnicos solo para operar y proteger el sitio.",
        ],
      },
      {
        title: "Base legal",
        paragraphs: [
          "Conforme a la Ley General de Protección de Datos de Brasil (LGPD, Ley 13.709/2018), tratamos estos datos para atender las solicitudes que usted realiza y con base en nuestro interés legítimo en operar un sitio seguro.",
        ],
      },
      {
        title: "Con quién los compartimos",
        paragraphs: [
          "No vendemos sus datos. Solo los compartimos con los proveedores que alojan este sitio y operan nuestro correo, y cuando la ley lo exige.",
        ],
      },
      {
        title: "Cuánto tiempo los conservamos",
        paragraphs: [
          "Conservamos los mensajes el tiempo necesario para atender su solicitud y cualquier relación que resulte de ella, y luego los eliminamos. Nuestro proveedor conserva los registros de alojamiento por un período limitado (plazo por confirmar).",
        ],
      },
      {
        title: "Sus derechos",
        paragraphs: [
          "Puede pedirnos que confirmemos si tenemos datos suyos y solicitar acceso, corrección o eliminación, escribiendo a info@kromosenergy.com. También puede contactar a la Autoridad Nacional de Protección de Datos de Brasil (ANPD).",
        ],
      },
      {
        title: "Cambios en esta política",
        paragraphs: [
          "Actualizaremos esta página cuando cambie la forma en que tratamos los datos, por ejemplo si el formulario de contacto pasa a enviar mensajes a través de nuestro propio servicio de correo.",
        ],
      },
    ],
  },
  footer: {
    tagline: "Energía solar distribuida, de la red al consumidor.",
    rights: "© 2026 Kromos Energy. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    languages: "Idioma",
    legal: "Legal",
    top: "Volver arriba",
  },
};
