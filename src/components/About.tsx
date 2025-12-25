import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Code2, Languages } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '8.15', label: 'CGPA', icon: GraduationCap },
    { value: '2+', label: 'Years Coding', icon: Code2 },
    { value: '6+', label: 'Projects', icon: Calendar },
  ];

  const education = [
    {
      degree: 'B.Tech CSE (AI)',
      institution: 'Parul University, Vadodara',
      year: '2022 - 2026',
      grade: 'CGPA: 8.15',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'M.P. Board',
      year: '2021 - 2022',
      grade: 'Percentage: 88%',
    },
    {
      degree: 'Secondary (10th)',
      institution: 'M.P. Board',
      year: '2019 - 2020',
      grade: 'Percentage: 87%',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">01. About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                <img 
                  src={profilePicture} 
                  alt="Utsav Chouhan" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-1/4 glass-card px-4 py-2 rounded-full shadow-card"
              >
                <span className="font-mono text-sm text-primary">MERN Stack</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -left-4 bottom-1/4 glass-card px-4 py-2 rounded-full shadow-card"
              >
                <span className="font-mono text-sm text-secondary">AI/ML</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <span className="text-foreground font-medium">Utsav Chouhan</span>, a B.Tech student 
              in Computer Science and Engineering with a specialization in{' '}
              <span className="text-primary font-medium">Artificial Intelligence</span> at Parul University, 
              Vadodara, Gujarat.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I have a strong technical background in web development, with expertise in the{' '}
              <span className="text-foreground font-medium">MERN stack</span>, along with practical 
              experience in machine learning. I hold several prestigious certifications from recognized 
              global institutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Additionally, I have a passion for <span className="text-secondary font-medium">art and drawing</span>, 
              which enhances my creativity and attention to detail in everything I build.
            </p>

            {/* Location & Languages */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Vadodara, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Languages className="h-4 w-4 text-primary" />
                <span>Hindi, English</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 glass-card rounded-xl"
                >
                  <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            <GraduationCap className="inline h-6 w-6 mr-2 text-primary" />
            Education
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:shadow-card-hover transition-all"
              >
                <div className="text-primary font-mono text-xs mb-2">{edu.year}</div>
                <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {edu.grade}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
