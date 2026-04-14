'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export default function Projects() {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-28 w-full scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Selected Projects"
          content="A few projects that reflect how I approach engineering, system design, and product quality."
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
