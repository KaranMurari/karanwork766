import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
    return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/20 pt-20 pb-10">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "1s"
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-in">
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden text-center space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/b4d8101d-1d1e-43fb-962f-9c76892563ee.png" 
                alt="Karan Murari Profile Picture" 
                className="w-48 h-48 max-w-[70vw] rounded-full object-cover border-4 border-accent/20 shadow-glow"
              />
            </div>

            {/* Intro and Main Headline */}
            <div className="space-y-3">
              <p className="text-base text-muted-foreground">Hi, I'm</p>
              <h1 className="text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Karan Murari
                </span>
              </h1>
              <h2 className="text-xl font-semibold text-foreground/90 leading-relaxed">
                Web Developer Empowered by AI & Automation
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Crafting smart, efficient digital experiences with code and intelligence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Button onClick={() => scrollToSection("projects")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-cyber transition-all duration-300">
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300" asChild>
                <a href="https://drive.google.com/file/d/1mjZidAq8mQhhdwR5OHAt_YP9qT5ILnVC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">Hi, I'm</p>
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Karan Murari
                </span>
              </h1>
              <h2 className="text-2xl font-semibold text-foreground/90 leading-relaxed">
                Web Developer Empowered by AI & Automation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Crafting smart, efficient digital experiences with code and intelligence.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection("projects")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-cyber transition-all duration-300">
                  View Projects
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300" asChild>
                  <a href="https://drive.google.com/file/d/1mjZidAq8mQhhdwR5OHAt_YP9qT5ILnVC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Picture */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b4d8101d-1d1e-43fb-962f-9c76892563ee.png" 
                alt="Karan Murari Profile Picture" 
                className="w-80 h-80 rounded-full object-cover border-4 border-accent/20 shadow-glow"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-8">
            <Button variant="ghost" size="icon" asChild className="hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110">
              <a href="https://www.linkedin.com/in/karan-murari-576717210" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110">
              <a href="https://github.com/KaranMurari" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110">
              <a href="mailto:karanmurari766@gmail.com" aria-label="Email Contact">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110">
              <a href="https://www.instagram.com/karanmurari_" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.954.01 6.748.048 2.712.266 0 3.016 0 7.052 0 8.258.01 8.7.048 12.017c.238 4.036 2.988 6.748 7.024 6.748 1.206 0 1.648-.01 2.854-.048 4.036-.218 6.748-2.988 6.748-7.024 0-1.206-.01-1.648-.048-2.854C16.348 2.912 13.636.2 9.6.048 8.394.01 7.952 0 6.748 0H12.017zm-.017 2.158c3.23 0 3.617.013 4.893.071 3.018.138 4.418 1.557 4.557 4.557.058 1.276.071 1.663.071 4.893s-.013 3.617-.071 4.893c-.138 3-1.538 4.418-4.557 4.557-1.276.058-1.663.071-4.893.071s-3.617-.013-4.893-.071c-3.018-.138-4.418-1.557-4.557-4.557C2.171 15.647 2.158 15.26 2.158 12.03s.013-3.617.071-4.893C2.367 4.119 3.786 2.7 6.804 2.562 8.08 2.504 8.467 2.491 11.697 2.491L12 2.158zm0 3.425a5.417 5.417 0 100 10.834 5.417 5.417 0 000-10.834zm0 8.933a3.516 3.516 0 110-7.032 3.516 3.516 0 010 7.032zm6.9-9.15a1.267 1.267 0 11-2.535 0 1.267 1.267 0 012.535 0z" clipRule="evenodd" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")} 
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/20"
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>;
};
export default HeroSection;