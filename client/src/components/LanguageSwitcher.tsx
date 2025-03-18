import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/languageContext";
import { Language } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

// Language options with flags
const languages = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  // Get current language info
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-8 w-8 p-0 rounded-full hover:bg-zinc-800/70 focus:bg-zinc-800/70"
          aria-label="Change language"
        >
          <motion.span 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentLanguage.code}
          >
            {currentLanguage.flag}
          </motion.span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center gap-2 cursor-pointer hover:bg-zinc-800 ${
              lang.code === language ? 'bg-zinc-800' : ''
            }`}
            onClick={() => setLanguage(lang.code as Language)}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}