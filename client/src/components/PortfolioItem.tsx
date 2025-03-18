import { motion } from "framer-motion";
import { gradientBg, glowEffect } from "@/lib/utils";

export interface PortfolioItemProps {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

interface PortfolioItemComponentProps {
  item: PortfolioItemProps;
  index: number;
}

export default function PortfolioItem({ item, index }: PortfolioItemComponentProps) {
  return (
    <motion.div
      className="portfolio-item overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative futuristic-card overflow-hidden">
          <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0 z-20`}></div>
          <div className="relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs bg-zinc-900/80 border border-cyan-500/30 text-cyan-400 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {item.title}
              </h3>
              <div className="w-full h-px bg-cyan-500/30 mb-4 group-hover:bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
