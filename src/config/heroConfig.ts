// Configuration des images Hero par page
export const heroImages = {
  solutions: '/images/hero-solutions-bg.jpg',
  about: '/images/hero-about-bg.jpg',
  contact: '/images/hero-contact-bg.jpg',
  interventions: '/images/hero-interventions-bg.jpg',
  actualites: '/images/hero-actualites-bg.jpg',
};

// Configuration complète des héros par page
export const heroPages = {
  solutions: {
    badge: { FR: 'NOS DOMAINES D\'EXPERTISE', EN: 'OUR AREAS OF EXPERTISE' },
    title: { FR: 'Nos solutions', EN: 'Our solutions' },
    bgImage: heroImages.solutions,
  },
  about: {
    badge: { FR: 'NOTRE HISTOIRE', EN: 'OUR STORY' },
    title: { FR: 'À propos de', EN: 'About' },
    titleAccent: { FR: 'Securizons', EN: 'Securizons' },
    description: { FR: 'Depuis plus de 20 ans, nous accompagnons les entreprises et institutions dans la mise en place de systèmes de sécurité fiables et performants.', EN: 'For over 20 years, we have supported companies and institutions in implementing reliable and high-performing security systems.' },
    bgImage: heroImages.about,
    cta1Text: { FR: 'Découvrir nos solutions', EN: 'Discover our solutions' },
    cta2Text: { FR: 'Nous contacter', EN: 'Contact us' },
  },
  contact: {
    badge: { FR: 'NOUS CONTACTER', EN: 'CONTACT US' },
    title: { FR: 'Parlons de votre', EN: 'Let\'s talk about' },
    titleAccent: { FR: 'projet de sécurité', EN: 'your security project' },
    description: { FR: 'Nos experts sont à votre écoute pour étudier votre projet et vous proposer la solution la mieux adaptée.', EN: 'Our experts are available to study your project and offer you the most suitable solution.' },
    bgImage: heroImages.contact,
    cta1Text: { FR: 'Demander un devis', EN: 'Request a quote' },
    cta2Text: { FR: 'Appelez-nous', EN: 'Call us' },
  },
  interventions: {
    badge: { FR: 'NOS INTERVENTIONS', EN: 'OUR INTERVENTIONS' },
    title: { FR: 'Interventions', EN: 'Interventions' },
    titleAccent: { FR: 'sur tout le territoire', EN: 'nationwide' },
    description: { FR: 'Une équipe mobile et réactive pour assurer la maintenance, l\'installation et le dépannage de vos équipements de sécurité.', EN: 'A mobile and responsive team to ensure maintenance, installation and repair of your security equipment.' },
    bgImage: heroImages.interventions,
    cta1Text: { FR: 'Demander une intervention', EN: 'Request an intervention' },
    cta2Text: { FR: 'Urgence 24/7', EN: 'Emergency 24/7' },
  },
  actualites: {
    badge: { FR: 'ACTUALITÉS', EN: 'NEWS' },
    title: { FR: 'Actualités', EN: 'News' },
    titleAccent: { FR: 'Securizons', EN: 'Securizons' },
    description: { FR: 'Restez informés des dernières actualités, innovations et événements du monde de la sécurité.', EN: 'Stay informed about the latest news, innovations and events in the security world.' },
    bgImage: heroImages.actualites,
    cta1Text: { FR: 'Voir toutes les actualités', EN: 'View all news' },
  },
};