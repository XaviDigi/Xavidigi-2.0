import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { gradientBg } from "@/lib/utils";

interface SocialLinksProps {
  variant?: "footer" | "contact";
}

export default function SocialLinks({ variant = "footer" }: SocialLinksProps) {
  const isFooter = variant === "footer";
  
  const links = [
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaYoutube, href: "https://youtube.com" },
  ];

  return (
    <div className={`flex ${isFooter ? "space-x-4" : "space-x-6"}`}>
      {links.map((link, index) => (
        <div
          key={index}
          className="relative group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/60 to-purple-600/60 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isFooter
                ? "w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white relative transition duration-300"
                : `w-10 h-10 bg-zinc-900 border border-cyan-500/30 text-cyan-400 rounded-full 
                   flex items-center justify-center transition duration-300 relative z-10
                   hover:border-cyan-400 hover:text-white`
            }
            aria-label={`Visit ${link.href}`}
          >
            <link.icon className={isFooter ? "text-base" : "text-lg"} />
          </a>
        </div>
      ))}
    </div>
  );
}
