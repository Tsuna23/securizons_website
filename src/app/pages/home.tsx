import { Link } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import HeroSlider from '../components/HeroModel';
import { 
  Camera, 
  Fingerprint, 
  Users, 
  Bell, 
  Flame, 
  Fence,
  Building2,
  Factory,
  Pickaxe,
  Hotel,
  Heart,
  GraduationCap,
  ShoppingBag,
  Landmark,
  ArrowRight
} from 'lucide-react';

/* ── Traductions avec SLUGS ── */
const t = {
  FR: {
    hero: {
      cta1: 'Découvrir nos solutions',
      cta2: 'Demander un devis',
    },
    stats: [
      { value: '20+', label: "Années d'expérience" },
      { value: '500+', label: 'Clients satisfaits' },
      { value: '1000+', label: 'Projets réalisés' },
      { value: '24/7', label: 'Disponibilité' },
    ],
    solutions: {
      badge: 'Ce que nous faisons',
      title: 'Nos Solutions de Sécurité',
      learnMore: 'En savoir plus',
      cta: 'Voir toutes nos solutions',
      // IMPORTANT: Ajout du slug manuel qui correspond aux IDs dans Solutions.tsx
      items: [
        { 
          title: 'Vidéosurveillance', 
          desc: 'Systèmes de vidéosurveillance IP et analogiques pour une surveillance continue de vos locaux.', 
          icon: Camera,
          slug: 'securite-electronique'  // ← Slug correct
        },
        { 
          title: "Contrôle d'accès", 
          desc: 'Gestion des entrées et sorties par badges, biométrie ou codes PIN pour sécuriser vos zones sensibles.', 
          icon: Fingerprint,
          slug: 'controle-acces'  // ← Slug correct
        },
        { 
          title: 'Pointage & gestion du personnel', 
          desc: 'Solutions de gestion des présences et des horaires pour optimiser la productivité de vos équipes.', 
          icon: Users,
          slug: 'pointage-personnel'  // ← Slug correct
        },
        { 
          title: 'Alarmes & Intrusion', 
          desc: "Systèmes de détection et d'alarme pour vous alerter immédiatement en cas d'intrusion.", 
          icon: Bell,
          slug: 'alarmes-intrusion'
        },
        { 
          title: 'Sécurité incendie', 
          desc: 'Détecteurs de fumée, sprinklers et centrales incendie pour protéger vos biens et vos collaborateurs.', 
          icon: Flame,
          slug: 'securite-incendie'
        },
        { 
          title: 'Sécurisation périmétrique', 
          desc: 'Clôtures électroniques, barrières et détecteurs de périmètre pour sécuriser vos espaces extérieurs.', 
          icon: Fence,
          slug: 'securisation-perimetrique'
        },
      ],
    },
    sectors: {
      badge: 'Où nous intervenons',
      title: "Nos Secteurs d'Intervention",
      items: [
        { name: 'Banques & Finances', icon: Landmark },
        { name: 'Industries & Usines', icon: Factory },
        { name: 'Mines & Ressources', icon: Pickaxe },
        { name: 'Hôtels & Tourisme', icon: Hotel },
        { name: 'Santé & Hôpitaux', icon: Heart },
        { name: 'Éducation', icon: GraduationCap },
        { name: 'Commerce & Retail', icon: ShoppingBag },
        { name: 'Administrations', icon: Building2 },
      ],
    },
    whyUs: {
      badge: 'Notre différence',
      title: 'Pourquoi choisir',
      titleHighlight: 'Securizons ?',
      description: "Depuis plus de 20 ans, nous accompagnons les entreprises et institutions dans la mise en place de systèmes de sécurité fiables et performants. Notre approche terrain et notre engagement envers la qualité font de nous le partenaire de confiance dans la sous-région.",
      cta: 'En savoir plus sur nous',
      items: [
        { title: 'Expertise certifiée', desc: 'Notre équipe est composée de techniciens certifiés avec une expertise reconnue dans le domaine de la sécurité.' },
        { title: 'Réactivité 24/7', desc: "Une équipe disponible en permanence pour intervenir rapidement en cas d'urgence ou de panne." },
        { title: 'Solutions sur mesure', desc: 'Chaque projet est analysé individuellement pour vous proposer la solution la mieux adaptée à vos besoins.' },
        { title: 'Équipements de qualité', desc: 'Nous travaillons exclusivement avec des marques reconnues pour vous garantir fiabilité et durabilité.' },
      ],
    },
    cta: {
      title: "Besoin d'une solution de sécurité adaptée ?",
      subtitle: 'Contactez nos experts pour une étude gratuite et personnalisée de vos besoins.',
      btn1: 'Contactez-nous',
      btn2: 'Demander un devis',
    },
  },

  EN: {
    hero: {
      cta1: 'Discover our solutions',
      cta2: 'Request a quote',
    },
    stats: [
      { value: '20+', label: 'Years of experience' },
      { value: '500+', label: 'Satisfied clients' },
      { value: '1000+', label: 'Projects completed' },
      { value: '24/7', label: 'Availability' },
    ],
    solutions: {
      badge: 'What we do',
      title: 'Our Security Solutions',
      learnMore: 'Learn more',
      cta: 'See all our solutions',
      items: [
        { 
          title: 'Video Surveillance', 
          desc: 'IP and analog video surveillance systems for continuous monitoring of your premises.', 
          icon: Camera,
          slug: 'securite-electronique'
        },
        { 
          title: 'Access Control', 
          desc: 'Entry and exit management via badges, biometrics or PIN codes to secure your sensitive areas.', 
          icon: Fingerprint,
          slug: 'controle-acces'
        },
        { 
          title: 'Time & Attendance', 
          desc: 'Attendance and scheduling solutions to optimize the productivity of your teams.', 
          icon: Users,
          slug: 'pointage-personnel'
        },
        { 
          title: 'Alarms & Intrusion', 
          desc: 'Detection and alarm systems to immediately alert you in case of intrusion.', 
          icon: Bell,
          slug: 'alarmes-intrusion'
        },
        { 
          title: 'Fire Safety', 
          desc: 'Smoke detectors, sprinklers and fire panels to protect your assets and employees.', 
          icon: Flame,
          slug: 'securite-incendie'
        },
        { 
          title: 'Perimeter Security', 
          desc: 'Electronic fences, barriers and perimeter detectors to secure your outdoor spaces.', 
          icon: Fence,
          slug: 'securisation-perimetrique'
        },
      ],
    },
    sectors: {
      badge: 'Where we operate',
      title: 'Our Intervention Sectors',
      items: [
        { name: 'Banks & Finance', icon: Landmark },
        { name: 'Industries & Factories', icon: Factory },
        { name: 'Mining & Resources', icon: Pickaxe },
        { name: 'Hotels & Tourism', icon: Hotel },
        { name: 'Health & Hospitals', icon: Heart },
        { name: 'Education', icon: GraduationCap },
        { name: 'Commerce & Retail', icon: ShoppingBag },
        { name: 'Administrations', icon: Building2 },
      ],
    },
    whyUs: {
      badge: 'Our difference',
      title: 'Why choose',
      titleHighlight: 'Securizons?',
      description: 'For over 20 years, we have supported companies and institutions in implementing reliable and high-performing security systems. Our field approach and commitment to quality make us the trusted partner in the sub-region.',
      cta: 'Learn more about us',
      items: [
        { title: 'Certified expertise', desc: 'Our team consists of certified technicians with recognized expertise in the security field.' },
        { title: '24/7 responsiveness', desc: 'A team permanently available to intervene quickly in case of emergency or breakdown.' },
        { title: 'Tailored solutions', desc: 'Each project is analyzed individually to offer you the most suitable solution for your needs.' },
        { title: 'Quality equipment', desc: 'We work exclusively with recognized brands to guarantee reliability and durability.' },
      ],
    },
    cta: {
      title: 'Need a tailored security solution?',
      subtitle: 'Contact our experts for a free and personalized assessment of your needs.',
      btn1: 'Contact us',
      btn2: 'Request a quote',
    },
  },
};

/* ── Page ── */
export default function Home() {
  const { lang } = useLanguage();
  const txt = t[lang as keyof typeof t] || t.FR;

  return (
    <main>
      {/* ══ HERO SLIDER ══ */}
      <div className="bg-linear-to-b from-gray-50 to-white">
        <HeroSlider />
      </div>

      {/* ══ STATS ══ */}
      <section className="bg-rougeSecurizons py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {txt.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-backgroundColor mb-2">{s.value}</div>
                <div className="text-sm text-red-200 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOLUTIONS - SEULEMENT 3 PREMIÈRES ══ */}
      <section className="py-24 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">{txt.solutions.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.solutions.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Afficher seulement les 3 premières solutions */}
            {txt.solutions.items.slice(0, 3).map((sol) => {
              const Icon = sol.icon;
              
              return (
                <Link 
                  key={sol.title}
                  to={`/solutions/${sol.slug}`}  // ← Utilisation directe du slug manuel
                  className="group block"
                >
                  <div className="h-full p-8 border-2 border-gray-200 rounded-2xl bg-white hover:border-rougeSecurizons hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
                    {/* Icône */}
                    <div className="text-rougeSecurizons mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                      <Icon size={40} strokeWidth={1.5} />
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-xl font-bold text-textColor mb-3 group-hover:text-rougeSecurizons transition-colors">
                      {sol.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                      {sol.desc}
                    </p>
                    
                    {/* Lien "En savoir plus" */}
                    <div className="flex items-center gap-2 text-rougeSecurizons text-sm font-semibold group-hover:gap-3 transition-all">
                      <span>{txt.solutions.learnMore}</span>
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Bouton Voir toutes les solutions */}
          <div className="text-center mt-12">
            <Link 
              to="/solutions" 
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-rougeSecurizons text-rougeSecurizons font-bold uppercase tracking-wider rounded-full hover:bg-rougeSecurizons hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
            >
              {txt.solutions.cta}
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SECTEURS ══ */}
      <section className="py-24 bg-secondarySecurizons">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">{txt.sectors.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.sectors.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {txt.sectors.items.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.name} className="group bg-backgroundColor p-6 text-center hover:bg-rougeSecurizons transition-all duration-300 cursor-pointer">
                  <div className="text-rougeSecurizons group-hover:text-backgroundColor transition-colors mb-4 flex justify-center">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-textColor group-hover:text-backgroundColor transition-colors uppercase tracking-wide">
                    {sector.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* ══ POURQUOI NOUS - VERSION MINIMALISTE ══ */}
<section className="py-24 bg-backgroundColor">
  <div className="max-w-7xl mx-auto px-6">
    {/* Badge et titre */}
    <div className="text-center mb-16">
      <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
        {txt.whyUs.badge}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-textColor mt-4">
        {txt.whyUs.title}{' '}
        <span className="text-rougeSecurizons">{txt.whyUs.titleHighlight}</span>
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Colonne gauche - Texte */}
      <div className="space-y-8">
        <p className="text-gray-500 leading-relaxed text-base">
          {txt.whyUs.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/about" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-rougeSecurizons text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
          >
            {txt.whyUs.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Colonne droite - Cartes horizontales */}
      <div className="space-y-4">
        {txt.whyUs.items.map((item, i) => (
          <div 
            key={item.title}
            className="flex items-start gap-5 p-5 rounded-xl border border-gray-100 bg-white hover:border-rougeSecurizons/30 hover:shadow-md transition-all duration-300"
          >
            <div className="shrink-0 w-12 h-12 bg-rougeSecurizons/10 rounded-lg flex items-center justify-center">
              <span className="text-rougeSecurizons font-bold text-xl">{i + 1}</span>
            </div>
            <div>
              <h3 className="font-bold text-textColor mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ══ CTA BANNER ══ */}

<section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">
        {txt.cta.title}
      </h2>
      <div className="w-16 h-1 bg-rougeSecurizons mx-auto mb-6 rounded-full" />
      <p className="text-gray-500 mb-10 text-lg">
        {txt.cta.subtitle}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link 
          to="/contact" 
          className="px-8 py-4 bg-rougeSecurizons text-white font-bold uppercase tracking-wider rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-900/30"
        >
          {txt.cta.btn1}
        </Link>
        <Link 
          to="/contact" 
          className="px-8 py-4 border-2 border-rougeSecurizons/30 text-rougeSecurizons font-bold uppercase tracking-wider rounded-full hover:bg-rougeSecurizons hover:text-white transition-all duration-300"
        >
          {txt.cta.btn2}
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}