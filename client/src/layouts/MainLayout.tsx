import { ReactNode } from "react";
import MainNavigation from "@/components/MainNavigation";
import SocialLinks from "@/components/SocialLinks";
import { Link } from "wouter";
import Logo from "@/components/Logo";
import { gradientText } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <MainNavigation />
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
              <Link href="/">
                <a className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer">About</a>
              </Link>
              <Link href="/services">
                <a className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer">Services</a>
              </Link>
              <Link href="/portfolio">
                <a className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer">Portfolio</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer">Contact</a>
              </Link>
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
