
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen p-2 md:p-16 flex items-center">
      <div className="max-w-full mx-auto text-center">
        {/* Hero text centered */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide text-foreground mb-4 w-full">
          Ramon Arana
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-8">
          Bubble Expert & Automation Specialist
        </h2>
        
        {/* Summary */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="text-sm md:text-base font-light leading-relaxed text-foreground max-w-3xl mx-auto space-y-4">
            <p>Hello there!</p>
            <p>Grateful to have turned my passion into a full-time craft. Building digital products isn't just my job, but what drives me. I'm always looking for practical, cost-effective solutions. I'm a product-driven problem solver. Not your regular developer.</p>
            <p>I bring a versatile skill set as a low-code developer, leveraging tools like n8n to seamlessly integrate AI into each project in context-specific ways.</p>
            <p>My experience as a CRM director and front-end dev led me to no-code. The stack I use are non other than mere tools to bring solutions to life and transform my raw capabilities into real product value.</p>
          </div>
          
          {/* Call to Action */}
          <div className="flex justify-center mt-8">
            <a 
              href="mailto:ramaarana7@gmail.com?subject=Hello! I'm interested in building something amazing!"
              className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 text-foreground hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-gradient hover:shadow-lg relative overflow-hidden group inline-block"
            >
              <span className="relative z-10">Let's make something that matters.</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Photo below */}
        <div className="flex justify-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40">
            <AvatarImage src="/lovable-uploads/258b13ee-7551-4a26-a46b-1dc487b06445.png" alt="Ramon" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};
