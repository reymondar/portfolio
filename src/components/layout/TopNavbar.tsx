import { useState, useEffect } from "react";
import { Briefcase, Settings, FileText } from "lucide-react";


interface TopNavbarProps {
  isVisible: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const navigationItems = [
  { id: "about", title: "About", icon: null },
  { id: "portfolio", title: "Portfolio", icon: Briefcase },
  { id: "resume", title: "Resume", icon: FileText },
  { id: "services", title: "Services", icon: Settings },
];

export const TopNavbar = ({ isVisible, activeSection, scrollToSection }: TopNavbarProps) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};