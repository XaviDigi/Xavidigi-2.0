import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Link } from "wouter";
import { gradientText, gradientBg } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "I'll learn about your business goals, target audience, and specific needs to create a tailored approach."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Based on your requirements, I'll develop a strategic plan with clear deliverables and timelines."
    },
    {
      number: "03",
      title: "Creation",
      description: "With a plan in place, I'll bring your digital project to life with cutting-edge technology and design."
    },
    {
      number: "04",
      title: "Refinement",
      description: "I'll refine the solution based on your feedback to ensure it meets all your expectations."
    }
  ];

  return (
    <>
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
            <p className="text-cyan-400 mb-2 tracking-wider uppercase font-medium">What I Offer</p>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientText}`}>My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Premium digital solutions to elevate your brand and online presence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 relative bg-zinc-900/70">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-cyan-400 mb-2 tracking-wider uppercase font-medium">My Process</p>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientText}`}>How I Work</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                My streamlined process ensures your project moves efficiently from concept to completion. I focus on clear communication, strategic planning, and meticulous execution to deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-1 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`font-bold text-4xl ${gradientText}`}>{step.number}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/contact">
                  <div className="group inline-flex items-center text-cyan-400 font-medium cursor-pointer">
                    Ready to start a project? 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg blur-lg opacity-75"></div>
              <div className="relative futuristic-card p-8 overflow-hidden">
                <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0`}></div>
                <h3 className="text-2xl font-bold mb-6 text-gradient">Why Work With Me</h3>
                
                <div className="space-y-4">
                  <div className="futuristic-card p-4 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                    <p className="text-gray-300">Personalized approach to each project</p>
                  </div>
                  
                  <div className="futuristic-card p-4 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                    <p className="text-gray-300">Cutting-edge technology and design</p>
                  </div>
                  
                  <div className="futuristic-card p-4 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                    <p className="text-gray-300">Focus on results and measurable outcomes</p>
                  </div>
                  
                  <div className="futuristic-card p-4 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                    <p className="text-gray-300">Continuous support and communication</p>
                  </div>
                  
                  <div className="futuristic-card p-4 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                    <p className="text-gray-300">Adaptable to changing requirements</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
