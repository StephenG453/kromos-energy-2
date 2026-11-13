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
    headline: ["Resultados escalables,", "generación distribuida."],
    tagline: ["Instalaciones de energía renovable en venta o arriendo en América del Norte, Central y del Sur.", "Arquitecta de la metodología de minigeneración distribuida de Brasil, Ley n.º 14.300/2022"],
    figures: {
      label: "Una mirada a las cifras",
      intro: "Instalaciones distribuidas a gran escala en minigeneración: tenemos el proceso, la presencia y el capital para llevar la energía alternativa del concepto al consumidor.",
    },
    stats: [
      { value: "> 2GWp", label: "en desarrollo activo" },
      { value: "> 800MWp", label: "de MGD en operación o en desarrollo en Brasil" },
      { value: "> US$ 2.000 M", label: "de inversión en MGD en los últimos cinco años" },
      { value: "Fundada en 2019", label: "oficinas en Brasil y Estados Unidos" },
    ],
  },
  ecosystem: {
    index: "01",
    title: "Un ecosistema completo, cinco divisiones",
    summary:
      "Cada eslabón del ecosistema responde por una etapa: del terreno a la subestación, de la construcción a la factura del consumidor.",
    companies: [
      {
        name: "Producción de energía",
        role: "Desarrolla y arrienda plantas de minigeneración distribuida. Operadora del Pilar I del acuerdo con el Ministerio de Minas y Energía de Brasil.",
        figure: "2 GW",
        figureLabel: "Más de 600 plantas",
      },
      {
        name: "Infraestructura",
        role: "Subestaciones, almacenamiento en baterías y líneas de transmisión como servicio. Responsable del Pilar II.",
        figure: "US$ 220 M",
        figureLabel: "infraestructura de red",
      },
      {
        name: "Construcción",
        role: "Constructora con más de 80 años en generación, transmisión e infraestructura pesada.",
        figure: "+10.000 MW",
        figureLabel: "instalados",
      },
      {
        name: "Abastecimiento",
        role: "Brazo de energía del Grupo CESBE: desarrollo, EPC, operación y mantenimiento e ingeniería del propietario.",
        figure: "472,54 MWp",
        figureLabel: "planta Luiz Carlos, Paracatu, MG",
      },
      {
        name: "Reducción de costos de energía",
        role: "Marketplace digital de energía solar por suscripción, sin paneles en el inmueble.",
        figure: "+300",
        figureLabel: "plantas en 11 estados",
      },
      {
        name: "Inversión de capital",
        role: "Estructuración financiera y captación de recursos para energía limpia e infraestructura.",
        figure: "US$ 2,0 mil M",
        figureLabel: "captación del acuerdo con el MME",
      },
    ],
  },
  problem: {
    label: "Oportunidad a la vista",
    lead: "La demanda de energía de Brasil supera la oferta.",
    statement:
      "La demanda de energía alternativa creció de apenas 17 megavatios a más de 43 gigavatios en menos de diez años.",
    stats: [
      { value: "43 GW", label: "en uso, frente a 17 MW en 2015" },
      { value: "5 a 1", label: "relación instalada entre generación distribuida y centralizada" },
      { value: "> 20% TIR", label: "retorno objetivo de las inversiones" },
      { value: "> 54 GW", label: "planificados para su implantación en el país" },
    ],
  },
  model: {
    cta: "Arriende una planta con Kromos",
    index: "02",
    title: "Plantas solares en arriendo",
    summary:
      "Fundada en 2019, Kromos usa las reglas de la minigeneración distribuida para producir energía a gran escala bajo la Ley 14.300.",
    body: [
      "El modelo Kromos desarrolla plantas y las arrienda a distribuidoras, cooperativas y consumidores de media y alta tensión.",
      "El almacenamiento opcional en baterías (BESS) puede incorporarse al modelo para compensar los picos de demanda y mejorar mucho el retorno de la inversión.",
    ],
    label: "Modelo de negocio",
    claimsTitle: "Por qué Kromos",
    claims: [
      "Integradora de sistemas que más crece en Brasil",
      "Primera en desarrollar y aplicar la metodología de minigeneración distribuida",
      "Arquitecta de las leyes y normas de minigeneración distribuida en Brasil, y más",
    ],
    meansTitle: "Para los clientes, esto significa:",
    compare: {
      othersTitle: "Propiedad tradicional",
      kromosTitle: "Modelo off-taker de Kromos",
      others: ["Procesos riesgosos y altos costos iniciales", "Requisitos ambientales difíciles de gestionar", "Operación y mantenimiento bajo riesgo del cliente"],
      kromos: ["El arriendo de la planta reduce el riesgo y la inversión", "Los clientes off-taker gestionan 'autoproductores' para generar ingresos", "Operación y mantenimiento por Kromos incluidos"],
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
      { value: "US$ 1.780 M", label: "Pilar I, Generación solar distribuida" },
      { value: "US$ 220 M", label: "Pilar II, Infraestructura" },
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
      "Ministerio de Minas y Energía, signatario. Kromos Energia S.A., desarrolla, opera y provee la infraestructura de transmisión y distribución. Barocco Group, captación de recursos.",
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
    title: "Infraestructura como servicio",
    summary:
      "Kromos ofrece arrendamiento de subestaciones, líneas y baterías. El cliente no inmoviliza capital; el inversionista recibe contratos a 25 años.",
    body: [
      "En 2025, cerca del 20% de la generación eólica y solar potencial fue recortada, un récord, con pérdidas estimadas en US$ 1.250 millones, en gran parte sin compensación. Al mismo tiempo, más de 54 GW de centros de datos e hidrógeno verde esperan conexión.",
      "Kromos es dueña de las subestaciones y del almacenamiento en baterías y los arrienda como un único servicio. Las baterías almacenan el excedente de energía solar al mediodía y lo liberan al final de la tarde, cuando la demanda alcanza su pico. Esto mantiene el suministro estable, estabiliza la red y posterga la necesidad de nuevas líneas de transmisión.",
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
    panel: { title: "Contáctenos", close: "Cerrar", reach: "Contacto", message: "Mensaje" },
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
      { title: "Plantas en arriendo", category: "Minigeneración distribuida · 56 proyectos", status: "Listos para corretaje", image: "/images/stock-aerial-rural.jpg", href: "#modelo" },
      { title: "Infraestructura como servicio", category: "Subestaciones, líneas de transmisión y BESS", status: "Suministro de energía a largo plazo", image: "/images/stock-substation.jpg", href: "/investors" },
      { title: "Ingeniería y construcción", category: "Servicios EPC completos", status: "Del diseño a la puesta en marcha", image: "/images/stock-crane.jpg", href: "/about" },
      { title: "Energía por suscripción", category: "Clientes off-taker · Más de 300 plantas en 11 estados", status: "Ahorro con autoproducción", image: "/images/stock-aerial-rows.jpg", href: "/about" },
    ],
  },
  vision: {
    index: "02",
    label: "Ecosistema de socios",
    items: [
      { title: "Desarrollo", text: "Desarrolla y arrienda plantas de minigeneración distribuida. Operadora del Pilar I del acuerdo con el Ministerio de Minas y Energía de Brasil." },
      { title: "Transmisión", text: "Subestaciones, almacenamiento en baterías y líneas de transmisión como servicio. Responsable del Pilar II." },
      { title: "Ingeniería", text: "Constructoras con muchos años de experiencia en generación, líneas de transmisión e infraestructura pesada." },
      { title: "Operación", text: "Sistemas de energía: desarrollo, EPC, operación y mantenimiento, e ingeniería de las instalaciones." },
      { title: "Comercialización", text: "Marketplace digital listo para energía solar por suscripción, sin paneles en el inmueble." },
      { title: "Inteligencia", text: "Un centro de operaciones de infraestructura conecta las instalaciones a un panel de gestión que registra la generación, el mantenimiento predictivo y los informes regulatorios." },
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
    draftNote: "",
    updated: "Última actualización: noviembre de 2026",
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
