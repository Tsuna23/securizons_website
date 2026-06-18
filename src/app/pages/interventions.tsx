import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import { Factory, Landmark, Hotel, GraduationCap, Heart, Building2, Package, Leaf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Sector = { name: string; desc: string; icon: LucideIcon };
type Step   = { num: string; title: string; desc: string };

const t = {
  FR: {
    hero: {
      badge: 'Où nous intervenons',
      title: "Secteurs & Méthode d'intervention",
      subtitle:
        "De l'industrie aux institutions publiques, nous adaptons chaque solution au contexte opérationnel de votre secteur.",
    },
    sectors: {
      badge: 'Où nous intervenons',
      title: "Nos Secteurs d'Intervention",
      items: [
        { name: 'Industries & Usines',   desc: 'Usines de production, zones industrielles et entrepôts.',          icon: Factory       },
        { name: 'Agroalimentaire',        desc: 'Sites agroalimentaires et unités de transformation.',               icon: Leaf          },
        { name: 'Banques & Finances',     desc: 'Institutions financières, agences bancaires et sièges.',            icon: Landmark      },
        { name: 'Hôtels & Tourisme',      desc: 'Complexes hôteliers, resorts et sites touristiques.',               icon: Hotel         },
        { name: 'Éducation',              desc: 'Écoles, universités et centres de formation.',                      icon: GraduationCap },
        { name: 'Santé & Hôpitaux',       desc: 'Hôpitaux, cliniques et centres de santé.',                         icon: Heart         },
        { name: 'Logistique',             desc: 'Entrepôts, plateformes logistiques et zones franches.',             icon: Package       },
        { name: 'Administrations',        desc: 'Administrations publiques et organismes institutionnels.',          icon: Building2     },
      ] as Sector[],
    },
    clients: {
      badge: 'Nos clients',
      title: 'Ils nous font confiance',
      subtitle:
        "Des organisations de premier plan font appel à Securizons pour sécuriser leurs sites stratégiques.",
      items: [
        { name: 'AIBD',                     desc: 'Aéroport International Blaise Diagne' },
        { name: 'Port Autonome de Dakar',   desc: 'Principal port de commerce du Sénégal' },
        { name: 'BCEAO',                    desc: "Banque Centrale des États de l'Afrique de l'Ouest" },
        { name: 'Aéroport de Ziguinchor',   desc: 'Aéroport régional du sud du Sénégal' },
      ],
    },
    method: {
      badge: 'Notre méthode',
      title: "Méthodologie d'intervention",
      subtitle:
        "Une approche structurée en 8 étapes pour garantir la qualité et l'efficacité de chaque déploiement.",
      steps: [
        { num: '01', title: 'Audit et visite technique',       desc: "Analyse approfondie de votre site pour identifier les vulnérabilités et les besoins spécifiques." },
        { num: '02', title: 'Analyse des risques par zone',    desc: "Cartographie des risques par zone pour une couverture optimale et priorisée." },
        { num: '03', title: 'Proposition technique détaillée', desc: "Remise d'une offre technique précise avec plans, spécifications et délais d'intervention." },
        { num: '04', title: 'Dimensionnement des équipements', desc: "Sélection et dimensionnement des équipements adaptés à votre environnement et budget." },
        { num: '05', title: 'Installation et configuration',   desc: "Déploiement par nos techniciens certifiés dans le respect des normes en vigueur." },
        { num: '06', title: 'Tests et mise en service',        desc: "Validation complète du système avant la mise en exploitation officielle." },
        { num: '07', title: 'Formation des utilisateurs',      desc: "Sessions de formation pour vos équipes afin de maîtriser l'outil au quotidien." },
        { num: '08', title: 'Maintenance et support',          desc: "Contrat de maintenance préventive et corrective avec assistance technique permanente." },
      ] as Step[],
    },
    support: {
      badge: 'Après installation',
      title: 'Support & Maintenance',
      items: [
        { title: 'Maintenance préventive', desc: 'Visites régulières programmées pour assurer le bon fonctionnement de vos équipements.' },
        { title: 'Maintenance corrective', desc: "Intervention rapide en cas de panne pour minimiser les temps d'arrêt." },
        { title: 'Support technique 24/7', desc: 'Une équipe dédiée disponible en permanence pour répondre à vos besoins urgents.' },
        { title: 'Mise à niveau',          desc: 'Mise à jour des firmwares et évolution des systèmes pour rester à la pointe.' },
      ],
    },
  },
  EN: {
    hero: {
      badge: 'Where we operate',
      title: 'Sectors & Intervention Method',
      subtitle:
        'From industry to public institutions, we tailor each solution to the operational context of your sector.',
    },
    sectors: {
      badge: 'Where we operate',
      title: 'Our Intervention Sectors',
      items: [
        { name: 'Industries & Factories', desc: 'Production plants, industrial zones and warehouses.',          icon: Factory       },
        { name: 'Agri-food',              desc: 'Food processing sites and transformation units.',              icon: Leaf          },
        { name: 'Banks & Finance',        desc: 'Financial institutions, bank branches and headquarters.',      icon: Landmark      },
        { name: 'Hotels & Tourism',       desc: 'Hotel complexes, resorts and tourist sites.',                  icon: Hotel         },
        { name: 'Education',              desc: 'Schools, universities and training centers.',                   icon: GraduationCap },
        { name: 'Health & Hospitals',     desc: 'Hospitals, clinics and health centers.',                       icon: Heart         },
        { name: 'Logistics',              desc: 'Warehouses, logistics platforms and free zones.',              icon: Package       },
        { name: 'Administrations',        desc: 'Public administrations and institutional bodies.',             icon: Building2     },
      ] as Sector[],
    },
    clients: {
      badge: 'Our clients',
      title: 'They trust us',
      subtitle:
        'Leading organizations rely on Securizons to secure their strategic sites.',
      items: [
        { name: 'AIBD',               desc: 'Blaise Diagne International Airport' },
        { name: 'Port of Dakar',      desc: "Senegal's main commercial port" },
        { name: 'BCEAO',              desc: 'Central Bank of West African States' },
        { name: 'Ziguinchor Airport', desc: 'Regional airport in southern Senegal' },
      ],
    },
    method: {
      badge: 'Our method',
      title: 'Intervention Methodology',
      subtitle:
        'A structured 8-step approach to guarantee the quality and efficiency of every deployment.',
      steps: [
        { num: '01', title: 'Audit and site visit',         desc: 'Thorough analysis of your site to identify vulnerabilities and specific needs.' },
        { num: '02', title: 'Risk analysis by zone',        desc: 'Risk mapping by zone for optimal and prioritized coverage.' },
        { num: '03', title: 'Detailed technical proposal',  desc: 'Delivery of a precise technical offer with plans, specifications and timelines.' },
        { num: '04', title: 'Equipment sizing',             desc: 'Selection and sizing of equipment suited to your environment and budget.' },
        { num: '05', title: 'Installation and configuration', desc: 'Deployment by our certified technicians in compliance with current standards.' },
        { num: '06', title: 'Testing and commissioning',    desc: 'Complete system validation before official go-live.' },
        { num: '07', title: 'User training',                desc: 'Training sessions for your teams to master the system in daily use.' },
        { num: '08', title: 'Maintenance and support',      desc: 'Preventive and corrective maintenance contract with permanent technical assistance.' },
      ] as Step[],
    },
    support: {
      badge: 'After installation',
      title: 'Support & Maintenance',
      items: [
        { title: 'Preventive maintenance', desc: 'Scheduled regular visits to ensure your equipment is always working properly.' },
        { title: 'Corrective maintenance', desc: 'Rapid intervention in case of breakdown to minimize downtime.' },
        { title: '24/7 technical support', desc: 'A dedicated team permanently available to respond to your urgent needs.' },
        { title: 'System upgrades',        desc: 'Firmware updates and system upgrades to stay at the cutting edge.' },
      ],
    },
  },
};

export default function Interventions() {
  const { lang } = useLanguage();
  const txt = t[lang as keyof typeof t] || t.FR;
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

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

      {/* ══ SECTEURS ══ */}
      <section id="secteurs" className="py-24 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.sectors.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.sectors.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {txt.sectors.items.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.name}
                  className="group p-8 bg-secondarySecurizons hover:bg-rougeSecurizons transition-all duration-300"
                >
                  <div className="text-rougeSecurizons group-hover:text-white transition-colors mb-4">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-textColor group-hover:text-white transition-colors mb-2">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ NOS CLIENTS ══ */}
      <section id="clients" className="py-24 bg-secondarySecurizons">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.clients.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.clients.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5 mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{txt.clients.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {txt.clients.items.map((c) => (
              <div
                key={c.name}
                className="bg-backgroundColor p-8 text-center border border-gray-100 hover:border-rougeSecurizons hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-secondarySecurizons rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-rougeSecurizons transition-colors">
                  <svg className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-textColor text-sm uppercase tracking-wide mb-1">{c.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MÉTHODOLOGIE ══ */}
      <section id="methode" className="py-24 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.method.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.method.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5 mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{txt.method.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {txt.method.steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 p-6 border border-secondarySecurizons hover:border-rougeSecurizons hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-rougeSecurizons text-white rounded-full flex items-center justify-center font-black text-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-textColor mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SUPPORT & MAINTENANCE ══ */}
      <section className="py-24 bg-secondarySecurizons">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.support.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.support.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {txt.support.items.map((item, i) => (
              <div key={item.title} className="bg-backgroundColor p-8 border-t-4 border-rougeSecurizons hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-rougeSecurizons text-white rounded-full flex items-center justify-center font-bold text-xs mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-textColor mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
