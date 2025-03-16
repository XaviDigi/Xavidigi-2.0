import { motion } from "framer-motion";

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
      className="portfolio-item rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative group">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="text-white text-xl font-heading font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-white text-sm mb-4">{item.tags.join(", ")}</p>
            <a
              href="#"
              className="inline-block bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
