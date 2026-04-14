'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];
type TProjectExt = TProject & { disabled?: boolean; reason?: string };

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links, disabled, reason } =
    project as TProjectExt;

  return (
    <motion.article
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={`border-border/60 bg-background/80 group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)] ${
        disabled ? 'opacity-80' : ''
      }`}
    >
      <div className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {disabled && (
        <span className="absolute right-4 top-4 z-10 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-500">
          Past Work
        </span>
      )}

      <div className="bg-muted/70 border-border/60 mb-5 flex size-14 items-center justify-center rounded-2xl border">
        <Image src={image} alt={`${title} image`} width={30} height={30} />
      </div>

      <div className="relative flex h-full flex-col">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground mt-3 text-sm leading-7">
            {description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {(technologies ?? []).map((tech) => (
            <span
              className="border-border/60 bg-muted/60 rounded-full border px-3 py-1 text-xs font-medium"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {disabled ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-xl px-5">
                    <Icons.info className="mr-2 size-4" />
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md rounded-3xl p-6">
                  <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-muted-foreground text-sm leading-7">
                    {reason}
                  </p>
                  <a
                    href={links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-2 inline-block text-sm font-medium underline underline-offset-4"
                  >
                    Visit related link
                  </a>
                </DialogContent>
              </Dialog>
            ) : (
              <>
                <Button variant="outline" asChild className="rounded-xl px-5">
                  <a
                    href={links?.preview}
                    aria-label="preview project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.preview className="mr-2 size-4" />
                    Live Preview
                  </a>
                </Button>

                {links.github !== '' && (
                  <Button
                    variant="secondary"
                    asChild
                    className="rounded-xl px-5"
                  >
                    <a
                      href={links.github}
                      aria-label="github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icons.githubOutline className="mr-2 size-4" />
                      Code
                    </a>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
