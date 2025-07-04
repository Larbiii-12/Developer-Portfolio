import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // Freelance Projects
    {
      title: 'E-commerce Platform',
      category: 'freelance',
      type: 'Freelance',
      date: '2024',
      description: 'Full-featured e-commerce platform built with Symfony, featuring product management, payment integration, and admin dashboard.',
      technologies: ['Symfony', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      github: null,
      live: null,
      featured: true
    },
    {
      title: 'MERN Travel Agency',
      category: 'freelance',
      type: 'Freelance',
      date: '2024',
      description: 'Modern travel booking website with React frontend and Node.js backend, featuring destination browsing and booking system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      github: null,
      live: null,
      featured: true
    },
    {
      title: 'Training Catalog System',
      category: 'freelance',
      type: 'Freelance',
      date: '2023',
      description: 'Training management platform with course catalog, user enrollment, and progress tracking built with Symfony.',
      technologies: ['Symfony', 'PHP', 'PostgreSQL', 'Twig', 'CSS3'],
      github: null,
      live: null,
      featured: false
    },
    {
      title: 'Restaurant Management App',
      category: 'freelance',
      type: 'Freelance',
      date: '2023',
      description: 'Restaurant ordering and management system with real-time order tracking and inventory management.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'AJAX', 'Bootstrap'],
      github: null,
      live: null,
      featured: false
    },

    // Internship Projects
    {
      title: 'ERP Business Intelligence',
      category: 'internship',
      type: 'Internship',
      date: '2024',
      description: 'Enterprise resource planning system with advanced BI features, built using Symfony and NestJS microservices architecture.',
      technologies: ['Symfony', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker'],
      github: null,
      live: null,
      featured: true
    },
    {
      title: 'Mobile Maintenance App',
      category: 'internship',
      type: 'Internship',
      date: '2023',
      description: 'Flutter mobile application for equipment maintenance tracking with offline capabilities and real-time synchronization.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'REST API'],
      github: null,
      live: null,
      featured: true
    },

    // Academic Projects
    {
      title: 'Banking Application',
      category: 'academic',
      type: 'Academic',
      date: '2023',
      description: 'Secure banking application with CI/CD pipeline, automated testing with Jenkins, and code quality analysis with SonarQube.',
      technologies: ['Java', 'Spring Boot', 'Jenkins', 'SonarQube', 'JUnit'],
      github: 'https://github.com/mohamed-aloui',
      live: null,
      featured: true
    },
    {
      title: 'Freezer Management System',
      category: 'academic',
      type: 'Academic',
      date: '2023',
      description: 'Mobile and web application for inventory management in cold storage facilities, built with Angular and Ionic.',
      technologies: ['Angular', 'Ionic', 'TypeScript', 'Firebase', 'Capacitor'],
      github: 'https://github.com/mohamed-aloui',
      live: null,
      featured: false
    },
    {
      title: 'RPG Game Engine',
      category: 'academic',
      type: 'Academic',
      date: '2022',
      description: 'Role-playing game developed with Godot engine, featuring custom scripting and game mechanics.',
      technologies: ['Godot', 'GDScript', 'C#', '2D Graphics', 'Game Design'],
      github: 'https://github.com/mohamed-aloui',
      live: null,
      featured: false
    },
    {
      title: 'Advertising Playlist Manager',
      category: 'academic',
      type: 'Academic',
      date: '2022',
      description: 'Digital signage content management system for scheduling and displaying advertising content.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'WebSocket'],
      github: 'https://github.com/mohamed-aloui',
      live: null,
      featured: false
    },
    {
      title: 'Road Infraction Management',
      category: 'academic',
      type: 'Academic',
      date: '2022',
      description: 'Traffic violation tracking system with TypeScript frontend and PHP backend for municipal authorities.',
      technologies: ['TypeScript', 'PHP', 'MySQL', 'REST API', 'Bootstrap'],
      github: 'https://github.com/mohamed-aloui',
      live: null,
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'freelance', label: '🧑‍💼 Freelance' },
    { id: 'internship', label: '🏢 Internships' },
    { id: 'academic', label: '🎓 Academic' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden ${
                project.featured ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <div className="p-6 h-full flex flex-col">
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