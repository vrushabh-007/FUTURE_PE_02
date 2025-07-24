'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  "Frontend Development with React & Next.js",
  "Backend Architecture with Node.js & Firebase",
  "UI/UX Design & Prototyping in Figma",
  "Agile Methodologies & Project Management",
  "Full Stack System Design & Implementation",
];

const fields = [
    "E-commerce Platforms",
    "SaaS Dashboards",
    "Corporate Landing Pages",
    "AI-Powered Applications",
    "Mobile-First Web Apps",
]

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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section 
      id="about" 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="p-8 md:p-16 border-t border-border"
    >
        <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">
                    How can I help?
                </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground mb-12">
                <motion.p variants={itemVariants}>
                  We are a team of passionate developers and designers dedicated to building exceptional web experiences. With a focus on clean code, user-centric design, and scalable architecture, we help businesses thrive in the digital landscape.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Our collaborative approach ensures we understand your unique needs, allowing us to forge solutions that are not only powerful but also purposeful. We are ready to tackle challenging business goals and bring your vision to life.
                </motion.p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                    <h3 className="font-headline text-xl uppercase font-bold mb-4">Skills</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        {skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h3 className="font-headline text-xl uppercase font-bold mb-4">Fields</h3>
                     <ul className="space-y-2 text-muted-foreground">
                        {fields.map(service => <li key={service}>{service}</li>)}
                    </ul>
                </motion.div>
            </div>
      </div>
    </motion.section>
  );
}
