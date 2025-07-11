
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useProjects } from '@/hooks/useProjects';
import { Loader2 } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { data: projects, isLoading, error } = useProjects();

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'freelance', label: '🧑‍💼 Freelance' },
    { id: 'internship', label: '🏢 Internships' },
    { id: 'academic', label: '🎓 Academic' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects || []
    : projects?.filter(project => project.category === activeFilter) || [];

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work across freelance projects, internships, and academic achievements
            </p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Unable to load projects at the moment. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across freelance projects, internships, and academic achievements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id 
                ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                : 'border-border hover:border-primary/50 text-secondary-foreground hover:text-foreground'
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className={`group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden ${
                project.featured ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Project Media */}
                {project.media_url && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    {project.media_type === 'image' ? (
                      <img 
                        src={project.media_url} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : project.media_type === 'video' ? (
                      <video 
                        src={project.media_url}
                        className="w-full h-48 object-cover"
                        controls
                        preload="metadata"
                      />
                    ) : null}
                  </div>
                )}

                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge 
                      variant="secondary" 
                      className="mb-2 text-xs bg-primary/20 text-primary border-primary/30"
                    >
                      {project.type}
                    </Badge>
                    {project.featured && (
                      <Badge 
                        variant="outline" 
                        className="ml-2 text-xs border-primary-glow text-primary-glow"
                      >
                        Featured
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>

                {/* Project Content */}
                <div className="flex-grow">
                  <h3 className="font-inter font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.github && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.live && (
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground hover:shadow-glow"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                  {!project.github && !project.live && (
                    <div className="flex-1 text-center text-sm text-muted-foreground py-2">
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}

        {/* View More */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more projects or discussing collaboration?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
