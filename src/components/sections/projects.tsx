'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projectData: Project[] = [
  {
    title: "Ingenue",
    description: "A full-featured online store with product catalogs, user authentication, and a Stripe-integrated checkout process.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "fashion website",
    techStack: ["UI/UX Design", "E-commerce"],
    liveUrl: "#"
  },
  {
    title: "Sony",
    description: "An analytics dashboard for a software-as-a-service product, featuring data visualization and user management.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "corporate website",
    techStack: ["Web Design"],
    liveUrl: "#"
  },
  {
    title: "The Irish Times",
    description: "A sleek and professional landing page for a tech startup, designed to attract investors and early customers.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "news website",
    techStack: ["UI/UX Design", "Web Design"],
    liveUrl: "#"
  },
  {
    title: "Empire",
    description: "A customer service chatbot integrated into a web app, using Genkit to provide intelligent, automated responses.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "architectural photography",
    techStack: ["Web Design"],
    liveUrl: "#"
  }
];

const MarqueeText = () => (
    <>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
        <span className="mx-4">My Works</span><span className="text-accent mx-4">×</span>
    </>
);

const Ticker = () => (
    <div className="relative flex overflow-x-hidden border-y border-border text-foreground font-semibold uppercase tracking-widest text-sm">
        <div className="py-4 animate-marquee whitespace-nowrap flex min-w-full">
           <MarqueeText/>
           <MarqueeText/>
        </div>
    </div>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects">
      <Ticker />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            variants={projectVariants}
            className={`p-8 ${index % 2 !== 0 ? 'md:border-l' : ''} ${index < 2 ? 'border-b' : ''} border-border`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline text-2xl font-bold uppercase">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="rounded-full border-2">{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-muted-foreground text-sm h-12">{project.description}</p>
            </div>
            <div className="relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.imageHint}
                />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
