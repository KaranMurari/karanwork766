import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Shivalik College of Engineering",
      duration: "July 2023 – June 2026",
      status: "Currently Pursuing",
      description: "Focusing on advanced computer science concepts, software engineering, and cybersecurity fundamentals."
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Government Polytechnic Kashipur",
      duration: "July 2020 – June 2023",
      status: "Completed",
      description: "Built strong foundation in programming, web development, and computer systems."
    },
    {
      degree: "12th Grade",
      institution: "G.B. Pant Inter College",
      duration: "2020",
      status: "Passout",
      description: "Completed higher secondary education with focus on science and mathematics."
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="bg-cyber-gradient bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and engineering
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-card-gradient border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-cyber group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Timeline indicator */}
                  <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === "Currently Pursuing" 
                            ? "bg-accent/10 text-accent" 
                            : "bg-green-500/10 text-green-400"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-accent font-medium mb-3">
                        {edu.institution}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
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

export default EducationSection;