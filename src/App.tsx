import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  Heart,
  Facebook
} from 'lucide-react';

const IMAGES = [
  "https://i.ibb.co/rfKR7BSb/484942902-1087035673467902-5104205335953276568-n.jpg",
  "https://i.ibb.co/jkKhR5w9/486105593-1091487419689394-4949373970282597614-n.jpg",
  "https://i.ibb.co/gMQCD2R4/486249322-1091487813022688-7155151023718460392-n.jpg",
  "https://i.ibb.co/fYCvRryJ/486612824-1091487859689350-2236079844245799997-n.jpg",
  "https://i.ibb.co/TBs9SQMs/486545793-1091487826356020-4297971782602294792-n.jpg",
  "https://i.ibb.co/7tyCrGFL/486728244-1092598179578318-9049384444125611703-n.jpg",
  "https://i.ibb.co/5hRrSS5L/486634084-1092598146244988-2775747432423327829-n.jpg",
  "https://i.ibb.co/sJJZ6JXC/487411344-1094487109389425-7357700622389351415-n.jpg",
  "https://i.ibb.co/7JvB2Nvk/486727854-1094487386056064-5035127069386520387-n.jpg",
  "https://i.ibb.co/yBf4FkHb/487453835-1094486956056107-3496775729423517671-n.jpg",
  "https://i.ibb.co/Dfp6mYsm/486441928-1094486966056106-2778007006552802590-n.jpg",
  "https://i.ibb.co/pjTjqpwj/486673160-1095065455998257-8336760656607369627-n.jpg",
  "https://i.ibb.co/1tMWjj9p/486353227-1095065465998256-6880892783720346160-n.jpg",
  "https://i.ibb.co/HQFdXZ5/474636969-28356013550710754-681124649990054243-n.jpg"
];

const BotanicalRose = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <path d="M50 80 C 50 80, 40 60, 50 40 C 60 60, 50 80, 50 80 M50 40 C 30 40, 20 20, 50 10 C 80 20, 70 40, 50 40 M30 50 C 40 30, 60 30, 70 50 C 60 70, 40 70, 30 50" />
    <path d="M50 40 Q 35 35 30 20 M50 40 Q 65 35 70 20" />
    <path d="M50 80 L 50 95 M50 85 L 40 80 M50 90 L 60 85" opacity="0.3" />
  </svg>
);

const RibbonDivider = () => (
  <div className="ribbon-divider" id="divider">
    <span>✦</span>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <div className="min-h-screen selection:bg-gold/20 flex flex-col items-center">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full flex justify-center ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl w-full px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-serif text-2xl md:text-3xl leading-none tracking-tight transition-colors ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
              Nowy Dwór
            </span>
            <span className={`font-sans tracking-[0.2em] text-[10px] uppercase transition-colors ${isScrolled ? 'text-gold' : 'text-ivory'}`}>
              Walentynów
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full`} />
              </a>
            ))}
            <a 
              href="https://www.facebook.com/domweselnynowydworwalentynow" 
              target="_blank" 
              rel="noreferrer"
              className={`p-2 transition-colors ${isScrolled ? 'text-gold hover:text-charcoal' : 'text-white hover:text-gold'}`}
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled ? 'text-charcoal' : 'text-white'} />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-charcoal' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-charcoal hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.facebook.com/domweselnynowydworwalentynow" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-2 text-gold font-sans uppercase tracking-widest text-sm"
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <img 
            src={IMAGES[0]} 
            alt="Nowy Dwór Hero" 
            className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <span className="font-script text-white text-3xl md:text-5xl mb-4 block" id="hero-script">
            Miejsce, gdzie marzenia się spełniają
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl shimmer-text uppercase font-serif tracking-tighter" id="venue-title">
            Nowy Dwór
          </h1>
          <p className="text-white/80 font-sans tracking-[0.4em] uppercase text-xs md:text-sm mt-6 mb-12">
            Walentynów • Luksus • Tradycja
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#o-nas" 
              className="px-10 py-4 bg-white text-charcoal tracking-widest uppercase text-xs hover:bg-gold hover:text-white transition-all duration-500 rounded-sm"
            >
              Poznaj nas
            </a>
            <a 
              href="#kontakt" 
              className="px-10 py-4 border border-white/50 text-white tracking-widest uppercase text-xs hover:bg-white hover:text-charcoal transition-all duration-500 rounded-sm"
            >
              Zarezerwuj termin
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white to-white/0" />
        </div>
      </section>

      <main className="w-full bg-white flex flex-col items-center">
        {/* About Section */}
        <section className="py-24 md:py-32 w-full max-w-7xl px-6 md:px-12 relative overflow-hidden" id="o-nas">
          <BotanicalRose className="absolute -left-10 top-20 w-64 text-gold/10 -rotate-12 h-64" />
          <BotanicalRose className="absolute -right-10 bottom-20 w-48 text-gold/10 rotate-180 h-48" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 md:order-1"
            >
              <span className="text-gold font-script text-3xl block mb-2" id="about-intro">Nasza Historia</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
                Elegancja i styl w sercu natury
              </h2>
              <div className="space-y-6 text-taupe leading-relaxed text-lg font-light">
                <p>
                  Dom Weselny Nowy Dwór w Walentynowie to miejsce stworzone z pasji do piękna i celebracji najważniejszych chwil w życiu. Nasza malowniczo położona posiadłość łączy w sobie urok polskiego dworku z nowoczesnym luksusem.
                </p>
                <p>
                  Wierzymy, że każde wesele to unikalna opowieść, która zasługuje na wyjątkową oprawę. Nasza przestronna sala, wypełniona naturalnym światłem i złotymi akcentami, stanowi idealne tło dla Waszej ceremonii.
                </p>
                <p>
                  Z dbałością o każdy, nawet najmniejszy detal, tworzymy atmosferę, która sprawia, że nasi Goście czują się wyjątkowo od pierwszych chwil spędzonych w Nowym Dworze.
                </p>
              </div>
              <div className="mt-12 flex items-center space-x-4 text-gold italic font-serif text-xl border-l-2 border-gold/30 pl-6">
                "Sprawimy, że Wasz wielki dzień stanie się niezapomnianą legendą."
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10">
                <img src={IMAGES[2]} alt="Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square bg-ivory linen-texture -z-10 rounded-sm border border-gold/10" />
            </motion.div>
          </div>
        </section>

        <RibbonDivider />

        {/* Offer Section */}
        <section className="py-24 bg-ivory linen-texture w-full flex justify-center" id="oferta">
          <div className="max-w-7xl w-full px-6 md:px-12">
            <div className="text-center mb-20 max-w-2xl mx-auto">
              <span className="text-gold font-script text-3xl block mb-2" id="offer-intro">Oferta</span>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-4">Wesela i Wydarzenia</h2>
              <p className="text-taupe font-sans tracking-wide">Zapewniamy kompleksową obsługę na najwyższym poziomie</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: 'Przyjęcia Weselne',
                  desc: 'Od śniadań wielkanocnych po wystawne bale do białego rana. Nasza sala pomieści do 200 gości w komforcie i elegancji.',
                  icon: <Heart className="text-gold mb-2" />
                },
                {
                  title: 'Kuchnia Wykwintna',
                  desc: 'Pyszne dania kuchni polskiej i europejskiej, przygotowywane ze świeżych lokalnych produktów przez naszych mistrzów kuchni.',
                  icon: <Heart className="text-gold mb-2" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-12 rounded-sm border border-gold/10 hover:shadow-xl transition-all duration-500 group"
                  id={`offer-card-${i}`}
                >
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-2xl mb-4 text-charcoal">{item.title}</h3>
                  <p className="text-taupe leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="mt-8 w-12 h-px bg-gold group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-white w-full flex flex-center flex-col items-center" id="galeria">
          <div className="max-w-7xl w-full px-6 md:px-12 mb-16 text-center">
             <span className="text-gold font-script text-3xl block mb-2" id="gallery-title">Galeria</span>
             <h2 className="text-4xl md:text-5xl text-charcoal mb-4">Uchwycone Chwile</h2>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-6 max-w-[1600px] w-full">
            {IMAGES.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                className="relative overflow-hidden group rounded-sm shadow-md"
              >
                <img 
                  src={src} 
                  alt={`Nowy Dwór Gallery ${i}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        <RibbonDivider />

        {/* Contact Section */}
        <section className="py-24 w-full flex justify-center" id="kontakt">
          <div className="max-w-7xl w-full px-6 md:px-12 grid md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <span className="text-gold font-script text-3xl block mb-2" id="contact-title">Zapraszamy</span>
              <h2 className="text-4xl md:text-5xl text-charcoal mb-10">Bądźmy w kontakcie</h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-ivory text-gold rounded-full transition-colors group-hover:bg-gold group-hover:text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-sans uppercase tracking-widest text-xs mb-1">Adres</h4>
                    <p className="text-taupe text-lg">Walentynów 96, 27-100 Iłża</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-ivory text-gold rounded-full transition-colors group-hover:bg-gold group-hover:text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-sans uppercase tracking-widest text-xs mb-1">Telefon</h4>
                    <a href="tel:+48123456789" className="text-taupe text-lg hover:text-gold transition-colors">+48 123 456 789</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-ivory text-gold rounded-full transition-colors group-hover:bg-gold group-hover:text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-sans uppercase tracking-widest text-xs mb-1">Email</h4>
                    <a href="mailto:kontakt@nowydwor.pl" className="text-taupe text-lg hover:text-gold transition-colors">kontakt@nowydwor.pl</a>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="https://www.facebook.com/domweselnynowydworwalentynow" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center space-x-4 px-8 py-4 bg-[#1877F2] text-white rounded-sm hover:-translate-y-1 transition-all shadow-lg shadow-[#1877F2]/20"
                    id="fb-btn"
                  >
                    <Facebook size={24} />
                    <span className="tracking-widest uppercase text-xs font-bold">Obserwuj nas na Facebooku</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[500px] w-full rounded-sm overflow-hidden shadow-2xl border border-gold/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.275847045527!2d21.24564687706243!3d51.213993932094574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47186925ac9b3391%3A0x8c69a96b9f6b7024!2sWalentyn\u00f3w%2096%2C%2027-100%20Walentyn\u00f3w!5e0!3m2!1spl!2spl!4v1779191074394!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Map"
                id="google-map"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gold/10 py-16 flex flex-col items-center">
        <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <span className="font-serif text-3xl text-charcoal">Nowy Dwór</span>
            <p className="text-gold font-sans tracking-[0.2em] text-[10px] uppercase mt-1">Walentynów</p>
          </div>
          
          <div className="flex space-x-8 mb-8 md:mb-0">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-taupe hover:text-gold text-xs uppercase tracking-widest transition-colors font-medium">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
             <a href="https://www.facebook.com/domweselnynowydworwalentynow" target="_blank" rel="noreferrer" className="p-2 text-taupe hover:text-gold transition-colors">
                <Facebook size={20} />
             </a>
          </div>
        </div>
        
        <div className="mt-16 text-taupe/50 text-[10px] uppercase tracking-[0.3em] font-light">
          &copy; {new Date().getFullYear()} Dom Weselny Nowy Dwór. Wszystkie prawa zastrzeżone.
        </div>
      </footer>

      {/* Scroll to top decorative element */}
      <motion.button 
        className={`fixed bottom-8 right-8 z-50 p-4 bg-white border border-gold/20 text-gold rounded-full shadow-lg transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -5 }}
      >
        <span className="sr-only">Wróć na górę</span>
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>
    </div>
  );
}
