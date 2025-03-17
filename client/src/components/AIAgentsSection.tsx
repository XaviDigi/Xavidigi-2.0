import { motion } from "framer-motion";
import { gradientText, gradientBg } from "@/lib/utils";
import { BotIcon, BrainCircuitIcon, MessageSquareTextIcon, DatabaseIcon, PencilRulerIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AgentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  useCases: string[];
  industry: string;
  index: number;
}

const AgentCard = ({ icon, title, description, useCases, industry, index }: AgentCardProps) => {
  return (
    <motion.div
      className="relative bg-zinc-900/70 rounded-lg border border-cyan-500/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-md bg-cyan-900/30 mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-gradient font-semibold mb-2 text-sm">Common Use Cases:</h4>
          <ul className="text-gray-300 text-sm">
            {useCases.map((useCase, idx) => (
              <li key={idx} className="flex items-start mb-1">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></div>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-cyan-400">
            {industry}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AIAgentsSection() {
  const agents = [
    {
      icon: <MessageSquareTextIcon className="h-6 w-6 text-cyan-400" />,
      title: "Customer Service Bot",
      description: "An AI assistant that handles customer inquiries, provides product information, and troubleshoots common issues 24/7.",
      useCases: [
        "Answering FAQs automatically",
        "Processing return requests",
        "Collecting customer feedback",
        "Escalating complex issues to human agents"
      ],
      industry: "E-commerce & Retail"
    },
    {
      icon: <DatabaseIcon className="h-6 w-6 text-cyan-400" />,
      title: "Data Analysis Agent",
      description: "A data-focused AI that sifts through large datasets to provide insights, generate reports, and identify trends.",
      useCases: [
        "Market trend analysis",
        "Performance reporting",
        "Competitive intelligence gathering",
        "Anomaly detection in sales data"
      ],
      industry: "Finance & Business Intelligence"
    },
    {
      icon: <PencilRulerIcon className="h-6 w-6 text-cyan-400" />,
      title: "Content Creation Assistant",
      description: "A creative AI partner that helps generate blog posts, social media content, and marketing materials.",
      useCases: [
        "Blog post writing and editing",
        "Social media caption generation",
        "Email newsletter drafting",
        "Product description creation"
      ],
      industry: "Marketing & Media"
    },
    {
      icon: <ShoppingCartIcon className="h-6 w-6 text-cyan-400" />,
      title: "Product Recommendation Engine",
      description: "A personalization AI that suggests relevant products based on user behavior, preferences, and purchase history.",
      useCases: [
        "Personalized product recommendations",
        "Cross-selling and upselling",
        "Seasonal product highlights",
        "Abandoned cart recovery"
      ],
      industry: "E-commerce & Retail"
    },
    {
      icon: <BrainCircuitIcon className="h-6 w-6 text-cyan-400" />,
      title: "Workflow Automation Agent",
      description: "A process-oriented AI that streamlines business operations by automating repetitive tasks and managing workflows.",
      useCases: [
        "Appointment scheduling",
        "Document processing and extraction",
        "Inventory management",
        "Task assignment and tracking"
      ],
      industry: "Operations & HR"
    },
    {
      icon: <BotIcon className="h-6 w-6 text-cyan-400" />,
      title: "Educational Tutor",
      description: "An AI learning companion that provides personalized instruction, answers questions, and creates educational content.",
      useCases: [
        "Personalized learning paths",
        "Homework assistance",
        "Quiz and exercise generation",
        "Concept explanation and simplification"
      ],
      industry: "Education & Training"
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
          <p className="text-cyan-400 mb-2 tracking-wider uppercase font-medium">AI Solutions</p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientText}`}>Custom AI Agents</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I create intelligent AI agents that automate tasks, enhance customer experiences, and provide powerful business solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              icon={agent.icon}
              title={agent.title}
              description={agent.description}
              useCases={agent.useCases}
              industry={agent.industry}
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
              const servicesSection = document.getElementById('services-section');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore AI Agent Services
          </Button>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Each AI agent is custom-built to integrate seamlessly with your existing systems and workflows, creating a tailored solution that addresses your specific business needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}