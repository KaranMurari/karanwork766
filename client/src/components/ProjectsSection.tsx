import { ExternalLink, Github, Globe, Zap, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Techtonic Labs",
      description: "A modern startup website showcasing cutting-edge technology solutions with stunning animations and responsive design.",
      longDescription: "Developed and deployed a complete startup website using modern web technologies. Features include smooth GSAP animations, responsive design, and integrated contact forms.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "Web3Forms API"],
      features: [
        "Responsive Design",
        "GSAP Animations",
        "Contact Form Integration",
        "Modern UI/UX",
        "Performance Optimized"
      ],
      liveUrl: "https://techtoniclabs.vercel.app",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      color: "text-cyan-400"
    },
    {
      title: "Techtonic Games",
      description: "A comprehensive gaming tournament platform for BGMI and Free Fire with user registration and tournament management.",
      longDescription: "Created a full-featured gaming tournament website with tournament registration, player profiles, and real-time updates. Integrated with modern form handling and deployed on Vercel.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "Web3Forms API"],
      features: [
        "Tournament Registration",
        "Player Profiles",
        "Real-time Updates",
        "Mobile Responsive",
        "Smooth Animations"
      ],
      liveUrl: "https://techtonicgames.vercel.app",
      icon: Gamepad2,
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-cyber-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development and digital solutions
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card-gradient border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-cyber group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Project Header with Gradient */}
                <div className={`bg-gradient-to-r ${project.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/5 rounded-full"></div>
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  {/* Detailed Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Globe className="h-4 w-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;