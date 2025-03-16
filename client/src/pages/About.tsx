import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  const skills = [
    "Responsive Web Design",
    "E-commerce Development",
    "UI/UX Design",
    "Mobile App Development",
    "Social Media Automation",
    "Photo & Video Editing",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get to know the person behind the code and designs.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80"
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full max-w-xs mx-auto"
            />
          </motion.div>
          
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">
                I'm <span className="text-primary">John Smith</span>, Web Developer & Digital Specialist
              </h3>
              <p className="text-gray-600 mb-6">
                With over 7 years of experience in web development and digital services, I've helped businesses of all sizes establish their online presence and achieve their digital goals. My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also perform exceptionally well.
              </p>
              <p className="text-gray-600 mb-6">
                I specialize in creating custom websites, Shopify stores, and applications that are tailored to meet specific business needs. My background in both front-end and back-end development, coupled with my design sensibilities, allows me to create cohesive digital experiences from concept to deployment.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{skill}</span>
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
              <Link href="/services">
                <Button size="lg" className="shadow-md">
                  My Services
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
