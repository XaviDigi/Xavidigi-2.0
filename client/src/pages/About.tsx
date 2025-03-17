import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cpu, BarChart, Zap, Code2, TrendingUp, Briefcase } from "lucide-react";
import { gradientText, gradientBg, glowEffect } from "@/lib/utils";

export default function About() {
  const skills = [
    {
      name: "Web Development",
      icon: Code2,
      description: "Expert in creating responsive, performant websites with modern frameworks"
    },
    {
      name: "E-commerce",
      icon: Briefcase,
      description: "Specialized in Shopify store development and optimization for conversions"
    },
    {
      name: "Digital Marketing",
      icon: TrendingUp,
      description: "Strategic implementation of digital marketing campaigns and analytics"
    },
    {
      name: "Automation",
      icon: Zap,
      description: "Building social media and business process automation solutions"
    },
    {
      name: "UI/UX Design",
      icon: Cpu,
      description: "Creating intuitive interfaces with attention to user experience"
    },
    {
      name: "Analytics",
      icon: BarChart,
      description: "Data-driven approach to measuring and optimizing digital performance"
    }
  ];

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
          <p className="text-cyan-400 mb-2 tracking-wider uppercase font-medium">Who I Am</p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientText}`}>About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Digital innovator focused on creating captivating web experiences
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div
            className="w-full md:w-1/3 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg blur-lg opacity-75"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-purple-600/40 rounded-lg blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`${gradientBg} absolute -inset-0.5 rounded-lg blur-sm opacity-50`}></div>
              <div className="futuristic-card aspect-[3/4] overflow-hidden relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80"
                  alt="Xavier - Digital Creator"
                  className="rounded-md object-cover h-full w-full"
                />
              </div>
            </div>
          </motion.div>
          
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                I'm <span className={gradientText}>Xavier</span>, Digital Creator & Web Specialist
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a passion for digital innovation and technical expertise, I create cutting-edge web experiences that help businesses thrive in the digital space. My approach combines creativity with strategic thinking to deliver solutions that not only look impressive but also generate real results.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in web creation, Shopify store development, social media automation, and digital content creation. My background in both design and development allows me to bridge the gap between aesthetics and functionality, creating digital experiences that engage users and convert visitors into customers.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="futuristic-card p-4 flex items-start space-x-3 hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-2 rounded-md">
                    <skill.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{skill.name}</h4>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className={`${gradientBg} border border-white/10 text-white hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-lg`}
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-white hover:border-cyan-400 shadow-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
