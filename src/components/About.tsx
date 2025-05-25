
import { Card } from "@/components/ui/card";
import { Globe, Heart, Code, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: "International Experience",
      description: "Thomas Jefferson Scholarship Program (TJSP) 2023-2024 cohort"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Full stack development with AI/ML expertise"
    },
    {
      icon: Users,
      title: "Community Leadership",
      description: "Leading initiatives impacting 14,000+ students"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Building inclusive technology for real-world problems"
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
              I'm <span className="font-semibold text-blue-600">Ons Saidi</span>, a passionate and driven software engineering student from Tunisia with a deep interest in <span className="font-semibold">Artificial Intelligence, Web Development, and Social Impact Technology</span>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm committed to building inclusive, meaningful digital solutions that serve real people and communities. Currently completing my engineering degree at <span className="font-semibold">ISSAT Sousse</span>, I recently finished an academic year in the U.S. as part of the prestigious <span className="font-semibold text-purple-600">Thomas Jefferson Scholarship Program (TJSP)</span>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I thrive in diverse, multicultural environments and have built a strong foundation in full stack development, AI/ML concepts, and project-based learning. My journey has been enriched by leading community initiatives, participating in international exchange programs, and creating tech projects that aim to solve real-world problems.
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
