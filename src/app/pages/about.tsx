import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import HeroSection from '../components/heroSection';
import { Shield, Users, Target, Clock, Award, TrendingUp, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const t = {
  FR: {
    hero: {
      badge: 'NOTRE HISTOIRE',
      title: 'À propos de',
      titleAccent: 'Securizons',
    },
    story: {
      badge: 'Notre histoire',
      title: 'Depuis plus de 20 ans,',
      titleAccent: 'nous sécurisons le Sénégal',
      description: 'SECURIZONS SUARL est une entreprise sénégalaise spécialisée dans la sécurité électronique, la sûreté des sites et la protection des personnes et des biens.',
      founding: 'Fondée en 2003, SECURIZONS est née de la volonté de proposer des solutions de sécurité adaptées au contexte local, avec des standards internationaux.',
      mission: 'Aujourd\'hui, nous accompagnons les entreprises, industries, établissements financiers, institutions et organisations dans la mise en place de solutions de sécurité modernes, fiables et adaptées à leurs environnements opérationnels.',
      approach: 'Notre approche repose sur l\'audit, l\'étude technique, l\'intégration de systèmes, le déploiement et la maintenance. À chaque étape, nous plaçons la qualité et la satisfaction client au cœur de notre démarche.',
      stats: [
        { value: '20+', label: "Années d'expérience", icon: Clock },
        { value: '500+', label: 'Clients satisfaits', icon: Users },
        { value: '1000+', label: 'Projets réalisés', icon: CheckCircle },
        { value: '24/7', label: 'Disponibilité', icon: Award },
      ],
    },
    team: {
      badge: 'NOTRE ÉQUIPE',
      title: 'Des experts',
      titleAccent: 'passionnés et dévoués',
      subtitle: "Notre équipe est composée de techniciens et consultants certifiés, passionnés par la sécurité et l'innovation technologique. Chaque collaborateur est formé aux dernières normes du secteur et équipé d'EPI aux couleurs de Securizons.",
      members: [
        { name: 'Direction Générale', role: 'Management & Stratégie', description: 'Pilote la stratégie globale et le développement de l’entreprise.', image: '/images/team/directeur.jpg' },
        { name: 'Bureau Études', role: 'Conception & Ingénierie', description: 'Étudie et conçoit des solutions techniques adaptées à chaque site.', image: '/images/team/ingenieur.jpg' },
        { name: 'Équipe Technique', role: 'Installation & Déploiement', description: 'Assure l’installation, la configuration et la mise en service.', image: '/images/team/technicien-epi.jpg' },
        { name: 'Support Client', role: 'Maintenance & Assistance', description: 'Garantit la maintenance et l’assistance technique 24/7.', image: '/images/team/support.jpg' },
      ],
    },
    values: {
      badge: 'NOS VALEURS',
      title: 'Ce qui nous',
      titleAccent: 'anime au quotidien',
      items: [
        { title: 'Fiabilité', desc: 'Solutions durables et services irréprochables.', icon: Shield },
        { title: 'Innovation', desc: 'Technologies de pointe et veille technologique.', icon: TrendingUp },
        { title: 'Proximité', desc: 'Ancrage local et connaissance du terrain.', icon: Heart },
        { title: 'Réactivité', desc: 'Intervention rapide 24h/24, 7j/7.', icon: Clock },
        { title: 'Intégrité', desc: 'Transparence et honnêteté dans nos relations.', icon: Target },
        { title: 'Excellence', desc: 'Perfection dans chaque projet, de l’étude à la mise en service.', icon: Award },
      ],
    },
    partners: {
      badge: 'NOS PARTENAIRES',
      title: 'Des marques',
      titleAccent: 'de référence mondiale',
      subtitle: "Nous travaillons exclusivement avec des fabricants reconnus pour leur fiabilité, leurs certifications et leur innovation technologique.",
      items: [
        { name: 'Astrophysics', desc: 'Systèmes de détection et de contrôle', logo: '/images/partners/astrophysics-logo.png' },
        { name: 'CEIA', desc: 'Détecteurs de métaux professionnels', logo: '/images/partners/ceia-logo.png' },
        { name: 'Renful', desc: 'Formation sécurité & sûreté aéroportuaire', logo: '/images/partners/renful-logo.png' },
        { name: 'Fisher', desc: 'Équipements de sécurité avancés', logo: '/images/partners/fisher-logo.png' },
      ],
    },
    cta: {
      title: 'Prêt à sécuriser votre site ?',
      subtitle: 'Contactez nos équipes pour une étude gratuite et personnalisée.',
      btn1: 'Contactez-nous',
      btn2: 'Voir nos solutions',
    },
  },
  EN: {
    hero: {
      badge: 'OUR STORY',
      title: 'About',
      titleAccent: 'Securizons',
    },
    story: {
      badge: 'Our story',
      title: 'For over 20 years,',
      titleAccent: 'securing Senegal',
      description: 'SECURIZONS SUARL is a Senegalese company specialized in electronic security, site safety, and the protection of people and assets.',
      founding: 'Founded in 2003, SECURIZONS was born from the desire to offer security solutions adapted to the local context, with international standards.',
      mission: 'Today, we support companies, industries, financial institutions, and organizations in implementing modern, reliable security solutions adapted to their operational environments.',
      approach: 'Our approach is based on auditing, technical study, systems integration, deployment, and maintenance. At every step, we place quality and client satisfaction at the heart of our work.',
      stats: [
        { value: '20+', label: 'Years of experience', icon: Clock },
        { value: '500+', label: 'Satisfied clients', icon: Users },
        { value: '1000+', label: 'Projects completed', icon: CheckCircle },
        { value: '24/7', label: 'Availability', icon: Award },
      ],
    },
    team: {
      badge: 'OUR TEAM',
      title: 'Passionate and',
      titleAccent: 'dedicated experts',
      subtitle: 'Our team consists of certified technicians and consultants, passionate about security and technological innovation. Each employee is trained to the latest industry standards and equipped with Securizons-branded PPE.',
      members: [
        { name: 'General Management', role: 'Management & Strategy', description: 'Drives global strategy and company development.', image: '/images/team/director.jpg' },
        { name: 'Engineering Office', role: 'Design & Engineering', description: 'Studies and designs technical solutions adapted to each site.', image: '/images/team/engineer.jpg' },
        { name: 'Technical Team', role: 'Installation & Deployment', description: 'Ensures installation, configuration and commissioning.', image: '/images/team/technician-ppe.jpg' },
        { name: 'Customer Support', role: 'Maintenance & Assistance', description: 'Guarantees 24/7 maintenance and technical support.', image: '/images/team/support.jpg' },
      ],
    },
    values: {
      badge: 'OUR VALUES',
      title: 'What drives',
      titleAccent: 'us every day',
      items: [
        { title: 'Reliability', desc: 'Durable solutions and impeccable service.', icon: Shield },
        { title: 'Innovation', desc: 'Cutting-edge technology and tech watch.', icon: TrendingUp },
        { title: 'Proximity', desc: 'Local presence and field knowledge.', icon: Heart },
        { title: 'Responsiveness', desc: 'Quick intervention 24/7.', icon: Clock },
        { title: 'Integrity', desc: 'Transparency and honesty in our relationships.', icon: Target },
        { title: 'Excellence', desc: 'Perfection in every project, from study to commissioning.', icon: Award },
      ],
    },
    partners: {
      badge: 'OUR PARTNERS',
      title: 'World-class',
      titleAccent: 'reference brands',
      subtitle: 'We work exclusively with manufacturers recognized for their reliability, certifications, and technological innovation.',
      items: [
        { name: 'Astrophysics', desc: 'Detection and control systems', logo: '/images/partners/astrophysics-logo.png' },
        { name: 'CEIA', desc: 'Professional metal detectors', logo: '/images/partners/ceia-logo.png' },
        { name: 'Renful', desc: 'Airport security & safety training', logo: '/images/partners/renful-logo.png' },
        { name: 'Fisher', desc: 'Advanced security equipment', logo: '/images/partners/fisher-logo.png' },
      ],
    },
    cta: {
      title: 'Ready to secure your site?',
      subtitle: 'Contact our teams for a free and personalized assessment.',
      btn1: 'Contact us',
      btn2: 'See our solutions',
    },
  },
};

export default function About() {
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

  const heroConfig = {
    badge: txt.hero.badge,
    title: txt.hero.title,
    titleAccent: txt.hero.titleAccent,
    bgImage: '/images/hero-about-bg.jpg',
  };

  return (
    <main className="pt-16">
      
      {/* ══ HERO SECTION ══ */}
      <HeroSection
        badge={heroConfig.badge}
        title={heroConfig.title}
        titleAccent={heroConfig.titleAccent}
        bgImage={heroConfig.bgImage}
        centered={true}
      />

      {/* ══ HISTOIRE DE L'ENTREPRISE ══ */}
      <section id="histoire" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest bg-rougeSecurizons/10 px-4 py-2 rounded-full inline-block mb-6">
                {txt.story.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">
                {txt.story.title}{' '}
                <span className="text-rougeSecurizons">{txt.story.titleAccent}</span>
              </h2>
              <div className="w-16 h-1 bg-rougeSecurizons mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-4 font-medium">
                {txt.story.description}
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                {txt.story.founding}
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                {txt.story.mission}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {txt.story.approach}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {txt.story.stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="group bg-gray-50 p-8 text-center rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="w-12 h-12 bg-rougeSecurizons/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-rougeSecurizons transition-colors">
                      <Icon className="w-6 h-6 text-rougeSecurizons group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-3xl font-black text-rougeSecurizons mb-2">{s.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
                  </div>
                );
              })}
              {/* Photo équipe EPI */}
              <div className="col-span-2 mt-4 rounded-2xl overflow-hidden relative group">
                <img 
                  src="/images/equipe-epi-securizons.jpg" 
                  alt="Équipe Securizons en EPI" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white text-sm font-semibold p-4">Notre équipe sur le terrain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ÉQUIPE AVEC PHOTOS ══ */}
      <section id="equipe" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest bg-rougeSecurizons/10 px-4 py-2 rounded-full inline-block">
              {txt.team.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-6">
              {txt.team.title}{' '}
              <span className="text-rougeSecurizons">{txt.team.titleAccent}</span>
            </h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-6 mb-6 rounded-full" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{txt.team.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {txt.team.members.map((m) => (
              <div key={m.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  {m.image ? (
                    <img 
                      src={m.image} 
                      alt={m.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Shield className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-textColor text-lg mb-1">{m.name}</h3>
                  <span className="text-sm text-rougeSecurizons font-medium uppercase tracking-wide">
                    {m.role}
                  </span>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section id="valeurs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest bg-rougeSecurizons/10 px-4 py-2 rounded-full inline-block">
              {txt.values.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-6">
              {txt.values.title}{' '}
              <span className="text-rougeSecurizons">{txt.values.titleAccent}</span>
            </h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {txt.values.items.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-rougeSecurizons/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rougeSecurizons transition-colors">
                    <Icon className="w-6 h-6 text-rougeSecurizons group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-textColor mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PARTENAIRES AVEC LOGOS ══ */}
      <section id="partenaires" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rougeSecurizons text-sm font-bold uppercase tracking-widest bg-rougeSecurizons/10 px-4 py-2 rounded-full inline-block">
              {txt.partners.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textColor mt-6">
              {txt.partners.title}{' '}
              <span className="text-rougeSecurizons">{txt.partners.titleAccent}</span>
            </h2>
            <div className="w-16 h-1 bg-rougeSecurizons mx-auto mt-6 mb-6 rounded-full" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{txt.partners.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {txt.partners.items.map((p) => (
              <div
                key={p.name}
                className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:border-rougeSecurizons hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-16 h-16 bg-rougeSecurizons/10 rounded-xl flex items-center justify-center';
                      fallback.innerHTML = '<span class="text-rougeSecurizons font-bold text-xl">' + p.name.charAt(0) + '</span>';
                      (e.target as HTMLImageElement).parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
                <h3 className="font-bold text-textColor mb-2">{p.name}</h3>
                <p className="text-xs text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA - DESIGN CLAIR ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
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
                to="/solutions" 
                className="px-8 py-4 border-2 border-rougeSecurizons/30 text-rougeSecurizons font-bold uppercase tracking-wider rounded-full hover:bg-rougeSecurizons hover:text-white transition-all duration-300"
              >
                {txt.cta.btn2}
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}