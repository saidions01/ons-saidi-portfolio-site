
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Brain, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Python", "JavaScript", "Java", "C/C++", "SQL"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "Frontend",
      skills: ["HTML", "CSS", "React", "Vue.js", "Bootstrap"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js", "Firebase", "MongoDB", "PHP"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "AI/ML",
      skills: ["TensorFlow", "Keras", "NVIDIA Deep Learning", "Predictive Analytics"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Figma", "Raspberry Pi", "Postman"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Globe,
      title: "Other",
      skills: ["REST APIs", "Responsive Design", "Version Control", "Agile Workflow"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic study, international exchange, and hands-on project experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
