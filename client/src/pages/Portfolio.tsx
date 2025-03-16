import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PortfolioItem from "@/components/PortfolioItem";
import { portfolioItems } from "@/data/portfolio";
import { gradientText, gradientBg, glowEffect } from "@/lib/utils";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Websites", "E-commerce", "Apps", "Branding"];
  
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 mb-2 tracking-wider uppercase font-medium">Featured Work</p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientText}`}>My Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A selection of my recent work across various industries and platforms
          </p>
        </motion.div>
        
        {/* Portfolio Filter */}
        <motion.div
          className="flex flex-wrap justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`m-2 px-4 py-2 rounded-md transition duration-300 ${
                filter === category
                  ? `${gradientBg} text-white`
                  : "bg-zinc-900/50 text-gray-300 hover:bg-zinc-800 border border-cyan-500/20"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <Button 
              size="lg" 
              className={`${gradientBg} border border-white/10 text-white hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              Let's Work Together
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
