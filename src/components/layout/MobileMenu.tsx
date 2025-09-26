
import { User, Briefcase, Settings, FileText } from "lucide-react";

interface MobileMenuProps {
  isMenuVisible: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const navigationItems = [
  { id: "about", title: "Myself", icon: User },
  { id: "portfolio", title: "Portfolio", icon: Briefcase },
  { id: "resume", title: "Resume", icon: FileText },
  { id: "services", title: "Services", icon: Settings },
];

export const MobileMenu = ({ isMenuVisible, activeSection, scrollToSection }: MobileMenuProps) => {
  return (
    <div 
      className={`md:hidden fixed top-0 left-0 right-0 z-50 border-b-2 border-yellow-400 bg-gradient-to-r from-orange-50/50 to-white/50 p-4 transition-transform duration-300 ${
        isMenuVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-center space-x-8">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center justify-center py-3 px-4 transition-all duration-300 ${
              activeSection === item.id
                ? "transform scale-150 opacity-100"
                : "opacity-70"
            }`}
          >
            <item.icon className="w-5 h-5 text-yellow-600" />
            <span 
              className={`text-sm font-thin tracking-wide text-gray-800 mt-2 transition-all duration-300 ${
                activeSection === item.id 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-1 absolute"
              }`}
            >
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
