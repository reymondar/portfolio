import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

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
    role: "Full-stack Developer",
    category: "Web Application"
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
    role: "Lead Developer",
    category: "Event Platform"
  },
  {
    id: "yonder",
    title: "Yonder",
    duration: "April - September 2024",
    date: "Real-estate community platform",
    overview: "Digital platform designed to simplify the process of building sustainable prefab homes in Portugal. Developed in collaboration with a designer, leveraging Google Maps API, Zillow integration, and implementing a scalable database architecture to provide comprehensive real estate solutions.",
    description: "Travel planning app with interactive maps and booking integration",
    website: "https://liveyonder.co/index/?tab=Landing",
    backgroundImage: "/lovable-uploads/8482e624-7e98-4376-ad39-26448904581c.png",
    screenshotImage: "/lovable-uploads/8482e624-7e98-4376-ad39-26448904581c.png",
    stack: "Bubble.io + Airtable",
    year: "2024",
    role: "Frontend Developer",
    category: "Real Estate"
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
    role: "Integration Developer",
    category: "Recruitment"
  },
  {
    id: "nit-charge",
    title: "Nit Charge",
    duration: "2023 - 2024",
    date: "Startup business website",
    overview: "Website page for startup business with 100 Lighthouse score report, designed and developed independently.",
    description: "High-performance startup website with perfect Lighthouse scores",
    website: "https://confettilist.com/",
    backgroundImage: "/lovable-uploads/6f477590-c2f7-42dc-807b-8ab3ab2bc532.png",
    screenshotImage: "/lovable-uploads/6f477590-c2f7-42dc-807b-8ab3ab2bc532.png",
    stack: "React.js, Vercel.js, Firestore",
    year: "2023",
    role: "Designer & Developer",
    category: "Website"
  },
  {
    id: "your-app",
    title: "Your App",
    duration: "2025",
    date: "Future collaboration",
    overview: "Would you like to create an app? Are you unsure about it? Let's chat about the process.",
    description: "Your next innovative project awaits",
    website: "#",
    backgroundImage: "/lovable-uploads/043ed011-9d8a-4e07-822a-71996344ae8d.png",
    screenshotImage: "/lovable-uploads/043ed011-9d8a-4e07-822a-71996344ae8d.png",
    stack: "Bubble.io, Airtable, Cursor",
    year: "2025",
    role: "Consultant",
    category: "Web App"
  },
  {
    id: "solventiq",
    title: "SolventIQ",
    duration: "2025 - developing",
    date: "Legal automation platform",
    overview: "Digitally assisted and fully expert-checked, Insolv.io helps GmbH directors and legal teams file insolvencies with confidence powered by OpenAI's API",
    description: "SolventIQ is a web app - AI-powered legal platform for insolvency filing assistance",
    website: "#",
    backgroundImage: "/lovable-uploads/021cb275-25f3-4629-a852-5b93464abd7c.png",
    screenshotImage: "/lovable-uploads/021cb275-25f3-4629-a852-5b93464abd7c.png",
    stack: "Bubble.io + OpenAI + n8n",
    year: "2025",
    role: "Bubble.io Developer & Automation Specialist",
    category: "Web App"
  }
];

export const ProjectPage = () => {
  const { id } = useParams();
  const project = portfolioProjects.find(p => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Project not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </nav>

      {/* Mobile Hero Image */}
      <section className="md:hidden w-full h-[50vh] overflow-hidden">
        <img 
          src={project.backgroundImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Header */}
      <header className="pt-8 md:pt-32 pb-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Title and Overview */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-light tracking-wide text-foreground">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Right: Project Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Year</h3>
                <p className="text-xl font-medium text-foreground">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Duration</h3>
                <p className="text-xl font-medium text-foreground">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Role</h3>
                <p className="text-xl font-medium text-foreground">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Stack</h3>
                <p className="text-xl font-medium text-foreground">{project.stack}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Type</h3>
                <p className="text-xl font-medium text-foreground">{project.category}</p>
              </div>
              {project.website !== "#" && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Website</h3>
                  <a 
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xl font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Visit Website
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Project Image */}
      <section className="hidden md:block px-8 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden aspect-video">
            <img 
              src={project.backgroundImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};