import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/languageContext';

const t = {
  FR: {
    description:
      "Intégrateur de solutions de sécurité électronique et de technologies au service des entreprises et institutions en Afrique de l'Ouest.",
    nav: {
      title: 'Navigation',
      items: [
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/about' },
        { label: 'Nos solutions', href: '/solutions' },
        { label: "Secteurs d'intervention", href: '/interventions' },
        { label: 'Références', href: '/references' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    solutions: {
      title: 'Nos solutions',
      items: [
        { label: 'Sécurité électronique', href: '/solutions#securite-electronique' },
        { label: "Contrôle d'accès", href: '/solutions#controle-acces' },
        { label: 'Alarmes & Intrusion', href: '/solutions#alarmes-intrusion' },
        { label: 'Sécurité incendie', href: '/solutions#securite-incendie' },
        { label: 'Équipements EPI', href: '/solutions#equipements-epi' },
      ],
    },
    contact: {
      title: 'Contact',
      address: 'Cité CPI, lot n°20 – Dakar, Sénégal',
      phone1: '+221 33 864 30 46',
      phone2: '+221 77 141 75 54',
      email: 'soda.mboup@securizons.com',
    },
    copyright: `© ${new Date().getFullYear()} SECURIZONS SUARL. Tous droits réservés.`,
    devis: 'Demander un devis',
  },
  EN: {
    description:
      'Electronic security solutions integrator and technology provider serving businesses and institutions across West Africa.',
    nav: {
      title: 'Navigation',
      items: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Our solutions', href: '/solutions' },
        { label: 'Sectors', href: '/interventions' },
        { label: 'References', href: '/references' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    solutions: {
      title: 'Our solutions',
      items: [
        { label: 'Electronic security', href: '/solutions#securite-electronique' },
        { label: 'Access control', href: '/solutions#controle-acces' },
        { label: 'Alarms & Intrusion', href: '/solutions#alarmes-intrusion' },
        { label: 'Fire safety', href: '/solutions#securite-incendie' },
        { label: 'PPE equipment', href: '/solutions#equipements-epi' },
      ],
    },
    contact: {
      title: 'Contact',
      address: 'Cité CPI, lot n°20 – Dakar, Senegal',
      phone1: '+221 33 864 30 46',
      phone2: '+221 77 141 75 54',
      email: 'soda.mboup@securizons.com',
    },
    copyright: `© ${new Date().getFullYear()} SECURIZONS SUARL. All rights reserved.`,
    devis: 'Request a quote',
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  const txt = t[lang as keyof typeof t] || t.FR;

  return (
    <footer className="bg-textColor text-gray-400">
      {/* Bande rouge supérieure */}
      <div className="h-1 bg-rougeSecurizons" />

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Colonne 1 : Logo + description + CTA */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-5">
            <img
              src="/images/securizons.png"
              alt="Securizons"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-6">{txt.description}</p>
          <Link
            to="/contact#devis"
            className="inline-block px-5 py-2.5 bg-rougeSecurizons text-white text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            {txt.devis}
          </Link>
          {/* Réseaux sociaux */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:border-rougeSecurizons hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:border-rougeSecurizons hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-3 border-b border-gray-700">
            {txt.nav.title}
          </h4>
          <ul className="space-y-3">
            {txt.nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm hover:text-rougeSecurizons transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-rougeSecurizons rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Solutions */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-3 border-b border-gray-700">
            {txt.solutions.title}
          </h4>
          <ul className="space-y-3">
            {txt.solutions.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm hover:text-rougeSecurizons transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-rougeSecurizons rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4 : Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-3 border-b border-gray-700">
            {txt.contact.title}
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-rougeSecurizons mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">{txt.contact.address}</span>
            </li>
            <li className="flex gap-3 items-start">
              <Phone size={15} className="text-rougeSecurizons mt-0.5 shrink-0" />
              <div className="text-sm space-y-1">
                <a href={`tel:${txt.contact.phone1.replace(/\s/g, '')}`} className="block hover:text-rougeSecurizons transition-colors">
                  {txt.contact.phone1}
                </a>
                <a href={`tel:${txt.contact.phone2.replace(/\s/g, '')}`} className="block hover:text-rougeSecurizons transition-colors">
                  {txt.contact.phone2}
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={15} className="text-rougeSecurizons mt-0.5 shrink-0" />
              <a href={`mailto:${txt.contact.email}`} className="text-sm hover:text-rougeSecurizons transition-colors break-all">
                {txt.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre de bas */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs">{txt.copyright}</span>
          <Link to="/contact" className="text-xs hover:text-rougeSecurizons transition-colors">
            soda.mboup@securizons.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
