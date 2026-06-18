import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/languageContext';
import { 
  Camera, Fingerprint, Users, Bell, Flame, Fence, HardHat,
  ArrowLeft, CheckCircle, Shield, Award, Mail, Phone
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

// Mapping des icônes par ID
const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  'securite-electronique': Camera,
  'controle-acces': Fingerprint,
  'pointage-personnel': Users,
  'alarmes-intrusion': Bell,
  'securite-incendie': Flame,
  'securisation-perimetrique': Fence,
  'equipements-epi': HardHat,
};

// Type pour les détails des solutions
interface SolutionDetail {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  certifications: string[];
  technologies: string[];
  image: string;
}

// Données détaillées pour chaque solution
const solutionsDetails: Record<string, Record<string, SolutionDetail>> = {
  FR: {
    'securite-electronique': {
      title: 'Sécurité électronique',
      subtitle: 'Surveillance intelligente pour une protection optimale',
      description: 'Nos systèmes de sécurité électronique allient technologie de pointe et intelligence artificielle pour vous offrir une sécurité sans faille. Avec plus de 25 ans d\'expérience, nous déployons des solutions adaptées à chaque environnement.',
      longDescription: 'La sécurité électronique est au cœur de notre métier. Nous proposons des systèmes de vidéosurveillance nouvelle génération, des enregistreurs haute capacité, et des solutions de supervision centralisée. Notre expertise nous permet d\'intervenir sur tout type de site : bureaux, usines, sites sensibles, commerces, etc.',
      features: [
        'Caméras IP 4K, PTZ, thermiques et ANPR',
        'Enregistreurs NVR/DVR haute capacité',
        'Vision nocturne jusqu\'à 40 mètres',
        'Détection de mouvement intelligente',
        'Reconnaissance faciale et lecture plaques',
        'Accès à distance via application mobile',
        'Stockage cloud sécurisé',
        'Supervision multi-sites centralisée'
      ],
      benefits: [
        'Réduction de 70% des incidents',
        'Dissuasion efficace des intrusions',
        'Preuves exploitables en cas d\'incident',
        'Surveillance 24h/24 et 7j/7'
      ],
      certifications: ['ISO 9001', 'Certification ANSSI', 'Norme NF', 'Qualifié PSA'],
      technologies: ['IA & Deep Learning', 'Cloud Computing', 'Edge Computing', '5G Ready'],
      image: '/images/solutions/securite-electronique.jpg'
    },
    'controle-acces': {
      title: "Contrôle d'accès",
      subtitle: 'Gérez et sécurisez vos entrées avec précision',
      description: 'Solutions de contrôle d\'accès biométriques et électroniques pour une sécurité renforcée. Gérez qui entre, quand et où, avec une traçabilité complète.',
      longDescription: 'Nos systèmes de contrôle d\'accès vous offrent une gestion fine des entrées et sorties. Que ce soit par badge, biométrie ou code PIN, vous contrôlez totalement l\'accès à vos zones sensibles. La solution s\'intègre parfaitement à votre système de gestion existant.',
      features: [
        'Lecteurs biométriques (empreinte, iris, veine)',
        'Systèmes par badge RFID/NFC/Mifare',
        'Codes PIN sécurisés',
        'Gestion centralisée via logiciel',
        'Historique des accès en temps réel',
        'Alertes personnalisables',
        'Intégration RH et planning',
        'Contrôle d\'accès véhicules'
      ],
      benefits: [
        'Traçabilité totale des entrées/sorties',
        'Réduction des intrusions de 85%',
        'Gestion simplifiée par profils',
        'Conformité RGPD'
      ],
      certifications: ['Certifié BP100', 'Norme EN 60839', 'Qualifié RGE'],
      technologies: ['Biométrie', 'RFID/NFC', 'Cloud Management', 'API REST'],
      image: '/images/solutions/controle-acces.jpg'
    },
    'pointage-personnel': {
      title: 'Pointage & Personnel',
      subtitle: 'Optimisez la gestion de vos équipes',
      description: 'Solutions de gestion des présences et des horaires pour maximiser votre productivité et simplifier le travail des RH.',
      longDescription: 'Notre solution de pointage vous permet de suivre facilement les temps de travail, les absences et les horaires de vos employés. Avec des terminaux connectés et une interface intuitive, optimisez la gestion de vos ressources humaines.',
      features: [
        'Pointage biométrique et facial',
        'Terminaux connectés sans contact',
        'Gestion des plannings et roulements',
        'Suivi des congés et absences',
        'Export des rapports personnalisés',
        'Interface web et application mobile',
        'Intégration avec logiciels RH (SAP, Sage, etc.)',
        'Alertes en cas d\'anomalie'
      ],
      benefits: [
        '+30% de productivité',
        'Réduction des erreurs de paie',
        'Économie de temps pour les RH',
        'Transparence pour les employés'
      ],
      certifications: ['Compatible RGPD', 'CNIL', 'HDS Santé'],
      technologies: ['Biométrique', 'Cloud', 'Mobile First', 'API ouverte'],
      image: '/images/solutions/pointage-personnel.jpg'
    },
    'alarmes-intrusion': {
      title: 'Alarmes & Intrusion',
      subtitle: 'Protection immédiate contre les intrusions',
      description: 'Systèmes de détection et d\'alarme haute performance pour une sécurité 24/7, avec télésurveillance et intervention rapide.',
      longDescription: 'Protégez votre site avec nos systèmes d\'alarme nouvelle génération. Détection ultra-sensible, alerte immédiate et transmission vers un PC de sécurité ou directement sur votre smartphone.',
      features: [
        'Détecteurs volumétriques et infrarouges',
        'Capteurs d\'ouverture et vibration',
        'Sirènes extérieures et intérieures',
        'Télétransmission vers PC de sécurité',
        'Application mobile avec notification push',
        'Système anti-masque',
        'Caméras intégrées',
        'Compatible domotique'
      ],
      benefits: [
        'Intervention rapide garantie',
        'Dissuasion maximale',
        'Taux de fausses alertes réduit',
        'Sérénité 24h/24'
      ],
      certifications: ['Norme NF&A2P', 'Certification APSAD', 'Label DSFP'],
      technologies: ['Détection multi-critères', 'IoT', 'Push notification', 'Video verification'],
      image: '/images/solutions/alarmes-intrusion.jpg'
    },
    'securite-incendie': {
      title: 'Sécurité incendie',
      subtitle: 'Protégez vos biens et vos collaborateurs',
      description: 'Systèmes de détection incendie et d\'extinction automatique conformes aux normes pour une sécurité totale.',
      longDescription: 'Expert en sécurité incendie, nous déployons des systèmes de détection adressables, des centrales conformes, et des solutions d\'extinction adaptées à vos risques. Nous assurons également la maintenance réglementaire.',
      features: [
        'Détecteurs de fumée, chaleur et CO',
        'Centrales incendie adressables',
        'Déclencheurs manuels',
        'Sprinklers et extinction automatique',
        'Évacuation sonore et lumineuse',
        'SSI de catégorie A, B, C, D',
        'Maintenance certifiée',
        'Formation du personnel'
      ],
      benefits: [
        'Conformité réglementaire totale',
        'Réduction des risques',
        'Protection optimale des biens et personnes',
        'Assurance valide'
      ],
      certifications: ['Certifié APSAD', 'Norme EN 54', 'Qualifié SSI'],
      technologies: ['Adressable', 'Redondance', 'Auto-test', 'Supervision distante'],
      image: '/images/solutions/securite-incendie.jpg'
    },
    'securisation-perimetrique': {
      title: 'Sécurisation périmétrique',
      subtitle: 'Sécurisez vos espaces extérieurs',
      description: 'Solutions de protection périmétrique pour anticiper les intrusions et sécuriser l\'ensemble de votre site.',
      longDescription: 'La sécurité commence par le périmètre. Nos solutions de barrières, portails et détecteurs vous permettent de contrôler tous les accès et de détecter toute tentative d\'intrusion avant même qu\'elle n\'atteigne vos bâtiments.',
      features: [
        'Clôtures électroniques intelligentes',
        'Barrières levantes et bollards',
        'Détecteurs de périmètre laser et infrarouge',
        'Caméras thermiques',
        'Projecteurs LED avec détection',
        'Système anti-escalade',
        'Contrôle d\'accès véhicules',
        'Interphonie IP'
      ],
      benefits: [
        'Détection précoce',
        'Sécurisation globale du site',
        'Dissuasion efficace',
        'Réduction des intrusions'
      ],
      certifications: ['Norme NFC 17-200', 'Certification INERIS', 'Qualifié sécurité'],
      technologies: ['Laser', 'Thermique', 'Radar', 'IA'],
      image: '/images/solutions/securisation-perimetrique.jpg'
    },
    'equipements-epi': {
      title: 'Équipements EPI',
      subtitle: 'Protection individuelle adaptée à vos risques',
      description: 'Fourniture et conseil en équipements de protection individuelle pour protéger vos collaborateurs.',
      longDescription: 'Nous vous conseillons et fournissons les EPI les mieux adaptés à vos environnements de travail. De la tête aux pieds, protégez vos équipes avec du matériel certifié.',
      features: [
        'Casques de protection',
        'Gilets et vêtements haute visibilité',
        'Protections corporelles anti-chute',
        'EPI industriels et chimiques',
        'Détecteurs de gaz portables',
        'Protections auditives',
        'Lunettes et écrans faciaux',
        'Conseil et dimensionnement'
      ],
      benefits: [
        'Conformité réglementaire',
        'Réduction des accidents',
        'Confort et sécurité des équipes',
        'Conseil personnalisé'
      ],
      certifications: ['Certifié CE', 'Norme EN', 'Label PREVENT'],
      technologies: ['Matériaux innovants', 'Connectés', 'Anti-choc', 'Anti-chaleur'],
      image: '/images/solutions/equipements-epi.jpg'
    }
  },
  EN: {
    'securite-electronique': {
      title: 'Electronic Security',
      subtitle: 'Intelligent surveillance for optimal protection',
      description: 'Our electronic security systems combine cutting-edge technology and artificial intelligence for foolproof security.',
      longDescription: 'Electronic security is at the heart of our business. We offer next-generation video surveillance systems, high-capacity recorders, and centralized supervision solutions.',
      features: [
        '4K IP, PTZ, thermal and ANPR cameras',
        'High capacity NVR/DVR recorders',
        '40m night vision',
        'Intelligent motion detection',
        'Facial recognition and license plate reading',
        'Mobile remote access',
        'Secure cloud storage',
        'Multi-site centralized supervision'
      ],
      benefits: [
        '70% reduction in incidents',
        'Effective intrusion deterrence',
        'Usable evidence',
        '24/7 surveillance'
      ],
      certifications: ['ISO 9001', 'ANSSI Certification', 'NF Standard'],
      technologies: ['AI & Deep Learning', 'Cloud Computing', 'Edge Computing', '5G Ready'],
      image: '/images/solutions/securite-electronique.jpg'
    },
    'controle-acces': {
      title: 'Access Control',
      subtitle: 'Manage and secure your entrances with precision',
      description: 'Biometric and electronic access control solutions for enhanced security. Manage who enters, when and where, with complete traceability.',
      longDescription: 'Our access control systems offer fine-grained management of entries and exits. Whether by badge, biometrics or PIN code, you have total control over access to your sensitive areas.',
      features: [
        'Biometric readers (fingerprint, iris, vein)',
        'RFID/NFC/Mifare badge systems',
        'Secure PIN codes',
        'Centralized software management',
        'Real-time access history',
        'Customizable alerts',
        'HR and scheduling integration',
        'Vehicle access control'
      ],
      benefits: [
        'Total traceability of entries/exits',
        '85% reduction in intrusions',
        'Simplified profile management',
        'GDPR compliance'
      ],
      certifications: ['BP100 Certified', 'EN 60839 Standard', 'RGE Qualified'],
      technologies: ['Biometrics', 'RFID/NFC', 'Cloud Management', 'REST API'],
      image: '/images/solutions/controle-acces.jpg'
    },
    'pointage-personnel': {
      title: 'Time & Attendance',
      subtitle: 'Optimize your team management',
      description: 'Attendance and schedule management solutions to maximize your productivity and simplify HR work.',
      longDescription: 'Our time tracking solution allows you to easily track working hours, absences and employee schedules. With connected terminals and an intuitive interface, optimize your human resources management.',
      features: [
        'Biometric and facial time tracking',
        'Contactless connected terminals',
        'Schedule and rotation management',
        'Leave and absence tracking',
        'Customizable report export',
        'Web interface and mobile app',
        'HR software integration (SAP, Sage, etc.)',
        'Anomaly alerts'
      ],
      benefits: [
        '+30% productivity',
        'Reduced payroll errors',
        'Time savings for HR',
        'Transparency for employees'
      ],
      certifications: ['GDPR compliant', 'CNIL', 'HDS Health'],
      technologies: ['Biometric', 'Cloud', 'Mobile First', 'Open API'],
      image: '/images/solutions/pointage-personnel.jpg'
    },
    'alarmes-intrusion': {
      title: 'Alarms & Intrusion',
      subtitle: 'Immediate protection against intrusions',
      description: 'High-performance detection and alarm systems for 24/7 security, with remote monitoring and rapid response.',
      longDescription: 'Protect your site with our next-generation alarm systems. Ultra-sensitive detection, immediate alert and transmission to a security center or directly to your smartphone.',
      features: [
        'Volumetric and infrared detectors',
        'Opening and vibration sensors',
        'Outdoor and indoor sirens',
        'Transmission to security center',
        'Mobile app with push notification',
        'Anti-mask system',
        'Integrated cameras',
        'Smart home compatible'
      ],
      benefits: [
        'Guaranteed rapid response',
        'Maximum deterrence',
        'Reduced false alarm rate',
        '24/7 peace of mind'
      ],
      certifications: ['NF&A2P Standard', 'APSAD Certification', 'DSFP Label'],
      technologies: ['Multi-criteria detection', 'IoT', 'Push notification', 'Video verification'],
      image: '/images/solutions/alarmes-intrusion.jpg'
    },
    'securite-incendie': {
      title: 'Fire Safety',
      subtitle: 'Protect your assets and employees',
      description: 'Fire detection and automatic suppression systems compliant with standards for complete safety.',
      longDescription: 'Fire safety experts, we deploy addressable detection systems, compliant control panels, and suppression solutions adapted to your risks. We also provide regulatory maintenance.',
      features: [
        'Smoke, heat and CO detectors',
        'Addressable fire control panels',
        'Manual call points',
        'Sprinklers and automatic suppression',
        'Audible and visual evacuation',
        'Category A, B, C, D fire systems',
        'Certified maintenance',
        'Staff training'
      ],
      benefits: [
        'Full regulatory compliance',
        'Risk reduction',
        'Optimal protection of assets and people',
        'Valid insurance'
      ],
      certifications: ['APSAD Certified', 'EN 54 Standard', 'SSI Qualified'],
      technologies: ['Addressable', 'Redundancy', 'Self-test', 'Remote supervision'],
      image: '/images/solutions/securite-incendie.jpg'
    },
    'securisation-perimetrique': {
      title: 'Perimeter Security',
      subtitle: 'Secure your outdoor spaces',
      description: 'Perimeter protection solutions to anticipate intrusions and secure your entire site.',
      longDescription: 'Security starts at the perimeter. Our barrier, gate and detector solutions allow you to control all access and detect any intrusion attempt before it reaches your buildings.',
      features: [
        'Smart electronic fences',
        'Rising barriers and bollards',
        'Laser and infrared perimeter detectors',
        'Thermal cameras',
        'LED projectors with detection',
        'Anti-climb system',
        'Vehicle access control',
        'IP intercom'
      ],
      benefits: [
        'Early detection',
        'Global site security',
        'Effective deterrence',
        'Reduced intrusions'
      ],
      certifications: ['NFC 17-200 Standard', 'INERIS Certification', 'Security Qualified'],
      technologies: ['Laser', 'Thermal', 'Radar', 'AI'],
      image: '/images/solutions/securisation-perimetrique.jpg'
    },
    'equipements-epi': {
      title: 'PPE Equipment',
      subtitle: 'Personal protection adapted to your risks',
      description: 'Supply and advisory on personal protective equipment to protect your employees.',
      longDescription: 'We advise and supply the PPE best suited to your work environments. From head to toe, protect your teams with certified equipment.',
      features: [
        'Protective helmets',
        'High visibility vests and clothing',
        'Fall protection body gear',
        'Industrial and chemical PPE',
        'Portable gas detectors',
        'Hearing protection',
        'Glasses and face shields',
        'Consulting and sizing'
      ],
      benefits: [
        'Regulatory compliance',
        'Accident reduction',
        'Team comfort and safety',
        'Personalized advice'
      ],
      certifications: ['CE Certified', 'EN Standard', 'PREVENT Label'],
      technologies: ['Innovative materials', 'Connected', 'Anti-shock', 'Anti-heat'],
      image: '/images/solutions/equipements-epi.jpg'
    }
  }
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const txt = solutionsDetails[lang as keyof typeof solutionsDetails] || solutionsDetails.FR;
  
  const solution = txt[slug as keyof typeof txt];
  
  // Scroll en haut de la page à chaque chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);
  
  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="text-8xl mb-6">🔒</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Solution non trouvée
          </h1>
          <p className="text-gray-600 mb-8">
            Désolé, la solution que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link 
            to="/solutions" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-rougeSecurizons text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux solutions
          </Link>
        </div>
      </div>
    );
  }
  
  const Icon = iconMap[slug as keyof typeof iconMap] || Camera;
  const isFrench = lang === 'FR';
  
  return (
    <main className="pt-16 bg-linear-to-b from-gray-50 to-white">
      
      {/* ══ HERO SECTION AVEC IMAGE DE FOND ══ */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${solution.image})`, opacity: 0.4 }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <Link 
            to="/solutions" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {isFrench ? 'Retour aux solutions' : 'Back to solutions'}
          </Link>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-rougeSecurizons rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/30">
              <Icon width={32} height={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              {solution.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {solution.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ══ CONTENU PRINCIPAL ══ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Description */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-textColor mb-4">
              {isFrench ? 'Description' : 'Description'}
            </h2>
            <div className="w-12 h-0.5 bg-rougeSecurizons mb-6" />
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              {solution.description}
            </p>
            <p className="text-gray-500 leading-relaxed">
              {solution.longDescription}
            </p>
          </div>

          {/* Grille caractéristiques + avantages */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Caractéristiques */}
            <div>
              <h2 className="text-2xl font-bold text-textColor mb-4">
                {isFrench ? 'Caractéristiques techniques' : 'Technical features'}
              </h2>
              <div className="w-12 h-0.5 bg-rougeSecurizons mb-6" />
              <ul className="space-y-3">
                {solution.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-rougeSecurizons shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Avantages */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-rougeSecurizons" />
                <h2 className="text-2xl font-bold text-textColor">
                  {isFrench ? 'Avantages clés' : 'Key benefits'}
                </h2>
              </div>
              <div className="space-y-4">
                {solution.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-rougeSecurizons" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {isFrench ? 'Prêt à sécuriser votre site ?' : 'Ready to secure your site?'}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {isFrench 
                ? 'Contactez nos experts pour une étude gratuite et personnalisée de vos besoins.' 
                : 'Contact our experts for a free and personalized assessment of your needs.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact#devis"
                className="inline-flex items-center gap-2 px-8 py-3 bg-rougeSecurizons text-white font-semibold rounded-xl hover:bg-red-700 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                {isFrench ? 'Demander un devis' : 'Request a quote'}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-4 h-4" />
                {isFrench ? 'Nous contacter' : 'Contact us'}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}