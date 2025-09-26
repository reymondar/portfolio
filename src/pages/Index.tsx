
import { useState, useEffect } from "react";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection, PersonalPortfoliosSection } from "@/components/sections/PortfolioSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Initialize scroll animations
  useScrollAnimation();

  const navigationItems = [
    { id: "about", title: "About" },
    { id: "portfolio", title: "Portfolio" },
    { id: "resume", title: "Resume" },
    { id: "services", title: "Services" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll detection to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar visibility based on scroll direction
  useEffect(() => {
    const handleNavbarScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleNavbarScroll);
    return () => window.removeEventListener('scroll', handleNavbarScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen w-full">
      <TopNavbar 
        isVisible={isNavVisible}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="min-h-screen pt-16">
        <AboutSection />
        <PortfolioSection />
        <PersonalPortfoliosSection />
        <ResumeSection />
        <ServicesSection />
      </main>
    </div>
  );
};

export default Index;
