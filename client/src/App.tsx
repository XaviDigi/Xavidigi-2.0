import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import MainLayout from "@/layouts/MainLayout";
import { services } from "@/data/services";

function App() {
  // Modal state for service details
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    // Scroll to services section
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleCloseServiceDetail = () => {
    setSelectedService(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout onNavigate={(section) => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        <div className="scroll-smooth">
          <div id="home-section">
            <Home onServiceClick={handleServiceClick} />
          </div>
          
          <div id="services-section">
            <Services selectedServiceId={selectedService} onClose={handleCloseServiceDetail} />
          </div>
          
          <div id="about-section">
            <About />
          </div>
          
          <div id="portfolio-section">
            <Portfolio />
          </div>
          
          <div id="contact-section">
            <Contact />
          </div>
        </div>
      </MainLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
