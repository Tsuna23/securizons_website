import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
// import { Shield } from 'lucide-react';

interface HeroSectionProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description?: string;
  bgImage?: string;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
  showBadgeIcon?: boolean;
  centered?: boolean;
  children?: ReactNode;
}

export default function HeroSection({
  badge,
  title,
  titleAccent,
  description,
  bgImage = '/images/hero-default-bg.jpg',
  cta1Text,
  cta1Link = '/solutions',
  cta2Text,
  cta2Link = '/contact',
  showBadgeIcon = true,
  centered = true,
  children,
}: HeroSectionProps) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 ">
      {/* Container principal */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-gray-900 to-gray-800">
        {/* Image de fond */}
          <div className="relative h-125 md:h-137.5 lg:h-150 overflow-hidden">
          <img
            src={bgImage}
            alt={badge}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.65)',
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Contenu */}
          <div className={`relative h-full flex flex-col justify-center z-10 px-6 md:px-12 lg:px-16 ${
            centered ? 'items-center text-center' : 'items-start text-left'
          }`}>
            <div className={centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}>
              {/* Badge avec effet néon */}
              <div className="mb-4 md:mb-6">
                <div className="inline-flex items-center gap-2 bg-rougeSecurizons/20 backdrop-blur-sm rounded-full px-4 py-1.5 border border-rougeSecurizons/30">
                  {showBadgeIcon && <div className="w-2 h-2 bg-rougeSecurizons rounded-full animate-pulse" />}
                  <span className="text-xs md:text-sm font-bold tracking-wider text-rougeSecurizons uppercase">
                    {badge}
                  </span>
                </div>
              </div>

              {/* Titre */}
              <div className="mb-4 md:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
                  {title}
                </h1>
                {titleAccent && (
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rougeSecurizons leading-tight">
                    {titleAccent}
                  </h1>
                )}
              </div>

              {/* Description */}
              {description && (
                <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto">
                  {description}
                </p>
              )}

              {/* Contenu personnalisé */}
              {children}

              {/* Boutons */}
              {(cta1Text || cta2Text) && (
                <div className={`flex flex-wrap gap-3 md:gap-4 ${
                  centered ? 'justify-center' : 'justify-start'
                }`}>
                  {cta1Text && (
                    <Link
                      to={cta1Link}
                      className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-rougeSecurizons text-white font-semibold uppercase tracking-wide rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-900/30"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {cta1Text}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-red-700 to-rougeSecurizons opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  )}
                  
                  {cta2Text && (
                    <Link
                      to={cta2Link}
                      className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold uppercase tracking-wide rounded-xl hover:bg-white hover:text-gray-900 hover:border-white transition-all"
                    >
                      {cta2Text}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}