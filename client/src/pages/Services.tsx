import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { gradientText, gradientBg } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

interface ServicesProps {
  selectedServiceId?: string | null;
  onClose?: () => void;
}

export default function Services({ selectedServiceId, onClose }: ServicesProps) {
  const [location, setLocation] = useLocation();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const serviceId = params.get('id') || selectedServiceId;

    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
        
        // Make sure the services section is visible if a service is selected
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setSelectedService(null);
    }
  }, [selectedServiceId, location]);

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

  // Service detail info
  const serviceDetails = {
    "website-creation": {
      detailedDescription: "I create custom, responsive websites designed to reflect your brand, engage visitors, and drive conversions. From simple business sites to complex web applications, I develop solutions optimized for performance, search engines, and user experience.",
      features: [
        "Responsive design that works on all devices",
        "SEO optimization for better visibility",
        "Fast loading times for improved user experience",
        "Custom animations and interactive elements",
        "Content Management Systems (WordPress, etc.)",
        "API integrations and custom functionality"
      ],
      caseStudy: {
        title: "Boutique E-commerce Platform",
        description: "Developed a custom e-commerce solution for a boutique clothing brand, increasing their online sales by 85% while reducing cart abandonment rates by 40%."
      }
    },
    "shopify-development": {
      detailedDescription: "I build high-performing Shopify stores that look great and convert visitors into customers. My Shopify development services include custom theme development, store setup and configuration, product research, and conversion optimization.",
      features: [
        "Custom Shopify theme development",
        "Product research and setup",
        "Payment gateway integration",
        "Shipping and tax configuration",
        "App integration for extended functionality",
        "Conversion rate optimization"
      ],
      caseStudy: {
        title: "Health Products Store Relaunch",
        description: "Redesigned and optimized a health products Shopify store, implementing advanced product filtering and recommendations, resulting in a 62% increase in average order value."
      }
    },
    "social-media": {
      detailedDescription: "I develop custom social media automation systems that save you time while maintaining a consistent online presence. From content scheduling to engagement tracking, my solutions help you manage your social media more efficiently.",
      features: [
        "Content creation and scheduling",
        "Cross-platform posting automation",
        "Audience engagement tracking",
        "Analytics and performance reporting",
        "Hashtag research and optimization",
        "AI-powered content suggestions"
      ],
      caseStudy: {
        title: "Restaurant Chain Social Media Automation",
        description: "Created an automated social media system for a restaurant chain with 12 locations, increasing engagement by 120% while reducing management time by 70%."
      }
    },
    "ai-agents": {
      detailedDescription: "I specialize in creating custom AI agents that can automate tasks, enhance customer interactions, and provide personalized experiences. Using advanced AI models and integration techniques, I build intelligent assistants that work across various platforms to improve efficiency and user engagement.",
      features: [
        "Customer service chatbots with natural language understanding",
        "Lead generation and qualification agents",
        "Content creation assistants for blogs and social media",
        "Data analysis and insight generation agents",
        "Personalized recommendation systems",
        "Process automation for repetitive business tasks"
      ],
      caseStudy: {
        title: "E-commerce Customer Service Agent",
        description: "Developed an AI customer service agent for an online retailer that handled 78% of customer inquiries automatically, reducing response time from 2 hours to 2 minutes and increasing customer satisfaction by 35%."
      }
    },
    "photo-video": {
      detailedDescription: "I provide professional photo and video editing services to enhance your visual content for marketing, social media, and branding. From basic retouching to complex compositing, I create visually stunning imagery that captivates your audience.",
      features: [
        "Photo retouching and enhancement",
        "Color correction and grading",
        "Product photo optimization",
        "Video editing and post-production",
        "Motion graphics and animations",
        "Social media-optimized content creation"
      ],
      caseStudy: {
        title: "Product Catalog Visualization",
        description: "Transformed product photography for an online retailer's catalog of 200+ items, creating consistent, professional imagery that increased click-through rates by 45%."
      }
    }
  };

  const getServiceDetail = (serviceId: string) => {
    return serviceDetails[serviceId as keyof typeof serviceDetails];
  };

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

          <AnimatePresence>
            {selectedService ? (
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <button 
                  onClick={() => {
                    if (onClose) {
                      onClose();
                    } else {
                      setSelectedService(null);
                      // Remove the id parameter from the URL
                      setLocation('/services');
                    }
                  }}
                  className="absolute right-4 top-4 bg-zinc-800/80 p-2 rounded-full hover:bg-zinc-700 transition-colors duration-200 z-20"
                >
                  <X className="h-5 w-5 text-cyan-400" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg blur-lg opacity-75"></div>
                    <div className="relative futuristic-card p-8 overflow-hidden h-full">
                      <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0`}></div>

                      <div className="flex items-center mb-6">
                        <selectedService.icon className="h-12 w-12 text-cyan-400 mr-4" />
                        <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                      </div>

                      <p className="text-gray-300 mb-8">
                        {getServiceDetail(selectedService.id).detailedDescription}
                      </p>

                      <h4 className="text-xl font-bold text-gradient mb-4">Features & Benefits</h4>
                      <ul className="space-y-3 mb-8">
                        {getServiceDetail(selectedService.id).features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-300">{feature}</p>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        className={`${gradientBg} mt-4 border border-white/10 text-white hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-lg`}
                        onClick={() => {
                          const contactSection = document.getElementById('contact-section');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg blur-lg opacity-75"></div>
                    <div className="relative futuristic-card p-8 overflow-hidden h-full">
                      <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0`}></div>

                      <h3 className="text-2xl font-bold text-gradient mb-6">Case Study</h3>
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-white mb-3">
                          {getServiceDetail(selectedService.id).caseStudy.title}
                        </h4>
                        <p className="text-gray-300">
                          {getServiceDetail(selectedService.id).caseStudy.description}
                        </p>
                      </div>

                      <h4 className="text-xl font-bold text-gradient mb-4">The Process</h4>
                      <div className="space-y-6">
                        {processSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 border border-cyan-500/40 mr-3">
                              <span className="text-cyan-400 text-sm font-bold">{idx + 1}</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-white">{step.title}</h5>
                              <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {!selectedService && (
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
                  <button 
                    className="group inline-flex items-center text-cyan-400 font-medium cursor-pointer"
                    onClick={() => {
                      const contactSection = document.getElementById('contact-section');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Ready to start a project? 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
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
                      <p className="text-gray-300">Strategic approach with focus on ROI</p>
                    </div>
                    <div className="futuristic-card p-4 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                      <p className="text-gray-300">Modern technologies and best practices</p>
                    </div>
                    <div className="futuristic-card p-4 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                      <p className="text-gray-300">Transparent communication throughout</p>
                    </div>
                    <div className="futuristic-card p-4 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                      <p className="text-gray-300">Tailored solutions for specific needs</p>
                    </div>
                    <div className="futuristic-card p-4 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4"></div>
                      <p className="text-gray-300">Ongoing support and optimization</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}