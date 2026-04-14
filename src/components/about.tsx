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
      className="my-24 w-full scroll-mt-32"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
    >
      <SectionHeading heading="About Me" />

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-border/60 bg-background/70 rounded-3xl border p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur sm:p-8">
          <p className="text-muted-foreground text-sm leading-8 sm:text-base">
            Hello, I&apos;m Ahmet Melih Temiz. I’m a backend-focused software
            developer who enjoys building clean, scalable, and meaningful
            systems. My journey started with Computer Programming at Istanbul
            University – Cerrahpaşa, and since then I&apos;ve continued learning
            through hands-on projects and real production experience.
          </p>

          <p className="text-muted-foreground mt-5 text-sm leading-8 sm:text-base">
            I previously worked at Balance Network, where I contributed to a
            cryptocurrency exchange platform and strengthened my backend
            foundations while also supporting frontend needs when necessary.
            Currently, I work at Görmek Lazım, a multi-vertical e-commerce
            super-app, where I focus on reliable backend services, system
            structure, and platform performance.
          </p>

          <p className="text-muted-foreground mt-5 text-sm leading-8 sm:text-base">
            I enjoy solving complex product problems, collaborating closely with
            teams, and shipping systems that create real value. I’m open to
            strong opportunities where I can contribute, grow, and keep pushing
            my engineering standards higher.
          </p>
        </div>

        <div className="from-primary/10 via-background to-background border-border/60 rounded-3xl border bg-gradient-to-br p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
          <div className="mb-4 text-sm font-semibold">Highlights</div>
          <div className="text-muted-foreground space-y-4 text-sm leading-7">
            <div className="border-border/60 bg-background/70 rounded-2xl border p-4">
              Backend architecture and API development
            </div>
            <div className="border-border/60 bg-background/70 rounded-2xl border p-4">
              Performance-focused engineering mindset
            </div>
            <div className="border-border/60 bg-background/70 rounded-2xl border p-4">
              Production experience in fintech and e-commerce
            </div>
            <div className="border-border/60 bg-background/70 rounded-2xl border p-4">
              Clean code, maintainability, and team collaboration
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </motion.section>
  );
}
