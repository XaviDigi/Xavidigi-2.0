import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

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
          className="md:hidden bg-white w-full border-t border-gray-100"
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
                    <a 
                      className={`block py-2 hover:text-primary transition duration-300 ${
                        location === item.path ? "text-primary font-medium" : ""
                      }`}
                      onClick={onLinkClick}
                    >
                      {item.name}
                    </a>
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
