import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';

const t = {
  FR: {
    hero: {
      badge: 'Nos réalisations',
      title: 'Références & Projets réalisés',
      subtitle:
        "Depuis plus de 15 ans, nous avons sécurisé les sites de grandes organisations publiques et privées à travers la sous-région.",
    },
    clients: {
      badge: 'Nos clients de référence',
      title: 'Ils nous font confiance',
      subtitle:
        "Des institutions stratégiques font confiance à notre expertise pour protéger leurs infrastructures critiques.",
      items: [
        {
          name: 'AIBD',
          full: 'Aéroport International Blaise Diagne',
          desc: "Déploiement d'un système intégré de vidéosurveillance, contrôle d'accès et détection périmétrique sur l'ensemble du site aéroportuaire.",
          tags: ["Vidéosurveillance", "Contrôle d'accès", "Périmétrique"],
        },
        {
          name: 'Port Autonome de Dakar',
          full: 'Principal port de commerce du Sénégal',
          desc: "Sécurisation des accès portuaires, supervision centralisée et gestion du personnel sur les zones sensibles.",
          tags: ["Contrôle d'accès", "Pointage", "Supervision"],
        },
        {
          name: 'BCEAO',
          full: "Banque Centrale des États de l'Afrique de l'Ouest",
          desc: "Installation de systèmes de sécurité haute sécurité incluant contrôle d'accès biométrique et alarmes intrusion pour les locaux sensibles.",
          tags: ["Biométrie", "Alarme intrusion", "Haute sécurité"],
        },
        {
          name: 'Aéroport de Ziguinchor',
          full: 'Aéroport régional du sud du Sénégal',
          desc: "Mise en place d'un système de vidéosurveillance et de contrôle d'accès adapté aux contraintes opérationnelles de l'aéroport.",
          tags: ["Vidéosurveillance", "Contrôle d'accès"],
        },
      ],
    },
    stats: {
      badge: 'En chiffres',
      title: 'Notre bilan en quelques chiffres',
      items: [
        { value: '15+', label: "Années d'expérience" },
        { value: '500+', label: 'Clients satisfaits' },
        { value: '1000+', label: 'Projets réalisés' },
        { value: '8', label: "Secteurs d'intervention" },
      ],
    },
    testimonials: {
      badge: 'Témoignages',
      title: 'Ce que disent nos clients',
      items: [
        {
          quote: "Securizons a su comprendre nos exigences de sécurité très spécifiques et y répondre avec professionnalisme et réactivité.",
          author: 'Directeur de la sécurité',
          company: 'Institution financière régionale',
        },
        {
          quote: "La qualité des équipements installés et le suivi après-vente sont exemplaires. Nous renouvelons notre confiance à chaque projet.",
          author: 'Responsable infrastructure',
          company: 'Groupe industriel',
        },
        {
          quote: "Un partenaire de confiance qui maîtrise les enjeux de sécurité dans notre contexte africain. Intervention rapide et efficace.",
          author: 'Directeur général adjoint',
          company: 'Complexe hôtelier',
        },
      ],
    },
    cta: {
      title: 'Votre projet, notre prochaine référence',
      subtitle: "Rejoignez les centaines d'organisations qui nous font confiance pour sécuriser leurs sites.",
      btn1: 'Demander un devis',
      btn2: 'Nos solutions',
    },
  },
  EN: {
    hero: {
      badge: 'Our achievements',
      title: 'References & Completed Projects',
      subtitle:
        'For over 15 years, we have secured the sites of major public and private organizations across the sub-region.',
    },
    clients: {
      badge: 'Our reference clients',
      title: 'They trust us',
      subtitle:
        'Strategic institutions trust our expertise to protect their critical infrastructure.',
      items: [
        {
          name: 'AIBD',
          full: 'Blaise Diagne International Airport',
          desc: 'Deployment of an integrated video surveillance, access control and perimeter detection system across the entire airport site.',
          tags: ['Video surveillance', 'Access control', 'Perimeter'],
        },
        {
          name: 'Port of Dakar',
          full: "Senegal's main commercial port",
          desc: 'Securing port access points, centralized supervision and personnel management in sensitive areas.',
          tags: ['Access control', 'Time tracking', 'Supervision'],
        },
        {
          name: 'BCEAO',
          full: 'Central Bank of West African States',
          desc: 'Installation of high-security systems including biometric access control and intrusion alarms for sensitive premises.',
          tags: ['Biometrics', 'Intrusion alarm', 'High security'],
        },
        {
          name: 'Ziguinchor Airport',
          full: 'Regional airport in southern Senegal',
          desc: 'Implementation of a video surveillance and access control system adapted to the operational constraints of the airport.',
          tags: ['Video surveillance', 'Access control'],
        },
      ],
    },
    stats: {
      badge: 'In numbers',
      title: 'Our track record in figures',
      items: [
        { value: '15+', label: 'Years of experience' },
        { value: '500+', label: 'Satisfied clients' },
        { value: '1000+', label: 'Projects completed' },
        { value: '8', label: 'Intervention sectors' },
      ],
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What our clients say',
      items: [
        {
          quote: 'Securizons understood our very specific security requirements and responded with professionalism and responsiveness.',
          author: 'Security Director',
          company: 'Regional financial institution',
        },
        {
          quote: 'The quality of the installed equipment and after-sales follow-up are exemplary. We renew our trust with every project.',
          author: 'Infrastructure Manager',
          company: 'Industrial group',
        },
        {
          quote: 'A trusted partner who understands the security challenges in our African context. Fast and effective intervention.',
          author: 'Deputy General Director',
          company: 'Hotel complex',
        },
      ],
    },
    cta: {
      title: 'Your project, our next reference',
      subtitle: 'Join the hundreds of organizations that trust us to secure their sites.',
      btn1: 'Request a quote',
      btn2: 'Our solutions',
    },
  },
};

export default function References() {
  const { lang } = useLanguage();
  const txt = t[lang as keyof typeof t] || t.FR;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="pt-16">

      {/* ══ HERO ══ */}
      <section className="bg-textColor py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
            {txt.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 leading-tight">
            {txt.hero.title}
          </h1>
          <div className="w-16 h-1 bg-rougeSecurizons mx-auto mb-6" />
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {txt.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="bg-rougeSecurizons py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {txt.stats.items.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
                <div className="text-sm text-red-200 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJETS CLIENTS ══ */}
      <section className="py-24 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.clients.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.clients.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5 mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{txt.clients.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {txt.clients.items.map((client) => (
              <div
                key={client.name}
                className="p-8 border border-secondarySecurizons hover:border-rougeSecurizons hover:shadow-xl transition-all duration-300 group"
              >
                {/* Placeholder logo */}
                <div className="w-full h-40 bg-secondarySecurizons mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <span className="text-2xl font-black text-gray-300 tracking-widest uppercase">
                    {client.name}
                  </span>
                </div>
                <h3 className="font-bold text-textColor text-lg mb-1">{client.name}</h3>
                <p className="text-rougeSecurizons text-xs font-semibold uppercase tracking-wide mb-3">{client.full}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{client.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondarySecurizons text-gray-600 px-3 py-1 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES ══ */}
      <section className="py-24 bg-secondarySecurizons">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.testimonials.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.testimonials.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {txt.testimonials.items.map((item, i) => (
              <div key={i} className="bg-backgroundColor p-8 border-l-4 border-rougeSecurizons">
                {/* Guillemets SVG */}
                <svg className="w-8 h-8 text-rougeSecurizons mb-4 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">{item.quote}</p>
                <div className="border-t border-secondarySecurizons pt-4">
                  <p className="font-bold text-textColor text-sm">{item.author}</p>
                  <p className="text-xs text-gray-400">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-textColor py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{txt.cta.title}</h2>
          <p className="text-gray-400 mb-10 text-lg">{txt.cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact#devis"
              className="px-8 py-4 bg-rougeSecurizons text-white font-bold uppercase tracking-wider hover:opacity-90 transition-all rounded-full"
            >
              {txt.cta.btn1}
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold uppercase tracking-wider hover:border-gray-400 hover:text-white transition-all rounded-full"
            >
              {txt.cta.btn2}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
