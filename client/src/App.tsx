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
import { Route } from 'react-router-dom'; // Import Route

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

          <div id="about-section">
            <About />
          </div>

          <Route path="/services/:id">
            {(params) => (
              <div id="services-section">
                <Services selectedServiceId={params.id} onClose={handleCloseServiceDetail} />
              </div>
            )}
          </Route>
          <Route path="/services">
            <div id="services-section">
              <Services onClose={handleCloseServiceDetail} />
            </div>
          </Route>

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