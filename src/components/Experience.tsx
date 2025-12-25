import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Award, Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    type: 'internship',
    title: 'Web Developer Intern',
    company: 'Bharat Intern',
    duration: 'March 2024 - April 2024',
    description: 'Completed a one-month virtual internship focused on front-end web development. Built responsive web interfaces using HTML5, CSS3, and JavaScript. Created a Netflix Clone and Personal Portfolio Website applying modern web standards and responsive design principles.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'DOM Manipulation'],
  },
  {
    type: 'internship',
    title: 'Data Visualization Intern',
    company: 'Tata (via Forage)',
    duration: 'September 2024 - September 2025',
    description: 'Completed a virtual data visualization internship transforming business data into meaningful insights using Power BI. Worked on framing business problems, selecting appropriate visualizations, and creating interactive dashboards for data-driven decision-making.',
    skills: ['Power BI', 'Data Analysis', 'Visual Storytelling', 'Dashboard Design'],
  },
];

const certificates = [
  { 
    title: 'LeetCode 50 Days Badge', 
    issuer: 'LeetCode', 
    description: 'Achieved 50 days badge for consistent problem solving practice on LeetCode platform. Demonstrated dedication to improving algorithmic thinking and coding skills through daily practice.',
  },
  { 
    title: 'Responsive Web Design', 
    issuer: 'FreeCodeCamp', 
    description: 'Completed comprehensive certification covering HTML5, CSS3, and JavaScript fundamentals. Built multiple responsive web projects demonstrating mastery of modern web design principles.',
  },
  { 
    title: 'JavaScript Mastery', 
    issuer: 'Scaler', 
    description: 'Completed "Unlocking the Power of JavaScript" course. Gained deep understanding of JavaScript concepts including closures, prototypes, async programming, and ES6+ features.',
  },
  { 
    title: 'Python for ML', 
    issuer: 'Udemy', 
    description: 'Completed comprehensive Python course covering NumPy, Pandas, Matplotlib, and scikit-learn for machine learning applications. Built multiple ML projects.',
  },
  { 
    title: 'Machine Learning', 
    issuer: 'Internshala', 
    description: '8-weeks intensive Machine Learning training and certification program. Covered supervised and unsupervised learning algorithms with hands-on projects.',
  },
  { 
    title: 'Python Bootcamp', 
    issuer: 'GeeksForGeeks', 
    description: '3-weeks intensive Python programming bootcamp certificate. Covered Python fundamentals, data structures, and object-oriented programming.',
  },
  { 
    title: 'AI Fundamentals', 
    issuer: 'Cisco & IBM SkillsBuild', 
    description: 'Artificial Intelligence fundamentals certification. Covered AI concepts, neural networks, machine learning basics, and real-world AI applications.',
  },
  { 
    title: 'DBMS and SQL', 
    issuer: 'Infosys', 
    description: 'Database Management Systems and SQL certification. Covered relational database concepts, SQL queries, normalization, and database design principles.',
  },
  { 
    title: 'Intro to ML', 
    issuer: 'IIT Bombay AWS Workshop', 
    description: 'Introduction to Machine Learning workshop conducted by IIT Bombay in collaboration with AWS. Covered ML fundamentals and cloud-based ML services.',
  },
];

interface ModalData {
  title: string;
  company?: string;
  issuer?: string;
  duration?: string;
  description: string;
  skills?: string[];
}

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedItem, setSelectedItem] = useState<ModalData | null>(null);

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">04. Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Internships */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
          >
            <Briefcase className="h-6 w-6 text-primary" />
            Internships
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedItem(exp)}
                className="group cursor-pointer"
              >
                <div className="relative h-full glass-card rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </div>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">+{exp.skills.length - 3} more</span>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground italic mt-4">Click to view details</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
          >
            <Award className="h-6 w-6 text-secondary" />
            Certificates & Achievements
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                onClick={() => setSelectedItem(cert)}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group cursor-pointer glass-card rounded-xl p-5 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors truncate">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-card rounded-3xl p-8 shadow-glow"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-3 mb-4">
                {selectedItem.company ? (
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {selectedItem.company || selectedItem.issuer}
                  </p>
                </div>
              </div>
              
              {selectedItem.duration && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  {selectedItem.duration}
                </div>
              )}
              
              <p className="text-muted-foreground leading-relaxed mb-6">{selectedItem.description}</p>
              
              {selectedItem.skills && (
                <div className="flex flex-wrap gap-2">
                  {selectedItem.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm font-mono bg-primary/10 text-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
