import { ReactNode } from "react";
import MainNavigation from "@/components/MainNavigation";
import SocialLinks from "@/components/SocialLinks";
import { Link } from "wouter";
import Logo from "@/components/Logo";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      <main className="flex-grow">{children}</main>
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo />
              <p className="text-gray-400 mt-2">Turning ideas into digital reality</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <a className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-400 hover:text-white transition duration-300">About</a>
              </Link>
              <Link href="/services">
                <a className="text-gray-400 hover:text-white transition duration-300">Services</a>
              </Link>
              <Link href="/portfolio">
                <a className="text-gray-400 hover:text-white transition duration-300">Portfolio</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </Link>
            </div>
            
            <div className="mt-6 md:mt-0">
              <SocialLinks />
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} John Smith. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
