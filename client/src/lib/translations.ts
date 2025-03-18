// Available languages
export type Language = 'en' | 'fr' | 'ja';

// Translation interface
export interface Translations {
  // Common translations
  language: {
    english: string;
    french: string;
    japanese: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  home: {
    hero: {
      subtitle: string;
      title: string;
      description: string;
      cta: string;
    };
    servicesSection: {
      subtitle: string;
      title: string;
      description: string;
      viewAll: string;
    };
    portfolioSection: {
      subtitle: string;
      title: string;
      description: string;
      viewAll: string;
    };
  };
  about: {
    subtitle: string;
    title: string;
    description: string;
    intro: {
      title: string;
      p1: string;
      p2: string;
    };
    cta: string;
    skills: {
      webDev: {
        name: string;
        description: string;
      };
      ecommerce: {
        name: string;
        description: string;
      };
      marketing: {
        name: string;
        description: string;
      };
      automation: {
        name: string;
        description: string;
      };
      uiux: {
        name: string;
        description: string;
      };
      analytics: {
        name: string;
        description: string;
      };
    };
  };
  services: {
    subtitle: string;
    title: string;
    description: string;
  };
  portfolio: {
    subtitle: string;
    title: string;
    description: string;
  };
  contact: {
    subtitle: string;
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      successMessage: string;
      error: string;
      errorMessage: string;
    };
    info: {
      title: string;
      email: string;
      phone: string;
      location: string;
      connect: string;
    };
  };
}

// English translations (default)
export const en: Translations = {
  language: {
    english: 'English',
    french: 'French',
    japanese: 'Japanese',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  home: {
    hero: {
      subtitle: 'Digital Specialist',
      title: 'Creating Cutting-Edge Web Experiences',
      description: 'Transforming ideas into powerful digital solutions that elevate your brand and engage your audience',
      cta: 'Explore Services',
    },
    servicesSection: {
      subtitle: 'What I Offer',
      title: 'My Services',
      description: 'Specialized solutions designed to elevate your digital presence',
      viewAll: 'View All Services',
    },
    portfolioSection: {
      subtitle: 'Recent Work',
      title: 'My Portfolio',
      description: 'A showcase of my latest projects and creative endeavors',
      viewAll: 'View All Projects',
    },
  },
  about: {
    subtitle: 'Who I Am',
    title: 'About Me',
    description: 'Digital innovator focused on creating captivating web experiences',
    intro: {
      title: 'I\'m Xavier, Digital Creator & Web Specialist',
      p1: 'With a passion for digital innovation and technical expertise, I create cutting-edge web experiences that help businesses thrive in the digital space. My approach combines creativity with strategic thinking to deliver solutions that not only look impressive but also generate real results.',
      p2: 'I specialize in web creation, Shopify store development, social media automation, and digital content creation. My background in both design and development allows me to bridge the gap between aesthetics and functionality, creating digital experiences that engage users and convert visitors into customers.',
    },
    cta: 'Get In Touch',
    skills: {
      webDev: {
        name: 'Web Development',
        description: 'Expert in creating responsive, performant websites with modern frameworks',
      },
      ecommerce: {
        name: 'E-commerce',
        description: 'Specialized in Shopify store development and optimization for conversions',
      },
      marketing: {
        name: 'Digital Marketing',
        description: 'Strategic implementation of digital marketing campaigns and analytics',
      },
      automation: {
        name: 'Automation',
        description: 'Building social media and business process automation solutions',
      },
      uiux: {
        name: 'UI/UX Design',
        description: 'Creating intuitive interfaces with attention to user experience',
      },
      analytics: {
        name: 'Analytics',
        description: 'Data-driven approach to measuring and optimizing digital performance',
      },
    },
  },
  services: {
    subtitle: 'What I Offer',
    title: 'My Services',
    description: 'Specialized solutions designed to elevate your digital presence',
  },
  portfolio: {
    subtitle: 'Recent Work',
    title: 'My Portfolio',
    description: 'A showcase of my latest projects and creative endeavors',
  },
  contact: {
    subtitle: 'Get In Touch',
    title: 'Contact Me',
    description: 'Let\'s discuss how I can help bring your ideas to life',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent!',
      successMessage: 'Thank you for your message. I\'ll get back to you soon.',
      error: 'Something went wrong.',
      errorMessage: 'Please try again later.',
    },
    info: {
      title: 'Contact Info',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      connect: 'Connect With Me',
    },
  },
};

// French translations
export const fr: Translations = {
  language: {
    english: 'Anglais',
    french: 'Français',
    japanese: 'Japonais',
  },
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  home: {
    hero: {
      subtitle: 'Spécialiste Numérique',
      title: 'Création d\'Expériences Web de Pointe',
      description: 'Transformer les idées en solutions numériques puissantes qui élèvent votre marque et engagent votre audience',
      cta: 'Explorer les Services',
    },
    servicesSection: {
      subtitle: 'Ce Que Je Propose',
      title: 'Mes Services',
      description: 'Solutions spécialisées conçues pour élever votre présence numérique',
      viewAll: 'Voir Tous les Services',
    },
    portfolioSection: {
      subtitle: 'Travaux Récents',
      title: 'Mon Portfolio',
      description: 'Une vitrine de mes derniers projets et créations',
      viewAll: 'Voir Tous les Projets',
    },
  },
  about: {
    subtitle: 'Qui Je Suis',
    title: 'À Propos de Moi',
    description: 'Innovateur numérique concentré sur la création d\'expériences web captivantes',
    intro: {
      title: 'Je suis Xavier, Créateur Numérique & Spécialiste Web',
      p1: 'Avec une passion pour l\'innovation numérique et une expertise technique, je crée des expériences web de pointe qui aident les entreprises à prospérer dans l\'espace numérique. Mon approche combine créativité et réflexion stratégique pour fournir des solutions qui non seulement impressionnent mais génèrent aussi des résultats concrets.',
      p2: 'Je me spécialise dans la création web, le développement de boutiques Shopify, l\'automatisation des médias sociaux et la création de contenu numérique. Mon parcours en design et en développement me permet de faire le pont entre l\'esthétique et la fonctionnalité, créant des expériences numériques qui engagent les utilisateurs et convertissent les visiteurs en clients.',
    },
    cta: 'Me Contacter',
    skills: {
      webDev: {
        name: 'Développement Web',
        description: 'Expert en création de sites web responsifs et performants avec des frameworks modernes',
      },
      ecommerce: {
        name: 'E-commerce',
        description: 'Spécialisé dans le développement et l\'optimisation de boutiques Shopify pour les conversions',
      },
      marketing: {
        name: 'Marketing Digital',
        description: 'Mise en œuvre stratégique de campagnes de marketing digital et d\'analyses',
      },
      automation: {
        name: 'Automatisation',
        description: 'Construction de solutions d\'automatisation pour médias sociaux et processus d\'entreprise',
      },
      uiux: {
        name: 'Design UI/UX',
        description: 'Création d\'interfaces intuitives avec attention à l\'expérience utilisateur',
      },
      analytics: {
        name: 'Analytique',
        description: 'Approche axée sur les données pour mesurer et optimiser la performance numérique',
      },
    },
  },
  services: {
    subtitle: 'Ce Que Je Propose',
    title: 'Mes Services',
    description: 'Solutions spécialisées conçues pour élever votre présence numérique',
  },
  portfolio: {
    subtitle: 'Travaux Récents',
    title: 'Mon Portfolio',
    description: 'Une vitrine de mes derniers projets et créations',
  },
  contact: {
    subtitle: 'Entrer en Contact',
    title: 'Me Contacter',
    description: 'Discutons de comment je peux vous aider à donner vie à vos idées',
    form: {
      name: 'Votre Nom',
      email: 'Votre Email',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer Message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé !',
      successMessage: 'Merci pour votre message. Je vous répondrai bientôt.',
      error: 'Un problème est survenu.',
      errorMessage: 'Veuillez réessayer plus tard.',
    },
    info: {
      title: 'Informations de Contact',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      connect: 'Me Suivre',
    },
  },
};

// Japanese translations
export const ja: Translations = {
  language: {
    english: '英語',
    french: 'フランス語',
    japanese: '日本語',
  },
  nav: {
    home: 'ホーム',
    about: '私について',
    services: 'サービス',
    portfolio: '作品集',
    contact: 'お問い合わせ',
  },
  home: {
    hero: {
      subtitle: 'デジタル専門家',
      title: '最先端のウェブ体験を創造する',
      description: 'アイデアを強力なデジタルソリューションに変換し、あなたのブランドを高め、視聴者を魅了します',
      cta: 'サービスを見る',
    },
    servicesSection: {
      subtitle: '提供サービス',
      title: '私のサービス',
      description: 'あなたのデジタルプレゼンスを向上させるための専門ソリューション',
      viewAll: '全てのサービスを見る',
    },
    portfolioSection: {
      subtitle: '最近の作品',
      title: '私の作品集',
      description: '最新のプロジェクトと創造的な取り組みのショーケース',
      viewAll: '全てのプロジェクトを見る',
    },
  },
  about: {
    subtitle: '私について',
    title: '私について',
    description: '魅力的なウェブ体験の創造に焦点を当てたデジタルイノベーター',
    intro: {
      title: '私はザビエル、デジタルクリエイター＆ウェブ専門家です',
      p1: 'デジタルイノベーションへの情熱と技術的専門知識をもって、ビジネスがデジタル空間で繁栄するのを助ける最先端のウェブ体験を創造します。私のアプローチは創造性と戦略的思考を組み合わせ、印象的なだけでなく実際の結果を生み出すソリューションを提供します。',
      p2: 'ウェブ制作、Shopifyストア開発、ソーシャルメディア自動化、デジタルコンテンツ制作を専門としています。デザインと開発の両方のバックグラウンドにより、美学と機能性の間のギャップを埋め、ユーザーを魅了し訪問者を顧客に変えるデジタル体験を作ります。',
    },
    cta: 'お問い合わせ',
    skills: {
      webDev: {
        name: 'ウェブ開発',
        description: '最新のフレームワークを使用したレスポンシブで高性能なウェブサイト制作のエキスパート',
      },
      ecommerce: {
        name: 'Eコマース',
        description: 'Shopifyストア開発とコンバージョン最適化の専門家',
      },
      marketing: {
        name: 'デジタルマーケティング',
        description: 'デジタルマーケティングキャンペーンと分析の戦略的実装',
      },
      automation: {
        name: '自動化',
        description: 'ソーシャルメディアとビジネスプロセスの自動化ソリューションの構築',
      },
      uiux: {
        name: 'UI/UXデザイン',
        description: 'ユーザー体験に注目した直感的なインターフェース作成',
      },
      analytics: {
        name: '分析',
        description: 'デジタルパフォーマンスを測定し最適化するデータ駆動型アプローチ',
      },
    },
  },
  services: {
    subtitle: '提供サービス',
    title: '私のサービス',
    description: 'あなたのデジタルプレゼンスを向上させるための専門ソリューション',
  },
  portfolio: {
    subtitle: '最近の作品',
    title: '私の作品集',
    description: '最新のプロジェクトと創造的な取り組みのショーケース',
  },
  contact: {
    subtitle: 'お問い合わせ',
    title: 'お問い合わせ',
    description: 'あなたのアイデアをどのように実現できるか一緒に話し合いましょう',
    form: {
      name: 'お名前',
      email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      submit: 'メッセージを送信',
      sending: '送信中...',
      success: 'メッセージが送信されました！',
      successMessage: 'お問い合わせありがとうございます。すぐにご連絡いたします。',
      error: '問題が発生しました。',
      errorMessage: '後でもう一度お試しください。',
    },
    info: {
      title: '連絡先',
      email: 'メールアドレス',
      phone: '電話番号',
      location: '場所',
      connect: 'フォローする',
    },
  },
};

// Export all translations
export const translations = {
  en,
  fr,
  ja,
};