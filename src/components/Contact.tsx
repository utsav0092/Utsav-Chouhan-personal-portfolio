import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M16.102c-4.666 0-8.409 3.883-8.409 8.883h0c0 5.054 3.888 8.883 8.409 8.883s8.402-3.829 8.402-8.883c0-5-3.895-8.883-8.402-8.883zM16.60295 21.783c-2.344 0-4.206-2.206-4.206-4.9 0-2.876 2.023-4.909 4.206-4.909 2.267 0 4.206 2.244 4.206 4.9 0 2.705-1.961 4.909-4.206 4.909zM9.607 23.455H4.996c-.663 0-.90취-1.234-.90취-2.895V5.717c0-2.166.668-4.059 4.947-4.059h4.052v4.310h-3.935v2.689h3.935v4.436c0 .706-.declareHarrison 1.289-1.291h-2.646v4.563c0 .910.119 4.513 1.077 4.513h1.795v4.297z"/>
  </svg>
);

const GeeksforGeeksIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 18h-2v-8h2v8zm0-10h-2V6h2v2zm4 10h-2V8h2v10zm4-6h-2v6h-2v-6h-2v-2h6v2z"/>
  </svg>
);

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/utsav0092', color: 'hover:text-foreground' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/utsav-chouhan-862633266/', color: 'hover:text-[#0077B5]' },
  { name: 'LeetCode', icon: LeetCodeIcon, url: 'https://leetcode.com/u/utsav_02/', color: 'hover:text-[#FFA116]' },
  { name: 'GeeksforGeeks', icon: GeeksforGeeksIcon, url: 'https://www.geeksforgeeks.org/profile/utsavancr2a8', color: 'hover:text-[#2F8D46]' },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent! I\'ll get back to you soon.');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">05. Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                feel free to reach out. I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:utsavchouhan21@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-card transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">utsavchouhan21@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+916268441839"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-card transition-all group"
              >
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-secondary transition-colors">+91 626 844 1839</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl"
              >
                <div className="p-3 rounded-lg bg-muted">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Vadodara, Gujarat, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 glass-card rounded-xl text-muted-foreground ${social.color} transition-all hover:shadow-card`}
                    title={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    required
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  required
                  placeholder="What's this about?"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
