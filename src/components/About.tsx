
import { Card } from "@/components/ui/card";
import { Globe, Heart, Code, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: "International Experience",
      description: "Exchange Program at Minnesota State University, Mankato (2023-2024)"
    },
    {
      icon: Code,
      title: "Professional Experience",
      description: "SAP Developer at Deloitte, Web Developer at SMART WMN Solutions"
    },
    {
      icon: Users,
      title: "Technical Expertise",
      description: "Full-stack development with AI/ML, Cloud Computing, and SAP technologies"
    },
    {
      icon: Heart,
      title: "Innovation Focus",
      description: "Building cutting-edge solutions with modern technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm <span className="font-semibold text-blue-600">Ons Saidi</span>, a passionate software engineering student from Tunisia specializing in <span className="font-semibold">Web & Mobile Development, AI, Cloud Computing, Computer Vision, and Big Data</span>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently completing my engineering degree at <span className="font-semibold">ISSAT Sousse</span> with a minor in Web & Mobile Development, AI, Cloud Computing, Computer Vision, and Big Data. I recently completed an exchange program at <span className="font-semibold text-purple-600">Minnesota State University, Mankato</span> focusing on Web Development, Game Development, Azure Fundamentals, AI, and UI/UX.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I have hands-on experience with SAP development at Deloitte, full-stack development at SMART WMN Solutions, and AI-driven optimization projects. My expertise spans from ABAP and SAP Fiori to React Native, Machine Learning, and Cloud technologies.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Tunisia</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">USA</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">TJSP Alumna</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
