'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stagesData = [
  {
    id: "01",
    title: "Briefing",
    content: "In the initial phase, we conduct a thorough consultation to understand your project goals, target audience, and specific requirements. We believe that a solid foundation is key to a successful outcome."
  },
  {
    id: "02",
    title: "Analytics",
    content: "We analyze the market, competitors, and user behavior to inform our strategy. Data-driven insights allow us to make informed decisions for design, functionality, and overall user experience."
  },
  {
    id: "03",
    title: "Prototyping",
    content: "We create wireframes and interactive prototypes to visualize the user flow and structure of the website. This allows for early feedback and iteration before moving into design."
  },
  {
    id: "04",
    title: "Design",
    content: "Our team designs a visually appealing and user-friendly interface based on the approved prototypes. We focus on creating a unique and memorable brand experience that aligns with your identity."
  },
  {
    id: "05",
    title: "Adapting & Development",
    content: "This is where the design comes to life. Our developers write clean, efficient, and scalable code to build a fully functional and responsive website that performs seamlessly across all devices."
  },
  {
    id: "06",
    title: "The Final",
    content: "After rigorous testing and quality assurance, we deploy the website. We also provide support and maintenance to ensure your digital presence remains robust and up-to-date."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Stages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section 
      id="stages" 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="p-8 md:p-16 border-t border-border"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">
                Stages of Website
            </h2>
            <p className="font-headline text-4xl md:text-5xl font-bold uppercase text-outline">
                Development
            </p>
        </motion.div>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
          {stagesData.map((stage, index) => (
            <motion.div key={stage.id} variants={itemVariants}>
              <AccordionItem value={`item-${index}`} className="border-b-2 border-border">
                <AccordionTrigger className="text-left font-headline text-xl uppercase hover:no-underline">
                  <div className="flex items-center gap-8">
                      <span className="text-muted-foreground">{stage.id}</span>
                      <span>{stage.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-16 text-muted-foreground">
                  {stage.content}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
