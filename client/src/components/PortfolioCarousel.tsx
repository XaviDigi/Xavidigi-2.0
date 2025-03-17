import { motion } from "framer-motion";
import { gradientText, gradientBg } from "@/lib/utils";
import { ExternalLink, Github, Code, PenTool, Globe, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, image, demoLink, repoLink, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="relative bg-zinc-900/70 rounded-lg border border-cyan-500/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0`}></div>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-zinc-800 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 text-cyan-400 hover:bg-zinc-700 px-3 py-1.5 rounded flex items-center space-x-1 transition-colors duration-200"
            >
              <ExternalLink size={14} />
              <span className="text-xs">Demo</span>
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 text-cyan-400 hover:bg-zinc-700 px-3 py-1.5 rounded flex items-center space-x-1 transition-colors duration-200"
            >
              <Github size={14} />
              <span className="text-xs">Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioCarousel() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform built with React and Node.js. Features include product search, filtering, user accounts, and secure checkout.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio website created for a photographer, featuring image galleries, contact form, and blog functionality.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      demoLink: "#"
    }
  ];

  return (
    <section className="py-20 relative bg-zinc-900/70">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 mb-2 tracking-wider uppercase font-medium">My Work</p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientText}`}>Portfolio Showcase</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Showcasing some of my best work and digital creations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className={`${gradientBg} mt-8 border border-white/10 text-white hover:shadow-glow hover:scale-105 transition-all duration-300 shadow-lg`}
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}