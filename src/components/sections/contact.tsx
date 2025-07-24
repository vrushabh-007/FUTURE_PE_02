'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      id="contact" 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="p-8 md:p-16 border-t border-border"
    >
        <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="mb-12">
                <h2 className="font-headline text-4xl md:text-8xl font-bold uppercase tracking-tighter">
                    Contact
                </h2>
                <h2 className="font-headline text-4xl md:text-8xl font-bold uppercase tracking-tighter text-outline">
                    Me
                </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="font-headline text-xl uppercase font-bold mb-4">Work</h3>
                    <a href="mailto:contact@forgerevamped.com" className="text-muted-foreground hover:text-primary transition-colors">contact@forgerevamped.com</a>
                </div>
                <div>
                    <h3 className="font-headline text-xl uppercase font-bold mb-4">Online</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.section>
  );
}
