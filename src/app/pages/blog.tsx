import { useEffect } from 'react';
import { useLanguage } from '../context/languageContext';
import { Calendar, Clock } from 'lucide-react';

const t = {
  FR: {
    hero: {
      badge: 'Actualités & Ressources',
      title: 'Blog Securizons',
      subtitle:
        "Restez informé des dernières tendances en sécurité électronique, des normes du secteur et des actualités de Securizons.",
    },
    categories: ['Tous', 'Sécurité électronique', 'Incendie', 'Réglementation', 'Actualités Securizons'],
    articles: [
      {
        category: 'Sécurité électronique',
        date: 'Mai 2026',
        readTime: '5 min',
        title: 'Les caméras IP 4K : pourquoi elles changent la donne en vidéosurveillance',
        desc: "Avec une résolution quatre fois supérieure au Full HD, les caméras IP 4K offrent une précision d'image inédite pour l'identification et l'analyse forensique.",
        img: null,
      },
      {
        category: 'Contrôle d\'accès',
        date: 'Avril 2026',
        readTime: '4 min',
        title: "La reconnaissance faciale dans le contrôle d'accès : état de l'art en 2026",
        desc: "La biométrie faciale s'impose comme la référence pour les sites à haute sécurité. Tour d'horizon des technologies disponibles et de leurs limites.",
        img: null,
      },
      {
        category: 'Réglementation',
        date: 'Mars 2026',
        readTime: '6 min',
        title: "RGPD et vidéosurveillance : obligations et bonnes pratiques pour les entreprises",
        desc: "L'installation de caméras en entreprise implique des obligations légales précises. Voici ce que tout responsable sécurité doit savoir.",
        img: null,
      },
      {
        category: 'Sécurité incendie',
        date: 'Mars 2026',
        readTime: '5 min',
        title: 'Systèmes SSI : comment choisir la bonne catégorie pour votre ERP ?',
        desc: "Les établissements recevant du public sont soumis à des normes strictes en matière de sécurité incendie. Comment choisir et dimensionner votre SSI ?",
        img: null,
      },
      {
        category: 'Actualités Securizons',
        date: 'Février 2026',
        readTime: '3 min',
        title: 'Securizons certifié partenaire officiel Astrophysics pour la région Afrique de l\'Ouest',
        desc: "Nous sommes fiers d'annoncer notre partenariat officiel avec Astrophysics Inc., leader mondial des systèmes de détection et d'inspection.",
        img: null,
      },
      {
        category: 'Actualités Securizons',
        date: 'Janvier 2026',
        readTime: '4 min',
        title: 'Securizons finalise la sécurisation du nouveau terminal de l\'AIBD',
        desc: "Notre équipe a mené à bien le déploiement d'un système intégré de contrôle d'accès et de vidéosurveillance sur le nouveau terminal passagers.",
        img: null,
      },
    ],
    readMore: 'Lire la suite',
    newsletter: {
      title: 'Restez informé',
      desc: "Inscrivez-vous à notre newsletter pour recevoir nos articles et actualités directement dans votre boite mail.",
      placeholder: 'Votre adresse e-mail',
      btn: "S'abonner",
    },
  },
  EN: {
    hero: {
      badge: 'News & Resources',
      title: 'Securizons Blog',
      subtitle:
        'Stay informed about the latest trends in electronic security, industry standards, and Securizons news.',
    },
    categories: ['All', 'Electronic security', 'Fire safety', 'Regulation', 'Securizons news'],
    articles: [
      {
        category: 'Electronic security',
        date: 'May 2026',
        readTime: '5 min',
        title: '4K IP cameras: why they are changing the video surveillance landscape',
        desc: 'With four times the resolution of Full HD, 4K IP cameras offer unprecedented image precision for identification and forensic analysis.',
        img: null,
      },
      {
        category: 'Access control',
        date: 'April 2026',
        readTime: '4 min',
        title: 'Facial recognition in access control: state of the art in 2026',
        desc: 'Facial biometrics is establishing itself as the reference for high-security sites. An overview of available technologies and their limitations.',
        img: null,
      },
      {
        category: 'Regulation',
        date: 'March 2026',
        readTime: '6 min',
        title: 'GDPR and video surveillance: obligations and best practices for businesses',
        desc: 'Installing cameras in a business involves precise legal obligations. Here is what every security manager needs to know.',
        img: null,
      },
      {
        category: 'Fire safety',
        date: 'March 2026',
        readTime: '5 min',
        title: 'Fire alarm systems: how to choose the right category for your building?',
        desc: 'Public buildings are subject to strict fire safety standards. How to choose and size your fire alarm system?',
        img: null,
      },
      {
        category: 'Securizons news',
        date: 'February 2026',
        readTime: '3 min',
        title: 'Securizons certified official Astrophysics partner for West Africa',
        desc: 'We are proud to announce our official partnership with Astrophysics Inc., world leader in detection and inspection systems.',
        img: null,
      },
      {
        category: 'Securizons news',
        date: 'January 2026',
        readTime: '4 min',
        title: 'Securizons completes security deployment at AIBD new terminal',
        desc: 'Our team successfully deployed an integrated access control and video surveillance system on the new passenger terminal.',
        img: null,
      },
    ],
    readMore: 'Read more',
    newsletter: {
      title: 'Stay informed',
      desc: 'Subscribe to our newsletter to receive our articles and news directly in your inbox.',
      placeholder: 'Your email address',
      btn: 'Subscribe',
    },
  },
};

export default function Blog() {
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

      {/* ══ ARTICLES ══ */}
      <section className="py-24 bg-backgroundColor">
        <div className="max-w-7xl mx-auto px-6">

          {/* Filtres catégorie */}
          <div className="flex flex-wrap gap-2 mb-12">
            {txt.categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  i === 0
                    ? 'bg-rougeSecurizons text-white'
                    : 'bg-secondarySecurizons text-gray-500 hover:bg-rougeSecurizons hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {txt.articles.map((article, i) => (
              <article
                key={i}
                className="group border border-secondarySecurizons hover:border-rougeSecurizons hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-secondarySecurizons flex items-center justify-center overflow-hidden">
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Catégorie */}
                  <span className="text-rougeSecurizons text-xs font-bold uppercase tracking-widest mb-3">
                    {article.category}
                  </span>

                  {/* Titre */}
                  <h2 className="font-bold text-textColor leading-snug mb-3 group-hover:text-rougeSecurizons transition-colors text-sm">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">{article.desc}</p>

                  {/* Footer article */}
                  <div className="flex items-center justify-between pt-4 border-t border-secondarySecurizons">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>
                    <button className="text-rougeSecurizons text-xs font-bold uppercase tracking-wide hover:gap-2 flex items-center gap-1 transition-all">
                      {txt.readMore}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NEWSLETTER ══ */}
      <section className="bg-textColor py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{txt.newsletter.title}</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">{txt.newsletter.desc}</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder={txt.newsletter.placeholder}
              className="flex-1 px-4 py-3 text-sm text-textColor placeholder-gray-400 focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-rougeSecurizons text-white text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0"
            >
              {txt.newsletter.btn}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
