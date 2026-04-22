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
      ctaAffiliate: "Créer mon programme",
      menuOpen: "Ouvrir le menu",
    },

    // Hero (home)
    hero: {
      badge: "Built for Shopify · Noté 5.0/5",
      headline: ["Boostez", "votre", "AOV", "à", "chaque", "étape"], // dernier mot = gradient
      subtitle:
        "L'app Shopify tout-en-un pour les Bundles, Cart Upsell & Post-Achat. Configurez en 5 minutes. Adorée par 250+ marchands.",
      ctaPrimary: "Installer gratuitement sur Shopify",
      ctaSecondary: "Voir la démo",
      stats: {
        merchants: "Marchands actifs",
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
      button: "Installer gratuitement",
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
      badge: "Programme d'Affiliation",
      headlineA: "40% de commission.",
      headlineB: "Chaque mois. À vie.",
      subtitle:
        "Ton audience. Notre produit. Tu touches 40% à vie sur chaque abonnement que tu génères.",
      ctaPrimary: "Je veux mes 40%",
      ctaSecondary: "Comment ça marche",
      trust: ["Aucun investissement", "Paiement le 15 du mois", "Seuil min. $100"],
    },

    simulator: {
      eyebrow: "Simulateur",
      refs: "parrainages actifs",
      perMonth: "par mois",
      perYear: "par an",
      soit: "soit",
      preset: "parrainages",
    },

    split: {
      badge: "Flexibilité",
      titleA: "Les 40%, c'est toi qui les",
      titleB: "répartis.",
      subtitle:
        "Garde tout pour toi, ou partage avec tes sous-affiliés. Ton programme, tes règles.",
      you: "Pour toi",
      subs: "Pour tes sous-affiliés",
      scenarioLabel: "Scénario",
      scenarios: [
        {
          label: "Tu gardes tout",
          you: 40,
          subs: 0,
          desc: "Tu encaisses 40% sur chaque abonnement. La formule la plus simple.",
        },
        {
          label: "Tu partages 50/50",
          you: 20,
          subs: 20,
          desc: "Tu gardes 20%, tu en reverses 20% à tes sous-affiliés. Ils t'amènent du volume, tu gardes du revenu passif.",
        },
        {
          label: "Tu t'organises en réseau",
          you: 8,
          subs: 32,
          desc: "Tu reverses 30-35% à tes sous-affiliés et gardes 5-10% de coordination. Parfait pour monter une machine.",
        },
      ],
      footerA: "Total garanti :",
      footerPct: "40%",
      footerB: "à vie sur chaque abonnement. Tu décides comment le découper.",
    },

    askAi: {
      badge: "Demande à l'IA",
      titleA: "Pas convaincu que",
      titleB: "soit fait pour toi ?",
      ask: "Demander à",
      prompt:
        "Dis-moi pourquoi l'app Shopify Moonbundles est faite pour moi (j'ai une boutique Shopify, je veux augmenter mon panier moyen et mes revenus). Moonbundles fait bundles, cart drawer, post-purchase, free gifts et volume discounts — tout dans une seule app. Donne-moi des raisons concrètes.",
    },

    howItWorks: {
      badge: "Processus",
      title: "Comment ça marche ?",
      steps: [
        {
          tag: "Étape 1",
          title: "Rejoins-nous en 2 minutes",
          desc: "Crée ton compte affilié. Lien personnalisé + code promo instantané.",
        },
        {
          tag: "Étape 2",
          title: "Partage ton lien",
          desc: "Sur YouTube, TikTok, Insta, X — ou dans ta newsletter.",
        },
        {
          tag: "Étape 3",
          title: "Recrute tes sous-affiliés",
          desc: "Parraine d'autres créateurs — tu touches aussi des commissions à vie sur leurs ventes.",
        },
      ],
    },

    targets: {
      badge: "Cibles",
      title: "À qui s'adresse ce programme ?",
      subtitle:
        "Tu parles aux marchands Shopify ? On te paye 40% à vie pour les faire passer à Moonbundles.",
      items: [
        {
          tag: "Créateurs",
          title: "Créateurs de contenu",
          desc: "Tu parles e-commerce, dropshipping, Shopify ? Ton audience est DTC. Moonbundles colle pile.",
          icons: ["instagram", "tiktok", "youtube"],
        },
        {
          tag: "YouTubers",
          title: "YouTubers",
          desc: "Une vidéo « comment j'ai doublé mon AOV » = des leads qualifiés pour des années.",
          icons: ["youtube"],
        },
        {
          tag: "Rédacteurs",
          title: "Rédacteurs & SEO",
          desc: "Articles comparatifs, guides bundles, tutos Shopify — chaque lien te rapporte 40% à vie.",
          icons: ["google"],
        },
        {
          tag: "Agences",
          title: "Agences & consultants",
          desc: "Recommande Moonbundles à tes clients Shopify. Plus besoin de stacker 4 apps.",
          icons: ["shopify"],
        },
      ],
    },

    faq: {
      badge: "FAQ",
      titleA: "Encore des questions ?",
      titleB: "On a les réponses.",
      subtitle:
        "Pas trouvé ton bonheur ? Écris-nous sur WhatsApp, on répond en quelques minutes.",
      cta: "Rejoindre le programme",
      items: [
        {
          q: "Quel est le taux de commission ?",
          a: "40% à vie sur chaque abonnement que tu génères. Tant que ton référé reste client, tu touches 40% — chaque mois, sans limite.",
        },
        {
          q: "Comment fonctionnent les paiements ?",
          a: "Paiement automatique le 15 de chaque mois par Stripe, Wise ou virement. Seuil minimum $100. Versement en 3-5 jours ouvrés.",
        },
        {
          q: "Comment je répartis les 40% entre moi et mes sous-affiliés ?",
          a: "Depuis ton dashboard, tu choisis librement ta part (de 0 à 40%) et ce qui revient à tes sous-affiliés. Tu peux changer le split à tout moment.",
        },
        {
          q: "Annuel ou mensuel — comment est calculée la commission ?",
          a: "Tu touches 40% sur le paiement réel du client. S'il paye en annuel, tu reçois 40% du montant annuel dès validation (~30j pour couvrir la fenêtre de remboursement).",
        },
        {
          q: "Si un visiteur ne s'inscrit pas tout de suite, je perds ?",
          a: "Non. Cookie 30 jours. À chaque clic ou usage de ton code promo, le compteur redémarre. La commission reste à toi.",
        },
        {
          q: "Qu'est-ce que je n'ai pas le droit de faire ?",
          a: "Pas de publicité payante sur le nom Moonbundles. Pas de spam, fake reviews, cashback. Commissions non conformes annulées.",
        },
      ],
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
      ctaStepTitle: "Un marchand est passé de 3 à 12 ventes/jour sans toucher à ses ads",
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
      whatsappText: "Une question ? On t'aide à configurer tes offres",
      whatsappButton: "Nous contacter sur WhatsApp",
    },

    valueOffer: {
      heroBadge: "Guide Gratuit",
      heroTitle: "La psychologie derrière les offres qui convertissent le mieux",
      heroSubtitle:
        "Pourquoi certains stores **doublent leur panier moyen** avec le même produit et le même trafic.",
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
          text: "Un countdown random, le client sait que c'est fake — et **ta crédibilité s'effondre**. Un stock réel, il sent l'urgence sans se sentir manipulé. Les meilleurs stores utilisent des batchs : « Mars : SOLD OUT. Avril : 78% réservé. Mai : en production. » Vérifiable. **10x plus puissant qu'un timer**.",
        },
      ],
      countdownLabel: "Cette offre expire dans :",
      ctaTitle: "Tout ce que tu viens de lire se configure en 5 min avec Moonbundles",
      ctaSubtitle:
        "Bundles, tiers, cart drawer, upsell post-achat, A/B test — tout dans une seule app.",
      promoLabel: "20% de réduction avec le code",
      copyIdle: "Copier",
      copyDone: "Copié ✓",
      ctaButton: "Je veux doubler mon AOV",
      socialProof: "448+ avis · 5.0/5 · Built for Shopify · 1 200+ stores actifs",
      riskReversal: "Sans carte bancaire · Plan gratuit · Annulable à tout moment",
      stickyLabel: "-20% sur Moonbundles",
      stickyButton: "Installer",
      whatsappText: "Une question ? On t'aide à configurer tes offres",
      whatsappButton: "WhatsApp",
      onboarding: {
        stepLabel: "Étape",
        back: "Retour",
        privacy: "Anonyme · 10 secondes",
        langWelcome: "Welcome · Bienvenue",
        langTitle: "Choisis ta langue",
        langSubtitle: "Pour te servir le guide dans ta langue",
        revenueTitle: "Ton chiffre d'affaires mensuel ?",
        revenueSubtitle: "Pour adapter les exemples à ta taille",
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
        aovHint: "Panier moyen = CA ÷ nombre de commandes.",
        doneTitle: "Ton guide perso est prêt",
        doneSubtitle: "5 leçons courtes, directes, pour doubler ton AOV avec le trafic que t'as déjà.",
        doneProjectionLabel: "Ton potentiel avec Moonbundles",
        doneCta: "Découvrir le guide",
      },
    },

    quiz2026: {
      heroBadge: "Quiz 2026",
      heroTitle: "20 questions pour savoir si ton store est prêt pour 2026",
      heroSubtitle:
        "Réponds honnêtement. Si tu dis « non » ou « je sais pas » à plus de 5 questions, tu laisses de l'argent sur la table.",
      heroCta: "Commencer le quiz",
      aovTitle: "C'est quoi ton panier moyen actuel ?",
      aovHint: "Panier moyen = CA ÷ nombre de commandes.",
      aovPlaceholder: "45",
      aovNext: "Suivant",
      questionCounter: "Question",
      previous: "Précédent",
      yes: "Oui",
      no: "Non",
      idk: "Je sais pas",
      questions: [
        "Tu connais ton panier moyen exact cette semaine ?",
        "Tu sais combien de tes clients achètent plus d'un produit par commande ?",
        "Tu sais à quel moment précis tes clients abandonnent le checkout ?",
        "Ton meilleur produit, c'est celui qui vend le plus ou celui qui a la meilleure marge — tu sais lequel ?",
        "T'as testé une offre différente sur ton best-seller ces 30 derniers jours ?",
        "Tu sais si ton client achète pour lui ou pour offrir ?",
        "Tu sais combien de temps un visiteur reste sur ta fiche produit avant de partir ?",
        "Tu connais le pourcentage de ton CA qui vient de clients qui reviennent ?",
        "T'as une offre post-achat, ou ton client voit juste « merci pour ta commande » ?",
        "Si tu coupes tes pubs demain, tu fais encore du CA ?",
        "T'as un produit complémentaire à proposer dans le panier ?",
        "Ton bouton d'ajout au panier dit autre chose que « Ajouter au panier » ?",
        "Tu sais exactement pourquoi tes 3 meilleures pubs marchent ?",
        "T'as un bundle sur ton site ?",
        "T'as déjà lu les avis 1 étoile de tes concurrents pour trouver des angles ?",
        "Ton site charge en moins de 3 secondes sur mobile ?",
        "T'as une raison pour que ton client achète maintenant plutôt que la semaine prochaine ?",
        "Tu connais ton coût d'acquisition (CAC) par rapport à ta valeur client à vie (LTV) ?",
        "T'as déjà A/B testé une offre sur ton site ?",
        "Quelqu'un qui arrive sur ton site pour la première fois comprend ce que tu vends en moins de 3 secondes ?",
      ],
      scoreLabel: "Ton score",
      resultHigh: "Ton store est bien optimisé. Mais il y a encore de la marge pour aller chercher plus.",
      resultMid: "T'as des bases solides, mais tu laisses pas mal d'argent sur la table.",
      resultLow: "Ton store perd du CA et tu le sais même pas. Faut agir maintenant.",
      aovCurrentLabel: "Ton AOV actuel",
      aovProjectedLabel: "Ton AOV potentiel",
      aovMultiplier: "×1.7 en moyenne",
      revenueImpactPrefix: "Avec",
      revenueImpactMid: "commandes par mois, ça fait",
      revenueImpactBoldStart: "",
      revenueImpactBoldEnd: "de CA en plus",
      revenueImpactSuffix: "chaque mois.",
      ordersInputLabel: "Commandes / mois",
      improveTitle: "Les points à améliorer sur ton store",
      showAll: "Voir tout",
      showLess: "Réduire",
      countdownLabel: "Cette offre expire dans :",
      ctaTitlePrefix: "Passe de",
      ctaTitleMid: "à",
      ctaTitleSuffix: "avec Moonbundles.",
      ctaSubtitle: "Bundles, cart drawer, upsell post-achat, A/B test — tout dans une seule app.",
      promoLabel: "20% de réduction avec le code",
      copyIdle: "Copier",
      copyDone: "Copié ✓",
      ctaButton: "Installer Moonbundles maintenant",
      socialProof: "448+ reviews · 5.0/5 · Built for Shopify · 1 200+ stores",
      whatsappText: "Une question ? On t'aide à configurer tes offres",
      whatsappButton: "WhatsApp",
      restart: "Refaire le quiz",
    },

    deserves: {
      titleA: "Ton audience mérite",
      titleB: "Toi, tu mérites",
      rate: "40% à vie.",
      subtitle:
        "Moonbundles est un produit que les marchands adorent utiliser. Tu amènes l'audience, on amène le produit.",
      cta: "Je commence maintenant",
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
      ctaAffiliate: "Start my program",
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
      headlineA: "40% commission.",
      headlineB: "Every month. For life.",
      subtitle:
        "Your audience. Our product. You earn 40% for life on every subscription you generate.",
      ctaPrimary: "I want my 40%",
      ctaSecondary: "How it works",
      trust: ["No investment", "Paid on the 15th", "$100 min. threshold"],
    },

    simulator: {
      eyebrow: "Simulator",
      refs: "active referrals",
      perMonth: "per month",
      perYear: "per year",
      soit: "that's",
      preset: "referrals",
    },

    split: {
      badge: "Flexibility",
      titleA: "You decide how the 40%",
      titleB: "gets split.",
      subtitle:
        "Keep it all, or share with sub-affiliates. Your program, your rules.",
      you: "For you",
      subs: "For sub-affiliates",
      scenarioLabel: "Scenario",
      scenarios: [
        {
          label: "Keep it all",
          you: 40,
          subs: 0,
          desc: "You earn the full 40% on every subscription. The simplest setup.",
        },
        {
          label: "Split 50/50",
          you: 20,
          subs: 20,
          desc: "Keep 20%, pass 20% to your sub-affiliates. They bring volume, you keep passive revenue.",
        },
        {
          label: "Build a network",
          you: 8,
          subs: 32,
          desc: "Give 30-35% to sub-affiliates, keep 5-10% as orchestrator. Perfect for building a machine.",
        },
      ],
      footerA: "Guaranteed total:",
      footerPct: "40%",
      footerB: "for life on every subscription. You decide how to split it.",
    },

    askAi: {
      badge: "Ask the AI",
      titleA: "Not sure",
      titleB: "is made for you?",
      ask: "Ask",
      prompt:
        "Tell me why the Moonbundles Shopify app is made for me (I run a Shopify store and want to boost my AOV and revenue). Moonbundles does bundles, cart drawer, post-purchase, free gifts and volume discounts — all in one app. Give me concrete reasons.",
    },

    howItWorks: {
      badge: "Process",
      title: "How it works",
      steps: [
        {
          tag: "Step 1",
          title: "Sign up in 2 minutes",
          desc: "Create your affiliate account. Personal link + promo code, instant.",
        },
        {
          tag: "Step 2",
          title: "Share your link",
          desc: "On YouTube, TikTok, Insta, X — or in your newsletter.",
        },
        {
          tag: "Step 3",
          title: "Recruit your sub-affiliates",
          desc: "Refer other creators — you earn lifetime commissions on their sales too.",
        },
      ],
    },

    targets: {
      badge: "Targets",
      title: "Who's this program for?",
      subtitle:
        "Talk to Shopify merchants? We pay 40% for life to get them on Moonbundles.",
      items: [
        {
          tag: "Creators",
          title: "Content creators",
          desc: "Talk e-commerce, dropshipping, Shopify? Your audience is DTC. Moonbundles fits perfectly.",
          icons: ["instagram", "tiktok", "youtube"],
        },
        {
          tag: "YouTubers",
          title: "YouTubers",
          desc: "One \"how I doubled my AOV\" video = qualified leads for years.",
          icons: ["youtube"],
        },
        {
          tag: "Writers",
          title: "Writers & SEO",
          desc: "Comparison articles, bundle guides, Shopify tutorials — every link earns 40% for life.",
          icons: ["google"],
        },
        {
          tag: "Agencies",
          title: "Agencies & consultants",
          desc: "Recommend Moonbundles to your Shopify clients. No more stacking 4 apps.",
          icons: ["shopify"],
        },
      ],
    },

    faq: {
      badge: "FAQ",
      titleA: "Still have questions?",
      titleB: "We've got answers.",
      subtitle: "Didn't find it? Message us on WhatsApp, we reply in minutes.",
      cta: "Join the program",
      items: [
        {
          q: "What's the commission rate?",
          a: "40% for life on every subscription you generate. As long as your referral stays a customer, you earn 40% — every month, no limit.",
        },
        {
          q: "How do payouts work?",
          a: "Automatic payout on the 15th of each month via Stripe, Wise, or bank transfer. $100 minimum. Paid within 3-5 business days.",
        },
        {
          q: "How do I split the 40% between me and sub-affiliates?",
          a: "From your dashboard, freely set your share (0-40%) and what goes to your sub-affiliates. You can change the split anytime.",
        },
        {
          q: "Annual or monthly — how is commission calculated?",
          a: "You earn 40% on what the customer actually pays. Annual plans = 40% of annual amount, validated after ~30 days.",
        },
        {
          q: "If a visitor doesn't sign up right away, do I lose?",
          a: "No. 30-day cookie. Every click or promo code use resets it. Commission stays yours.",
        },
        {
          q: "What am I not allowed to do?",
          a: "No paid ads on the Moonbundles brand name. No spam, fake reviews, or cashback. Non-compliant commissions are voided.",
        },
      ],
    },

    deserves: {
      titleA: "Your audience deserves",
      titleB: "You deserve",
      rate: "40% for life.",
      subtitle:
        "Moonbundles is a product merchants love using. You bring the audience, we bring the product.",
      cta: "Start now",
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

    quiz2026: {
      heroBadge: "2026 Quiz",
      heroTitle: "20 questions to find out if your store is ready for 2026",
      heroSubtitle:
        "Answer honestly. If you say \"no\" or \"I don't know\" to more than 5 questions, you're leaving money on the table.",
      heroCta: "Start the quiz",
      aovTitle: "What's your current average order value?",
      aovHint: "Revenue divided by number of orders.",
      aovPlaceholder: "45",
      aovNext: "Next",
      questionCounter: "Question",
      previous: "Previous",
      yes: "Yes",
      no: "No",
      idk: "I don't know",
      questions: [
        "Do you know your exact average order value this week?",
        "Do you know how many of your customers buy more than one product per order?",
        "Have you ever looked at the exact moment your customers abandon checkout?",
        "Is your best product the one that sells the most or the one with the best margin? Do you know which one?",
        "Have you tested a different offer on your best-seller in the last 30 days?",
        "Do you know if your customer buys for themselves or as a gift?",
        "Do you know how long a visitor stays on your product page before leaving?",
        "Do you know what percentage of your revenue comes from returning customers?",
        "Do you have a post-purchase offer or does your customer just see \"thank you for your order\"?",
        "If you turn off your ads tomorrow, do you still make revenue?",
        "Do you have a complementary product to suggest in the cart?",
        "Does your add to cart button say something other than \"Add to Cart\"?",
        "Do you know exactly why your top 3 ads are working?",
        "Do you have a bundle offer on your site?",
        "Have you read your competitors' 1-star reviews to find new angles?",
        "Does your site load in under 3 seconds on mobile?",
        "Do you have a reason for your customer to buy now rather than next week?",
        "Do you know your customer acquisition cost vs lifetime value?",
        "Have you ever A/B tested an offer on your site?",
        "Does a first-time visitor understand what you sell in under 3 seconds?",
      ],
      scoreLabel: "Your score",
      resultHigh: "Your store is well optimized. But there's still room to push further.",
      resultMid: "You have solid foundations but you're leaving a lot of money on the table.",
      resultLow: "Your store is bleeding and you don't even know it. Time to act.",
      aovCurrentLabel: "Your current AOV",
      aovProjectedLabel: "Your potential AOV",
      aovMultiplier: "×1.7 on average",
      revenueImpactPrefix: "With",
      revenueImpactMid: "orders per month, that's",
      revenueImpactBoldStart: "",
      revenueImpactBoldEnd: "in additional revenue",
      revenueImpactSuffix: "every month.",
      ordersInputLabel: "Orders / month",
      improveTitle: "What you need to improve on your store",
      showAll: "See all",
      showLess: "Show less",
      countdownLabel: "This offer expires in:",
      ctaTitlePrefix: "Go from",
      ctaTitleMid: "to",
      ctaTitleSuffix: "with Moonbundles.",
      ctaSubtitle: "Bundles, cart drawer, post-purchase upsell, A/B testing — all in one app.",
      promoLabel: "20% off with code",
      copyIdle: "Copy",
      copyDone: "Copied ✓",
      ctaButton: "Install Moonbundles now",
      socialProof: "448+ reviews · 5.0 rating · Built for Shopify · 1,200+ stores",
      whatsappText: "Got a question? We'll help you set up your offers",
      whatsappButton: "WhatsApp",
      restart: "Retake the quiz",
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
    ctaAffiliate: string;
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
    headlineA: string;
    headlineB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
  };
  simulator: {
    eyebrow: string;
    refs: string;
    perMonth: string;
    perYear: string;
    soit: string;
    preset: string;
  };
  split: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    you: string;
    subs: string;
    scenarioLabel: string;
    scenarios: { label: string; you: number; subs: number; desc: string }[];
    footerA: string;
    footerPct: string;
    footerB: string;
  };
  askAi: {
    badge: string;
    titleA: string;
    titleB: string;
    ask: string;
    prompt: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    steps: { tag: string; title: string; desc: string }[];
  };
  targets: {
    badge: string;
    title: string;
    subtitle: string;
    items: { tag: string; title: string; desc: string; icons: string[] }[];
  };
  faq: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    cta: string;
    items: { q: string; a: string }[];
  };
  deserves: {
    titleA: string;
    titleB: string;
    rate: string;
    subtitle: string;
    cta: string;
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
  quiz2026: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    aovTitle: string;
    aovHint: string;
    aovPlaceholder: string;
    aovNext: string;
    questionCounter: string;
    previous: string;
    yes: string;
    no: string;
    idk: string;
    questions: string[];
    scoreLabel: string;
    resultHigh: string;
    resultMid: string;
    resultLow: string;
    aovCurrentLabel: string;
    aovProjectedLabel: string;
    aovMultiplier: string;
    revenueImpactPrefix: string;
    revenueImpactMid: string;
    revenueImpactBoldStart: string;
    revenueImpactBoldEnd: string;
    revenueImpactSuffix: string;
    ordersInputLabel: string;
    improveTitle: string;
    showAll: string;
    showLess: string;
    countdownLabel: string;
    ctaTitlePrefix: string;
    ctaTitleMid: string;
    ctaTitleSuffix: string;
    ctaSubtitle: string;
    promoLabel: string;
    copyIdle: string;
    copyDone: string;
    ctaButton: string;
    socialProof: string;
    whatsappText: string;
    whatsappButton: string;
    restart: string;
  };
  languageModal: {
    welcome: string;
    title: string;
    subtitle: string;
    footnote: string;
    close: string;
  };
}
