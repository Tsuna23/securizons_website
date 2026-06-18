import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import type { LangCode } from '../context/languageContext';
import { Globe } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
};

// Navigation simplifiée - plus de dropdowns
const t: Record<LangCode, { nav: NavItem[]; right: NavItem[] }> = {
  FR: {
    nav: [
      { label: 'Accueil', href: '/' },
      { label: 'À propos', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Interventions', href: '/interventions' },
    ],
    right: [
      { label: 'Actualités', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  EN: {
    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Interventions', href: '/interventions' },
    ],
    right: [
      { label: 'News', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

const languages: { code: LangCode; label: string }[] = [
  { code: 'FR', label: 'Français' },
  { code: 'EN', label: 'English' },
];

/* ── Sélecteur de langue ── */
function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-textColor transition-colors"
        onClick={() => setOpen(!open)}
      >
        <Globe size={16} strokeWidth={1.5} />
        <span className="text-xs font-medium">{lang}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 bg-backgroundColor border border-secondarySecurizons shadow-lg z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors border-b border-secondarySecurizons last:border-0 ${
                lang === l.code
                  ? 'text-rougeSecurizons font-medium bg-secondarySecurizons'
                  : 'text-gray-500 hover:text-textColor hover:bg-secondarySecurizons'
              }`}
              onClick={() => { setLang(l.code); setOpen(false); }}
            >
              <span>{l.label}</span>
              <span className="text-xs font-bold opacity-60">{l.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Header principal ── */
export default function Header() {
  const { lang, setLang } = useLanguage();
  const txt = t[lang];

  const [mobileOpen, setMobileOpen] = useState(false);

  // Tous les liens pour le menu mobile
  const allMobileLinks = [...txt.nav, ...txt.right];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-backgroundColor border-b border-secondarySecurizons shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">

        {/* ── Gauche : nav principale (desktop) ── */}
        <div className="hidden lg:flex items-center gap-6">
          {txt.nav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm text-gray-500 hover:text-textColor transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* ── Centre : Logo ── */}
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <img
              src="/images/securizons.png"
              alt="Securizons Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* ── Droite : liens + langue (desktop) ── */}
        <div className="hidden lg:flex items-center justify-end gap-6">
          {txt.right.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm text-gray-500 hover:text-textColor transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* ── Burger mobile ── */}
        <div className="lg:hidden flex justify-end">
          <button
            className="p-2 text-gray-500 hover:text-textColor transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Menu mobile (simplifié) ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-backgroundColor border-t border-secondarySecurizons max-h-[80vh] overflow-y-auto">
          {allMobileLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-6 py-3.5 text-sm text-gray-600 hover:text-textColor hover:bg-secondarySecurizons border-b border-secondarySecurizons transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Sélecteur de langue mobile */}
          <div className="px-6 py-4 flex items-center gap-3 border-t border-secondarySecurizons">
            <Globe size={16} className="text-gray-400" />
            {languages.map((l, i) => (
              <span key={l.code} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-300">|</span>}
                <button
                  className={`text-sm transition-colors ${lang === l.code ? 'text-rougeSecurizons font-medium' : 'text-gray-500 hover:text-rougeSecurizons'}`}
                  onClick={() => {
                    setLang(l.code);
                    setMobileOpen(false);
                  }}
                >
                  {l.code}
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}