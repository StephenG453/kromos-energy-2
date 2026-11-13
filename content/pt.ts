import type { Content } from "./types";

export const pt: Content = {
  meta: {
    title: "Kromos Energy | Energia solar distribuída, da rede ao consumidor",
    description:
      "A Kromos desenvolve e arrenda usinas de minigeração distribuída e opera o programa de Integração Nacional: 2 GW em 667 usinas, com US$ 2,0 bilhões de investimento previsto em cinco anos.",
  },
  nav: {
    items: [
      { href: "/integration", label: "Integração" },
      { href: "/investors", label: "Investidores" },
      { href: "/about", label: "Sobre" },
      { href: "#contato", label: "Contato" },
    ],
    cta: "Fale conosco",
    menu: "Menu",
    skip: "Pular para o conteúdo",
    close: "Fechar",
  },
  hero: {
    cta: "Fale com nosso time",
    image: "/images/hero-sunset.jpg",
    headline: ["Resultados escaláveis,", "geração distribuída."],
    tagline: ["Instalações de energia renovável para venda ou arrendamento nas Américas do Norte, Central e do Sul.", "Arquiteta da metodologia de minigeração distribuída do Brasil, Lei nº 14.300/2022"],
    figures: {
      label: "Um olhar sobre os números",
      intro: "Instalações distribuídas de grande porte em minigeração: temos o processo, a presença e o capital para levar energia alternativa do conceito ao consumidor.",
    },
    stats: [
      { value: "> 2GWp", label: "em desenvolvimento ativo" },
      { value: "> 800MWp", label: "de MGD em operação ou em desenvolvimento no Brasil" },
      { value: "> US$ 2 bilhões", label: "de investimento em MGD nos últimos cinco anos" },
      { value: "Fundada em 2019", label: "escritórios no Brasil e nos Estados Unidos" },
    ],
  },
  ecosystem: {
    index: "01",
    title: "Um ecossistema completo, cinco divisões",
    summary:
      "Cada elo do ecossistema responde por uma etapa: do terreno à subestação, da construção à fatura do consumidor.",
    companies: [
      {
        name: "Produção de energia",
        role: "Desenvolve e arrenda usinas de minigeração distribuída. Operadora do Pilar I do acordo com o Ministério de Minas e Energia.",
        figure: "2 GW",
        figureLabel: "Mais de 600 usinas",
      },
      {
        name: "Infraestrutura",
        role: "Subestações, armazenamento em baterias e linhas de transmissão como serviço. Responsável pelo Pilar II.",
        figure: "US$ 220 M",
        figureLabel: "infraestrutura de rede",
      },
      {
        name: "Construção",
        role: "Construtora com mais de 80 anos em geração, transmissão e infraestrutura pesada.",
        figure: "+10.000 MW",
        figureLabel: "instalados",
      },
      {
        name: "Suprimentos",
        role: "Braço de energia do Grupo CESBE: desenvolvimento, EPC, operação e manutenção e engenharia do proprietário.",
        figure: "472,54 MWp",
        figureLabel: "UFV Luiz Carlos, Paracatu/MG",
      },
      {
        name: "Redução de custos de energia",
        role: "Marketplace digital de energia solar por assinatura, sem painéis no imóvel.",
        figure: "+300",
        figureLabel: "usinas em 11 estados",
      },
      {
        name: "Investimento de capital",
        role: "Estruturação financeira e captação de recursos para energia limpa e infraestrutura.",
        figure: "US$ 2,0 bi",
        figureLabel: "captação do acordo com o MME",
      },
    ],
  },
  problem: {
    label: "Oportunidade à vista",
    lead: "A demanda de energia do Brasil supera a oferta.",
    statement:
      "A demanda por energia alternativa cresceu de apenas 17 megawatts para mais de 43 gigawatts em menos de dez anos.",
    stats: [
      { value: "43 GW", label: "em uso, ante 17 MW em 2015" },
      { value: "5 para 1", label: "proporção instalada entre geração distribuída e centralizada" },
      { value: "> 20% TIR", label: "retorno-alvo dos investimentos" },
      { value: "> 54 GW", label: "previstos para implantação no país" },
    ],
  },
  model: {
    cta: "Arrende uma usina com a Kromos",
    index: "02",
    title: "Usinas solares para arrendamento",
    summary:
      "Fundada em 2019, a Kromos usa as regras da minigeração distribuída para produzir energia em escala sob a Lei 14.300.",
    body: [
      "O modelo Kromos desenvolve usinas e as arrenda a distribuidoras, cooperativas e consumidores de média e alta tensão.",
      "O armazenamento opcional em baterias (BESS) pode ser incorporado ao modelo para compensar picos de demanda e melhorar muito o retorno do investimento.",
    ],
    label: "Modelo de negócio",
    claimsTitle: "Por que a Kromos",
    claims: [
      "Integradora de sistemas que mais cresce no Brasil",
      "Primeira a desenvolver e implementar a metodologia de minigeração distribuída",
      "Arquiteta das leis e regulamentações de minigeração distribuída no Brasil, e mais",
    ],
    meansTitle: "Para os clientes, isso significa:",
    compare: {
      othersTitle: "Propriedade tradicional",
      kromosTitle: "Modelo off-taker Kromos",
      others: ["Processos arriscados e altos custos iniciais", "Exigências ambientais difíceis de gerenciar", "Operação e manutenção sob risco do cliente"],
      kromos: ["O arrendamento da usina reduz o risco e o investimento", "Clientes off-takers gerenciam 'autoprodutores' para gerar receita", "Operação e manutenção pela Kromos incluídas"],
    },
    stats: [
      { value: "> 2 GW", label: "de demanda atual das distribuidoras clientes" },
      { value: "< 5 anos", label: "de payback" },
      { value: "20+ anos", label: "de vida útil do projeto" },
    ],
    timelineTitle: "Três normas levaram a geração distribuída de 17 MW a 43 GW",
    timeline: [
      {
        year: "2012",
        rule: "REN ANEEL 482",
        text: "Criou a microgeração e a minigeração até 1 MW, com compensação de energia e créditos válidos por 36 meses.",
        figure: "17 MW",
        figureLabel: "cerca de 1.700 sistemas até o fim de 2015",
      },
      {
        year: "2015",
        rule: "REN ANEEL 687",
        text: "Minigeração até 5 MW, geração compartilhada e autoconsumo remoto. Nasce o modelo de arrendamento da Kromos.",
        figure: "1,72 GW",
        figureLabel: "em novembro de 2019, cem vezes o nível de 2015",
      },
      {
        year: "2022",
        rule: "Lei Federal 14.300",
        text: "As regras viram lei, garantindo segurança jurídica. Fernando Augusto Filho contribuiu para o texto como assessor de energia da Comissão de Constituição e Justiça.",
        figure: "43 GW",
        figureLabel: "de solar distribuída em setembro de 2025",
      },
    ],
  },
  integration: {
    index: "01",
    title: "Integração Nacional: 2 GW em 667 usinas",
    summary:
      "Acordo de cooperação técnica com o Ministério de Minas e Energia: US$ 2,0 bilhões em cinco anos, com a Kromos como desenvolvedora e operadora.",
    lead: "Integração Nacional.",
    statement:
      "2 GW em 667 usinas, em seis estados. Um acordo de cooperação técnica com o Ministério de Minas e Energia prevê US$ 2,0 bilhões em cinco anos, com a Kromos como desenvolvedora e operadora de todas as usinas.",
    mapLabel: "Portfólio do acordo, por estado",
    agreementLabel: "O acordo",
    agreementTitle: "US$ 2,0 bilhões em cinco anos.",
    mou: [
      { value: "US$ 1.780 M", label: "Pilar I, Geração solar distribuída" },
      { value: "US$ 220 M", label: "Pilar II, Infraestrutura" },
      { value: "4.205 GWh", label: "geração no primeiro ano" },
      { value: "25 anos", label: "contratos de disponibilidade" },
    ],
    pillars: [
      {
        title: "Pilar I",
        value: "Geração solar distribuída",
        text: "2.000 MWac, cerca de 2.600 MWp, em 667 usinas de até 3 MWac, conectadas em média tensão de 13,8 ou 34,5 kV.",
        chip: "2.000 MWac",
      },
      {
        title: "Pilar II",
        value: "Infraestrutura de rede",
        text: "12 subestações de 138/34,5 kV com 24 bays, 90 km de alimentadores, SCADA e telecomunicações.",
        chip: "12 subestações",
      },
    ],
    partners:
      "Ministério de Minas e Energia, signatário. Kromos Energia S.A., desenvolve, opera e fornece a infraestrutura de transmissão e distribuição. Barocco Group, captação de recursos.",
    ledgerTitle: "Portfólio por estado",
    ledgerNote: "FC é o fator de capacidade médio. Máximo de 3 MWac por usina.",
    columns: { state: "Estado", mw: "MWac", plants: "Usinas", cf: "FC", utilities: "Distribuidoras" },
    rows: [
      { code: "MG", name: "Minas Gerais", mw: 520, plants: 169, cf: "26,5%", utilities: "CEMIG" },
      { code: "SP", name: "São Paulo", mw: 420, plants: 145, cf: "24,5%", utilities: "Enel SP, CPFL, Neoenergia Elektro" },
      { code: "RS", name: "Rio Grande do Sul", mw: 380, plants: 119, cf: "23,0%", utilities: "RGE, CEEE Equatorial, CPFL" },
      { code: "PR", name: "Paraná", mw: 360, plants: 124, cf: "22,5%", utilities: "Copel" },
      { code: "SC", name: "Santa Catarina", mw: 200, plants: 69, cf: "21,5%", utilities: "Celesc" },
      { code: "ES/RJ", name: "Espírito Santo e Rio de Janeiro", mw: 120, plants: 41, cf: "23,5%", utilities: "EDP ES, Light, Enel" },
    ],
    total: { label: "Total", mw: "2.000", plants: "667", cf: "24,0%", utilities: "12 distribuidoras" },
    nocChip: "Centro de operações",
    close: "Fechar",
    nocTitle: "Um centro de operações para todas as usinas",
    nocText:
      "Cada usina leva inversores, medidor de fronteira, estação meteorológica e um gateway de borda. Fibra ou 4G/5G, com backup por satélite, entregam a telemetria em menos de dois segundos a um centro de controle 24x7 com SCADA/EMS aberto, data lake, motor de IA e SOC de cibersegurança.",
    targets: [
      { value: "< 8%", label: "erro de previsão solar para o dia seguinte" },
      { value: "> 90%", label: "de recall na detecção de falhas e anomalias" },
      { value: "> 7 dias", label: "de antecedência no alerta de falha de inversor" },
      { value: "99,9%", label: "de disponibilidade da plataforma" },
    ],
    roadmapTitle: "Quatro fases em 60 meses",
    roadmap: [
      { phase: "Fase 1", window: "T+0 a T+6", name: "Planejamento", text: "Equipe central de IA e energia, especificação aberta de SCADA/EMS e piloto em 10 usinas." },
      { phase: "Fase 2", window: "T+6 a T+24", name: "Infraestrutura", text: "Licitação de SCADA, telecom e borda. NOC físico e em nuvem, medição em 150 usinas." },
      { phase: "Fase 3", window: "T+24 a T+48", name: "Integração", text: "400 usinas conectadas, 25 por mês, com relatórios regulatórios automatizados." },
      { phase: "Fase 4", window: "T+48 a T+60", name: "Operação plena", text: "667 usinas conectadas, operação assistida por IA, baterias e rede inteligente." },
    ],
  },
  pipeline: {
    index: "01",
    label: "Carteira licenciada",
    title: "56 projetos licenciados, com acesso à rede aprovado",
    summary:
      "Pipeline próprio de desenvolvimento em nove estados, com licença ambiental e parecer de acesso emitidos, em crescimento.",
    totals: [
      { value: "133,45", label: "MWac no total" },
      { value: "173,49", label: "MWcc no total" },
      { value: "56", label: "projetos" },
      { value: "9", label: "estados" },
    ],
    columns: { state: "Estado", mw: "MWac", count: "Projetos" },
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
    cta: "Fale conosco sobre investir",
    index: "07",
    title: "Infraestrutura como serviço",
    summary:
      "A Kromos oferece arrendamento de subestações, linhas e baterias. O cliente não imobiliza capital; o investidor recebe contratos de 25 anos.",
    body: [
      "Em 2025, cerca de 20% da geração eólica e solar potencial foi cortada, um recorde, com perdas estimadas em US$ 1,25 bilhão, em grande parte sem compensação. Ao mesmo tempo, mais de 54 GW de data centers e hidrogênio verde aguardam conexão.",
      "A Kromos é dona das subestações e do armazenamento em baterias e os arrenda como um único serviço. As baterias armazenam o excedente de energia solar ao meio-dia e o liberam no fim da tarde, quando a demanda atinge o pico. Isso mantém o fornecimento estável, estabiliza a rede e adia a necessidade de novas linhas de transmissão.",
    ],
    stats: [
      { value: "~20%", label: "da geração renovável potencial cortada em 2025" },
      { value: "US$ 1,25 bi", label: "em perdas estimadas, em grande parte sem compensação" },
      { value: "54+ GW", label: "na fila de conexão de data centers e hidrogênio verde" },
      { value: "105 GW", label: "pico recorde de demanda instantânea, fevereiro de 2025" },
    ],
    investorLabel: "Modelo para investidores",
    investorFigures: [
      { value: "US$ 100 M", label: "modelo de referência em subestações" },
      { value: "25 anos", label: "de contratos de arrendamento" },
      { value: "17,4%", label: "de rendimento bruto anual" },
      { value: "1,71x", label: "de cobertura do serviço da dívida nos dez primeiros anos" },
    ],
    serviceTitle: "Infraestrutura como serviço",
    service: [
      "CAPEX zero para o contratante: o serviço é prestado sem nova dívida.",
      "Custo previsível: parcela mensal fixa ao longo do contrato.",
      "Sem risco de obsolescência, manutenção ou desempenho para o operador.",
    ],
    investor:
      "Modelo de referência de US$ 100 milhões em subestações: contratos de 25 anos, rendimento bruto anual de 17,4% e cobertura do serviço da dívida de 1,71 vez nos dez primeiros anos.",
  },
  leadership: {
    index: "08",
    title: "Quatro executivos, Brasil e Estados Unidos",
    summary:
      "Uma diretoria com trajetória em energia, infraestrutura, telecomunicações, direito regulatório e mercado financeiro.",
    label: "Diretoria",
    figures: [
      { value: "30+", label: "anos desenvolvendo projetos de energia" },
      { value: "4,5 GWp", label: "em geração centralizada" },
      { value: "5.000+", label: "projetos concluídos" },
      { value: "1.566", label: "estações rádio base implantadas" },
    ],
    prev: "Anterior",
    next: "Próximo",
    people: [
      {
        name: "Fernando Augusto Filho",
        image: "/images/team-fernando.jpg",
        role: "Fundador e Diretor-Presidente",
        bio: "Desenvolve projetos desde 1994. Atuou por cinco anos como assessor de energia da Comissão de Constituição e Justiça e contribuiu para a Lei 14.300/2022. Entregou 488 projetos do BID, implantou 1.566 estações rádio base no Brasil, foi diretor de ativos da VIVO Telecom e, na FAAD, desenvolveu e construiu 49 edifícios em Curitiba. Soma 4,5 GWp em seis projetos de geração centralizada e, na Kromos, 124 projetos de minigeração distribuída.",
      },
      {
        name: "Phil Walsh",
        image: "/images/team-phil.jpg",
        role: "Diretor de Operações, EUA e Brasil",
        bio: "Mais de vinte anos de experiência em gestão de sistemas e anos de atuação em energia solar e eólica nos Estados Unidos. Liderança comprovada em ambientes diversos. Fundou e escalou empresas de infraestrutura até a venda.",
      },
      {
        name: "Marcos Antonio Nogas",
        image: "/images/team-marcos.jpg",
        role: "Diretor de Gestão de Programas, EUA e Brasil",
        bio: "Gerenciou diversos projetos de construção urbana de múltiplos andares. Tem anos de experiência com soluções de energia alternativa, trajetória comprovada nos setores bancário e financeiro e carreira em tecnologia da informação e marketing.",
      },
      {
        name: "Leonardo Della Costa",
        image: "/images/team-leonardo.jpg",
        role: "Diretor de Negócios e Assuntos Jurídicos, EUA e Brasil",
        bio: "Advogado especializado em direito de energia e contratos de energia. Mais de doze anos no setor e mais de 5.000 projetos concluídos. Fundador da Usesol Energia, rede nacional de franquias solares. Estrutura projetos prontos para construir nos aspectos jurídico, contábil, fiscal e comercial.",
      },
    ],
  },
  contact: {
    index: "Contato",
    title: "Toda parceria começa com uma conversa",
    summary:
      "Investidores, distribuidoras, cooperativas e proprietários de terrenos: escreva diretamente para a diretoria.",
    form: {
      name: "Nome",
      email: "E-mail",
      org: "Empresa ou instituição",
      message: "Como podemos ajudar?",
      submit: "Enviar mensagem",
      note: "Ou escreva para info@kromosenergy.com",
      subject: "Contato pelo site Kromos Energy",
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
    cta: "Fale conosco",
    panel: { title: "Fale conosco", close: "Fechar", reach: "Contato", message: "Mensagem" },
  },
  manifesto: {
    title: "Em resumo",
    text: "A Kromos desenvolve e arrenda usinas solares de minigeração distribuída no Brasil e nos Estados Unidos. Com o ecossistema que reuniu, conecta 667 usinas a um único centro nacional de operações e leva energia da rede ao consumidor em uma só cadeia.",
    image: "/images/stock-sunrise-field.jpg",
    facts: [
      { label: "Fundação", value: "2019" },
      { label: "Escritórios", value: "Curitiba, Brasil · Burleson, Texas" },
      { label: "Base regulatória", value: "Lei 14.300, o marco legal da geração distribuída" },
      { label: "Presença", value: "Seis estados brasileiros e os Estados Unidos" },
      { label: "Operação", value: "Um centro nacional de operações para 667 usinas" },
    ],
  },
  works: {
    index: "01",
    title: "Portfólio",
    period: "2019–2026",
    cta: "Descobrir",
    items: [
      { title: "Integração Nacional", category: "Programa com o MME · 2 GW em 667 usinas", status: "Em estruturação", image: "/images/stock-aerial-vast.jpg", href: "/integration" },
      { title: "Usinas para arrendamento", category: "Minigeração distribuída", status: "Prontas para corretagem", image: "/images/stock-aerial-rural.jpg", href: "#modelo" },
      { title: "Infraestrutura como serviço", category: "Subestações, linhas de transmissão e BESS", status: "Fornecimento de energia de longo prazo", image: "/images/stock-substation.jpg", href: "/investors" },
      { title: "Engenharia e construção", category: "Serviços completos de EPC", status: "Do projeto ao comissionamento", image: "/images/stock-crane.jpg", href: "/about" },
      { title: "Energia por assinatura", category: "Clientes off-takers · Mais de 300 usinas em 11 estados", status: "Economia com autoprodução", image: "/images/stock-aerial-rows.jpg", href: "/about" },
    ],
  },
  vision: {
    index: "02",
    label: "Ecossistema de parceiros",
    items: [
      { title: "Desenvolvimento", text: "Desenvolve e arrenda usinas de minigeração distribuída. Operadora do Pilar I do acordo com o Ministério de Minas e Energia." },
      { title: "Transmissão", text: "Subestações, armazenamento em baterias e linhas de transmissão como serviço. Responsável pelo Pilar II." },
      { title: "Engenharia", text: "Construtoras com muitos anos de experiência em geração, linhas de transmissão e infraestrutura pesada." },
      { title: "Operação", text: "Sistemas de energia: desenvolvimento, EPC, operação e manutenção, e engenharia das instalações." },
      { title: "Comercialização", text: "Marketplace digital pronto para energia solar por assinatura, sem painéis no imóvel." },
      { title: "Inteligência", text: "Um centro de operações de infraestrutura conecta as instalações a um painel de gestão que registra a geração, a manutenção preditiva e os relatórios regulatórios." },
    ],
    image: "/images/stock-aerial-rows.jpg",
  },
  pages: {
    integration: {
      label: "Integração Nacional",
      title: "2 GW em 667 usinas, um só centro de operações.",
      summary:
        "Um acordo de cooperação técnica com o Ministério de Minas e Energia: US$ 2,0 bilhões em cinco anos, com a Kromos desenvolvendo e operando cada usina.",
    },
    investors: {
      label: "Investidores",
      title: "Contratos de longo prazo lastreados em ativos reais.",
      summary:
        "56 projetos solares licenciados com acesso à rede aprovado, e infraestrutura de rede arrendada como serviço em contratos de 25 anos.",
    },
    about: {
      label: "Sobre a Kromos",
      title: "Uma empresa, a cadeia inteira.",
      summary:
        "Da prospecção de terras ao crédito na conta, em uma única cadeia de valor digital. Fundada em 2019 no Brasil e nos Estados Unidos.",
    },
    privacy: {
      label: "Jurídico",
      title: "Política de privacidade",
      summary: "Como este site trata seus dados pessoais.",
    },
  },
  privacy: {
    draftNote: "",
    updated: "Última atualização: novembro de 2026",
    sections: [
      {
        title: "Quem somos",
        paragraphs: [
          "Este site é mantido pela Kromos Energy Ltda, em Curitiba, Brasil, e pela Kromos Energy, LLC, em Burleson, Texas, Estados Unidos. Para qualquer assunto sobre seus dados pessoais, escreva para info@kromosenergy.com.",
        ],
      },
      {
        title: "O que coletamos",
        paragraphs: [
          "Não usamos cookies, ferramentas de análise nem rastreadores de publicidade neste site.",
          "O formulário de contato não armazena nada. Ao enviá-lo, seu próprio aplicativo de e-mail é aberto com seu nome, e-mail, empresa e mensagem preenchidos, e você decide se envia esse e-mail para nós.",
          "Quando você nos escreve, pelo formulário ou diretamente, recebemos o que você incluir: normalmente nome, e-mail, empresa e mensagem.",
          "Como qualquer site, nosso provedor de hospedagem registra dados técnicos de cada visita, como endereço IP, navegador e horário, para manter o site funcionando e seguro.",
        ],
      },
      {
        title: "Para que usamos",
        paragraphs: [
          "Usamos sua mensagem e seus dados de contato apenas para responder a você e dar continuidade à conversa que você iniciou. Usamos os registros técnicos apenas para operar e proteger o site.",
        ],
      },
      {
        title: "Base legal",
        paragraphs: [
          "Nos termos da Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018), tratamos esses dados para atender a solicitações feitas por você e com base em nosso legítimo interesse em operar um site seguro.",
        ],
      },
      {
        title: "Compartilhamento",
        paragraphs: [
          "Não vendemos seus dados. Compartilhamos apenas com os provedores que hospedam este site e operam nosso e-mail, e quando a lei exigir.",
        ],
      },
      {
        title: "Por quanto tempo guardamos",
        paragraphs: [
          "Guardamos as mensagens pelo tempo necessário para atender à sua solicitação e a qualquer relação que dela resulte, e depois as excluímos. Os registros de hospedagem são mantidos pelo nosso provedor por um período limitado (prazo a confirmar).",
        ],
      },
      {
        title: "Seus direitos",
        paragraphs: [
          "Você pode nos pedir que confirmemos se temos dados seus e solicitar acesso, correção ou exclusão, escrevendo para info@kromosenergy.com. Você também pode contatar a Autoridade Nacional de Proteção de Dados (ANPD).",
        ],
      },
      {
        title: "Alterações nesta política",
        paragraphs: [
          "Atualizaremos esta página quando a forma como tratamos dados mudar, por exemplo se o formulário de contato passar a enviar mensagens pelo nosso próprio serviço de e-mail.",
        ],
      },
    ],
  },
  footer: {
    tagline: "Energia solar distribuída, da rede ao consumidor.",
    rights: "© 2026 Kromos Energy. Todos os direitos reservados.",
    privacy: "Política de privacidade",
    languages: "Idioma",
    legal: "Legal",
    top: "Voltar ao topo",
  },
};
