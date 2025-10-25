
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Code, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "University Resource Optimization Platform",
      subtitle: "MNSU - React Native, Node.js, MongoDB",
      description: "Developed a full-stack platform to automate PFE scheduling for professors, including account generation and real-time notifications. Integrated AI-driven optimization algorithms for resource allocation.",
      technologies: ["React Native", "Node.js", "MongoDB", "AI Optimization", "Real-time Notifications"],
      status: "Completed",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500",
      github: "https://github.com/saidions01"
    },
    {
      title: "DS-5 Testing Tool",
      subtitle: "SMART WMN Solutions",
      description: "Built a desktop app to test DualSense controllers in real-time with interactive diagnostics and feedback. Developed using Electron.js, Vue.js, and Raspberry Pi integration.",
      technologies: ["Electron.js", "Vue.js", "Raspberry Pi", "Dualsense.js", "Node HID", "Pinia"],
      status: "Completed",
      icon: Code,
      gradient: "from-blue-500 to-purple-500",
      github: "https://github.com/saidions01"
    },
    {
      title: "API Documentation Generator",
      subtitle: "Node.js, HTML, Code Parsing, CI/CD",
      description: "Developed an engine that extracts information from deprecated code to produce developer-friendly API documentation. Includes CI/CD integration and automated packaging.",
      technologies: ["Node.js", "HTML", "Code Parsing", "CI/CD", "Packaging", "Documentation"],
      status: "Completed",
      icon: Globe,
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/saidions01"
    },
    {
      title: "Predictive Class-Scheduling Platform",
      subtitle: "MNSU - Full Stack Developer Intern",
      description: "Led development of a predictive class-scheduling platform to optimize university resource allocation by 60%. Integrated genetic algorithms and reinforcement learning.",
      technologies: ["Genetic Algorithms", "Reinforcement Learning", "OptaPlanner", "Azure SQL DB", "Flask", "React.js", "Docker"],
      status: "Completed",
      icon: Trophy,
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/saidions01"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my technical skills and commitment to creating meaningful digital solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={project.status === "Semi-Finalist" ? "default" : "secondary"}
                    className={project.status === "Semi-Finalist" ? "bg-yellow-100 text-yellow-800" : ""}
                  >
                    {project.status}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Details
                    </Button>
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

export default Projects;
