import { 
  MonitorIcon, 
  ShoppingCartIcon, 
  ShareIcon, 
  ImageIcon, 
  SmartphoneIcon, 
  SearchIcon 
} from "lucide-react";
import { ServiceProps } from "@/components/ServiceCard";

export const services: ServiceProps[] = [
  {
    id: "website-creation",
    icon: MonitorIcon,
    title: "Website Creation",
    description: "Custom websites built from scratch, including business sites, e-commerce platforms, and personal blogs optimized for performance and search engines."
  },
  {
    id: "shopify-development",
    icon: ShoppingCartIcon,
    title: "Shopify Store Development",
    description: "Complete Shopify store setup with researched winning products, optimized design, and customer-focused user experience to maximize conversions."
  },
  {
    id: "social-media",
    icon: ShareIcon,
    title: "Social Media Automation",
    description: "Streamlined social media management with automated scheduling, content creation, and engagement strategies to maintain a consistent online presence."
  },
  {
    id: "photo-video",
    icon: ImageIcon,
    title: "Photo & Video Editing",
    description: "Professional editing services for photos and videos, including color correction, retouching, and post-production for content creation and marketing."
  },
  {
    id: "app-development",
    icon: SmartphoneIcon,
    title: "App Development",
    description: "Custom mobile and web application development for various platforms, featuring intuitive interfaces, robust functionality, and seamless user experiences."
  },
  {
    id: "seo-optimization",
    icon: SearchIcon,
    title: "SEO Optimization",
    description: "Comprehensive search engine optimization to improve visibility, increase organic traffic, and enhance your website's ranking on search results."
  }
];
