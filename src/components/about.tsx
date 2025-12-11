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
      className="my-12 flex w-full scroll-mt-48 flex-col items-center "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-6">
        <p className="mb-4">
          Hello, I&apos;m Ahmet Melih Temiz. I’m a backend-focused software
          developer who loves building clean, scalable and meaningful systems.
          My journey began with studying Computer Programming at Istanbul
          University – Cerrahpaşa, and since then, I’ve continued to expand my
          knowledge through hands-on projects and continuous learning. I
          previously worked at Balance Network, contributing to the development
          and evolution of the company’s cryptocurrency exchange platform. This
          role helped me gain solid experience in backend development while also
          collaborating on frontend features when needed. Currently, I’m working
          as a backend developer at Görmek Lazım, a multi-vertical e-commerce
          super-app that covers marketplace, swap, auction, bazaar, and crafts
          modules. Here, I focus on building reliable backend services,
          improving system structure, and ensuring the overall performance of
          the platform. I enjoy solving complex problems, collaborating with
          teams, and creating products that genuinely add value. My goal is to
          keep improving myself while contributing to projects that make an
          impact.
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
