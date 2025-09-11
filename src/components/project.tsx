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
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links, disabled, reason } =
    project as TProjectExt;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={`bg-secondary relative flex h-full flex-col rounded p-5 ${
        disabled ? 'opacity-70 grayscale' : ''
      }`}
    >
      {disabled && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">
          Past Work
        </span>
      )}

      <div className="bg-muted mb-3 w-fit rounded-full p-4">
        <Image src={image} alt={`${title} image`} width={32} height={32} />
      </div>

      <div className="flex h-full flex-col">
        <div>
          <h3 className="my-2 text-lg font-medium">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="grow"></div>

        <div className="my-3 flex flex-wrap gap-2">
          {(technologies ?? []).map((tech) => (
            <span
              className="bg-muted rounded-full px-3 py-1 text-sm"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {disabled ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="px-5">
                  <Icons.info className="size-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-secondary fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 text-center shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-center">{title}</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground text-sm">
                  {reason}:
                  <br />
                  <p className="text-primary mt-1 text-center">
                    <a
                      href={links.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {links.preview}
                    </a>
                  </p>
                </p>
              </DialogContent>
            </Dialog>
          ) : (
            <>
              <Button variant="outline" asChild className="mr-2 px-5">
                <a
                  href={links?.preview}
                  aria-label="preview project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.preview className="size-5" />
                </a>
              </Button>

              {links.github != '' && (
                <Button variant="outline" asChild className="px-5">
                  <a
                    href={links.github}
                    aria-label="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.githubOutline className="size-5" />
                  </a>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};
