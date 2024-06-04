'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-12 flex w-full scroll-mt-24 flex-col items-center "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          Hello, I&apos;m Ahmet Melih Temiz. I studied Computer Programming at
          Istanbul University Cerrahpaşa and have always expanded my passion for
          technology through constant learning. Currently, I am a backend
          developer at Balance Network, working with technologies like Java,
          Spring Boot, Node.js, and Nest.js. My desire for continuous
          self-improvement and my ability to work in teams enable me to develop
          effective solutions, even in complex projects. I aim to contribute to
          the world of technology with innovative ideas.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
}
