import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-inter font-bold text-xl text-foreground">
            MA
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
          >
            Get In Touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;