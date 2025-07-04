import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mohamed.aloui@etu.univ-amu.fr',
      href: 'mailto:mohamed.aloui@etu.univ-amu.fr'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+33 07 66 26 03 67',
      href: 'tel:+33766260367'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Mohamed Aloui',
      href: 'https://linkedin.com/in/mohamed-aloui'
    },
    {
      icon: '🔗',
      label: 'GitHub',
      value: '@mohamed-aloui',
      href: 'https://github.com/mohamed-aloui'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or explore collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300">
            <h3 className="font-inter font-semibold text-2xl text-foreground mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 resize-none"
                  placeholder="Tell me about your project, requirements, timeline, and budget..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-medium py-3"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="font-inter font-semibold text-2xl text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="text-secondary-foreground font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="p-6 bg-card border-border text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">Available for Work</span>
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed">
                Currently accepting new freelance projects and full-time opportunities. 
                Typical response time: 24-48 hours.
              </p>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-card border-border">
              <h4 className="font-inter font-medium text-lg text-foreground mb-4 text-center">
                Let's Build Something Amazing
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-xs text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;