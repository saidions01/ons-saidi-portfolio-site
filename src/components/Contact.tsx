
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Music, Heart, Code } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "saidi.ons@issatso.u-sousse.tn",
      link: "mailto:saidi.ons@issatso.u-sousse.tn"
    },
    {
      icon: MapPin,
      title: "Phone",
      value: "+216 95 685 285",
      link: "tel:+21695685285"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/saidions01",
      link: "https://github.com/saidions01"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/saidi-ons",
      link: "https://www.linkedin.com/in/saidi-ons/"
    }
  ];

  const interests = [
    { icon: Code, text: "AI, Web Development, Cloud Computing" },
    { icon: Heart, text: "Innovation and Technology Solutions" },
    { icon: Music, text: "Continuous Learning and Growth" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborative projects, and innovative ideas in technology and social impact.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <info.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-900 hover:text-blue-600 transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Interests</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-purple-100 rounded-lg mt-1">
                      <interest.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{interest.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-gray-200 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-gray-200 focus:border-blue-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-gray-200 focus:border-blue-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input placeholder="What's this about?" className="border-gray-200 focus:border-blue-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={6}
                    className="border-gray-200 focus:border-blue-500"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 Ons Saidi. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Passionate about building inclusive technology for positive social impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
