import { ReactNode } from "react";
import MainNavigation from "@/components/MainNavigation";
import SocialLinks from "@/components/SocialLinks";
import Logo from "@/components/Logo";
import { gradientText } from "@/lib/utils";
import { useLanguage } from "@/lib/languageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface MainLayoutProps {
  children: ReactNode;
  onNavigate?: (section: string) => void;
}

export default function MainLayout({ children, onNavigate }: MainLayoutProps) {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="fixed top-4 right-4 z-50 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg border border-zinc-800 shadow-lg">
        <LanguageSwitcher />
      </div>
      <MainNavigation onNavigate={onNavigate} />
      <main className="flex-grow pt-16">{children}</main>
      <footer className="bg-zinc-900/80 border-t border-cyan-500/20 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="mb-2">
                <Logo />
              </div>
              <p className="text-gray-400 mt-2 text-sm">Turning ideas into digital reality</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => onNavigate?.('home-section')}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => onNavigate?.('about-section')}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => onNavigate?.('services-section')}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {t.nav.services}
              </button>
              <button 
                onClick={() => onNavigate?.('portfolio-section')}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {t.nav.portfolio}
              </button>
              <button 
                onClick={() => onNavigate?.('contact-section')}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {t.nav.contact}
              </button>
            </div>
            
            <div className="mt-6 md:mt-0">
              <SocialLinks />
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} <span className={gradientText}>XaviDigi</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
