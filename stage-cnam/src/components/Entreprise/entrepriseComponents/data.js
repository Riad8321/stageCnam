const items = [
    {
        title: "Mars 2005",
        media: {
            name: "pigimmo",
            source: {
              url:
                "https://www.groupe-la-boite-immo.fr/svg/logos/pigimmo.png"
            },
            type: "IMAGE"
          },
        cardTitle: "LA BOITE IMMO",
        url: "https://www.la-boite-immo.com/",
        cardSubtitle:
          "Création de pigimmo",
        cardDetailedText: `Le Groupe La Boite Immo, agence Web spécialisée dans les métiers de l'immobilier, regroupe des entreprises adapté au différentes spécialités : Location, Transaction, Neuf, etc.`
      },
    {
      title: "Décembre 2008",
      media: {
        name: "la boite immo",
        source: {
          url:
            "https://www.la-boite-immo.com/assets/img/logo/logo_lbi.svg"
        },
        type: "IMAGE"
      },
      cardTitle: "LA BOITE IMMO",
      url: "https://www.la-boite-immo.com/",
      cardSubtitle:
        "Création de La Boite Immo",
      cardDetailedText: `Le Groupe La Boite Immo, agence Web spécialisée dans les métiers de l'immobilier, regroupe des entreprises adapté au différentes spécialités : Location, Transaction, Neuf, etc.`
    },
    {
      title: "Juin 2010",
      media: {
        name: "Hekrtor",
        source: {
          url:
            "https://www.la-boite-immo.com/blog/wp-content/uploads/2017/11/visuel_article_blog_APPLI-HK.jpg"
        },
        type: "IMAGE"
      },
      cardTitle: "Lancement du logiciel Hektor",
      cardSubtitle: `LE LOGICIEL N°1 DES AGENCES
      IMMOBILIÈRES INDÉPENDANTES`,
      cardDetailedText: `Hektor a été conçu avec une parfaite connaissance du métier de l’immobilier et de vos besoins. Plus de 45 000 professionnels de l’immobilier s’y connectent chaque matin !
      Découvrez ici les fonctionnalités principales mais aussi les nombreuses exclusivités du logiciel immobilier.`
    },
    {
        title: "Janvier 2015",
        media: {
          name: "previsite",
          source: {
            url:
              "https://www.previsite.fr/videos/Promo_VirtualVisit_720.mp4#t=3"
          },
          type: "VIDEO"
        },
        cardTitle: "Acquisition de la société Previsite",
        url: "https://www.previsite.fr/",
        cardSubtitle: `Avec Virtual Visit, rendez les annonces immobilières plus attractives !`,
        cardDetailedText: `Créez des visites virtuelles immobilières en quelques clics.
        Générez plus de visibilité auprès de des clients vendeurs et acquéreurs grâce à une expérience immersive.
        Enrichissez les visites de plans, musique et voix off : les acquéreurs seront instantanément immergés dans la visite du bien immobilier et s'y projetteront facilement. Présentez les biens en ligne, de manière interactive`
      },
      {
        title: "PREVISITE",
        media: {
          name: "Mooveo",
          source: {
            url:
              "https://www.previsite.fr/videos/new_template_mooveo_720.mp4"
          },
          type: "VIDEO"
        },
        cardTitle: "La solution Mooveo",
        url: "https://www.previsite.fr/video-immobilieres.html",
        cardSubtitle: `Créez vos vidéos immobilières
        en 5 min comme un pro !`,
        cardDetailedText: `Créer une vidéo immobilière en 5 minutes ? C'est possible ! Avec l'application mobile Mooveo, réalisez vos propres vidéos de qualité professionnelle et en toute simplicité.
        Accessible à tous et sans connaissances techniques, Mooveo guide les agents immobiliers pas à pas et offre un rendu instantané.
        Pour plus d'impact : diffusez vos vidéos immobilières sur vos réseaux sociaux depuis votre mobile et donnez vie à vos annonces immobilières !`
      },
      {
        title: "PREVISITE",
        media: {
          name: "pixHDR",
          source: {
            url:
              "https://www.la-boite-immo.com/blog/wp-content/uploads/2019/07/Blog.jpg"
          },
          type: "IMAGE"
        },
        cardTitle: "pixHDR",
        url: "https://www.la-boite-immo.com/blog/wp-content/uploads/2019/07/Blog.jpg",
        cardSubtitle: `Les photos immobilières
        réussies en 1 clic`,
        cardDetailedText: `Pas besoin de faire appel à un photographe professionnel pour réussir vos photos immobilières. Avec PixHDR, le photographe, c'est vous !
        PixHDR est une application qui vous permet de réussir vos photos immobilières en 1 seul clic.    
        Téléchargez l'application et utilisez votre smartphone pour créer des photos immobilières qui sublimeront vos annonces.
        Appartement, maison, intérieur comme extérieur, valorisez vos annonces immobilières avec des photos de qualité professionnelles.`
      },
      {
        title: "PREVISITE",
        media: {
          name: "Social Connect",
          source: {
            url: "https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/242673863_4524623577559533_1537725848347849085_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-7&_nc_sid=8024bb&_nc_ohc=xH80CjanT-0AX8vIbPG&_nc_ht=scontent-cdt1-1.xx&oh=00_AfA0E5jJPdhctefwWAls5nUaiRm-WFocyN2oLrxxM4e-mw&oe=639340A3"
          },
          type: "IMAGE"
        },
        cardTitle: "pixHDR",
        url: "https://www.previsite.fr/reseaux-sociaux-immobilier.html",
        cardSubtitle: `Profitez de toute la puissance des réseaux sociaux et Google My Business`,
        cardDetailedText: `Avec l'offre Community management, vous bénéficiez d'une solution complète pour créer du contenu, diffuser vos annonces et animer vos réseaux sociaux,
        le tout de manière automatisée.
        Engagez votre communauté Sur Facebook, Instagram, Google My Business et Twitter pour susciter l'intérêt de vos prospects et fidéliser vos clients. Utilisez la puissance de Google pour optimiser votre référencement local !`
      },
      
      {
        title: "PREVISITE",
        cardTitle: "Site Mandat",
        url: "https://www.previsite.fr/site-internet.html",
        cardSubtitle: `Gérez et personnalisez facilement votre site depuis le backoffice`,
        cardDetailedText: `Avec notre back-office My.Previsite, nous mettons à votre disposition une véritable boîte à outils pour piloter, optimiser et personnaliser vos Sites Mandats !
        Depuis votre back-office vous sélectionnez le modèle qui correspond le mieux à votre image et à votre bien. Nous mettons à votre disposition des designs tendances pour mettre en avant les informations principales, les photos et vidéos de votre bien.`
      },
      {
        title: "Mai 2018",
        media: {
          name: "FNAIM",
          source: {
            url:
              "https://www.la-boite-immo.com/assets/img/modules/accueil/module_Partenaires/fnaim.png"
          },
          type: "IMAGE"
        },
        cardTitle: "Partenariat exclusif avec la FNAIM, Acquisition de FNAIM Connect & Elephant Bird",
      },
      {
        title: "Septembre 2019",
        media: {
            name: "Interkab",
            source: {
              url:
                "https://www.interkab.fr/video/interkab.mp4"
            },
            type: "VIDEO"
          },
        cardTitle: "Interkab",
        url: "https://www.interkab.fr/",
        cardSubtitle: "La Communauté des agents immobiliers indépendants",
        cardDetailedText: `Plus de 8 000 agences immobilières travaillent main dans la main en mutualisant leurs biens et en collaborant au quotidien pour offrir d'avantage de satisfaction et une meilleure qualité de service à leurs clients propriétaires et acquéreurs.`
      },
      {
        title: "Studio web",
        media: {
            name: "STUDIO WEB",
            source: {
              url:
                "https://www.la-boite-immo.com/assets/img/modules/accueil/module_FabrikSite/FabrikRight.png"
            },
            type: "IMAGE"
          },
        cardTitle: "Studio web",
        url: "https://www.la-boite-immo.com/creation-site-immobilier",
        cardSubtitle: "Création de site web immobilier",
        cardDetailedText: `VOTRE PROJET EST UNIQUE, TOUT COMME VOUS !
        Pour chaque création de site internet, un chef de projet, un webdesigner et un développeur construisent avec vous le site qui vous ressemble.
        De la définition de vos besoins à la livraison de votre nouveau site, choisissez d'être accompagné par des experts passionnés par leur métier !`
      },
      {
        title: "RÉFÉRENCEMENT",
        media: {
            name: "Référencement",
            source: {
              url:
                "https://www.la-boite-immo.com/assets/img/modules/accueil/module_Referencement/referencementLeft.png"
            },
            type: "IMAGE"
          },
        cardTitle: "Référencement",
        url: "https://www.la-boite-immo.com/referencement-immobilier",
        cardSubtitle: "Être visible c'est bien ! Le rester c'est encore mieux !",
        cardDetailedText: `Notre équipe de référenceurs vous accompagne dans la mise en place de votre stratégie de visibilité sur le web ! Naturel, payant et international, nous procédons à un audit approfondi afin d’élaborer la meilleure stratégie.`
      },
      {
        title: "FORMATION",
        media: {
            name: "Formation",
            source: {
              url:
                "https://www.lbi-akademie.com/wp-content/themes/WP_ThemeElearning/images/formateurs.png"
            },
            type: "IMAGE"
          },
        cardTitle: "Akadémie",
        url: "https://www.la-boite-immo.com/referencement-immobilier",
        cardSubtitle: "Se former avec Akadémie, ce sont de nombreux avantages !",
        cardDetailedText: `Créé en 2014, Akadémie est un organisme de formation certifié Qualiopi,, qui s’adresse exclusivement aux professionnels de l’immobilier.
        
        Forte de son expérience acquise auprès de professionnels, les formations d'Akadémie traitent de diverses thématiques, propres aux métiers de l’immobilier tels que la prise de mandats, la prospection, les outils digitaux, les réseaux sociaux, la vidéo immobilière…
        
        Elle propose également des formations sur l’aspect juridique, comme le code de déontologie, ou le Règlement Général sur la Protection des Données`
      },
      {
        title: "La Boite Immo",
        media: {
            name: "FolaBoiteImmo",
            source: {
              url:
                "https://www.la-boite-immo.com/blog/wp-content/uploads/2013/06/bureau-la-boite-immo.jpg"
            },
            type: "IMAGE"
          },
        cardTitle: "Juin 2020",
        cardSubtitle: "Nouvea siège social - 2000 m² - HYERES",
        cardDetailedText: `150 salariés, 12 535 000 € chiffre d'affaire en 2019, la PME fondée par Olivier Bugette, simplifie le métier des professionnels de l'immobilier. Actrice reconnue et engagée du monde de l'immobilier, l'agence de webmarketing s'est tournée exclusivement vers l'immobilier, en fournissant des solutions informatiques aux professionnels des agences immobilières, leur permettant, ainsi, de faciliter la vente et la gestion des biens et des clients.

        « Le cœur de métier de la société est de démocratiser les technologies web les plus pointues, afin de les rendre accessibles aux professionnels de l'immobilier qui doivent s'adapter face aux enjeux du digital et aux nouveaux comportements des consommateurs », explique le PDG.
        https://lagazetteduvar.fr/a-la-une/olivier-bugette.html`
        
      },
      {
        title: "Olivier Bugette",
        media: {
            name: "PDG",
            source: {
              url:
                "https://media-exp1.licdn.com/dms/image/C4E03AQHh23XB0-iemw/profile-displayphoto-shrink_800_800/0/1516233269691?e=2147483647&v=beta&t=riAn1bfxQRGATP8fLepF8YJqkX75p4qHdYxQfm_BbO0"
            },
            type: "IMAGE"
          },
        cardTitle: "Olivier Bugette",
        cardSubtitle: "PRÉSIDENT DIRECTEUR GÉNÉRAL",
        cardDetailedText: ``
      },
];
  
export default items;
