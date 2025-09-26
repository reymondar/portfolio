
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const portfolioProjects = [
  {
    id: "confetti",
    title: "Confetti",
    duration: "2025 - Present",
    date: "Businesses listing platform",
    overview: "Community Platform to Value, List & Sell Your Business Securely. Based from Figma designs, developed in collaboration with a SEO expert, designers, and another developer following industry best practices and modern development standards.",
    description: "Modern event management platform with ticket sales and analytics",
    website: "https://confettilist.com",
    backgroundImage: "/lovable-uploads/15e8ffbf-efa7-446a-8abf-59834af1de7d.png",
    screenshotImage: "/lovable-uploads/15e8ffbf-efa7-446a-8abf-59834af1de7d.png",
    stack: "Bubble.io",
    year: "2024",
    label: "Web App"
  },
  {
    id: "majella",
    title: "Majella",
    duration: "May 2025 - Present",
    date: "Event managing platform (MVP)",
    overview: "Innovative event platform that transforms passive participation into active contribution through gamification. It contains management tools and custom-made scheduler for specific client purposes.",
    description: "E-commerce platform with advanced filtering and personalized recommendations",
    website: "https://www.majella.io/",
    backgroundImage: "/lovable-uploads/f9242f8a-7873-4407-b249-053e798cf830.png",
    screenshotImage: "/lovable-uploads/f9242f8a-7873-4407-b249-053e798cf830.png",
    stack: "Bubble.io + n8n",
    year: "2025",
    label: "Web App"
  },
  {
    id: "solventiq",
    title: "SolventIQ",
    duration: "2025 - developing",
    date: "Legal automation platform",
    overview: "Digitally assisted and fully expert-checked, Insolv.io helps GmbH directors and legal teams file insolvencies with confidence powered by OpenAI's API",
    description: "SolventIQ is a web app - AI-powered legal platform for insolvency filing assistance",
    website: "https://confettilist.com/",
    backgroundImage: "/lovable-uploads/021cb275-25f3-4629-a852-5b93464abd7c.png",
    screenshotImage: "/lovable-uploads/021cb275-25f3-4629-a852-5b93464abd7c.png",
    stack: "Bubble.io + OpenAI + n8n",
    year: "2025",
    role: "Bubble.io Developer & Automation Specialist",
    label: "Web App"
  },
  {
    id: "jobs-in-next-tech",
    title: "Jobs in Next Tech",
    duration: "May - December 2024",
    date: "Recruitment platform",
    overview: "Online platform that aims to build the largest curated database of experts in fields such as immersive technologies (AR/VR), video games, artificial intelligence, Flutter development, and quantum computing. I integrated into this large-scale existing project, contributing to development based on established Figma design files and implementing workflow automation features. The project continues to evolve with ongoing enhancements.",
    description: "AI-powered job board connecting tech professionals with companies",
    website: "https://www.jobsinnexttech.com/",
    backgroundImage: "/lovable-uploads/f763b547-b729-4c3d-a4c3-068e1922468c.png",
    screenshotImage: "/lovable-uploads/f763b547-b729-4c3d-a4c3-068e1922468c.png",
    stack: "Bubble.io + Supabase + Zapier",
    year: "2024",
    label: "Website"
  },
  {
    id: "nit-charge",
    title: "Nit Charge",
    duration: "2023 - 2024",
    date: "Startup business website",
    overview: "Website page for startup business with 100 Lighthouse score report, designed and developed independently.",
    description: "High-performance startup website with perfect Lighthouse scores",
    website: "#",
    backgroundImage: "/lovable-uploads/6f477590-c2f7-42dc-807b-8ab3ab2bc532.png",
    screenshotImage: "/lovable-uploads/6f477590-c2f7-42dc-807b-8ab3ab2bc532.png",
    stack: "React.js + Vercel.js + Firestore",
    year: "2023",
    label: "Website",
    role: "Designer & Developer"
  },
  {
    id: "yonder",
    title: "Yonder",
    duration: "April - September 2024",
    date: "Real estate platform",
    overview: "Digital platform designed to simplify the process of building sustainable prefab homes in Portugal. Developed in collaboration with a designer, leveraging Google Maps API, Zillow integration, and implementing a scalable database architecture to provide comprehensive real estate solutions.",
    description: "Digital platform for sustainable prefab homes in Portugal",
    website: "https://liveyonder.co/index/?tab=Landing",
    backgroundImage: "/lovable-uploads/8482e624-7e98-4376-ad39-26448904581c.png",
    screenshotImage: "/lovable-uploads/8482e624-7e98-4376-ad39-26448904581c.png",
    stack: "Bubble.io + Airtable",
    year: "2024",
    role: "Frontend Developer",
    label: "Real Estate"
  },
  {
    id: "your-app",
    title: "Your App",
    duration: "2025",
    date: "Future collaboration",
    overview: "Ready to bring your vision to life. Let's discuss your next project and create something amazing together.",
    description: "Your next innovative project awaits",
    website: "#",
    backgroundImage: "/lovable-uploads/043ed011-9d8a-4e07-822a-71996344ae8d.png",
    screenshotImage: "/lovable-uploads/043ed011-9d8a-4e07-822a-71996344ae8d.png",
    stack: "Your Choice",
    year: "2025",
    label: "Your Project"
  }
];

export const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;
    if (!section || !carousel) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Check if we're in the horizontal scroll zone
      if (sectionTop <= 0 && rect.bottom > windowHeight) {
        const scrolled = Math.abs(sectionTop);
        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);
        
        setScrollProgress(progress);
        
        // Calculate horizontal scroll
        const carouselWidth = carousel.scrollWidth;
        const containerWidth = window.innerWidth;
        const maxHorizontalScroll = carouselWidth - containerWidth;
        const horizontalScroll = progress * maxHorizontalScroll;
        
        carousel.style.transform = `translateX(-${horizontalScroll}px)`;
      }
    };

    // Make section tall enough for horizontal scrolling
    const updateSectionHeight = () => {
      if (carousel) {
        const carouselWidth = carousel.scrollWidth;
        const extraHeight = Math.max(carouselWidth - window.innerWidth, 0);
        section.style.height = `${window.innerHeight * 2 + extraHeight}px`;
      }
    };

    // Initial setup
    setTimeout(updateSectionHeight, 100);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateSectionHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSectionHeight);
    };
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="relative">
      {/* Sticky container */}
      <div className="sticky top-0 w-full h-screen flex flex-col">
        {/* Title section */}
        <div className="px-8 md:px-16 py-4 md:py-8 flex-shrink-0">
          <h2 className="text-6xl md:text-8xl font-bold tracking-wide text-foreground">
            Top Projects
          </h2>
        </div>
        
        {/* Full-width carousel container */}
        <div className="flex-1 overflow-hidden w-full">
          <div 
            ref={carouselRef}
            className="flex gap-8 h-full items-center transition-transform duration-75 ease-out pl-8 md:pl-16"
            style={{ width: 'max-content' }}
          >
            {portfolioProjects.map((project) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`} 
                className="flex-shrink-0 group/card"
              >
                <div 
                  className="relative w-[280px] md:w-[400px] h-[320px] md:h-[450px] rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.backgroundImage})` }}
                >
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Stack, Year, Label overlay */}
                  <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col gap-1 md:gap-2 items-end">
                    <span className="px-2 py-1 md:px-3 md:py-1 bg-white/20 rounded-full text-xs text-white/90 backdrop-blur-sm">
                      {project.stack}
                    </span>
                    <span className="px-2 py-1 md:px-3 md:py-1 bg-white/20 rounded-full text-xs text-white/90 backdrop-blur-sm">
                      {project.year}
                    </span>
                    <span className="px-2 py-1 md:px-3 md:py-1 bg-white/20 rounded-full text-xs text-white/90 backdrop-blur-sm">
                      {project.label}
                    </span>
                  </div>
                  
                  {/* Hover description panel - only on desktop */}
                  <div className="hidden md:block absolute inset-0 bg-black/90 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-medium text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/90 mb-4 leading-relaxed">
                      {project.overview}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90 backdrop-blur-sm">
                        {project.stack}
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90 backdrop-blur-sm">
                        {project.year}
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90 backdrop-blur-sm">
                        {project.label}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {/* Add some padding at the end */}
            <div className="w-8 md:w-16 flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate Personal Portfolios Component
export const PersonalPortfoliosSection = () => {
  return (
    <section className="px-8 md:px-16 py-16 md:py-32">
      <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
        Personal Portfolios
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a 
          href="https://reymondar-projects.online/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-xl border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300 block"
        >
          <h4 className="text-xl md:text-2xl font-medium text-foreground mb-4">
            Bubble.io Portfolio
          </h4>
          <p className="text-base text-muted-foreground leading-relaxed flex items-center">
            View my Bubble.io projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </p>
        </a>
        <a 
          href="https://personal-portfolio-reymondar.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-xl border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300 block"
        >
          <h4 className="text-xl md:text-2xl font-medium text-foreground mb-4">
            React.js Portfolio
          </h4>
          <p className="text-base text-muted-foreground leading-relaxed flex items-center">
            View my React.js projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </p>
        </a>
      </div>
    </section>
  );
};
