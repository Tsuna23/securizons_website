import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import HeroSection from '../components/heroSection';
import { Camera, Fingerprint, Users, Bell, Flame, Fence, HardHat, ArrowRight, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const solutionImages: Record<string, string> = {
  'securite-electronique':     '/images/solutions/securite-electronique.jpg',
  'controle-acces':            '/images/solutions/controle-acces.jpg',
  'pointage-personnel':        '/images/solutions/pointage-personnel.jpg',
  'alarmes-intrusion':         '/images/solutions/alarmes-intrusion.jpg',
  'securite-incendie':         '/images/solutions/securite-incendie.jpg',
  'securisation-perimetrique': '/images/solutions/securisation-perimetrique.jpg',
  'equipements-epi':           '/images/solutions/equipements-epi.jpg',
};

type Solution = {
  id: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  items: string[];
};

const solutions: { FR: Solution[]; EN: Solution[] } = {
  FR: [
    {
      id: 'securite-electronique',
      icon: Camera,
      tag: 'Vidéosurveillance',
      title: 'Sécurité électronique',
      desc: 'Caméras IP, PTZ, thermiques et ANPR pour une surveillance continue de vos locaux 24h/24.',
      items: ['Vidéosurveillance IP', 'Supervision multi-sites', 'Vision nocturne'],
    },
    {
      id: 'controle-acces',
      icon: Fingerprint,
      tag: 'Accès & Identité',
      title: "Contrôle d'accès",
      desc: "Badges, biométrie et codes PIN pour sécuriser chaque point d'entrée de votre site.",
      items: ['Badge RFID', 'Biométrie', 'Gestion centralisée'],
    },
    {
      id: 'pointage-personnel',
      icon: Users,
      tag: 'RH & Présences',
      title: 'Pointage & Personnel',
      desc: 'Gestion des présences et des horaires pour optimiser la productivité de vos équipes.',
      items: ['Pointage biométrique', 'Gestion des plannings', 'Intégration RH'],
    },
    {
      id: 'alarmes-intrusion',
      icon: Bell,
      tag: 'Détection & Alerte',
      title: 'Alarmes & Intrusion',
      desc: "Détection ultra-sensible et alerte immédiate en cas d'intrusion.",
      items: ['Détecteurs mouvement', 'Alertes temps réel', 'Télésurveillance'],
    },
    {
      id: 'securite-incendie',
      icon: Flame,
      tag: 'Protection incendie',
      title: 'Sécurité incendie',
      desc: 'Détection, extinction et SSI conformes aux normes pour protéger vos biens.',
      items: ['Détecteurs fumée', 'Centrales SSI', 'Extinction auto'],
    },
    {
      id: 'securisation-perimetrique',
      icon: Fence,
      tag: 'Périmètre & Accès',
      title: 'Sécurisation périmétrique',
      desc: 'Barrières, portails et clôtures intelligentes pour sécuriser vos espaces extérieurs.',
      items: ['Barrières levantes', 'Portails motorisés', 'Détecteurs laser'],
    },
    {
      id: 'equipements-epi',
      icon: HardHat,
      tag: 'Protection individuelle',
      title: 'Équipements EPI',
      desc: "Fourniture et conseil en équipements de protection individuelle adaptés à vos risques.",
      items: ['Casques', 'EPI industriels', 'Détecteurs gaz'],
    },
  ],
  EN: [
    {
      id: 'securite-electronique',
      icon: Camera,
      tag: 'Video surveillance',
      title: 'Electronic security',
      desc: 'IP, PTZ, thermal and ANPR cameras for continuous 24/7 monitoring of your premises.',
      items: ['IP surveillance', 'Multi-site supervision', 'Night vision'],
    },
    {
      id: 'controle-acces',
      icon: Fingerprint,
      tag: 'Access & Identity',
      title: 'Access control',
      desc: 'Badges, biometrics and PIN codes to secure every entry point on your site.',
      items: ['RFID badge', 'Biometrics', 'Centralized management'],
    },
    {
      id: 'pointage-personnel',
      icon: Users,
      tag: 'HR & Attendance',
      title: 'Time & attendance',
      desc: 'Attendance and scheduling management to optimize your team productivity.',
      items: ['Biometric tracking', 'Schedule management', 'HR integration'],
    },
    {
      id: 'alarmes-intrusion',
      icon: Bell,
      tag: 'Detection & Alert',
      title: 'Alarms & intrusion',
      desc: 'Ultra-sensitive detection and immediate alerts in case of intrusion.',
      items: ['Motion detectors', 'Real-time alerts', 'Remote monitoring'],
    },
    {
      id: 'securite-incendie',
      icon: Flame,
      tag: 'Fire protection',
      title: 'Fire safety',
      desc: 'Detection, suppression and SSI systems compliant with standards.',
      items: ['Smoke detectors', 'Fire panels', 'Auto suppression'],
    },
    {
      id: 'securisation-perimetrique',
      icon: Fence,
      tag: 'Perimeter & Access',
      title: 'Perimeter security',
      desc: 'Smart barriers, gates and fencing to secure your outdoor spaces.',
      items: ['Rising barriers', 'Motorized gates', 'Laser detectors'],
    },
    {
      id: 'equipements-epi',
      icon: HardHat,
      tag: 'Personal protection',
      title: 'PPE equipment',
      desc: 'Supply and advisory on personal protective equipment.',
      items: ['Helmets', 'Industrial PPE', 'Gas detectors'],
    },
  ],
};

const pageText = {
  FR: {
    intro: {
      title: 'Des solutions complètes pour votre sécurité',
      subtitle: 'Depuis plus de 20 ans, nous concevons des systèmes de sécurité sur mesure adaptés à chaque environnement.',
      points: ['Expertise certifiée', 'Technologies de pointe', 'Support 24/7', 'Solutions sur mesure'],
    },
    devis: 'Demander un devis',
    learnMore: 'En savoir plus',
    cta: {
      title: 'Un projet ? Parlons-en.',
      subtitle: 'Nos experts conçoivent la solution adaptée à votre site, votre secteur et votre budget.',
      btn1: 'Demander un devis gratuit',
      btn2: 'Nous contacter',
    },
  },
  EN: {
    intro: {
      title: 'Complete solutions for your security',
      subtitle: 'For over 20 years, we have designed custom security systems adapted to every environment.',
      points: ['Certified expertise', 'Cutting-edge technology', '24/7 support', 'Tailored solutions'],
    },
    devis: 'Request a quote',
    learnMore: 'Learn more',
    cta: {
      title: 'A project in mind? Let\'s talk.',
      subtitle: 'Our experts design the solution adapted to your site, sector and budget.',
      btn1: 'Request a free quote',
      btn2: 'Contact us',
    },
  },
};

export default function Solutions() {
  const { lang } = useLanguage();
  const txt = pageText[lang as keyof typeof pageText] || pageText.FR;
  const sols = solutions[lang as keyof typeof solutions] || solutions.FR;

  // Scroll simplement en haut de la page au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const heroConfig = {
    badge: lang === 'FR' ? 'NOS DOMAINES D\'EXPERTISE' : 'OUR AREAS OF EXPERTISE',
    title: lang === 'FR' ? 'Nos solutions' : 'Our solutions',
    bgImage: '/images/hero-solutions-bg.jpg',
  };

  return (
    <main className="pt-16">
      
      {/* ══ HERO SECTION ══ */}
      <HeroSection
        badge={heroConfig.badge}
        title={heroConfig.title}
        bgImage={heroConfig.bgImage}
        centered={true}
      />

      {/* ══ SECTION INTRODUCTION ══ */}
      <section className="py-16 bg-backgroundColor border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">
            {txt.intro.title}
          </h2>
          <div className="w-16 h-1 bg-rougeSecurizons mx-auto mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {txt.intro.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {txt.intro.points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rougeSecurizons" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GRILLE DES SOLUTIONS - CARTES ALLÉGÉES ══ */}
      <section className="py-20 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sols.map((sol) => {
              const Icon = sol.icon;
              const imgSrc = solutionImages[sol.id];
              
              return (
                <Link
                  key={sol.id}
                  to={`/solutions/${sol.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-rougeSecurizons">
                    {/* Image simplifiée */}
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={sol.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon size={40} className="text-gray-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>

                    {/* Contenu allégé */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className="text-rougeSecurizons" />
                        <span className="text-xs font-bold text-rougeSecurizons uppercase tracking-wider">
                          {sol.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-textColor mb-2 group-hover:text-rougeSecurizons transition-colors">
                        {sol.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        {sol.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 text-rougeSecurizons text-sm font-semibold group-hover:gap-3 transition-all">
                        <span>{txt.learnMore}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ STATS SECTION ══ */}
      <section className="bg-rougeSecurizons py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-sm text-red-200 uppercase tracking-wider">
                {lang === 'FR' ? 'Années d\'expérience' : 'Years of experience'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-red-200 uppercase tracking-wider">
                {lang === 'FR' ? 'Clients satisfaits' : 'Satisfied clients'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm text-red-200 uppercase tracking-wider">
                {lang === 'FR' ? 'Projets réalisés' : 'Projects completed'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-red-200 uppercase tracking-wider">
                {lang === 'FR' ? 'Disponibilité' : 'Availability'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className="bg-textColor py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{txt.cta.title}</h2>
            <p className="text-gray-400 text-sm max-w-xl">{txt.cta.subtitle}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/contact#devis"
              className="px-6 py-3 bg-rougeSecurizons text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors rounded-full whitespace-nowrap"
            >
              {txt.cta.btn1}
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-gray-600 text-gray-300 text-sm font-bold uppercase tracking-wider hover:border-gray-400 hover:text-white transition-all rounded-full whitespace-nowrap"
            >
              {txt.cta.btn2}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}