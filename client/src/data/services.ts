import { 
  MonitorIcon, 
  ShoppingCartIcon, 
  ShareIcon, 
  ImageIcon 
} from "lucide-react";
import { ServiceProps } from "@/components/ServiceCard";

export const services: ServiceProps[] = [
  {
    id: "website-creation",
    icon: MonitorIcon,
    title: "Web Creation",
    description: "Custom websites built from scratch, including business sites, e-commerce platforms, and personal blogs optimized for performance and search engines.",
    featured: true
  },
  {
    id: "shopify-development",
    icon: ShoppingCartIcon,
    title: "Shopify Store Development",
    description: "Complete Shopify store setup with researched winning products, optimized design, and customer-focused user experience to maximize conversions.",
    featured: true
  },
  {
    id: "social-media",
    icon: ShareIcon,
    title: "Social Media Automation",
    description: "Streamlined social media management with automated scheduling, content creation, and engagement strategies to maintain a consistent online presence.",
    featured: true
  },
  {
    id: "photo-video",
    icon: ImageIcon,
    title: "Photo & Video Editing",
    description: "Professional editing services for photos and videos, including color correction, retouching, and post-production for content creation and marketing.",
    featured: true
  }
];
