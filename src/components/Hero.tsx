
import { Button } from '@/components/ui/button';
import { Angular, React, NodeJs, Flutter } from 'lucide-react';
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

  const frameworks = [
    { Icon: Angular, name: 'Angular' },
    { Icon: React, name: 'React' },
    { Icon: NodeJs, name: 'Node.js' },
    { Icon: Flutter, name: 'Flutter' }
  ];

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
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-blue-500/20 rounded-full opacity-30 blur-2xl animate-pulse delay-500"></div>

      {/* Framework Icons - Floating around the hero */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Framework Icons */}
        <div className="absolute top-20 left-20 hidden lg:flex flex-col space-y-6">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 animate-pulse">
            <Angular className="w-8 h-8 text-blue-500" />
          </div>
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 animate-pulse delay-300 ml-8">
            <React className="w-6 h-6 text-blue-500" />
          </div>
        </div>

        {/* Top Right Framework Icons */}
        <div className="absolute top-32 right-20 hidden lg:flex flex-col space-y-4">
          <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 animate-pulse delay-700">
            <NodeJs className="w-7 h-7 text-blue-500" />
          </div>
          <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 animate-pulse delay-1000 mr-6">
            <Flutter className="w-5 h-5 text-blue-500" />
          </div>
        </div>

        {/* Bottom Framework Icons */}
        <div className="absolute bottom-32 left-1/4 hidden md:flex space-x-8">
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 animate-pulse delay-500">
            <div className="w-6 h-6 bg-blue-500 rounded text-xs font-bold text-white flex items-center justify-center">S</div>
          </div>
          <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 animate-pulse delay-200">
            <div className="w-7 h-7 bg-blue-500 rounded text-sm font-bold text-white flex items-center justify-center">L</div>
          </div>
        </div>

        {/* Right side Framework Icons */}
        <div className="absolute bottom-40 right-1/4 hidden lg:block">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20 animate-pulse delay-800">
            <div className="w-8 h-8 bg-blue-500 rounded text-sm font-bold text-white flex items-center justify-center">E</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="flex flex-col space-y-8 text-left">
            {/* Profile Photo */}
            <div className="relative w-fit">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-glow-pulse">
                <img 
                  src={profilePhoto} 
                  alt="Mohamed Aloui"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-30 blur-sm -z-10"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="font-inter font-bold text-4xl md:text-6xl lg:text-7xl text-foreground animate-fade-in">
                Mohamed{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-size-200">
                  Aloui
                </span>
              </h1>
              
              <h2 className="font-inter font-medium text-xl md:text-2xl lg:text-3xl text-secondary-foreground animate-slide-up">
                Full-Stack Developer
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg animate-slide-up delay-200">
                Building scalable applications from idea to deployment. 
                Specializing in React, Symfony, Flutter, and DevOps practices.
              </p>

              {/* Framework Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {frameworks.map(({ Icon, name }, index) => (
                  <div 
                    key={name}
                    className="flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 animate-slide-up"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up delay-500">
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
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Code snippet visual */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card animate-slide-up delay-300">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-blue-400">const <span className="text-foreground">developer</span> = {`{`}</div>
                <div className="pl-4 text-green-400">name: <span className="text-orange-400">'Mohamed Aloui'</span>,</div>
                <div className="pl-4 text-green-400">skills: <span className="text-blue-400">[</span></div>
                <div className="pl-8 text-orange-400">'React', 'Symfony',</div>
                <div className="pl-8 text-orange-400">'Flutter', 'DevOps'</div>
                <div className="pl-4 text-blue-400">]</div>
                <div className="text-blue-400">{`}`}</div>
              </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
