import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Karan Murari
            </h3>
            <p className="text-muted-foreground mt-2">
              Web Developer & Cybersecurity Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/karanmurari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/KaranMurari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:karanmurari766@gmail.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Footer Navigation */}
          <nav className="footer-nav">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-sm border border-transparent hover:border-accent/20 active:scale-95"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-sm border border-transparent hover:border-accent/20 active:scale-95"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-sm border border-transparent hover:border-accent/20 active:scale-95"
              >
                Education
              </button>
              <button
                onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-sm border border-transparent hover:border-accent/20 active:scale-95"
              >
                Certifications
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-sm border border-transparent hover:border-accent/20 active:scale-95"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-sm border border-transparent hover:border-accent/20 active:scale-95"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/30">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                © {currentYear} Karan Murari — Web Developer | Frontend Engineer | AI, Automation & Cybersecurity Enthusiast
              </p>
              
              <div className="flex items-center space-x-4">
                <p className="text-xs text-muted-foreground">
                  Built with React & Tailwind CSS
                </p>
                <Button
                  onClick={scrollToTop}
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:shadow-cyber"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;