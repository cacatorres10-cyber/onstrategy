export type Lang = 'es' | 'en';

export const CONTACT = {
  email: 'onstrategysalespro@gmail.com',
  phoneDisplay: '+593 96 364 7848',
  phoneRaw: '593963647848',
  whatsapp: 'https://wa.me/593963647848',
  web: 'www.onstrategypro.com',
};

type Content = {
  nav: { solutions: string; approach: string; plans: string; clients: string; team: string; contact: string; cta: string };
  hero: {
    kicker: string;
    line1: string;
    line2: string;
    rotating: string[];
    subtitle: string;
    scroll: string;
    primary: string;
    secondary: string;
    stats: { value: string; label: string }[];
  };
  marquee: string[];
  intro: { tag: string; lead: string; keyword: string; leadRest: string; body: string };
  solutions: {
    tag: string;
    title: string;
    subtitle: string;
    items: { index: string; title: string; desc: string; points: string[] }[];
  };
  intelligence: {
    tag: string;
    title: string;
    subtitle: string;
    pillars: { pct: string; title: string; points: string[] }[];
  };
  approach: {
    tag: string;
    title: string;
    subtitle: string;
    cards: { region: string; title: string; desc: string }[];
    note: string;
  };
  clients: {
    tag: string;
    title: string;
    subtitle: string;
    logos: string[];
    industriesTitle: string;
    industries: string[];
    split: { b2b: string; b2bLabel: string; entre: string; entreLabel: string };
  };
  plans: {
    tag: string;
    title: string;
    subtitle: string;
    from: string;
    items: { name: string; price: string; tagline: string; features: string[]; featured?: boolean }[];
    diagnosticTag: string;
    diagnosticTitle: string;
    diagnosticBody: string;
    diagnosticProfiles: string[];
    diagnosticCategories: string[];
    diagnosticCta: string;
  };
  team: {
    tag: string;
    title: string;
    subtitle: string;
    members: { region: string; name: string; role: string }[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    webLabel: string;
    cta: string;
    form: { name: string; email: string; company: string; region: string; message: string; send: string; placeholderMsg: string };
  };
  footer: { tagline: string; rights: string; nav: string; madeWith: string };
};

export const content: Record<Lang, Content> = {
  es: {
    nav: {
      solutions: 'Soluciones',
      approach: 'Enfoque',
      plans: 'Planes',
      clients: 'Clientes',
      team: 'Equipo',
      contact: 'Contacto',
      cta: 'Diagnóstico gratis',
    },
    hero: {
      kicker: 'LATAM · USA · EAU',
      line1: 'Expansión',
      line2: 'Global',
      rotating: ['con estrategia.', 'con ejecución.', 'llave en mano.', 'sin fronteras.'],
      subtitle:
        'Agencia consultora de aterrizaje y expansión comercial. Llevamos empresas de Estados Unidos a LATAM y viceversa, y conectamos capital de los Emiratos Árabes con Latinoamérica.',
      scroll: 'Desliza para explorar',
      primary: 'Agenda tu diagnóstico',
      secondary: 'Ver soluciones',
      stats: [
        { value: '3', label: 'Continentes conectados' },
        { value: '90%', label: 'Clientes B2B' },
        { value: '15+', label: 'Años de experiencia' },
      ],
    },
    marquee: [
      'Inteligencia de mercados',
      'Marketing 360',
      'Trade & activación',
      'Cumplimiento legal de marca',
      'Data analytics',
      'Aterrizaje comercial',
    ],
    intro: {
      tag: 'Quiénes somos',
      lead: 'No vendemos servicios sueltos. Diseñamos la ',
      keyword: 'estrategia',
      leadRest: ' completa para que tu marca crezca y aterrice en nuevos mercados.',
      body:
        'ON STRATEGY PRO es una consultora de crecimiento y negocios internacionales. Integramos inteligencia de mercado, marketing y cumplimiento legal en un solo servicio llave en mano, con equipos locales en Ecuador, Estados Unidos, Perú y Colombia.',
    },
    solutions: {
      tag: '01 · 02 · 03',
      title: 'Soluciones',
      subtitle: 'Tres frentes que trabajan juntos para hacer crecer y expandir tu marca.',
      items: [
        {
          index: '01',
          title: 'Marketing 360 & Comunicación Digital',
          desc: 'Presencia de marca completa, del feed a la activación en tienda.',
          points: [
            'Redes sociales, newsletters y marketing de contenido',
            'Video, drone, infografías, podcasts e influencers',
            'Eventos, brand activation y relaciones públicas',
            'Experiencia en tienda, BTL, diseño y fotografía profesional',
          ],
        },
        {
          index: '02',
          title: 'Inteligencia de Mercado & Data Analysis',
          desc: 'Decisiones basadas en datos para penetrar y crecer en LATAM y USA.',
          points: [
            'Estrategias de penetración de mercados LATAM–USA',
            'Análisis y estandarización de precios y márgenes',
            'Auditoría de ventas y evaluación de canales',
            'CRM, Power BI y Google Looker Studio',
          ],
        },
        {
          index: '03',
          title: 'Terminología & Cumplimiento Legal de Marca',
          desc: 'Tu producto listo para vender, con todo el respaldo regulatorio.',
          points: [
            'Gestión integral de notificación sanitaria (ARCSA)',
            'Registro y verificación de marca (IEPI)',
            'Diseño de manual de marca y representación técnico-legal',
            'Homologación, etiquetado nutricional y empaque',
          ],
        },
      ],
    },
    intelligence: {
      tag: 'Inteligencia de mercado',
      title: 'Dónde ponemos el foco',
      subtitle: 'Un modelo probado que prioriza la expansión, sostiene el crecimiento y lo mide todo.',
      pillars: [
        {
          pct: '60%',
          title: 'Estrategia de Expansión',
          points: [
            'Análisis y estandarización de precios y márgenes locales e internacionales',
            'Desarrollo de estrategias de penetración de mercados LATAM–USA',
          ],
        },
        {
          pct: '30%',
          title: 'Estrategia de Crecimiento',
          points: [
            'Auditoría de ventas y estrategias de incremento',
            'Evaluación de canales de venta',
            'Evaluación de experiencia de usuario y servicio al cliente',
          ],
        },
        {
          pct: '10%',
          title: 'Data Analysis',
          points: [
            'CRM (implementación y optimización)',
            'Power BI (implementación y optimización)',
            'Google Looker Studio (adaptación e inducción)',
          ],
        },
      ],
    },
    approach: {
      tag: 'Nuestro enfoque',
      title: 'Tres mercados, una sola estrategia',
      subtitle: 'Conectamos oportunidades entre Latinoamérica, Estados Unidos y los Emiratos Árabes Unidos.',
      cards: [
        {
          region: 'USA → LATAM',
          title: 'Aterrizaje llave en mano',
          desc: 'Asesoramos a empresas de Estados Unidos para ingresar a LATAM con actividades completas de Trade y Marketing.',
        },
        {
          region: 'LATAM → USA',
          title: 'Salto al mercado americano',
          desc: 'Llevamos marcas latinoamericanas a Estados Unidos con estrategia comercial y cumplimiento local.',
        },
        {
          region: 'EAU ⇄ LATAM',
          title: 'Inversión de capital',
          desc: 'Inyectamos inversión de los Emiratos Árabes en Latinoamérica y llevamos empresas de la región a los EAU.',
        },
      ],
      note: 'Expansión global con estrategia y ejecución.',
    },
    clients: {
      tag: 'Trayectoria',
      title: 'Marcas que confían',
      subtitle: 'Más de una década construyendo crecimiento para líderes de industria en toda la región.',
      logos: ['ECUAINSETEC', 'ROMERO & HNOS', 'MEGA SANTAMARÍA', 'ETAFASHION', 'RM', 'TCL', 'AGROSCOPIO', 'RIVER GLOBAL LLC'],
      industriesTitle: 'Experiencia comprobada en',
      industries: ['Agroindustria', 'Automatización Industrial', 'Retailers', 'Distribuidores', 'Foodservice'],
      split: {
        b2b: '90%',
        b2bLabel: 'Clientes B2B: retailers, distribuidores e industria',
        entre: '10%',
        entreLabel: 'Emprendedores y marcas emergentes',
      },
    },
    plans: {
      tag: 'Planes',
      title: 'Elige tu punto de partida',
      subtitle: 'Planes flexibles que escalan contigo. Todos parten de un diagnóstico sin costo.',
      from: 'Desde',
      items: [
        {
          name: 'Inicial',
          price: '$600',
          tagline: 'Digital',
          features: ['Gestión de redes sociales', 'Marketing digital de arranque', 'No incluye presupuesto de Meta'],
        },
        {
          name: 'Premium',
          price: '$900',
          tagline: 'Estrategia de crecimiento + redes',
          features: ['Todo lo del plan Inicial', 'Estrategia de crecimiento', 'Incluye presupuesto de Meta'],
          featured: true,
        },
        {
          name: '360',
          price: '$1.200',
          tagline: 'Redes · Activación de marca · BTL promocional',
          features: ['Todo lo del plan Premium', 'Activación de marca y BTL', 'Incluye básico de Meta y TikTok'],
        },
      ],
      diagnosticTag: 'Paso 0',
      diagnosticTitle: 'Diagnóstico sin costo',
      diagnosticBody:
        'Antes de acogerte a cualquier plan realizamos un diagnóstico gratuito, seguido de una reunión para consolidar resultados y revisar estrategias.',
      diagnosticProfiles: ['Representante legal', 'Gerente administrativo', 'Gerente de ventas'],
      diagnosticCategories: ['Emprendedor', 'Pymes', 'Empresario'],
      diagnosticCta: 'Solicitar diagnóstico',
    },
    team: {
      tag: 'Nuestro equipo',
      title: 'Presencia regional',
      subtitle: 'Un equipo internacional con raíces locales en cada mercado.',
      members: [
        { region: 'Ecuador · USA', name: 'Katty Mendieta', role: 'CEO — ON STRATEGY PRO LLC' },
        { region: 'Perú', name: 'Agencia San Biritute', role: 'Aliado estratégico' },
        { region: 'Colombia', name: 'Agencia Resultados Digitales', role: 'Aliado estratégico' },
      ],
    },
    contact: {
      tag: 'Contacto',
      title: 'Hablemos de tu expansión',
      subtitle: 'Cuéntanos a qué mercado quieres llegar y armamos tu estrategia llave en mano.',
      emailLabel: 'Escríbenos',
      phoneLabel: 'Llámanos / WhatsApp',
      webLabel: 'Sitio web',
      cta: 'Enviar por WhatsApp',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        company: 'Empresa',
        region: 'Mercado de interés',
        message: 'Cuéntanos tu proyecto',
        send: 'Enviar por WhatsApp',
        placeholderMsg: 'Quiero expandir mi marca hacia...',
      },
    },
    footer: {
      tagline: 'Agencia consultora de aterrizaje y expansión comercial con estrategia.',
      rights: 'Todos los derechos reservados.',
      nav: 'Navegación',
      madeWith: 'Expansión global con estrategia y ejecución.',
    },
  },
  en: {
    nav: {
      solutions: 'Solutions',
      approach: 'Approach',
      plans: 'Plans',
      clients: 'Clients',
      team: 'Team',
      contact: 'Contact',
      cta: 'Free diagnosis',
    },
    hero: {
      kicker: 'LATAM · USA · UAE',
      line1: 'Global',
      line2: 'Expansion',
      rotating: ['with strategy.', 'with execution.', 'turnkey.', 'without borders.'],
      subtitle:
        'A market-entry and commercial-expansion consultancy. We take U.S. companies into LATAM and vice versa, and channel capital from the United Arab Emirates into Latin America.',
      scroll: 'Scroll to explore',
      primary: 'Book your diagnosis',
      secondary: 'See solutions',
      stats: [
        { value: '3', label: 'Continents connected' },
        { value: '90%', label: 'B2B clients' },
        { value: '15+', label: 'Years of experience' },
      ],
    },
    marquee: [
      'Market intelligence',
      'Marketing 360',
      'Trade & activation',
      'Legal brand compliance',
      'Data analytics',
      'Commercial market entry',
    ],
    intro: {
      tag: 'Who we are',
      lead: 'We do not sell one-off services. We design the full ',
      keyword: 'strategy',
      leadRest: ' so your brand grows and lands in new markets.',
      body:
        'ON STRATEGY PRO is a growth and international-business consultancy. We combine market intelligence, marketing and legal compliance into a single turnkey service, with local teams in Ecuador, the United States, Peru and Colombia.',
    },
    solutions: {
      tag: '01 · 02 · 03',
      title: 'Solutions',
      subtitle: 'Three fronts working together to grow and expand your brand.',
      items: [
        {
          index: '01',
          title: 'Marketing 360 & Digital Communication',
          desc: 'Complete brand presence, from the feed to in-store activation.',
          points: [
            'Social media, newsletters and content marketing',
            'Video, drone, infographics, podcasts and influencers',
            'Events, brand activation and public relations',
            'In-store experience, BTL, design and professional photography',
          ],
        },
        {
          index: '02',
          title: 'Market Intelligence & Data Analysis',
          desc: 'Data-driven decisions to penetrate and grow across LATAM and the U.S.',
          points: [
            'LATAM–USA market penetration strategies',
            'Price and margin analysis and standardization',
            'Sales audits and channel evaluation',
            'CRM, Power BI and Google Looker Studio',
          ],
        },
        {
          index: '03',
          title: 'Terminology & Legal Brand Compliance',
          desc: 'Your product ready to sell, with full regulatory backing.',
          points: [
            'End-to-end health notification management (ARCSA)',
            'Trademark registration and verification (IEPI)',
            'Brand manual design and technical-legal representation',
            'Homologation, nutritional labeling and packaging',
          ],
        },
      ],
    },
    intelligence: {
      tag: 'Market intelligence',
      title: 'Where we focus',
      subtitle: 'A proven model that prioritizes expansion, sustains growth and measures everything.',
      pillars: [
        {
          pct: '60%',
          title: 'Expansion Strategy',
          points: [
            'Analysis and standardization of local and international prices and margins',
            'LATAM–USA market penetration strategies',
          ],
        },
        {
          pct: '30%',
          title: 'Growth Strategy',
          points: [
            'Sales audits and revenue-growth strategies',
            'Sales channel evaluation',
            'User experience and customer service evaluation',
          ],
        },
        {
          pct: '10%',
          title: 'Data Analysis',
          points: [
            'CRM (implementation and optimization)',
            'Power BI (implementation and optimization)',
            'Google Looker Studio (adaptation and onboarding)',
          ],
        },
      ],
    },
    approach: {
      tag: 'Our approach',
      title: 'Three markets, one strategy',
      subtitle: 'We connect opportunities between Latin America, the United States and the United Arab Emirates.',
      cards: [
        {
          region: 'USA → LATAM',
          title: 'Turnkey market entry',
          desc: 'We advise U.S. companies entering LATAM with full Trade and Marketing execution.',
        },
        {
          region: 'LATAM → USA',
          title: 'Leap into the U.S. market',
          desc: 'We take Latin American brands into the United States with commercial strategy and local compliance.',
        },
        {
          region: 'UAE ⇄ LATAM',
          title: 'Capital investment',
          desc: 'We inject UAE capital into Latin America and take regional companies to the Emirates.',
        },
      ],
      note: 'Global expansion with strategy and execution.',
    },
    clients: {
      tag: 'Track record',
      title: 'Brands that trust us',
      subtitle: 'Over a decade building growth for industry leaders across the region.',
      logos: ['ECUAINSETEC', 'ROMERO & HNOS', 'MEGA SANTAMARÍA', 'ETAFASHION', 'RM', 'TCL', 'AGROSCOPIO', 'RIVER GLOBAL LLC'],
      industriesTitle: 'Proven experience in',
      industries: ['Agribusiness', 'Industrial Automation', 'Retailers', 'Distributors', 'Foodservice'],
      split: {
        b2b: '90%',
        b2bLabel: 'B2B clients: retailers, distributors and industry',
        entre: '10%',
        entreLabel: 'Entrepreneurs and emerging brands',
      },
    },
    plans: {
      tag: 'Plans',
      title: 'Choose your starting point',
      subtitle: 'Flexible plans that scale with you. Every one starts with a free diagnosis.',
      from: 'From',
      items: [
        {
          name: 'Initial',
          price: '$600',
          tagline: 'Digital',
          features: ['Social media management', 'Starter digital marketing', 'Meta ad budget not included'],
        },
        {
          name: 'Premium',
          price: '$900',
          tagline: 'Growth strategy + social',
          features: ['Everything in Initial', 'Growth strategy', 'Meta ad budget included'],
          featured: true,
        },
        {
          name: '360',
          price: '$1,200',
          tagline: 'Social · Brand activation · Promotional BTL',
          features: ['Everything in Premium', 'Brand activation and BTL', 'Includes basic Meta and TikTok'],
        },
      ],
      diagnosticTag: 'Step 0',
      diagnosticTitle: 'Free diagnosis',
      diagnosticBody:
        'Before signing up for any plan we run a free diagnosis, followed by a meeting to consolidate results and review strategies.',
      diagnosticProfiles: ['Legal representative', 'Administrative manager', 'Sales manager'],
      diagnosticCategories: ['Entrepreneur', 'SMEs', 'Enterprise'],
      diagnosticCta: 'Request diagnosis',
    },
    team: {
      tag: 'Our team',
      title: 'Regional presence',
      subtitle: 'An international team with local roots in every market.',
      members: [
        { region: 'Ecuador · USA', name: 'Katty Mendieta', role: 'CEO — ON STRATEGY PRO LLC' },
        { region: 'Peru', name: 'San Biritute Agency', role: 'Strategic partner' },
        { region: 'Colombia', name: 'Resultados Digitales Agency', role: 'Strategic partner' },
      ],
    },
    contact: {
      tag: 'Contact',
      title: "Let's talk expansion",
      subtitle: 'Tell us which market you want to reach and we build your turnkey strategy.',
      emailLabel: 'Email us',
      phoneLabel: 'Call / WhatsApp',
      webLabel: 'Website',
      cta: 'Send via WhatsApp',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        region: 'Target market',
        message: 'Tell us about your project',
        send: 'Send via WhatsApp',
        placeholderMsg: 'I want to expand my brand into...',
      },
    },
    footer: {
      tagline: 'A market-entry and commercial-expansion consultancy driven by strategy.',
      rights: 'All rights reserved.',
      nav: 'Navigation',
      madeWith: 'Global expansion with strategy and execution.',
    },
  },
};
