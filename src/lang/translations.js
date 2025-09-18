import ImgProjetoPampa from "../assets/pampa.jpeg";
import ImgProjetoMotyro from "../assets/motyroCapa.png";
import ImgProjetoNossaHorta from "../assets/nossaHortaCapa.png";
import ImgProjetoEcotrilhas from "../assets/imgEcotrilhas.png";

// src/i18n/translations.js
const translations = {
  pt: {
    // Menu
    sobre: "Sobre nós",
    comunidade: "Comunidade",
    cop30: "COP 30",
    podcast: "Podcast",
    artigos: "Artigos",
    contato: "Contate-nos",

    // Hero
    hero_juventude_titulo:
      "Juventudes brasileiras na COP30: o futuro começa agora",
    hero_juventude_desc:
      "A juventude do Brasil está pronta para transformar o debate climático. Em Belém, na Amazônia, vamos elevar nossas vozes rumo à justiça climática global.",
    hero_juventude_btn_1: "Conhecer o Projeto",
    hero_juventude_btn_2: "Acessar o Guia COP30",

    // Página COP30
    cop30_titulo: "COP30: O Clima no Centro da Amazônia",
    cop30_desc1:
      "Se você vai à COP30, preparamos um guia completo com tudo o que você precisa saber sobre ",
    cop30_desc2:
      "Belém: cultura, transporte, gastronomia, acolhimento, segurança e pontos de interesse.",
    cop30_evento:
      "O encontro acontecerá em Belém (PA), no coração da Amazônia, conectando lideranças mundiais, cientistas, ativistas e juventudes de todo o planeta para debater soluções reais para o futuro do clima.",
    cop30_brasil:
      "Como país anfitrião, o Brasil assume um papel de liderança na busca por consensos globais, propondo metas para reduzir as emissões de gases de efeito estufa e proteger nossos biomas.",
    cop30_btn: "Baixe o guia aqui",

    // Artigos
    artigos_titulo: "Últimas Postagens",
    artigos_post: "Marcele Oliveira participa da cúpula dos Global Shapers",
    artigos_medium: "Artigo do Medium",
    artigos_data: "15 de julho, 2025",
    artigos_tempo: "5 min de leitura",
    artigos_btn: "Ver mais",

    artigos_juventude_titulo:
      "Juventudes brasileiras na COP30: o futuro começa agora",
    artigos_juventude_desc:
      "A juventude do Brasil está pronta para transformar o debate climático. Em Belém, na Amazônia, vamos elevar nossas vozes rumo à justiça climática global.",
    artigos_btn_guia: "Acessar o Guia COP30",

    // Sobre nós
    sobre_titulo: "Nosso Propósito",
    sobre_desc:
      "O Shapers Pelo Clima é uma mobilização nacional e internacional da Global Shapers Community que conecta juventudes para agir frente à crise climática.",
    sobre_futuro:
      "Estamos unindo mais de 20 hubs no Brasil e no mundo para construir um futuro justo, sustentável e liderado por jovens.",

    // Nossa estrutura
    sobre_estrutura: "Nossa Estrutura",
    sobre_comunicacao: "Comunicação",
    sobre_comunicacao_desc:
      "Executar comunicação estratégica entre os hubs, ampliando o alcance, engajamento e o acesso à informação sobre a COP30, pautas e temas.",
    sobre_infra: "Infraestrutura",
    sobre_infra_desc:
      "Garantir os recursos para a realização das atividades, com processos sustentáveis, seguros e eficientes que apoiem a logística do projeto.",
    sobre_parcerias: "Parcerias",
    sobre_parcerias_desc:
      "Identificar oportunidades, alianças estratégicas e fortalecer relações institucionais, conectando Shapers com iniciativas, redes e eventos.",
    sobre_governanca: "Governança",
    sobre_governanca_desc:
      "Assegurar uma gestão integrada, eficiente e transparente do projeto, promovendo a coesão entre os GTs, alinhado as diretrizes da comunidade.",
    sobre_formacao: "Formação",
    sobre_formacao_desc:
      "Oferecer capacitações com especialistas em sustentabilidade e clima, preparando os Shapers para contribuir assertivamente na COP30.",

    // Frases
    frase_1: "Nós somos únicos e diversos",
    frase_2: "Comprometidos com a mudança",
    frase_3: "Jovens moldando o futuro",

    //Equipe
    equipe_comunicacao: "Comunicação",
    equipe_infraestrutura: "Infraestrutura",
    equipe_parcerias: "Parcerias",
    equipe_governanca: "Governança",
    equipe_formacao: "Formação",

    // Comunidade
    comunidade_titulo: "A Global Shapers",
    comunidade_desc:
      "Uma comunidade global de jovens que acreditam no poder da ação local para gerar impacto global.",
    comunidade_hubs: "Hubs que estão no clima da COP",
    comunidade_info:
      "+20 hubs nacionais e internacionais unidos em prol da justiça climática. Na COP30, nossa voz ecoa diretamente da Amazônia para o mundo.",
    comunidade_historia:
      "Criada em 2011 pelo Fórum Econômico Mundial, a Global Shapers Community reúne mais de 10 mil jovens em mais de 500 hubs espalhados por 150 países.",
    comunidade_rede:
      "É uma rede global de jovens líderes comprometidos com a transformação positiva de suas comunidades e do mundo.",
    comunidade_dados: {
      paises: "Países",
      jovens: "Jovens",
    },
    comunidade_hub_belem:
      "Segundo hub do Norte do Brasil, estabelecido em 2025, com foco em sustentabilidade, impacto social e tecnologia. Inspirado pela Amazônia, conecta inovação local a soluções globais.",
    comunidade_hub_belem_cta: "Conheça as iniciativas do hub.",
    comunidade_projetos: "Projetos da Comunidade",
    comunidade_projetos_desc:
      "Nossos projetos atuam em frentes como justiça climática, equidade racial, segurança alimentar, agroecologia e transição energética.",

    projetos: [
      {
        id: 1,
        titulo: "Clima Pampa",
        subtitulo: "Fortalecimento da agenda climática",
        local: "Porto Alegre - RS",
        descricao: `O Hub de Porto Alegre atuou em 2024 com foco no fortalecimento da agenda climática local por meio do projeto Clima à Pampa.  

A principal ação foi a construção de uma Carta-Compromisso voltada às eleições municipais, mobilizando candidaturas ao cargo de vereadora ou vereador em Porto Alegre para que assumissem compromissos com pautas ambientais e de combate às mudanças climáticas.  

A iniciativa buscou enfrentar a falta de conhecimento e de vontade política sobre a emergência climática no município, oferecendo como solução o engajamento pré-eleitoral e a capacitação dos mandatos eleitos.  

O projeto contou com 21 assinaturas, envolvendo 10 partidos, e impactou diretamente as eleições municipais, com dois mandatos eleitos comprometidos com a pauta: Natasha (PT) e Grazi Oliveira (PSOL).  

O projeto foi realizado em parceria com Youth Action Hub Porto Alegre, Net Impact Porto Alegre e Líderes da Realidade Climática | Núcleo RS.`,
        img: ImgProjetoPampa,
      },
      {
        id: 2,
        titulo: "Projeto Motyrõ",
        subtitulo:
          "Conectando áreas de vegetação e auxiliando na recuperação da Área de Proteção Ambiental.",
        local: "São Paulo - SP",
        descricao: `O projeto Motyrõ, do Global Shapers Hub São Paulo II em parceria com o Instituto Anchieta-Grajaú (IAG) desde 2023, realiza mutirões mensais de plantio para implantar um sistema agroflorestal local, conectando áreas de vegetação e auxiliando na recuperação da Área de Proteção Ambiental, além de impactar positivamente a comunidade do Grajaú. O IAG atua de forma sistêmica com a comunidade, oferecendo aulas para crianças, cursos para adultos, feiras e mais de 1.000 refeições diárias, além de projetos socioambientais, mas enfrenta desafios devido à ocupação de grande parte de seu terreno por assentamentos precários, o que gerou desmatamento e construções próximas ao leito do rio. Para recuperar essa área verde, o Motyrõ mobiliza voluntários em mutirões para o plantio de árvores frutíferas, legumes como mandioca, feijão, milho e adubo verde. Até dezembro de 2024, foram plantadas 778 árvores e engajados 165 voluntários. O projeto busca suporte financeiro para cobrir os custos dessas ações e garantir sua continuidade.`,
        img: ImgProjetoMotyro,
      },
      {
        id: 3,
        titulo: "Nossa Horta",
        subtitulo:
          "Promove a segurança alimentar, geração de renda e educação climática em favelas do Rio",
        local: "Rio de Janeiro - RJ",
        descricao: `O Hub de Rio de Janeiro é responsável pelo projeto, com o intuito de promover a segurança alimentar, geração de renda e educação climática em favelas do Rio de Janeiro por meio da implementação de hortas comunitárias baseadas em práticas ancestrais, como o método do buraco de fechadura. ...`,
        img: ImgProjetoNossaHorta,
      },
      {
        id: 4,
        titulo: "Ecotrilhas",
        subtitulo:
          "Foco em abraçar o letramento socioambiente de jovens em vulnerabilidade social.",
        local: "Florianópolis - SC",
        descricao: `O Ecotrilhas é um projeto que surgiu em 2019 com o propósito de unir educação ambiental, coleta de resíduos e momentos de diversão. ...`,
        img: ImgProjetoEcotrilhas,
      },
    ],
    // Podcast
    podcast_titulo: "O que é?",
    podcast_desc1:
      "Nosso podcast é um espaço aberto para vozes que importam: jovens, especialistas, ativistas e comunidades que vivem na linha de frente da crise climática.",
    podcast_subtitulo: "O que discutimos?",
    podcast_desc2:
      "Aqui falamos de clima, justiça ambiental e soluções reais de forma leve, acessível e transformadora. Cada conversa é uma oportunidade de aproximar saberes científicos, vivências locais e experiências de quem já enfrenta os impactos da crise.",
    podcast_participa_titulo: "Quem participa:",
    podcast_participa_1: "Jovens líderes que estão moldando o futuro",
    podcast_participa_2:
      "Comunidades da Amazônia e outros territórios vulneráveis",
    podcast_participa_3:
      "Ativistas e pesquisadores comprometidos com a justiça climática",
    podcast_chamada: "Dê o play e faça parte desse diálogo.",
    podcast_ep1: "Episódio nº 01: A Amazônia em Foco", // já existia
    podcast_ep1_desc:
      "Neste primeiro episódio, você vai conhecer as nossas hosts, que estarão presentes nos próximos episódios e vão guiar importantes debates sobre o clima, o Brasil e a COP30.", // já existia
    podcast_btn: "Ouvir no Spotify", // já existia

    // Rodapé
    footer_menu: ["Comunidade", "COP 30", "Podcast", "Sobre nós"],
    footer_instagram: "@shaperspeloclima",
    footer_linkedin: "Shapers pelo Clima",
    footer_spotify: "Clima de Diálogo",
    footer_youtube: "Shapers pelo Clima",
    footer_email: "cop30@globalshapers.com.br",
    footer_direitos:
      "Global Shapers é uma iniciativa do Fórum Econômico Mundial ©2025 Shapers Pelo Clima",
  },

  en: {
    // Menu
    sobre: "About us",
    comunidade: "Community",
    cop30: "COP 30",
    podcast: "Podcast",
    artigos: "Articles",
    contato: "Contact us",

    // Hero
    hero_juventude_titulo: "Brazilian youth at COP30: the future starts now",
    hero_juventude_desc1: `Brazil's youth is ready to transform the climate debate.`,
    hero_juventude_desc2: `In Belém, in the Amazon, we will raise our voices for global climate justice.`,

    hero_juventude_btn_1: "Learn about the Project",
    hero_juventude_btn_2: "Access the COP30 Guide",

    // COP30 page
    cop30_titulo: "COP30: Climate at the Heart of the Amazon",
    cop30_desc1:
      "If you are going to COP30, we have prepared a complete guide with everything you need to know about ",
    cop30_desc2:
      "Belém: culture, transportation, gastronomy, hospitality, safety and points of interest.",
    cop30_guia:
      "If you're going to COP30, we've prepared a complete guide with everything you need to know about Belém: culture, transportation, gastronomy, hospitality, security, and points of interest.",
    cop30_evento:
      "The meeting will take place in Belém (PA), in the heart of the Amazon, bringing together world leaders, scientists, activists and youth from around the planet to debate real solutions for the future of the climate.",
    cop30_brasil:
      "As the host country, Brazil takes a leadership role in the search for global consensus, proposing targets to reduce greenhouse gas emissions and protect our biomes.",
    cop30_btn: "Download the guide here",

    // Articles
    artigos_titulo: "Latest Posts",
    artigos_post: "Marcele Oliveira participates in the Global Shapers summit",
    artigos_medium: "Medium article",
    artigos_data: "July 15, 2025",
    artigos_tempo: "5 min read",
    artigos_btn: "Read more",

    artigos_juventude_titulo: "Brazilian youth at COP30: the future starts now",
    artigos_juventude_desc:
      "Brazilian youth are ready to transform the climate debate. In Belém, in the Amazon, we will raise our voices towards global climate justice.",
    artigos_btn_guia: "Access the COP30 Guide",

    // About us
    sobre_titulo: "Our Purpose",
    sobre_desc:
      "Shapers Pelo Clima is a national and international mobilization of the Global Shapers Community that connects youth to act against the climate crisis.",
    sobre_futuro:
      "We are uniting more than 20 hubs in Brazil and worldwide to build a fair, sustainable, youth-led future.",
    sobre_estrutura: "Our Structure",
    sobre_comunicacao: "Communication",
    sobre_comunicacao_desc:
      "Execute strategic communication among hubs, expanding reach, engagement and access to information about COP30, agendas and themes.",
    sobre_infra: "Infrastructure",
    sobre_infra_desc:
      "Ensure resources for the implementation of activities, with sustainable, safe and efficient processes that support project logistics.",
    sobre_parcerias: "Partnerships",
    sobre_parcerias_desc:
      "Identify opportunities, strategic alliances and strengthen institutional relations, connecting Shapers with initiatives, networks and events.",
    sobre_governanca: "Governance",
    sobre_governanca_desc:
      "Ensure integrated, efficient and transparent management of the project, promoting cohesion among working groups, aligned with community guidelines.",
    sobre_formacao: "Training",
    sobre_formacao_desc:
      "Offer training with sustainability and climate specialists, preparing Shapers to contribute effectively at COP30.",

    // Frases em inglês
    frase_1: "We are unique and diverse",
    frase_2: "Committed to change",
    frase_3: "Young people shaping the future",

    //Equipe
    equipe_comunicacao: "Communication",
    equipe_infraestrutura: "Infrastructure",
    equipe_parcerias: "Partnerships",
    equipe_governanca: "Governance",
    equipe_formacao: "Training",

    // Community
    comunidade_titulo: "The Global Shapers",
    comunidade_desc:
      "A global community of young people who believe in the power of local action to generate global impact.",
    comunidade_hubs: "Hubs that are in the climate of COP",
    comunidade_info:
      "+20 national and international hubs united for climate justice. At COP30, our voice echoes directly from the Amazon to the world.",
    comunidade_historia:
      "Created in 2011 by the World Economic Forum, the Global Shapers Community brings together more than 10,000 young people in over 500 hubs across 150 countries.",
    comunidade_rede:
      "It is a global network of young leaders committed to positive transformation of their communities and the world.",
    comunidade_dados: {
      hubs: "Hubs",
      paises: "Countries",
      jovens: "Youth",
    },

    comunidade_hub_belem:
      "The second hub in Northern Brazil, established in 2025, with a focus on sustainability, social impact, and technology. Inspired by the Amazon, it connects local innovation to global solutions.",
    comunidade_hub_belem_cta: "Learn about the hub's initiatives.",
    comunidade_projetos: "Community Projects",
    comunidade_projetos_desc:
      "Our projects work on fronts such as climate justice, racial equity, food security, agroecology and energy transition.",

    projetos: [
      {
        id: 1,
        titulo: "Clima Pampa",
        subtitulo: "Strengthening the climate agenda",
        local: "Porto Alegre - RS",
        descricao: `In 2024, the Porto Alegre Hub focused on strengthening the local climate agenda through the “Clima à Pampa” project.  

The main action was to draft a Commitment Letter aimed at municipal elections, mobilizing city council candidates in Porto Alegre to commit to environmental and climate change policies.  

The initiative sought to address the lack of knowledge and political will regarding the climate emergency in the municipality by offering pre-election engagement and training for elected mandates.  

The project gathered 21 signatures from 10 political parties and directly impacted the municipal elections, with two elected mandates committed to the cause: Natasha (PT) and Grazi Oliveira (PSOL).  

The project was carried out in partnership with Youth Action Hub Porto Alegre, Net Impact Porto Alegre and Climate Reality Leaders | RS chapter.`,
        img: ImgProjetoPampa,
      },
      {
        id: 2,
        titulo: "Motyrõ Project",
        subtitulo:
          "Connecting vegetation areas and helping restore the Environmental Protection Area.",
        local: "São Paulo - SP",
        descricao: `The Motyrõ project, led by the Global Shapers Hub São Paulo II in partnership with the Anchieta-Grajaú Institute (IAG) since 2023, organizes monthly planting mutirões to implement a local agroforestry system, connecting vegetation areas and helping restore the Environmental Protection Area, while positively impacting the Grajaú community. ...`,
        img: ImgProjetoMotyro,
      },
      {
        id: 3,
        titulo: "Our Garden",
        subtitulo:
          "Promotes food security, income generation and climate education in Rio’s favelas",
        local: "Rio de Janeiro - RJ",
        descricao: `The Rio de Janeiro Hub leads this project to promote food security, income generation and climate education in Rio’s favelas through the implementation of community gardens based on ancestral practices such as the keyhole method. ...`,
        img: ImgProjetoNossaHorta,
      },
      {
        id: 4,
        titulo: "Ecotrails",
        subtitulo:
          "Focused on socio-environmental literacy for vulnerable youth.",
        local: "Florianópolis - SC",
        descricao: `Ecotrails started in 2019 with the purpose of combining environmental education, waste collection and moments of fun. ...`,
        img: ImgProjetoEcotrilhas,
      },
    ],

    // Podcast
    podcast_titulo: "What is it?",
    podcast_desc1:
      "Our podcast is an open space for voices that matter: young people, experts, activists and communities on the frontlines of the climate crisis.",
    podcast_subtitulo: "What do we discuss?",
    podcast_desc2:
      "We talk about climate, environmental justice and real solutions in a light, accessible and transformative way. Each conversation is an opportunity to bring together scientific knowledge, local experiences and stories from those already facing the impacts of the crisis.",
    podcast_participa_titulo: "Who takes part:",
    podcast_participa_1: "Young leaders who are shaping the future",
    podcast_participa_2:
      "Communities from the Amazon and other vulnerable territories",
    podcast_participa_3:
      "Activists and researchers committed to climate justice",
    podcast_chamada: "Hit play and be part of this dialogue.",
    podcast_ep1: "Episode #01: The Amazon in Focus",
    podcast_ep1_desc:
      "In this first episode, you will meet our hosts, who will be present in the upcoming episodes and will guide important discussions about the climate, Brazil, and COP30.",
    podcast_btn: "Listen on Spotify",

    // Footer
    footer_menu: ["Community", "COP 30", "Podcast", "About us"],
    footer_instagram: "@shaperspeloclima",
    footer_linkedin: "Shapers for Climate",
    footer_spotify: "Climate Dialogue",
    footer_youtube: "Shapers for Climate",
    footer_email: "cop30@globalshapers.com.br",
    footer_direitos:
      "Global Shapers is an initiative of the World Economic Forum ©2025 Shapers for Climate",
  },
};

export default translations;
