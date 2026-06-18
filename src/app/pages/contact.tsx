import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const t = {
  FR: {
    hero: {
      badge: 'Parlons de votre projet',
      title: 'Contactez-nous',
      subtitle:
        "Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet de sécurité.",
    },
    tabs: { contact: 'Formulaire de contact', devis: 'Demande de devis' },
    contact: {
      fields: {
        name: 'Nom complet',
        email: 'Adresse e-mail',
        phone: 'Téléphone',
        subject: 'Objet',
        message: 'Votre message',
      },
      placeholders: {
        name: 'Jean Dupont',
        email: 'jean@exemple.com',
        phone: '+221 77 000 00 00',
        subject: 'Sujet de votre message',
        message: 'Décrivez votre besoin ou votre question…',
      },
      btn: 'Envoyer le message',
      success: 'Message envoyé ! Nous vous répondrons dans les plus brefs délais.',
    },
    devis: {
      fields: {
        name: 'Nom complet',
        company: 'Entreprise / Organisation',
        email: 'Adresse e-mail',
        phone: 'Téléphone',
        solution: 'Solution souhaitée',
        site: 'Type de site',
        message: 'Description du projet',
      },
      placeholders: {
        name: 'Jean Dupont',
        company: 'Nom de votre société',
        email: 'jean@exemple.com',
        phone: '+221 77 000 00 00',
        solution: '',
        site: 'Bureau, entrepôt, hôtel…',
        message: 'Décrivez votre site, vos besoins et vos contraintes…',
      },
      solutions: [
        'Sécurité électronique',
        "Contrôle d'accès",
        'Pointage & gestion du personnel',
        'Alarmes & Intrusion',
        'Sécurité incendie',
        'Sécurisation périmétrique',
        'Supervision & rondes',
        'Équipements EPI',
        'Plusieurs solutions',
      ],
      btn: 'Envoyer ma demande',
      success: 'Demande reçue ! Un expert vous contactera très prochainement.',
    },
    info: {
      title: 'Nos coordonnées',
      address: { label: 'Adresse', value: 'Cité CPI, lot n°20 – Dakar, Sénégal' },
      phone: { label: 'Téléphone', values: ['+221 33 864 30 46', '+221 77 141 75 54'] },
      email: { label: 'E-mail', value: 'soda.mboup@securizons.com' },
      hours: { label: 'Horaires', value: 'Lun – Ven : 8h00 – 18h00 / Sam : 8h00 – 13h00' },
      emergency: {
        title: 'Urgence 24/7',
        text: 'Pour toute intervention urgente hors horaires de bureau, notre équipe de permanence reste joignable.',
      },
    },
  },
  EN: {
    hero: {
      badge: 'Talk to us',
      title: 'Contact us',
      subtitle:
        'Our team is available to answer all your questions and support you through your security project.',
    },
    tabs: { contact: 'Contact form', devis: 'Request a quote' },
    contact: {
      fields: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Your message',
      },
      placeholders: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+221 77 000 00 00',
        subject: 'Subject of your message',
        message: 'Describe your need or question…',
      },
      btn: 'Send message',
      success: 'Message sent! We will get back to you as soon as possible.',
    },
    devis: {
      fields: {
        name: 'Full name',
        company: 'Company / Organization',
        email: 'Email address',
        phone: 'Phone',
        solution: 'Desired solution',
        site: 'Site type',
        message: 'Project description',
      },
      placeholders: {
        name: 'John Doe',
        company: 'Your company name',
        email: 'john@example.com',
        phone: '+221 77 000 00 00',
        solution: '',
        site: 'Office, warehouse, hotel…',
        message: 'Describe your site, needs and constraints…',
      },
      solutions: [
        'Electronic security',
        'Access control',
        'Time & attendance',
        'Alarms & Intrusion',
        'Fire safety',
        'Perimeter security',
        'Supervision & patrols',
        'PPE equipment',
        'Multiple solutions',
      ],
      btn: 'Send my request',
      success: 'Request received! An expert will contact you very soon.',
    },
    info: {
      title: 'Our contact details',
      address: { label: 'Address', value: 'Cité CPI, lot n°20 – Dakar, Senegal' },
      phone: { label: 'Phone', values: ['+221 33 864 30 46', '+221 77 141 75 54'] },
      email: { label: 'Email', value: 'soda.mboup@securizons.com' },
      hours: { label: 'Hours', value: 'Mon – Fri: 8:00 AM – 6:00 PM / Sat: 8:00 AM – 1:00 PM' },
      emergency: {
        title: '24/7 Emergency',
        text: 'For urgent interventions outside office hours, our on-call team remains reachable.',
      },
    },
  },
};

const inputClass =
  'w-full border border-gray-200 px-4 py-3 text-sm text-textColor placeholder-gray-400 focus:outline-none focus:border-rougeSecurizons transition-colors bg-white';
const labelClass = 'block text-xs font-bold text-textColor uppercase tracking-wider mb-2';

export default function Contact() {
  const { lang } = useLanguage();
  const txt = t[lang as keyof typeof t] || t.FR;
  const { hash } = useLocation();

  const [tab, setTab] = useState<'contact' | 'devis'>('contact');
  const [contactDone, setContactDone] = useState(false);
  const [devisDone, setDevisDone] = useState(false);

  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [devisForm, setDevisForm] = useState({ name: '', company: '', email: '', phone: '', solution: '', site: '', message: '' });

  useEffect(() => {
    if (hash === '#devis') {
      setTab('devis');
      setTimeout(() => {
        const el = document.getElementById('devis');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  function handleContact(e: React.FormEvent) {
    e.preventDefault();
    setContactDone(true);
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
  }

  function handleDevis(e: React.FormEvent) {
    e.preventDefault();
    setDevisDone(true);
    setDevisForm({ name: '', company: '', email: '', phone: '', solution: '', site: '', message: '' });
  }

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

      {/* ══ FORMULAIRES + INFOS ══ */}
      <section id="devis" className="py-24 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── Formulaires (2/3) ── */}
            <div className="lg:col-span-2">
              {/* Onglets */}
              <div className="flex border-b border-secondarySecurizons mb-10">
                <button
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                    tab === 'contact'
                      ? 'border-rougeSecurizons text-rougeSecurizons'
                      : 'border-transparent text-gray-400 hover:text-textColor'
                  }`}
                  onClick={() => setTab('contact')}
                >
                  {txt.tabs.contact}
                </button>
                <button
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                    tab === 'devis'
                      ? 'border-rougeSecurizons text-rougeSecurizons'
                      : 'border-transparent text-gray-400 hover:text-textColor'
                  }`}
                  onClick={() => setTab('devis')}
                >
                  {txt.tabs.devis}
                </button>
              </div>

              {/* ── Formulaire contact ── */}
              {tab === 'contact' && (
                contactDone ? (
                  <div className="p-8 bg-secondarySecurizons border-l-4 border-rougeSecurizons">
                    <p className="text-textColor font-semibold">{txt.contact.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleContact} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>{txt.contact.fields.name}</label>
                        <input
                          required
                          className={inputClass}
                          placeholder={txt.contact.placeholders.name}
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>{txt.contact.fields.email}</label>
                        <input
                          required
                          type="email"
                          className={inputClass}
                          placeholder={txt.contact.placeholders.email}
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>{txt.contact.fields.phone}</label>
                        <input
                          className={inputClass}
                          placeholder={txt.contact.placeholders.phone}
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>{txt.contact.fields.subject}</label>
                        <input
                          required
                          className={inputClass}
                          placeholder={txt.contact.placeholders.subject}
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>{txt.contact.fields.message}</label>
                      <textarea
                        required
                        rows={6}
                        className={`${inputClass} resize-none`}
                        placeholder={txt.contact.placeholders.message}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-rougeSecurizons text-white font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2"
                    >
                      {txt.contact.btn}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </form>
                )
              )}

              {/* ── Formulaire devis ── */}
              {tab === 'devis' && (
                devisDone ? (
                  <div className="p-8 bg-secondarySecurizons border-l-4 border-rougeSecurizons">
                    <p className="text-textColor font-semibold">{txt.devis.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleDevis} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>{txt.devis.fields.name}</label>
                        <input
                          required
                          className={inputClass}
                          placeholder={txt.devis.placeholders.name}
                          value={devisForm.name}
                          onChange={(e) => setDevisForm({ ...devisForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>{txt.devis.fields.company}</label>
                        <input
                          required
                          className={inputClass}
                          placeholder={txt.devis.placeholders.company}
                          value={devisForm.company}
                          onChange={(e) => setDevisForm({ ...devisForm, company: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>{txt.devis.fields.email}</label>
                        <input
                          required
                          type="email"
                          className={inputClass}
                          placeholder={txt.devis.placeholders.email}
                          value={devisForm.email}
                          onChange={(e) => setDevisForm({ ...devisForm, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>{txt.devis.fields.phone}</label>
                        <input
                          className={inputClass}
                          placeholder={txt.devis.placeholders.phone}
                          value={devisForm.phone}
                          onChange={(e) => setDevisForm({ ...devisForm, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>{txt.devis.fields.solution}</label>
                        <select
                          required
                          className={inputClass}
                          value={devisForm.solution}
                          onChange={(e) => setDevisForm({ ...devisForm, solution: e.target.value })}
                        >
                          <option value="">—</option>
                          {txt.devis.solutions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>{txt.devis.fields.site}</label>
                        <input
                          className={inputClass}
                          placeholder={txt.devis.placeholders.site}
                          value={devisForm.site}
                          onChange={(e) => setDevisForm({ ...devisForm, site: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>{txt.devis.fields.message}</label>
                      <textarea
                        required
                        rows={6}
                        className={`${inputClass} resize-none`}
                        placeholder={txt.devis.placeholders.message}
                        value={devisForm.message}
                        onChange={(e) => setDevisForm({ ...devisForm, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-rougeSecurizons text-white font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2"
                    >
                      {txt.devis.btn}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </form>
                )
              )}
            </div>

            {/* ── Infos contact (1/3) ── */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-textColor">{txt.info.title}</h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-rougeSecurizons flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-textColor uppercase tracking-wider mb-1">{txt.info.address.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{txt.info.address.value}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-rougeSecurizons flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-textColor uppercase tracking-wider mb-1">{txt.info.phone.label}</p>
                    {txt.info.phone.values.map((v) => (
                      <a key={v} href={`tel:${v.replace(/\s/g, '')}`} className="block text-sm text-gray-500 hover:text-rougeSecurizons transition-colors">
                        {v}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-rougeSecurizons flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-textColor uppercase tracking-wider mb-1">{txt.info.email.label}</p>
                    <a href={`mailto:${txt.info.email.value}`} className="text-sm text-gray-500 hover:text-rougeSecurizons transition-colors">
                      {txt.info.email.value}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-rougeSecurizons flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-textColor uppercase tracking-wider mb-1">{txt.info.hours.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{txt.info.hours.value}</p>
                  </div>
                </div>
              </div>

              {/* Urgence */}
              <div className="bg-textColor p-6 mt-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-rougeSecurizons rounded-full animate-pulse" />
                  <span className="text-white font-bold text-sm">{txt.info.emergency.title}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{txt.info.emergency.text}</p>
                <a
                  href="tel:+221771417554"
                  className="inline-block mt-4 px-5 py-2.5 bg-rougeSecurizons text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  +221 77 141 75 54
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CARTE ══ */}
      <section className="bg-secondarySecurizons">
        <div className="max-w-7xl mx-auto px-6 py-4 text-right">
          <a
            href="https://maps.google.com/?q=Cité+CPI+Dakar+Sénégal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-rougeSecurizons font-semibold hover:underline"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
        <iframe
          title="Localisation Securizons"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15432.8!2d-17.4592!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5b8e1%3A0x8ecf4dc13cf4af6e!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1234567890"
          width="100%"
          height="420"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
