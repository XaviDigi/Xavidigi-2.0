import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "wouter";
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
  const [, setLocation] = useLocation();

  if (variant === "featured") {
    return (
      <motion.div
        className={`futuristic-card ${glowEffect} h-[300px] cursor-pointer`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        onClick={() => {
          const servicesSection = document.getElementById('services-section');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
            setLocation(`/services/${service.id}`);
          }
        }}
      >
        <div className={`${gradientBg} h-1`}></div>
        <div className="flex flex-col items-center justify-center h-full p-6 text-center relative z-10">
          <service.icon className="w-20 h-20 text-cyan-400 mb-6" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold text-gradient mb-2">{service.title}</h3>
        </div>
      </motion.div>
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
      </div>
    </motion.div>
  );
}