'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
      {skillsData.map(({ icon }, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          className="border-border/60 bg-background/80 flex h-14 min-w-[56px] items-center justify-center rounded-2xl border px-4 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-1"
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};
