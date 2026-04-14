'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export default function Intro() {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-[78vh] w-full scroll-mt-96 flex-col items-center justify-center py-36 text-center sm:py-60"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <motion.div className="mb-4  grayscale transition duration-700 hover:scale-110 hover:filter-none">
          <motion.img
            src="/ahmetmelihtemiz.webp"
            alt="Ahmet Melih Temiz"
            className="size-40 rounded-full sm:size-56"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="border-border/60 bg-background/70 text-muted-foreground mb-4 inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium shadow-sm backdrop-blur sm:text-sm"
      >
        Backend-Focused Full Stack Developer
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <Button asChild size="lg" className="rounded-xl px-6">
          <Link href="#contact">
            Let&apos;s talk <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="rounded-xl px-6"
          asChild
        >
          <a href="/ahmetmelihtemiz.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>

        <Button variant="secondary" size="icon" className="rounded-xl" asChild>
          <a
            href="https://www.linkedin.com/in/ahmet-melih-temiz/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.linkedin className="size-5" />
          </a>
        </Button>

        <Button variant="secondary" size="icon" className="rounded-xl" asChild>
          <a
            href="https://github.com/AhmetMel1"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.github className="size-5" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
