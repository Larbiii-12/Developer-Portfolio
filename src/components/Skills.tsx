import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript ES6+', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Symfony (PHP)', level: 90 },
        { name: 'Node.js / Express', level: 85 },
        { name: 'NestJS', level: 80 },
        { name: 'Java / Spring Boot', level: 75 },
        { name: 'REST API Design', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Flutter / Dart', level: 85 },
        { name: 'Ionic', level: 80 },
        { name: 'React Native', level: 75 },
        { name: 'PWA Development', level: 85 },
        { name: 'Mobile UI/UX', level: 80 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'SQLite', level: 80 }
      ]
    },
    {
      title: 'DevOps & Testing',
      icon: '🚀',
      skills: [
        { name: 'Docker / Containerization', level: 80 },
        { name: 'Jenkins CI/CD', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'SonarQube', level: 75 },
        { name: 'JUnit / PHPUnit', level: 85 },
        { name: 'Selenium / Katalon', level: 80 }
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Agile / Scrum', level: 85 },
        { name: 'Jira / Project Management', level: 80 },
        { name: 'Figma / UI Design', level: 75 },
        { name: 'Postman / API Testing', level: 90 },
        { name: 'Linux / Command Line', level: 85 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-gradient-to-r from-primary to-primary-glow';
    if (level >= 80) return 'bg-gradient-to-r from-primary/80 to-primary';
    if (level >= 70) return 'bg-gradient-to-r from-primary/60 to-primary/80';
    return 'bg-gradient-to-r from-primary/40 to-primary/60';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from frontend to DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-inter font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-foreground font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ease-out ${getSkillColor(skill.level)}`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: skill.level >= 90 ? '0 0 10px hsl(24 100% 50% / 0.5)' : 'none'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill level legend for the first card */}
              {categoryIndex === 0 && (
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                      <span>Expert (90%+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-2 bg-gradient-to-r from-primary/80 to-primary rounded-full"></div>
                      <span>Advanced (80%+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-2 bg-gradient-to-r from-primary/60 to-primary/80 rounded-full"></div>
                      <span>Intermediate (70%+)</span>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 p-8 bg-card border-border text-center">
          <h3 className="font-inter font-semibold text-2xl text-foreground mb-4">
            Continuous Learning
          </h3>
          <p className="text-secondary-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            Technology evolves rapidly, and I stay current with the latest trends and best practices. 
            I regularly participate in online courses, attend tech meetups, and contribute to open-source projects. 
            My learning philosophy focuses on understanding core principles while adapting to new tools and frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Coursera Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Active in Tech Communities</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Open Source Contributor</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;