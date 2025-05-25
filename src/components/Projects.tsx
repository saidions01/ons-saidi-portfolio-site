
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Code, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chasing Museums",
      subtitle: "AEIF 2025 Semi-Finalist",
      description: "A VR and gamified learning platform that makes history education more immersive and engaging. Focused on connecting Tunisian and U.S. cultures through architecture and storytelling.",
      technologies: ["VR", "Game Development", "Educational Technology", "Cultural Heritage"],
      status: "Semi-Finalist",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "DualSense PS5 Tester",
      subtitle: "SMART WMN Solutions",
      description: "A full stack web + hardware project to test the Sony DualSense controller using Raspberry Pi. Responsible for UI/UX design and backend logic integration.",
      technologies: ["React", "Node.js", "Raspberry Pi", "Hardware Integration", "UI/UX"],
      status: "Completed",
      icon: Code,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Jira Snapshot Tool",
      subtitle: "MSU IT Department",
      description: "Developed a predictive tool to help automate class scheduling and course guidance for students using past academic data and machine learning algorithms.",
      technologies: ["Python", "Machine Learning", "Data Analytics", "Academic Systems"],
      status: "Deployed",
      icon: Globe,
      gradient: "from-green-500 to-teal-500"
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
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live
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
