const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mohamed-aloui',
      icon: '💼'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/mohamed-aloui',
      icon: '🔗'
    },
    {
      name: 'Email',
      href: 'mailto:mohamed.aloui@etu.univ-amu.fr',
      icon: '📧'
    }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-t from-background to-secondary/10 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-inter font-bold text-2xl text-foreground">
              Mohamed <span className="bg-gradient-primary bg-clip-text text-transparent">Aloui</span>
            </div>
            <p className="text-secondary-foreground leading-relaxed">
              Full-Stack Developer passionate about creating scalable applications 
              and bringing innovative ideas to life through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 rounded-lg flex items-center justify-center text-lg hover:text-primary transition-all duration-300 hover:shadow-glow"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-inter font-semibold text-lg text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-secondary-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-inter font-semibold text-lg text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-primary">📧</span>
                <a 
                  href="mailto:mohamed.aloui@etu.univ-amu.fr"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                >
                  mohamed.aloui@etu.univ-amu.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">📞</span>
                <a 
                  href="tel:+33766260367"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                >
                  +33 07 66 26 03 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">📍</span>
                <span className="text-secondary-foreground">
                  Aix-Marseille, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Mohamed Aloui. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built with React & TypeScript</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full shadow-glow hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-40"
        aria-label="Scroll to top"
      >
        <span className="text-lg group-hover:translate-y-[-2px] transition-transform duration-300">
          ↑
        </span>
      </button>
    </footer>
  );
};

export default Footer;