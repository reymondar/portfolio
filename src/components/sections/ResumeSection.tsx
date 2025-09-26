
export const ResumeSection = () => {
  return (
    <section id="resume" className="min-h-screen p-2 md:p-16 flex items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="scroll-animate">
            <h3 className="text-6xl md:text-8xl font-bold tracking-wide text-foreground mb-8">
              Experience
            </h3>
            <div className="max-w-4xl">
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-left">
                5+ years of web development experience with a focus on modern frameworks and no-code solutions. Specialized in creating scalable applications that bridge the gap between rapid prototyping and enterprise-level solutions.
              </p>
            </div>
          </div>
          
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 scroll-animate">
            <h3 className="text-3xl md:text-5xl font-light tracking-wide text-foreground">
              Jobs
            </h3>
            <div className="lg:col-span-3 space-y-12">
              <div>
                <h4 className="text-lg md:text-xl font-medium text-foreground mb-2">
                  <a 
                    href="https://www.upwork.com/freelancers/ramonarana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors underline"
                  >
                    Bubble Freelance Developer
                  </a>
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-3">January 2025 - Present</p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-left mb-3">
                  Developing custom web applications using Bubble.io for various clients across different industries.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Bubble</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">n8n</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Airtable</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-foreground mb-2">
                  Bubble.io Jr Developer · <a 
                    href="https://www.linkedin.com/company/empty-code/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors underline"
                  >
                    EmptyCode
                  </a>
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-3">April 2024 - February 2025</p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-left mb-3">
                  Built and maintained no-code applications using Bubble.io platform for various client projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Bubble.io</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Jira</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-foreground mb-2">
                  Marketing Bueno
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-3">September 2021 - April 2024</p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-left mb-3">
                  Managed website development and CRM systems, overseeing digital marketing campaigns and client relationship management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">GoHighLevel</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Pabbly</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Zapier</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Botpress</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Pipedrive</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-medium text-foreground mb-2">
                  Front-end Developer
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-3">March 2023 - April 2024</p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-left mb-3">
                  Developed responsive user interfaces using modern JavaScript frameworks and CSS technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">React.js</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Ionic.js</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm">Tailwind</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 scroll-animate">
            <h3 className="text-3xl md:text-5xl font-light tracking-wide text-foreground">
              Skills
            </h3>
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-3">
                {[
                  "Bubble.io",
                  "React.js",
                  "TypeScript",
                  "JavaScript", 
                  "Tailwind CSS",
                  "API Integration",
                  "Workflow Automation",
                  "n8n",
                  "Airtable",
                  "QA Testing",
                  "Responsive Design",
                  "Git/GitHub"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 text-foreground hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
