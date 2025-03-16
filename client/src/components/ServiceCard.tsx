import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { gradientBg, glowEffect } from "@/lib/utils";

export interface ServiceProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

interface ServiceCardProps {
  service: ServiceProps;
  index: number;
  variant?: "grid" | "featured";
}

export default function ServiceCard({ service, index, variant = "grid" }: ServiceCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/services/${service.id}`}>
        <motion.div
          className={`futuristic-card ${glowEffect} h-[300px] cursor-pointer`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <div className={`${gradientBg} h-1`}></div>
          <div className="flex flex-col items-center justify-center h-full p-6 text-center relative z-10">
            <service.icon className="w-20 h-20 text-cyan-400 mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-gradient mb-2">{service.title}</h3>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      className="futuristic-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`${gradientBg} h-1`}></div>
      <div className="p-6">
        <div className="w-14 h-14 bg-black/30 rounded-md flex items-center justify-center mb-4 border border-cyan-500/30">
          <service.icon className="text-cyan-400" size={24} />
        </div>
        <h3 className="text-xl font-bold text-gradient mb-3">{service.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
        <Link href={`/services/${service.id}`}>
          <div className="text-cyan-400 font-medium hover:text-purple-400 transition duration-300 flex items-center cursor-pointer">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
