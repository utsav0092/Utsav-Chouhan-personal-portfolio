import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  'Full-Stack Developer',
  'MERN Stack Developer',
  'AI/ML Enthusiast',
  'React Developer',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Animated Blobs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">Utsav</span>{' '}
            <span className="gradient-text">Chouhan</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-12 md:h-16 flex items-center justify-center mb-8"
          >
            <span className="text-xl md:text-3xl font-light text-muted-foreground">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            B.Tech CSE (AI) student passionate about building scalable web applications 
            and exploring machine learning. Currently crafting digital experiences with the MERN stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-xl shadow-glow"
              asChild
            >
              <a href="https://drive.google.com/file/d/1rQUSwV7svQa3liTCE9xxc6JPZoo9f3pL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </span>
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-xl border-border hover:bg-primary/5 hover:border-primary/50 transition-all"
              asChild
            >
              <a href="#contact">
                <Mail className="h-5 w-5 mr-2" />
                Get in Touch
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/utsav0092', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/utsav-chouhan-862633266/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:utsavchouhan21@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass-card hover:shadow-card-hover transition-all"
              >
                <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};
