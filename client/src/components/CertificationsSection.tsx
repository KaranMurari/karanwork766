import { Award, ExternalLink, Download, Shield, Code, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google via Coursera",
      icon: Shield,
      description: "Comprehensive cybersecurity program covering threat detection, incident response, and security frameworks.",
      skills: ["Security Analysis", "Risk Assessment", "Incident Response", "Network Security"],
      url: "https://drive.google.com/file/d/1F1-0DtN09niBIrqvxq6DdEqyxmMWxdYV/view?usp=drivesdk",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      icon: Code,
      description: "Foundational Python programming course covering syntax, data structures, and problem-solving.",
      skills: ["Python Programming", "Data Structures", "Algorithm Design", "Problem Solving"],
      url: "https://drive.google.com/file/d/16wWCVTrXcbOuxo0dUncMJetWGId-jJdn/view?usp=drivesdk",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Ethical Hacking Essentials",
      issuer: "EC-Council",
      icon: Shield,
      description: "Introduction to ethical hacking methodologies, penetration testing, and vulnerability assessment.",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Network Scanning", "Ethical Hacking"],
      url: "https://drive.google.com/file/d/18fDNPDi7EGD1Tzp0FmlbW8jYwmOzwwNq/view?usp=drivesdk",
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata Group via Forage",
      icon: Zap,
      description: "Practical cybersecurity simulation involving real-world scenarios and security operations.",
      skills: ["Security Operations", "Threat Analysis", "Incident Management", "Security Monitoring"],
      url: "https://drive.google.com/file/d/18zwdgoNkmC2Ba8eEUy1VYCO4W9Sx6Ozc/view?usp=drivesdk",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-cyber-gradient bg-clip-text text-transparent">Certifications</span> & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that showcase my expertise in cybersecurity and development
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card-gradient border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-cyber group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${cert.bgColor} ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-amber-400" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs font-medium hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Download className="h-4 w-4" />
                        <span>View Certificate</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;