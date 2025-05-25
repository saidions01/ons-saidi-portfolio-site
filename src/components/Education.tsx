
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Software Engineering",
      institution: "ISSAT Sousse, Tunisia",
      period: "Expected 2025",
      status: "In Progress",
      location: "Tunisia",
      description: "Comprehensive software engineering program with focus on modern development practices and emerging technologies."
    },
    {
      degree: "Exchange Program in Computer Science",
      institution: "Minnesota State University, Mankato (USA)",
      period: "2023–2024",
      status: "Completed",
      location: "USA",
      description: "Thomas Jefferson Scholarship Program (TJSP) - International exchange focusing on advanced computer science topics and cultural immersion."
    }
  ];

  const certifications = [
    {
      title: "NVIDIA Deep Learning Institute",
      items: [
        "Fundamentals of Deep Learning",
        "AI for Predictive Maintenance",
        "Building Transformer-Based NLP Applications"
      ]
    },
    {
      title: "Microsoft AI Fundamentals",
      provider: "via MSU"
    },
    {
      title: "Web Development Bootcamps & Hackathons",
      items: ["Multiple full-stack development workshops", "AI and ML specialized tracks"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Formal Education
            </h3>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 leading-tight">{edu.degree}</h4>
                      <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-600" />
              Certifications & Training
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{cert.title}</h4>
                  {cert.provider && (
                    <p className="text-purple-600 font-medium mb-3">{cert.provider}</p>
                  )}
                  {cert.items && (
                    <ul className="space-y-2">
                      {cert.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
