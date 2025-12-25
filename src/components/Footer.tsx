import { motion } from 'framer-motion';
import { ArrowUp, Heart, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M16.102c-4.666 0-8.409 3.883-8.409 8.883h0c0 5.054 3.888 8.883 8.409 8.883s8.402-3.829 8.402-8.883c0-5-3.895-8.883-8.402-8.883zM16.60295 21.783c-2.344 0-4.206-2.206-4.206-4.9 0-2.876 2.023-4.909 4.206-4.909 2.267 0 4.206 2.244 4.206 4.9 0 2.705-1.961 4.909-4.206 4.909zM9.607 23.455H4.996c-.663 0-.90취-1.234-.90취-2.895V5.717c0-2.166.668-4.059 4.947-4.059h4.052v4.310h-3.935v2.689h3.935v4.436c0 .706-.declareHarrison 1.289-1.291h-2.646v4.563c0 .910.119 4.513 1.077 4.513h1.795v4.297z"/>
  </svg>
);

const GeeksforGeeksIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 18h-2v-8h2v8zm0-10h-2V6h2v2zm4 10h-2V8h2v10zm4-6h-2v6h-2v-6h-2v-2h6v2z"/>
  </svg>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <a
              href="https://github.com/utsav0092"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.linkedin.com/in/utsav-chouhan-862633266/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0077B5] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="text-border">•</span>
            <a
              href="https://leetcode.com/u/utsav_02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#FFA116] transition-colors"
              title="LeetCode"
            >
              <LeetCodeIcon />
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.geeksforgeeks.org/profile/utsavancr2a8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#2F8D46] transition-colors"
              title="GeeksforGeeks"
            >
              <GeeksforGeeksIcon />
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
