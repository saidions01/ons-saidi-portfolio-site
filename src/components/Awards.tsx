
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Music, Globe, Target } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      title: "Thomas Jefferson Scholarship Program (TJSP)",
      organization: "U.S. State Department",
      year: "2023-2024",
      type: "International Scholarship",
      icon: Globe,
      description: "Prestigious scholarship program for academic exchange and cultural diplomacy.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AEIF 2025 Semi-Finalist",
      organization: "U.S. Department of State Alumni Grant",
      year: "2025",
      type: "Innovation Award",
      icon: Trophy,
      description: "Recognition for the 'Chasing Museums' VR educational platform project.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "3-time Hackathon Winner",
      organization: "AI and Web Development Challenges",
      year: "2023-2024",
      type: "Technical Achievement",
      icon: Target,
      description: "Multiple victories in competitive programming and development contests.",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "National Music Forum Representative",
      organization: "Tunisia88",
      year: "2023",
      type: "Leadership Award",
      icon: Music,
      description: "Regional representative for Tunisia at the National Music Forum.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const communityEngagement = [
    {
      title: "Tunisia88 Music Initiative",
      role: "Founder & Executive Alumna",
      impact: "14,000+ students",
      description: "Leading a national community music program and serving as Choir Conductor."
    },
    {
      title: "International Students Association",
      role: "Cultural Workshop Leader",
      impact: "MSU, USA",
      description: "Led cultural workshops and advocacy efforts for international student integration."
    },
    {
      title: "Google Developer Student Club (GDSC)",
      role: "Workshop Organizer",
      impact: "ISSAT Sousse",
      description: "Organized hackathons and workshops on full stack development."
    }
  ];

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Awards & Community Engagement
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards & Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-600" />
              Awards & Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 leading-tight">
                          {achievement.title}
                        </h4>
                        <Badge variant="secondary" className="ml-2">
                          {achievement.year}
                        </Badge>
                      </div>
                      
                      <p className="text-blue-600 font-medium mb-2">{achievement.organization}</p>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {achievement.type}
                      </Badge>
                      <p className="text-gray-700 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Community Engagement */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-600" />
              Community Engagement
            </h3>
            
            <div className="space-y-6">
              {communityEngagement.map((activity, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">{activity.title}</h4>
                      <Badge className="bg-purple-100 text-purple-800">
                        {activity.impact}
                      </Badge>
                    </div>
                    
                    <p className="text-purple-600 font-medium">{activity.role}</p>
                    <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Languages */}
            <Card className="p-6 mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Languages
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-medium text-gray-900">Arabic</p>
                  <p className="text-sm text-gray-600">Native</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">English</p>
                  <p className="text-sm text-gray-600">Fluent</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">French</p>
                  <p className="text-sm text-gray-600">Proficient</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
