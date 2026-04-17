export type Language = "fr" | "en";

export const translations: Record<Language, TranslationDict> = {
  fr: {
    // Navbar
    nav: {
      features: "Fonctionnalités",
      reviews: "Avis",
      compare: "Comparatif",
      affiliate: "Affilié",
      cta: "Essayer 14 jours",
      menuOpen: "Ouvrir le menu",
    },

    // Hero (home)
    hero: {
      badge: "Built for Shopify · Noté 5.0/5",
      headline: ["Boostez", "votre", "AOV", "à", "chaque", "étape"], // dernier mot = gradient
      subtitle:
        "L'app Shopify tout-en-un pour les Bundles, Cart Upsell & Post-Achat. Configurez en 5 minutes. Adorée par 250+ marchands.",
      ctaPrimary: "Installer Gratuitement sur Shopify",
      ctaSecondary: "Voir la démo",
      stats: {
        merchants: "Marchands Actifs",
        reviews: "Avis 5 étoiles",
        rating: "Note App Store",
      },
    },

    // Features
    features: {
      badge: "Fonctionnalités",
      titlePart1: "Tout ce qu'il faut pour",
      titlePart2: "augmenter l'AOV",
      cards: [
        { title: "Bundles Fixes", tagline: "Groupez vos produits, boostez le panier" },
        { title: "Remises Volume", tagline: "Plus ils achètent, plus ils économisent" },
        { title: "Cart Drawer", tagline: "Un panier latéral qui vend pour vous" },
        { title: "Mix & Match", tagline: "Vos clients composent leur bundle" },
        { title: "Post-Achat", tagline: "Upsell one-click après le paiement" },
        { title: "Barre & Cadeaux", tagline: "Progress bar et free gifts intégrés" },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "★ Note 5.0/5",
      titlePart1: "Adorée par les marchands",
      titlePart2: "du monde entier",
      subtitle: "Notée 5.0/5 sur le Shopify App Store avec 250+ avis.",
      verifiedMerchant: "Marchand Shopify Vérifié",
    },

    // Comparison
    comparison: {
      badge: "Comparatif",
      titlePart1: "Pourquoi",
      titlePart2: "Moonbundles",
      titleEnd: "?",
      subtitle: "Une seule app pour remplacer toutes les autres. Comparez par vous-même.",
      reviewsCount: "5.0/5 · 250+ avis",
      allInOne: "Tout inclus · 1 seule app",
      ratingLabel: "Note :",
      features: [
        { key: "bundles", label: "Bundles Produit" },
        { key: "volume", label: "Remises Volume" },
        { key: "cart", label: "Cart Drawer" },
        { key: "postPurchase", label: "Upsell Post-Achat" },
        { key: "freeGifts", label: "Cadeaux Gratuits" },
        { key: "allInOne", label: "Tout-en-un (1 app)" },
        { key: "rating", label: "Note" },
      ],
      separateApp: "App séparée",
      fiveApps: "5 apps",
    },

    // Affiliate (home section)
    affiliateHome: {
      badge: "Programme Partenaire",
      titlePart1: "Devenez partenaire",
      titlePart2: "Moonbundles",
      commission: "de commission",
      recurring: "récurrente",
      desc: "Recommandez Moonbundles aux marchands Shopify et touchez une commission sur chaque abonnement. Agences, freelances, créateurs — on vous attend.",
      benefits: [
        "Commissions récurrentes",
        "Dashboard de suivi",
        "Support dédié",
        "0 frais d'entrée",
      ],
      cta: "Nous contacter",
      response: "Réponse sous 24h",
    },

    // CTA (home)
    ctaHome: {
      socialProof: "1 200+ marchands",
      titlePart1: "Prêt à booster",
      titlePart2: "votre chiffre d'affaires ?",
      subtitle: "Rejoignez 1 200+ marchands qui ont augmenté leur panier moyen avec Moonbundles.",
      button: "Installer Gratuitement",
      perks: ["Sans carte bancaire", "Plan gratuit disponible", "Résiliable à tout moment"],
    },

    // Footer
    footer: {
      shopifyStore: "Shopify App Store",
      contact: "Contact",
      twitter: "Twitter",
      builtFor: "Built for Shopify",
      copyright: "© 2026 CScorp LLC",
    },

    // ===== AFFILIATE PAGE =====
    affiliateHero: {
      badge: "Programme Affilié",
      headline: ["Gagne", "40%", "à", "vie", "sur", "chaque", "abonnement", "que", "tu", "génères"],
      gradientWords: ["40%", "vie"], // mots à mettre en gradient
      subtitle: "Un lien, un code promo. Pas de limite. Un revenu automatique chaque mois.",
      ctaPrimary: "Devenir affilié",
      ctaSecondary: "Voir comment ça marche",
      stats: [
        { value: "40%", label: "Commission récurrente" },
        { value: "À vie", label: "Aucune limite de temps" },
        { value: "0€", label: "Frais d'entrée" },
      ],
    },

    calculator: {
      badge: "Calculateur de revenus",
      titlePart1: "Combien tu peux",
      titlePart2: "gagner ?",
      subtitle: "Bouge le slider pour voir tes revenus estimés en temps réel.",
      sliderLabel: "Filleuls actifs",
      sliderAria: "Nombre de filleuls actifs",
      perMonth: "Par mois",
      perYear: "Par an",
      basedOn: "Basé sur un abonnement moyen de",
      perMonthLabel: "/mois",
      multiplier: "× 40% commission",
      disclaimer:
        "Estimation indicative — les vrais montants varient selon le plan choisi par tes filleuls.",
    },

    howItWorks: {
      badge: "Comment ça marche",
      titlePart1: "3 étapes pour commencer à",
      titlePart2: "gagner",
      steps: [
        {
          title: "Crée ton compte affilié",
          desc: "Contacte-nous sur WhatsApp. Tu reçois ton lien personnalisé et ton code promo en quelques minutes.",
        },
        {
          title: "Partage ton lien",
          desc: "Partage ton lien avec ton audience, ta communauté, tes clients. Sur YouTube, Twitter, Discord, Skool, partout.",
        },
        {
          title: "Gagne chaque mois, à vie",
          desc: "40% de chaque abonnement que tu génères, tant que ton filleul reste actif. Pas de plafond.",
        },
      ],
    },

    whoFor: {
      badge: "Pour qui ?",
      titlePart1: "Le programme Moonbundles est fait",
      titlePart2: "pour toi si...",
      personas: [
        {
          title: "Créateurs de contenu",
          desc: "Tu crées du contenu autour du e-commerce, des ads ou de Shopify ? Parle de Moonbundles dans tes vidéos et gagne des commissions à vie sur chaque abonné.",
        },
        {
          title: "Coachs & formateurs",
          desc: "Tu accompagnes des e-commerçants ? Recommande Moonbundles dans tes formations et gagne 40% récurrent sur chaque inscription.",
        },
        {
          title: "E-commerçants",
          desc: "Tu utilises déjà Moonbundles ? Partage ce qui marche pour toi avec ton réseau et sois payé chaque mois.",
        },
        {
          title: "Communautés Ecom",
          desc: "Tu gères un Discord, un groupe Skool ou un Telegram ? Intègre Moonbundles dans ta stack d'outils recommandés et transforme ton influence en revenu récurrent.",
        },
      ],
    },

    whyMoonbundles: {
      points: [
        "448+ avis 5 étoiles",
        "Built for Shopify",
        "Le produit se vend tout seul",
      ],
    },

    repartition: {
      badge: "Flexibilité",
      titlePart1: "Répartis tes 40%",
      titlePart2: "comme tu veux",
      subtitle: "C'est toi qui décides comment ta commission est partagée.",
      footnote: "Configurable depuis ton dashboard Mantle.",
      splits: [
        {
          title: "Tu gardes tout",
          subtext: "L'option par défaut. Simple et direct.",
          description: "40% pour toi",
          legendYou: "Toi",
          legendOther: "",
        },
        {
          title: "Réseau de sous-affiliés",
          subtext: "Crée ton propre réseau d'ambassadeurs.",
          description: "30% pour toi · 10% sous-affiliés",
          legendYou: "Toi",
          legendOther: "Sous-affiliés",
        },
        {
          title: "Partenariat 50/50",
          subtext: "Splitte avec un collaborateur.",
          description: "20% pour toi · 20% partenaire",
          legendYou: "Toi",
          legendOther: "Partenaire",
        },
      ],
    },

    faq: {
      badge: "FAQ",
      titlePart1: "Questions",
      titlePart2: "fréquentes",
      items: [
        {
          q: "Comment sont faits les paiements ?",
          a: "Les paiements sont effectués chaque mois via Mantle. Tu suis tout depuis ton dashboard affilié, avec un historique complet de tes commissions.",
        },
        {
          q: "Comment je suis mes filleuls ?",
          a: "Tu as un dashboard dédié qui track chaque inscription, chaque paiement, et tes commissions en temps réel. Tu vois exactement qui s'est inscrit, quand, et combien tu as gagné.",
        },
        {
          q: "Le code promo tracke même sans le lien affilié ?",
          a: "Oui. Si ton filleul utilise ton code promo à l'inscription (même sans cliquer sur ton lien), la commission est automatiquement attribuée à ton compte affilié.",
        },
        {
          q: "Je peux faire de la pub avec mon lien ?",
          a: "Oui, tu peux promouvoir ton lien sur tous tes canaux : réseaux sociaux, email, YouTube, blog, communautés Discord/Skool, ou même en publicité payante.",
        },
        {
          q: "C'est vraiment à vie ?",
          a: "Oui. Tant que ton filleul reste abonné à Moonbundles, tu touches ta commission chaque mois. Pas de limite dans le temps, pas de plafond de gains.",
        },
      ],
    },

    affiliateCta: {
      stats: ["448+ avis 5 étoiles", "1 200+ stores actifs", "Built for Shopify"],
      titlePart1: "Gagne de l'argent à vie",
      titlePart2: "avec Moonbundles",
      subtitlePart1: "Si quelqu'un s'abonne à Moonbundles grâce à toi, on te reverse",
      subtitleHighlight: "40% chaque mois",
      subtitlePart2: ". Automatiquement. Sans limite.",
      button: "Devenir affilié",
      footnote: "Réponse sous 24h — Programme géré en direct",
    },

    nativeAds: {
      heroBadge: "Guide Gratuit",
      heroTitle: "Crée des native ads qui scalent",
      heroTitleHighlight: "pour ton e-commerce",
      heroSubtitle:
        "Le framework complet en 3 étapes : analyse ton persona, génère tes concepts, crée tes visuels. Tout est automatisé avec Claude AI et Nanobanana.",
      stepsTitle: "3 étapes pour créer des native ads",
      stepsTitleHighlight: "qui convertissent",
      steps: [
        {
          title: "Apprends à connaître ton persona",
          desc: "Tu connais pas parfaitement ton client ? Ce prompt va te poser 19 questions sur ton produit, ta cible et ton marché. À la fin Claude te génère une fiche persona complète avec les frustrations, les désirs, les mots exacts de ton client et ses déclencheurs d'achat.",
          sub: "Télécharge le PDF → colle le prompt dans Claude → réponds aux questions",
          btnLabel: "Télécharger le prompt Persona",
        },
        {
          title: "Génère tes concepts de native ads",
          desc: "Envoie ce prompt à Claude avec le lien de ton site. Il analyse ton store et te génère 5 concepts de native ads complets : le hook, la description de l'image, le prompt Nanobanana prêt à copier, l'angle publicitaire et le texte de la pub Meta.",
          sub: "Télécharge le PDF → colle le prompt dans Claude → ajoute ton URL → récupère tes 5 concepts",
          btnLabel: "Télécharger le prompt Native Ads",
        },
        {
          title: "Crée tes visuels sur Nanobanana",
          desc: "Copie les prompts Nanobanana que Claude t'a générés et colle-les directement dans Nanobanana. Tu récupères des images de native ads réalistes, sans logo, sans produit, juste le problème de ton client. Prêtes à lancer sur Meta.",
          sub: "Copie le prompt → colle dans Nanobanana → télécharge tes images → lance tes pubs",
          btnLabel: "Aller sur Nanobanana",
        },
      ],
      ctaStepTitle: "Un user est passé de 3 à 12 ventes/jour sans changer ses ads",
      painPoints: [
        "Pas de bundles → AOV trop bas",
        "Pas de structure d'offre → conversion faible",
        "Pas d'upsell → tu laisses du cash sur la table",
      ],
      bridgeStat: "90% des stores avec de bonnes ads ne sont pas rentables à cause de ça.",
      bridgeMiddle: " C'est exactement ce que ",
      bridgeBrand: "Moonbundles corrige",
      fomoBadge: "-20% sur Moonbundles",
      fomoSubtitle: "Offre valable 48h seulement",
      fomoExpires: "Expire dans",
      ctaButton: "Augmenter mon AOV en 5 min",
      copyIdle: "Copier",
      copyDone: "Copié ✓",
      whatsappText: "Une question ? On t'aide à setup tes offres",
      whatsappButton: "Nous contacter sur WhatsApp",
    },

    valueOffer: {
      heroBadge: "Guide Gratuit",
      heroTitle: "La psychologie derrière les offres qui convertissent le mieux",
      heroSubtitle:
        "Pourquoi certains stores **x2 leur panier moyen** avec le même produit et le même trafic.",
      sections: [
        {
          title: "1 produit, 1 prix, 1 bouton",
          text: "**90% des stores** vendent comme ça : un prix, un bouton, un client qui part. Le problème c'est pas ton produit — c'est que **tu le laisses décider seul**.",
        },
        {
          title: "L'effet d'ancrage change tout",
          text: "Affiche Buy 2 Get 2 Free à $70 au lieu de $180 : le client ne voit pas $70, il voit **$110 d'économie**. Plus l'ancre est haute, plus le prix réel paraît bas. C'est pas du fake — c'est de la **psychologie de pricing**.",
        },
        {
          title: "3 choix convertissent mieux que 1",
          text: "Avec 1 choix : « j'achète ou pas ». Avec 3 : « **lequel je prends** ». En comparaison, le cerveau choisit presque toujours le milieu. C'est l'**effet de compromis**. Tag le tier du milieu **« Most Popular »** : tu confirmes le choix que le cerveau a déjà fait.",
        },
        {
          title: "Get 1 Free vs -33% : pas le même résultat",
          text: "Mathématiquement c'est pareil. Psychologiquement, rien à voir. -33%, le client **calcule**. « Get 1 Free », il **ressent**. Le cerveau sur-évalue tout ce qui est gratuit. C'est pas une opinion — c'est de la **behavioral economics**.",
        },
        {
          title: "L'urgence qui ne ressemble pas à du fake",
          text: "Un countdown random, le client sait que c'est fake — et ta confiance explose. Un stock réel, il sent l'urgence sans être manipulé. Les meilleurs stores utilisent des batchs : « Mars : SOLD OUT. Avril : 78% réservé. Mai : en production. » Vérifiable. **10x plus puissant qu'un timer**.",
        },
      ],
      countdownLabel: "Cette offre expire dans :",
      ctaTitle: "Tout ce que tu viens de lire se configure en 5 min avec Moonbundles",
      ctaSubtitle:
        "Bundles, tiers, cart drawer, upsell post-achat, A/B test — tout dans une seule app.",
      promoLabel: "20% de réduction avec le code",
      copyIdle: "Copier",
      copyDone: "Copié ✓",
      ctaButton: "Je veux x2 mon AOV",
      socialProof: "448+ reviews · 5.0/5 · Built for Shopify · Utilisé par 1 200+ stores",
      riskReversal: "Sans carte bancaire · Plan gratuit · Annulable à tout moment",
      stickyLabel: "-20% sur Moonbundles",
      stickyButton: "Installer",
      whatsappText: "Une question ? On t'aide à setup tes offres",
      whatsappButton: "WhatsApp",
      onboarding: {
        stepLabel: "Étape",
        back: "Retour",
        privacy: "Anonyme · 10 secondes",
        langWelcome: "Welcome · Bienvenue",
        langTitle: "Choisis ta langue",
        langSubtitle: "Pour te servir le guide dans ton langage",
        revenueTitle: "Ton chiffre d'affaires mensuel ?",
        revenueSubtitle: "Pour te calibrer les bons exemples",
        revenueOptions: [
          { key: "starting", label: "Je démarre" },
          { key: "0-5k", label: "0 – 5k$ / mois" },
          { key: "5-50k", label: "5 – 50k$ / mois" },
          { key: "50-500k", label: "50 – 500k$ / mois" },
          { key: "500k+", label: "500k$+ / mois" },
        ],
        marketTitle: "Tu vends quoi ?",
        marketSubtitle: "Pour que les exemples te parlent",
        marketOptions: [
          { key: "beauty", label: "Beauté / Skincare" },
          { key: "fashion", label: "Mode / Accessoires" },
          { key: "home", label: "Maison / Déco" },
          { key: "health", label: "Santé / Wellness" },
          { key: "tech", label: "Tech / Gadgets" },
          { key: "fitness", label: "Sport / Fitness" },
          { key: "food", label: "Food / Suppléments" },
          { key: "other", label: "Autre" },
        ],
        adsTitle: "Tes pubs tournent où ?",
        adsSubtitle: "Pour cibler les bons leviers pour toi",
        adsOptions: [
          { key: "meta", label: "Meta (Facebook + Instagram)" },
          { key: "tiktok", label: "TikTok" },
          { key: "google", label: "Google Ads" },
          { key: "snap", label: "Snapchat" },
          { key: "multiple", label: "Plusieurs plateformes" },
          { key: "none", label: "Pas encore d'ads" },
        ],
        aovTitle: "Ton panier moyen actuel ?",
        aovSubtitle: "Entre un chiffre, je te montre ton potentiel avec Moonbundles.",
        aovPlaceholder: "45",
        aovInputSuffix: "$",
        aovCurrentLabel: "Actuel",
        aovProjectedLabel: "Avec Moonbundles",
        aovBadge: "×1.5",
        aovGainLabel: "gain par commande",
        aovContinue: "Voir mon potentiel",
        aovHint: "Ton panier moyen c'est ton CA divisé par le nombre de commandes.",
        doneTitle: "Ton guide perso est prêt",
        doneSubtitle: "5 leçons courtes, directes, pour doubler ton AOV avec le trafic que t'as déjà.",
        doneProjectionLabel: "Ton potentiel avec Moonbundles",
        doneCta: "Découvrir le guide",
      },
    },

    languageModal: {
      welcome: "Welcome · Bienvenue",
      title: "Choisis ta langue",
      subtitle: "Choose your language to continue",
      footnote: "Tu pourras changer plus tard depuis le menu.",
      close: "Fermer",
    },
  },

  en: {
    nav: {
      features: "Features",
      reviews: "Reviews",
      compare: "Compare",
      affiliate: "Affiliate",
      cta: "Try 14 days",
      menuOpen: "Open menu",
    },

    hero: {
      badge: "Built for Shopify · Rated 5.0/5",
      headline: ["Boost", "your", "AOV", "at", "every", "step"],
      subtitle:
        "The all-in-one Shopify app for Bundles, Cart Upsell & Post-Purchase. Set up in 5 minutes. Loved by 250+ merchants.",
      ctaPrimary: "Install Free on Shopify",
      ctaSecondary: "Watch demo",
      stats: {
        merchants: "Active Merchants",
        reviews: "5-Star Reviews",
        rating: "App Store Rating",
      },
    },

    features: {
      badge: "Features",
      titlePart1: "Everything you need to",
      titlePart2: "grow your AOV",
      cards: [
        { title: "Fixed Bundles", tagline: "Group your products, boost the cart" },
        { title: "Volume Discounts", tagline: "Buy more, save more" },
        { title: "Cart Drawer", tagline: "A side cart that sells for you" },
        { title: "Mix & Match", tagline: "Customers build their own bundle" },
        { title: "Post-Purchase", tagline: "One-click upsells after checkout" },
        { title: "Bar & Free Gifts", tagline: "Progress bar and free gifts built-in" },
      ],
    },

    testimonials: {
      badge: "★ Rated 5.0/5",
      titlePart1: "Loved by merchants",
      titlePart2: "worldwide",
      subtitle: "Rated 5.0/5 on the Shopify App Store with 250+ reviews.",
      verifiedMerchant: "Verified Shopify Merchant",
    },

    comparison: {
      badge: "Comparison",
      titlePart1: "Why",
      titlePart2: "Moonbundles",
      titleEnd: "?",
      subtitle: "One app to replace them all. See for yourself.",
      reviewsCount: "5.0/5 · 250+ reviews",
      allInOne: "All included · 1 single app",
      ratingLabel: "Rating:",
      features: [
        { key: "bundles", label: "Product Bundles" },
        { key: "volume", label: "Volume Discounts" },
        { key: "cart", label: "Cart Drawer" },
        { key: "postPurchase", label: "Post-Purchase Upsell" },
        { key: "freeGifts", label: "Free Gifts" },
        { key: "allInOne", label: "All-in-one (1 app)" },
        { key: "rating", label: "Rating" },
      ],
      separateApp: "Separate app",
      fiveApps: "5 apps",
    },

    affiliateHome: {
      badge: "Partner Program",
      titlePart1: "Become a",
      titlePart2: "Moonbundles partner",
      commission: "commission",
      recurring: "recurring",
      desc: "Recommend Moonbundles to Shopify merchants and earn a commission on every subscription. Agencies, freelancers, creators — we're waiting for you.",
      benefits: [
        "Recurring commissions",
        "Tracking dashboard",
        "Dedicated support",
        "0 entry fees",
      ],
      cta: "Contact us",
      response: "Reply within 24h",
    },

    ctaHome: {
      socialProof: "1,200+ merchants",
      titlePart1: "Ready to boost",
      titlePart2: "your revenue?",
      subtitle: "Join 1,200+ merchants who increased their average order value with Moonbundles.",
      button: "Install Free",
      perks: ["No credit card", "Free plan available", "Cancel anytime"],
    },

    footer: {
      shopifyStore: "Shopify App Store",
      contact: "Contact",
      twitter: "Twitter",
      builtFor: "Built for Shopify",
      copyright: "© 2026 CScorp LLC",
    },

    affiliateHero: {
      badge: "Affiliate Program",
      headline: ["Earn", "40%", "for", "life", "on", "every", "subscription", "you", "generate"],
      gradientWords: ["40%", "life"],
      subtitle: "One link, one promo code. No limit. Automatic recurring income every month.",
      ctaPrimary: "Become an affiliate",
      ctaSecondary: "See how it works",
      stats: [
        { value: "40%", label: "Recurring commission" },
        { value: "For life", label: "No time limit" },
        { value: "$0", label: "Entry fees" },
      ],
    },

    calculator: {
      badge: "Earnings calculator",
      titlePart1: "How much can you",
      titlePart2: "earn?",
      subtitle: "Move the slider to see your estimated earnings in real time.",
      sliderLabel: "Active referrals",
      sliderAria: "Number of active referrals",
      perMonth: "Per month",
      perYear: "Per year",
      basedOn: "Based on an average subscription of",
      perMonthLabel: "/month",
      multiplier: "× 40% commission",
      disclaimer:
        "Indicative estimate — actual amounts vary based on the plan your referrals choose.",
    },

    howItWorks: {
      badge: "How it works",
      titlePart1: "3 steps to start",
      titlePart2: "earning",
      steps: [
        {
          title: "Create your affiliate account",
          desc: "Contact us on WhatsApp. You'll receive your personal link and promo code in minutes.",
        },
        {
          title: "Share your link",
          desc: "Share your link with your audience, community, and clients. On YouTube, Twitter, Discord, Skool — anywhere.",
        },
        {
          title: "Earn every month, for life",
          desc: "40% of every subscription you generate, as long as your referral stays active. No cap.",
        },
      ],
    },

    whoFor: {
      badge: "Who is it for?",
      titlePart1: "The Moonbundles program is",
      titlePart2: "for you if...",
      personas: [
        {
          title: "Content creators",
          desc: "You create content around e-commerce, ads or Shopify? Talk about Moonbundles in your videos and earn lifetime commissions on every signup.",
        },
        {
          title: "Coaches & trainers",
          desc: "You support e-commerce founders? Recommend Moonbundles in your courses and earn 40% recurring on every signup.",
        },
        {
          title: "E-commerce founders",
          desc: "You already use Moonbundles? Share what works for you with your network and get paid every month.",
        },
        {
          title: "Ecom communities",
          desc: "You run a Discord, a Skool group or a Telegram? Add Moonbundles to your recommended tools stack and turn your influence into recurring income.",
        },
      ],
    },

    whyMoonbundles: {
      points: [
        "448+ 5-star reviews",
        "Built for Shopify",
        "The product sells itself",
      ],
    },

    repartition: {
      badge: "Flexibility",
      titlePart1: "Split your 40%",
      titlePart2: "however you want",
      subtitle: "You decide how your commission is shared.",
      footnote: "Configurable from your Mantle dashboard.",
      splits: [
        {
          title: "Keep it all",
          subtext: "The default option. Simple and direct.",
          description: "40% for you",
          legendYou: "You",
          legendOther: "",
        },
        {
          title: "Sub-affiliate network",
          subtext: "Build your own network of ambassadors.",
          description: "30% for you · 10% sub-affiliates",
          legendYou: "You",
          legendOther: "Sub-affiliates",
        },
        {
          title: "50/50 partnership",
          subtext: "Split with a collaborator.",
          description: "20% for you · 20% partner",
          legendYou: "You",
          legendOther: "Partner",
        },
      ],
    },

    faq: {
      badge: "FAQ",
      titlePart1: "Frequently asked",
      titlePart2: "questions",
      items: [
        {
          q: "How are payments made?",
          a: "Payments are made monthly via Mantle. You track everything from your affiliate dashboard, with full commission history.",
        },
        {
          q: "How do I track my referrals?",
          a: "You have a dedicated dashboard that tracks every signup, every payment, and your commissions in real time. You see exactly who signed up, when, and how much you earned.",
        },
        {
          q: "Does the promo code track without the affiliate link?",
          a: "Yes. If your referral uses your promo code at signup (even without clicking your link), the commission is automatically attributed to your affiliate account.",
        },
        {
          q: "Can I run ads with my link?",
          a: "Yes, you can promote your link on all channels: social media, email, YouTube, blog, Discord/Skool communities, or even paid ads.",
        },
        {
          q: "Is it really for life?",
          a: "Yes. As long as your referral stays subscribed to Moonbundles, you earn your commission every month. No time limit, no earnings cap.",
        },
      ],
    },

    affiliateCta: {
      stats: ["448+ 5-star reviews", "1,200+ active stores", "Built for Shopify"],
      titlePart1: "Earn money for life",
      titlePart2: "with Moonbundles",
      subtitlePart1: "If someone subscribes to Moonbundles thanks to you, we pay you",
      subtitleHighlight: "40% every month",
      subtitlePart2: ". Automatically. No limits.",
      button: "Become an affiliate",
      footnote: "Reply within 24h — Program managed in direct",
    },

    nativeAds: {
      heroBadge: "Free Guide",
      heroTitle: "Create native ads that scale",
      heroTitleHighlight: "for your e-commerce",
      heroSubtitle:
        "The complete 3-step framework: analyze your persona, generate your concepts, create your visuals. All automated with Claude AI and Nanobanana.",
      stepsTitle: "3 steps to create native ads",
      stepsTitleHighlight: "that convert",
      steps: [
        {
          title: "Get to know your persona",
          desc: "Don't know your customer perfectly? This prompt asks 19 questions about your product, your target and your market. At the end, Claude generates a full persona sheet with frustrations, desires, the exact words your customer uses and their buying triggers.",
          sub: "Download the PDF → paste the prompt into Claude → answer the questions",
          btnLabel: "Download the Persona prompt",
        },
        {
          title: "Generate your native ads concepts",
          desc: "Send this prompt to Claude with your store URL. It analyzes your site and generates 5 complete native ad concepts: the hook, the image description, the ready-to-copy Nanobanana prompt, the ad angle, and the Meta ad copy.",
          sub: "Download the PDF → paste the prompt into Claude → add your URL → get your 5 concepts",
          btnLabel: "Download the Native Ads prompt",
        },
        {
          title: "Create your visuals on Nanobanana",
          desc: "Copy the Nanobanana prompts Claude generated and paste them directly into Nanobanana. You get realistic native ad images — no logo, no product, just your customer's problem. Ready to launch on Meta.",
          sub: "Copy the prompt → paste into Nanobanana → download your images → launch your ads",
          btnLabel: "Go to Nanobanana",
        },
      ],
      ctaStepTitle: "A merchant went from 3 to 12 sales/day without changing his ads",
      painPoints: [
        "No bundles → AOV too low",
        "No offer structure → weak conversion",
        "No upsell → you leave cash on the table",
      ],
      bridgeStat: "90% of stores with good ads aren't profitable because of this.",
      bridgeMiddle: " That's exactly what ",
      bridgeBrand: "Moonbundles fixes",
      fomoBadge: "-20% on Moonbundles",
      fomoSubtitle: "48h only",
      fomoExpires: "Expires in",
      ctaButton: "Boost my AOV in 5 min",
      copyIdle: "Copy",
      copyDone: "Copied ✓",
      whatsappText: "Got a question? We'll help you set up your offers",
      whatsappButton: "Contact us on WhatsApp",
    },

    valueOffer: {
      heroBadge: "Free Guide",
      heroTitle: "The psychology behind the highest converting offers",
      heroSubtitle:
        "Why some stores **2x their AOV** with the same product and the same traffic.",
      sections: [
        {
          title: "1 product, 1 price, 1 button",
          text: "**90% of stores** sell like this: one price, one button, a customer who leaves. The problem isn't your product — it's that **you let them decide alone**.",
        },
        {
          title: "The anchoring effect changes everything",
          text: "Show Buy 2 Get 2 Free at $70 instead of $180: the customer doesn't see $70, they see **$110 in savings**. The higher the anchor, the lower the real price feels. Not fake — **pricing psychology**.",
        },
        {
          title: "3 choices convert better than 1",
          text: "With 1 option: \u201Cbuy or not.\u201D With 3: \u201C**which one**.\u201D In a comparison, the brain almost always picks the middle. That's the **compromise effect**. Tag the middle tier **\u201CMost Popular\u201D**: you're confirming the choice the brain already made.",
        },
        {
          title: "Get 1 Free vs -33%: not the same result",
          text: "Mathematically the same. Psychologically, worlds apart. -33%, the customer **calculates**. \u201CGet 1 Free,\u201D they **feel**. The brain overvalues anything free. Not opinion — **behavioral economics**.",
        },
        {
          title: "Urgency that doesn't look fake",
          text: "A random countdown, the customer knows it's fake — and trust dies. A real stock display, they feel urgency without being manipulated. The best stores use batches: \u201CMarch: SOLD OUT. April: 78% reserved. May: in production.\u201D Verifiable. **10x more powerful than a timer**.",
        },
      ],
      countdownLabel: "This offer expires in:",
      ctaTitle: "Everything you just read can be set up in 5 minutes with Moonbundles",
      ctaSubtitle:
        "Bundles, tiers, cart drawer, post-purchase upsell, A/B testing — all in one app.",
      promoLabel: "20% off with code",
      copyIdle: "Copy",
      copyDone: "Copied ✓",
      ctaButton: "I want to 2x my AOV",
      socialProof: "448+ reviews · 5.0 rating · Built for Shopify · Used by 1,200+ stores",
      riskReversal: "No credit card · Free plan · Cancel anytime",
      stickyLabel: "-20% on Moonbundles",
      stickyButton: "Install",
      whatsappText: "Got a question? We'll help you set up your offers",
      whatsappButton: "WhatsApp",
      onboarding: {
        stepLabel: "Step",
        back: "Back",
        privacy: "Anonymous · 10 seconds",
        langWelcome: "Welcome · Bienvenue",
        langTitle: "Pick your language",
        langSubtitle: "So we can serve the guide in your language",
        revenueTitle: "Your monthly revenue?",
        revenueSubtitle: "So we calibrate the right examples for you",
        revenueOptions: [
          { key: "starting", label: "Just starting" },
          { key: "0-5k", label: "$0 – $5k / mo" },
          { key: "5-50k", label: "$5k – $50k / mo" },
          { key: "50-500k", label: "$50k – $500k / mo" },
          { key: "500k+", label: "$500k+ / mo" },
        ],
        marketTitle: "What do you sell?",
        marketSubtitle: "So the examples hit home",
        marketOptions: [
          { key: "beauty", label: "Beauty / Skincare" },
          { key: "fashion", label: "Fashion / Accessories" },
          { key: "home", label: "Home / Decor" },
          { key: "health", label: "Health / Wellness" },
          { key: "tech", label: "Tech / Gadgets" },
          { key: "fitness", label: "Sports / Fitness" },
          { key: "food", label: "Food / Supplements" },
          { key: "other", label: "Other" },
        ],
        adsTitle: "Where do your ads run?",
        adsSubtitle: "So we target the right levers for you",
        adsOptions: [
          { key: "meta", label: "Meta (Facebook + Instagram)" },
          { key: "tiktok", label: "TikTok" },
          { key: "google", label: "Google Ads" },
          { key: "snap", label: "Snapchat" },
          { key: "multiple", label: "Multiple platforms" },
          { key: "none", label: "No ads yet" },
        ],
        aovTitle: "Your current AOV?",
        aovSubtitle: "Type a number, I'll show you your potential with Moonbundles.",
        aovPlaceholder: "45",
        aovInputSuffix: "$",
        aovCurrentLabel: "Current",
        aovProjectedLabel: "With Moonbundles",
        aovBadge: "×1.5",
        aovGainLabel: "gain per order",
        aovContinue: "See my potential",
        aovHint: "AOV = revenue divided by number of orders.",
        doneTitle: "Your custom guide is ready",
        doneSubtitle: "5 short, direct lessons to double your AOV with the traffic you already have.",
        doneProjectionLabel: "Your potential with Moonbundles",
        doneCta: "Discover the guide",
      },
    },

    languageModal: {
      welcome: "Welcome · Bienvenue",
      title: "Choose your language",
      subtitle: "Choisis ta langue pour continuer",
      footnote: "You can change later from the menu.",
      close: "Close",
    },
  },
};

export interface TranslationDict {
  nav: {
    features: string;
    reviews: string;
    compare: string;
    affiliate: string;
    cta: string;
    menuOpen: string;
  };
  hero: {
    badge: string;
    headline: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { merchants: string; reviews: string; rating: string };
  };
  features: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    cards: { title: string; tagline: string }[];
  };
  testimonials: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    verifiedMerchant: string;
  };
  comparison: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    titleEnd: string;
    subtitle: string;
    reviewsCount: string;
    allInOne: string;
    ratingLabel: string;
    features: { key: string; label: string }[];
    separateApp: string;
    fiveApps: string;
  };
  affiliateHome: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    commission: string;
    recurring: string;
    desc: string;
    benefits: string[];
    cta: string;
    response: string;
  };
  ctaHome: {
    socialProof: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    button: string;
    perks: string[];
  };
  footer: {
    shopifyStore: string;
    contact: string;
    twitter: string;
    builtFor: string;
    copyright: string;
  };
  affiliateHero: {
    badge: string;
    headline: string[];
    gradientWords: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  calculator: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    sliderLabel: string;
    sliderAria: string;
    perMonth: string;
    perYear: string;
    basedOn: string;
    perMonthLabel: string;
    multiplier: string;
    disclaimer: string;
  };
  howItWorks: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    steps: { title: string; desc: string }[];
  };
  whoFor: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    personas: { title: string; desc: string }[];
  };
  whyMoonbundles: {
    points: string[];
  };
  repartition: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    footnote: string;
    splits: {
      title: string;
      subtext: string;
      description: string;
      legendYou: string;
      legendOther: string;
    }[];
  };
  faq: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    items: { q: string; a: string }[];
  };
  affiliateCta: {
    stats: string[];
    titlePart1: string;
    titlePart2: string;
    subtitlePart1: string;
    subtitleHighlight: string;
    subtitlePart2: string;
    button: string;
    footnote: string;
  };
  nativeAds: {
    heroBadge: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    stepsTitle: string;
    stepsTitleHighlight: string;
    steps: { title: string; desc: string; sub: string; btnLabel: string }[];
    ctaStepTitle: string;
    painPoints: string[];
    bridgeStat: string;
    bridgeMiddle: string;
    bridgeBrand: string;
    fomoBadge: string;
    fomoSubtitle: string;
    fomoExpires: string;
    ctaButton: string;
    copyIdle: string;
    copyDone: string;
    whatsappText: string;
    whatsappButton: string;
  };
  valueOffer: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    sections: { title: string; text: string }[];
    countdownLabel: string;
    ctaTitle: string;
    ctaSubtitle: string;
    promoLabel: string;
    copyIdle: string;
    copyDone: string;
    ctaButton: string;
    socialProof: string;
    riskReversal: string;
    stickyLabel: string;
    stickyButton: string;
    whatsappText: string;
    whatsappButton: string;
    onboarding: {
      stepLabel: string;
      back: string;
      privacy: string;
      langWelcome: string;
      langTitle: string;
      langSubtitle: string;
      revenueTitle: string;
      revenueSubtitle: string;
      revenueOptions: { key: string; label: string }[];
      marketTitle: string;
      marketSubtitle: string;
      marketOptions: { key: string; label: string }[];
      adsTitle: string;
      adsSubtitle: string;
      adsOptions: { key: string; label: string }[];
      aovTitle: string;
      aovSubtitle: string;
      aovPlaceholder: string;
      aovInputSuffix: string;
      aovCurrentLabel: string;
      aovProjectedLabel: string;
      aovBadge: string;
      aovGainLabel: string;
      aovContinue: string;
      aovHint: string;
      doneTitle: string;
      doneSubtitle: string;
      doneProjectionLabel: string;
      doneCta: string;
    };
  };
  languageModal: {
    welcome: string;
    title: string;
    subtitle: string;
    footnote: string;
    close: string;
  };
}
