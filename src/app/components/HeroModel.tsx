import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import { ChevronLeft, ChevronRight, Shield, Clock, Award, Headphones } from 'lucide-react';

const slides = [
  {
    src: '/images/hero-1.jpg',
    category: 'SÉCURITÉ INTELLIGENTE',
    title: 'Protection avancée',
    titleAccent: 'pour vos infrastructures',
    desc: 'Des solutions de sécurité sur mesure pour protéger vos collaborateurs, vos actifs et garantir la continuité de vos activités.',
    specs: ['Vidéosurveillance IA', 'Contrôle d\'accès', '24/7'],
  },
  {
    src: '/images/hero-2.jpg',
    category: 'INNOVATION',
    title: 'Technologies de pointe',
    titleAccent: 'au service de votre sécurité',
    desc: 'Équipements dernière génération et systèmes connectés pour une sécurité optimale et une gestion simplifiée.',
    specs: ['IoT', 'Biométrie', 'Cloud'],
  },
  {
    src: '/images/hero-3.jpg',
    category: 'EXPERTISE',
    title: 'Votre partenaire',
    titleAccent: 'depuis plus de 20 ans',
    desc: 'Une équipe d\'experts certifiés à votre écoute pour concevoir et déployer la solution parfaitement adaptée à vos besoins.',
    specs: ['Certifié', 'Réactif', 'Sur-mesure'],
  },
];

export default function HeroSlider() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const buttonTexts = {
    FR: { cta1: 'Découvrir nos solutions', cta2: 'Demander un devis' },
    EN: { cta1: 'Discover our solutions', cta2: 'Request a quote' },
  };
  const btns = buttonTexts[lang as keyof typeof buttonTexts] || buttonTexts.FR;
  const slide = slides[current];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const getImageSrc = (index: number) => {
    if (imageErrors[index]) {
      return '/images/placeholder-hero.jpg';
    }
    return slides[index].src;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
      {/* Badge flottant */}
      <div className="absolute top-0 right-0 md:top-4 md:right-8 z-20">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <Shield className="w-4 h-4 text-rougeSecurizons" />
        </div>
      </div>

      {/* Container principal avec fond et ombre */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-gray-900 to-gray-800">
        {/* Image de fond avec effet parallaxe */}
        <div className="relative h-125 md:h-150 lg:h-162.5 overflow-hidden">
          <img
            src={getImageSrc(current)}
            alt={slide.category}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
            style={{
              transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
              filter: 'brightness(0.7)',
            }}
            onError={() => handleImageError(current)}
          />
          
          {/* Overlay gradient moderne */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Contenu */}
          <div className="relative h-full flex flex-col justify-center z-10 px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl">
              {/* Catégorie avec effet néon */}
              <div className="mb-4 md:mb-6">
                <div className="inline-flex items-center gap-2 bg-rougeSecurizons/20 backdrop-blur-sm rounded-full px-4 py-1.5 border border-rougeSecurizons/30">
                  <div className="w-2 h-2 bg-rougeSecurizons rounded-full animate-pulse" />
                  <span className="text-xs md:text-sm font-bold tracking-wider text-rougeSecurizons uppercase">
                    {slide.category}
                  </span>
                </div>
              </div>

              {/* Titre avec animation */}
              <div className="mb-4 md:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
                  {slide.title}
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rougeSecurizons leading-tight">
                  {slide.titleAccent}
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed mb-6 md:mb-8 max-w-xl">
                {slide.desc}
              </p>

              {/* Badges specs */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                {slide.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-xs md:text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  to="/solutions"
                  className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-rougeSecurizons text-white font-semibold uppercase tracking-wide rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-900/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {btns.cta1}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-red-700 to-rougeSecurizons opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold uppercase tracking-wide rounded-xl hover:bg-white hover:text-gray-900 hover:border-white transition-all"
                >
                  {btns.cta2}
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation flèches */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots navigation */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrent(idx);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: current === idx ? 32 : 8,
                  height: 8,
                  backgroundColor: current === idx ? '#C62828' : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cartes de features sous le slider */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
        {[
          { icon: Shield, text: 'Sécurité certifiée', delay: '0s' },
          { icon: Clock, text: 'Support 24/7', delay: '0.1s' },
          { icon: Award, text: 'Expertise terrain', delay: '0.2s' },
          { icon: Headphones, text: 'Assistance dédiée', delay: '0.3s' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 md:gap-3 bg-white rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            style={{ animationDelay: item.delay }}
          >
            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-rougeSecurizons" />
            <span className="text-xs md:text-sm font-semibold text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}