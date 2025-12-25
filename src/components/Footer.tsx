import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    // For Locomotive Scroll
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback for regular scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground text-sm">
              © 2024 Utsav Chouhan. Built with{' '}
              <Heart className="inline h-3 w-3 text-red-500 fill-red-500" /> using React & Tailwind
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/utsav0092"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.linkedin.com/in/utsav-chouhan-862633266/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-border">•</span>
            <a
              href="mailto:utsavchouhan21@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full shadow-card hover:shadow-card-hover bg-primary text-primary-foreground"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </motion.div>
    </footer>
  );
};
