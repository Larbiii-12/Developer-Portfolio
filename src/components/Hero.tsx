import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/resume-mohamed-aloui.pdf'; // This would be the actual resume path
    link.download = 'Mohamed-Aloui-Resume.pdf';
    link.click();
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Floating gradient orbs for visual effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-glow-pulse">
              <img 
                src={profilePhoto} 
                alt="Mohamed Aloui"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-30 blur-sm -z-10"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="font-inter font-bold text-5xl md:text-7xl text-foreground animate-fade-in">
              Mohamed{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-size-200">
                Aloui
              </span>
            </h1>
            
            <h2 className="font-inter font-medium text-2xl md:text-3xl text-secondary-foreground animate-slide-up">
              Full-Stack Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up delay-200">
              Building scalable applications from idea to deployment. 
              Specializing in React, Symfony, Flutter, and DevOps practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up delay-300">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-medium px-8 py-3"
            >
              View My Projects
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={downloadResume}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-8 py-3"
            >
              Download Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;