import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Code, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Deloitte",
      position: "SAP Developer",
      location: "Tunisia",
      period: "Jul 2025 – Sept 2025",
      status: "Upcoming",
      description: "Collaborated within the TMT department to develop SAP solutions: workflow automation for internal processes.",
      techStack: ["ABAP", "SAP Fiori", "SAP UI5", "OData Services", "SAP HANA", "CDS Views", "Smart Forms", "SAP Workflow", "S/4HANA"],
      icon: Building2,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      company: "SMART WMN Solutions",
      position: "Web Developer",
      location: "Sousse",
      period: "Aug 2024 – Jul 2025",
      status: "Completed",
      description: "Built a desktop testing interface for PS5 DualSense, enabling real-time hardware–software interaction. Developed Jira-Snapshot, a mobile-first web app for project tracking and reporting. Built an automatic documentation generator from code.",
      techStack: ["Electron.js", "Vue.js", "Node.js", "REST APIs", "Pinia", "Swagger UI", "dualsense.js", "Raspberry Pi"],
      icon: Code,
      gradient: "from-green-500 to-green-600"
    },
    {
      company: "MNSU",
      position: "Full Stack Developer Intern",
      location: "Mankato",
      period: "Jan 2024 – May 2024",
      status: "Completed",
      description: "Led development of a predictive class-scheduling platform to optimize university resource allocation by 60%.",
      techStack: ["Genetic Algorithms", "Reinforcement Learning", "OptaPlanner", "Azure SQL DB", "Flask", "React.js", "Docker"],
      icon: Users,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building real-world solutions with leading companies and cutting-edge technologies.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex items-start gap-4 lg:w-1/3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.gradient}`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.position}</h3>
                    <p className="text-lg font-medium text-blue-600 mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={exp.status === "Completed" ? "default" : "secondary"}
                      className={exp.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                    >
                      {exp.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-gray-700 leading-relaxed mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
