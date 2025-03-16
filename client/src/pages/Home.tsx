import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { gradientText, gradientBg, glowEffect } from "@/lib/utils";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
        <div className="absolute inset-0 opacity-30 z-0 bg-grid-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div 
              className="w-full md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Turning <span className={gradientText}>Ideas</span> Into Digital <span className={gradientText}>Reality</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                Xavier's digital studio specializing in custom websites, Shopify stores, social media automation, and digital content that drives results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio">
                  <Button 
                    size="lg" 
                    className={`${gradientBg} border border-white/10 text-white hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    View My Work
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-white hover:border-cyan-400 shadow-lg"
                  >
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg blur-xl opacity-75"></div>
              <div className="relative bg-zinc-900/90 border border-cyan-500/30 backdrop-blur-sm rounded-lg p-5 shadow-xl">
                <div className="flex items-center space-x-1 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-2 text-xs text-gray-400 font-mono">~/XaviDigi/projects</div>
                </div>
                <div className="p-3 bg-black/50 rounded font-mono text-xs sm:text-sm text-gray-300 overflow-hidden">
                  <p><span className="text-cyan-400">xavier</span><span className="text-gray-500">@</span><span className="text-purple-400">xavidigi</span> <span className="text-gray-500">$</span> creating digital experiences...</p>
                  <p className="my-2"><span className="text-cyan-400">&gt;</span> Web Creation</p>
                  <p className="my-2"><span className="text-cyan-400">&gt;</span> Shopify Store Development</p>
                  <p className="my-2"><span className="text-cyan-400">&gt;</span> Social Media Automation</p>
                  <p className="my-2"><span className="text-cyan-400">&gt;</span> Photo &amp; Video Editing</p>
                  <p className="mt-4 animate-pulse"><span className="text-cyan-400">&gt;</span> <span className="text-gradient">Ready to transform your digital presence...</span> <span className="inline-block animate-pulse">|</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${gradientText}`}>My Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Premium digital solutions to elevate your brand and online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.filter(service => service.featured).map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
