import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/languageContext";
import { Language } from "@/lib/translations";

// Language options with flags
const languages = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button 
          key={lang.code}
          variant={lang.code === language ? "default" : "outline"} 
          className={`flex items-center gap-1 px-2 py-1 ${
            lang.code === language 
              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white" 
              : "border-zinc-700 bg-black/50 text-white hover:bg-zinc-800"
          }`}
          onClick={() => setLanguage(lang.code as Language)}
          aria-label={`Switch to ${lang.name}`}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="text-xs font-medium uppercase">{lang.code}</span>
        </Button>
      ))}
    </div>
  );
}