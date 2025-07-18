import { Code2, Shield, Database, GitBranch, Terminal, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code2,
      items: ["Python", "C"],
      color: "text-blue-400"
    },
    {
      category: "Web Development",
      icon: Globe,
      items: ["HTML", "CSS", "JavaScript", "React"],
      color: "text-green-400"
    },
    {
      category: "Database",
      icon: Database,
      items: ["MySQL"],
      color: "text-orange-400"
    },
    {
      category: "Cybersecurity Tools",
      icon: Shield,
      items: ["Nmap", "Wireshark", "Kali Linux"],
      color: "text-red-400"
    },
    {
      category: "Version Control",
      icon: GitBranch,
      items: ["Git", "GitHub"],
      color: "text-purple-400"
    },
    {
      category: "Terminal & Automation",
      icon: Terminal,
      items: ["Linux", "Bash", "Automation Scripts"],
      color: "text-cyan-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-cyber-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Passionate Developer & Security Enthusiast
              </h3>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Aspiring Computer Science Engineer with a solid foundation in 
                  <span className="text-accent font-medium"> Web Development</span> and 
                  <span className="text-accent font-medium"> Cybersecurity</span>. 
                  Experienced in security analysis, and passionate about automation.
                </p>
                <p>
                  Continuously learning and building through hands-on projects, 
                  I focus on creating secure and scalable solutions that bridge 
                  the gap between development and cybersecurity.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Security Focused
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium">
                Automation Enthusiast
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={skill.category}
                className="bg-card-gradient border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-cyber group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-background/50 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;