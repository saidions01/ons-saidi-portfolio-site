import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                {/* Replace "/profile-image.jpg" with your actual image path */}
                <img 
                  src="/profile-image.jpg" 
                  alt="Ons Saidi" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">OS</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <MapPin size={16} />
              <span>Tunisia</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Ons <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Saidi</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
            Software Engineering Student
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about AI, Web Development, and Social Impact Technology. 
            Building inclusive digital solutions that serve real communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="mailto:ons.saidi@example.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={24} 
            className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
