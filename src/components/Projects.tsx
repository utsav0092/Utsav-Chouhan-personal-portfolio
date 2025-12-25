import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Wanderlust',
    subtitle: 'Full-Stack Rental Platform',
    description: 'A full-stack vacation rental platform similar to Airbnb with user authentication, CRUD operations, interactive maps, and image uploads.',
    fullDescription: 'Developed a full-stack vacation rental platform for listing, browsing, and booking stays similar to Airbnb. Implemented user authentication and authorization using Passport.js with secure password hashing and session management. Built complete CRUD functionality for listings and reviews with ownership-based access control. Integrated Cloudinary for image upload and storage, and MongoDB Atlas for scalable database hosting. Added interactive maps and geolocation features using Leaflet.js and geocoding services.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'Cloudinary', 'Leaflet.js', 'Bootstrap'],
    liveUrl: 'https://wanderlust-project-r0kw.onrender.com/listings',
    githubUrl: 'https://github.com/utsav0092/WanderLust_Project',
    featured: true,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'FoodieTable',
    subtitle: 'Food Ordering Application',
    description: 'A responsive front-end food ordering app with category filtering, real-time search, dynamic cart management, and protected checkout routes.',
    fullDescription: 'Developed a fully responsive front-end food ordering web application for browsing food items and managing orders. Implemented category-based filtering and real-time search for improved content discovery. Built dynamic shopping cart functionality with quantity management and live price updates. Secured the checkout flow using protected routes to ensure valid cart state. Designed a modern, mobile-first UI using Tailwind CSS with interactive feedback via toasts and loading animations.',
    tech: ['React 18', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'React Router v6'],
    liveUrl: 'https://foodie-table-react-js.vercel.app/',
    githubUrl: 'https://github.com/utsav0092/FoodieTable_reactJS',
    featured: true,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Simon Says Game',
    subtitle: 'Memory Game',
    description: 'A classic Simon memory game where players repeat colour sequences that get progressively longer with each level.',
    fullDescription: 'Developed a classic Simon memory game where players repeat colour sequences that get progressively longer with each level of play. Implemented interactive game mechanics including start, sequence display, user input validation, level progression, game over, and reset functionality. Built engaging UI with responsive design and visual feedback using CSS animations and dynamic DOM updates. Managed core logic in JavaScript, including random pattern generation, user event handling, sequence comparison, and game state control.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://simon-game-neon-omega.vercel.app/',
    githubUrl: 'https://github.com/utsav0092/Simon_Game',
    featured: false,
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    title: 'Tic Tac Toe AI',
    subtitle: 'Game with Minimax Algorithm',
    description: 'A retro-style Tic-Tac-Toe game with an unbeatable AI opponent using the Minimax algorithm.',
    fullDescription: 'Developed a retro-style Tic-Tac-Toe browser game with Two Player mode and an AI opponent. Implemented an unbeatable AI using the Minimax algorithm for optimal move selection. Designed turn-based gameplay where the human plays as O and the AI plays as X, with automatic win and draw detection. Built a responsive, arcade-inspired UI using HTML and CSS with real-time DOM updates.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://tic-tac-toe-iota-fawn-28.vercel.app/',
    githubUrl: 'https://github.com/utsav0092',
    featured: false,
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
];

interface ProjectModalData {
  title: string;
  subtitle: string;
  fullDescription: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">03. Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative glass-card rounded-3xl p-8 md:p-10 hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <span className="text-primary font-mono text-sm">Featured Project</span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-xs text-muted-foreground italic">Click to view details</p>
                  </div>
                  
                  <div className="flex lg:flex-col gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              
              <div className="relative h-full glass-card rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm flex-1 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/utsav0092" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl shadow-glow p-8"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
              
              <span className="text-primary font-mono text-sm">Project Details</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-2">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-6">{selectedProject.subtitle}</p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-mono bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="flex-1" asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
