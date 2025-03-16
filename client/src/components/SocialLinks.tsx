import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

interface SocialLinksProps {
  variant?: "footer" | "contact";
}

export default function SocialLinks({ variant = "footer" }: SocialLinksProps) {
  const isFooter = variant === "footer";
  
  const links = [
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaGithub, href: "https://github.com" },
    { icon: FaDribbble, href: "https://dribbble.com" },
  ];

  return (
    <div className={`flex ${isFooter ? "space-x-4" : "space-x-4"}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isFooter
              ? "text-gray-400 hover:text-white transition duration-300"
              : "w-10 h-10 bg-gray-200 hover:bg-primary text-gray-600 hover:text-white rounded-full flex items-center justify-center transition duration-300"
          }
          aria-label={`Visit ${link.href}`}
        >
          <link.icon className={isFooter ? "text-base" : "text-base"} />
        </a>
      ))}
    </div>
  );
}
