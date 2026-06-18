import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import { FileText, Download, Calendar } from 'lucide-react';

const t = {
  FR: {
    hero: {
      badge: 'Marchés & Partenariats',
      title: "Appels d'offres & Fournisseurs",
      subtitle:
        "Consultez nos appels d'offres en cours et accédez à l'espace fournisseurs pour soumettre vos candidatures.",
    },
    public: {
      badge: "Appels d'offres",
      title: "Appels d'offres en cours",
      subtitle:
        "Retrouvez ici les appels d'offres et consultations en cours publiés par SECURIZONS SUARL.",
      empty: {
        title: "Aucun appel d'offres actif",
        desc: "Il n'y a pas d'appel d'offres ouvert pour le moment. Revenez régulièrement ou inscrivez-vous pour être notifié.",
        btn: 'Être notifié par e-mail',
      },
      sampleItems: [
        {
          ref: 'AO-2026-001',
          title: 'Fourniture et installation de caméras IP haute résolution',
          type: 'Appel d\'offres ouvert',
          deadline: '15 Juin 2026',
          status: 'Ouvert',
        },
        {
          ref: 'AO-2026-002',
          title: 'Maintenance préventive des systèmes de contrôle d\'accès',
          type: 'Consultation restreinte',
          deadline: '30 Juin 2026',
          status: 'Ouvert',
        },
      ],
    },
    supplier: {
      badge: 'Espace fournisseurs',
      title: 'Devenez fournisseur Securizons',
      subtitle:
        "Vous êtes fabricant ou distributeur de solutions de sécurité ? Rejoignez notre réseau de fournisseurs agréés.",
      items: [
        {
          title: 'Qui peut postuler ?',
          desc: "Fabricants, distributeurs et importateurs de solutions de sécurité électronique, équipements EPI, systèmes d'alarme et de contrôle d'accès.",
        },
        {
          title: 'Dossier requis',
          desc: "Registre de commerce, catalogue produits, certifications et références clients. Toute candidature incomplète ne sera pas examinée.",
        },
        {
          title: 'Processus de sélection',
          desc: "Étude du dossier, évaluation technique des produits, visite si nécessaire, puis signature d'un accord de partenariat.",
        },
        {
          title: 'Avantages partenaires',
          desc: "Accès aux appels d'offres en avant-première, référencement sur nos supports commerciaux et formation de nos équipes techniques.",
        },
      ],
      btn: 'Soumettre ma candidature',
      docs: {
        title: 'Documents utiles',
        items: [
          { name: 'Dossier de candidature fournisseur', size: 'PDF – 120 Ko' },
          { name: 'Cahier des charges type', size: 'PDF – 85 Ko' },
          { name: 'Conditions générales d\'achat', size: 'PDF – 210 Ko' },
        ],
      },
    },
    alert: {
      title: "Alerte appels d'offres",
      desc: "Recevez une notification par e-mail dès qu'un nouvel appel d'offres est publié.",
      placeholder: 'Votre adresse e-mail',
      btn: "S'inscrire",
    },
  },
  EN: {
    hero: {
      badge: 'Markets & Partnerships',
      title: 'Tenders & Suppliers',
      subtitle:
        'Browse our active tenders and access the supplier space to submit your applications.',
    },
    public: {
      badge: 'Tenders',
      title: 'Active tenders',
      subtitle: 'Find here all open calls for tenders and consultations published by SECURIZONS SUARL.',
      empty: {
        title: 'No active tenders',
        desc: 'There are no open tenders at the moment. Check back regularly or register to be notified.',
        btn: 'Get notified by email',
      },
      sampleItems: [
        {
          ref: 'AO-2026-001',
          title: 'Supply and installation of high-resolution IP cameras',
          type: 'Open tender',
          deadline: 'June 15, 2026',
          status: 'Open',
        },
        {
          ref: 'AO-2026-002',
          title: 'Preventive maintenance of access control systems',
          type: 'Restricted consultation',
          deadline: 'June 30, 2026',
          status: 'Open',
        },
      ],
    },
    supplier: {
      badge: 'Supplier space',
      title: 'Become a Securizons supplier',
      subtitle:
        'Are you a manufacturer or distributor of security solutions? Join our network of approved suppliers.',
      items: [
        {
          title: 'Who can apply?',
          desc: 'Manufacturers, distributors and importers of electronic security solutions, PPE equipment, alarm and access control systems.',
        },
        {
          title: 'Required documents',
          desc: 'Trade register, product catalog, certifications and client references. Incomplete applications will not be reviewed.',
        },
        {
          title: 'Selection process',
          desc: 'Application review, technical product evaluation, site visit if needed, then signing of a partnership agreement.',
        },
        {
          title: 'Partner benefits',
          desc: 'Early access to tenders, listing on our commercial materials and training of our technical teams.',
        },
      ],
      btn: 'Submit my application',
      docs: {
        title: 'Useful documents',
        items: [
          { name: 'Supplier application file', size: 'PDF – 120 KB' },
          { name: 'Standard specification sheet', size: 'PDF – 85 KB' },
          { name: 'General purchasing conditions', size: 'PDF – 210 KB' },
        ],
      },
    },
    alert: {
      title: 'Tender alerts',
      desc: 'Receive an email notification as soon as a new tender is published.',
      placeholder: 'Your email address',
      btn: 'Subscribe',
    },
  },
};

export default function AppelsOffres() {
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

      {/* ══ APPELS D'OFFRES ACTIFS ══ */}
      <section className="py-24 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.public.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.public.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5 mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{txt.public.subtitle}</p>
          </div>

          <div className="space-y-4">
            {txt.public.sampleItems.map((item) => (
              <div
                key={item.ref}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-secondarySecurizons hover:border-rougeSecurizons hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rougeSecurizons flex items-center justify-center shrink-0">
                    <FileText size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-mono">{item.ref}</span>
                    <h3 className="font-bold text-textColor mt-0.5 mb-1">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs text-gray-500">{item.type}</span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={12} />
                        {item.deadline}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide rounded-full">
                    {item.status}
                  </span>
                  <button className="flex items-center gap-1.5 text-rougeSecurizons text-xs font-bold uppercase tracking-wide hover:gap-3 transition-all duration-300">
                    <Download size={14} />
                    DAO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ALERTE E-MAIL ══ */}
      <section className="bg-rougeSecurizons py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">{txt.alert.title}</h3>
          <p className="text-red-200 text-sm mb-8">{txt.alert.desc}</p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder={txt.alert.placeholder}
              className="flex-1 px-4 py-3 text-sm text-textColor placeholder-gray-400 focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-textColor text-white text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0"
            >
              {txt.alert.btn}
            </button>
          </form>
        </div>
      </section>

      {/* ══ ESPACE FOURNISSEURS ══ */}
      <section className="py-24 bg-secondarySecurizons">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest">
              {txt.supplier.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-3">{txt.supplier.title}</h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-5 mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{txt.supplier.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Infos */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {txt.supplier.items.map((item, i) => (
                <div key={item.title} className="bg-backgroundColor p-8 border-l-4 border-rougeSecurizons">
                  <div className="w-8 h-8 bg-rougeSecurizons text-white rounded-full flex items-center justify-center font-bold text-xs mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-textColor mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Documents + CTA */}
            <div className="space-y-6">
              <div className="bg-backgroundColor p-8 border border-gray-100">
                <h3 className="font-bold text-textColor mb-5 text-sm uppercase tracking-wide">
                  {txt.supplier.docs.title}
                </h3>
                <ul className="space-y-3">
                  {txt.supplier.docs.items.map((doc) => (
                    <li key={doc.name}>
                      <button className="w-full flex items-center gap-3 text-left group">
                        <div className="w-8 h-8 bg-secondarySecurizons flex items-center justify-center shrink-0 group-hover:bg-rougeSecurizons transition-colors">
                          <Download size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-textColor group-hover:text-rougeSecurizons transition-colors leading-snug">
                            {doc.name}
                          </p>
                          <p className="text-xs text-gray-400">{doc.size}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center px-6 py-4 bg-rougeSecurizons text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity text-sm"
              >
                {txt.supplier.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
