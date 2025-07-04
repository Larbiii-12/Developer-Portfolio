import { Card } from '@/components/ui/card';

const About = () => {
  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Symfony', category: 'Backend' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'PHP', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' }
  ];

  const education = [
    {
      title: 'Master Info & Médiation Scientifique',
      institution: 'Université d\'Aix-Marseille',
      period: '2023-2025',
      type: 'current'
    },
    {
      title: 'BUT Informatique (RA)',
      institution: 'IUT Aix-Marseille',
      period: '2021-2023',
      type: 'completed'
    },
    {
      title: 'Master Bois & Forêt',
      institution: 'Previous Education',
      period: '2019-2021',
      type: 'completed'
    }
  ];

  const certifications = [
    'DevOps Fundamentals (Coursera)',
    'JavaScript Advanced Concepts (MyFreeCourse)',
    'SQL Database Management (Coursera)',
    'Testing & Quality Assurance'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="font-inter font-semibold text-2xl text-foreground">Professional Summary</h3>
            <div className="text-secondary-foreground space-y-4 leading-relaxed">
              <p>
                I'm a dedicated full-stack developer currently pursuing my Master's in Information & Scientific Mediation 
                at Université d'Aix-Marseille. My journey in software development spans across multiple technologies 
                and domains, from web applications to mobile development.
              </p>
              <p>
                With hands-on experience in freelance projects, internships, and academic work, I've developed 
                a comprehensive skill set that includes modern frameworks, DevOps practices, and quality assurance. 
                I'm passionate about creating scalable, efficient solutions that solve real-world problems.
              </p>
              <p>
                My approach combines technical excellence with effective communication, ensuring that projects 
                are not only well-built but also align with business objectives and user needs.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="font-inter font-semibold text-2xl text-foreground">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
                >
                  <div className="text-center">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300">
            <h3 className="font-inter font-semibold text-2xl text-foreground mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className={`absolute w-3 h-3 rounded-full -left-2 top-1 ${
                    edu.type === 'current' ? 'bg-primary animate-pulse' : 'bg-primary/60'
                  }`}></div>
                  <div>
                    <h4 className="font-medium text-foreground">{edu.title}</h4>
                    <p className="text-secondary-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300">
            <h3 className="font-inter font-semibold text-2xl text-foreground mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-secondary-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;