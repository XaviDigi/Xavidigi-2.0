import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Link } from "wouter";

export interface ServiceProps {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceProps;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      className="service-card bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-6">
        <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <service.icon className="text-2xl text-primary" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link href="/contact">
          <a className="text-primary font-medium hover:text-accent transition duration-300 flex items-center">
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
          </a>
        </Link>
      </div>
    </motion.div>
  );
}
