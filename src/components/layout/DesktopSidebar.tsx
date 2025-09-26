
import { Briefcase, Settings, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";


interface DesktopSidebarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const navigationItems = [
  { id: "portfolio", title: "Portfolio", icon: Briefcase },
  { id: "resume", title: "Resume", icon: FileText },
  { id: "services", title: "Services", icon: Settings },
];

export const DesktopSidebar = ({ activeSection, scrollToSection }: DesktopSidebarProps) => {
  return (
    <Sidebar className="hidden md:flex border-r-2 border-yellow-400">
      <SidebarContent className="p-8 pt-20">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-8">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.id)}
                    className={`h-auto p-6 justify-start text-left hover:bg-transparent transition-all duration-300 border-0 ${
                      activeSection === item.id
                        ? "transform scale-150 opacity-100"
                        : "opacity-70 hover:opacity-90"
                    }`}
                  >
                    <item.icon className="w-6 h-6 mr-4 text-yellow-600" />
                    <span className="text-xl font-thin tracking-wide text-gray-800">
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
