import { useState, useEffect } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { gradientBg } from "@/lib/utils";
import { useLanguage } from "@/lib/languageContext";
import { Translations } from "@/lib/translations";

interface NavItem {
  name: string;
  section: string;
  translation: keyof Translations["nav"];
}

interface MainNavigationProps {
  onNavigate?: (section: string) => void;
}

export default function MainNavigation({ onNavigate }: MainNavigationProps) {
  const { t } = useLanguage();
  const { nav } = t;

  const NAV_ITEMS: NavItem[] = [
    { name: nav.home, section: "home-section", translation: "home" },
    { name: nav.about, section: "about-section", translation: "about" },
    { name: nav.services, section: "services-section", translation: "services" },
    { name: nav.portfolio, section: "portfolio-section", translation: "portfolio" },
    { name: nav.contact, section: "contact-section", translation: "contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map(item => item.section);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
              <li key={`${item.toLowerCase()}-section`}>
                <button 
                  onClick={() => handleNavClick(`${item.toLowerCase()}-section`)}
                  className={`relative font-medium transition duration-300 cursor-pointer
                  ${activeSection === `${item.toLowerCase()}-section`
                    ? "text-gradient font-bold" 
                    : "text-white hover:text-cyan-300"
                  }`}
                >
                  {item}
                  {activeSection === `${item.toLowerCase()}-section` && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu 
        items={NAV_ITEMS.map(item => ({ name: item.name, section: item.section }))} 
        isOpen={isMobileMenuOpen} 
        onLinkClick={handleNavClick} 
        activeSection={activeSection}
      />
    </header>
  );
}