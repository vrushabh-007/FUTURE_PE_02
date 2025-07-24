'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function Hero() {
  return (
    <section id="home" className="p-8 md:p-16 border-b border-border">
      <div className="text-left mb-16">
        <motion.h1
          variants={fadeIn(0)}
          initial="hidden"
          animate="visible"
          className="font-headline text-5xl md:text-8xl font-bold uppercase tracking-tighter"
        >
          Web
        </motion.h1>
        <motion.h1
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="font-headline text-5xl md:text-8xl font-bold uppercase tracking-tighter text-outline"
        >
          DEVELOPERS
        </motion.h1>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
          className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0"
        >
          <Image
            src="https://placehold.co/400x400.png"
            alt="Founder portrait"
            width={400}
            height={400}
            className="rounded-full object-cover border-4 border-border"
            data-ai-hint="developer portrait"
          />
        </motion.div>
        <motion.div
          variants={fadeIn(0.6)}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-muted-foreground space-y-4"
        >
          <p>
            We are a team of passionate developers and designers dedicated to building exceptional web experiences. With a focus on clean code, user-centric design, and scalable architecture, we help businesses thrive in the digital landscape.
          </p>
          <p>
            Our collaborative approach ensures we understand your unique needs, allowing us to forge solutions that are not only powerful but also purposeful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
