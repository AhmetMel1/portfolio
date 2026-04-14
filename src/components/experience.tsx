'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <section ref={ref} id="experience" className="my-28 w-full scroll-mt-28">
      <SectionHeading
        heading="Experience"
        content="Professional roles and product environments where I’ve built, improved, and maintained real systems."
      />

      <div className="mx-auto grid max-w-5xl gap-5">
        {experiencesData.map(
          ({ title, description, location, date }, index) => (
            <motion.div
              key={`${title}-${date}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border-border/60 bg-background/80 rounded-3xl border p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                    <Icons.briefcase />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm font-medium">
                      {location}
                    </p>
                    <p className="text-muted-foreground mt-3 text-sm leading-7">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground shrink-0 text-sm font-medium">
                  {date}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
