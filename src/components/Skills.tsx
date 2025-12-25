import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Mongoose', 'EJS'],
  },
  {
    title: 'Programming',
    color: 'from-purple-500 to-pink-500',
    skills: ['Python', 'JavaScript', 'Java', 'C'],
  },
  {
    title: 'AI/ML',
    color: 'from-orange-500 to-red-500',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'Supervised Learning', 'Unsupervised Learning'],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-indigo-500 to-violet-500',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code', 'Vercel', 'Render'],
  },
  {
    title: 'Databases',
    color: 'from-teal-500 to-cyan-500',
    skills: ['MongoDB', 'SQL', 'NoSQL', 'MongoDB Atlas'],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">02. Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`group relative p-6 rounded-2xl glass-card hover:shadow-card-hover transition-all duration-300 ${
                categoryIndex === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-sm font-medium bg-background/80 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 glass-card rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux Toolkit', 'React Router', 'Passport.js', 'Cloudinary', 'Leaflet.js', 'Power BI', 'JSON', 'Responsive Design'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="px-4 py-2 text-sm text-muted-foreground border border-border/50 rounded-full hover:border-primary/30 hover:text-foreground transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
