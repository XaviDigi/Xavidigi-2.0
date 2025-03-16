import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { gradientText } from "@/lib/utils";

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onLinkClick: () => void;
}

export default function MobileMenu({ items, isOpen, onLinkClick }: MobileMenuProps) {
  const [location] = useLocation();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-black/90 backdrop-blur-md w-full border-t border-cyan-500/20"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <span 
                      className={`block py-2 transition duration-300 cursor-pointer ${
                        location === item.path ? "text-gradient font-bold" : "text-white hover:text-cyan-300"
                      }`}
                      onClick={onLinkClick}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
