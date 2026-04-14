'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useActiveSection } from '@/components/active-section-provider';
import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icons } from '@/components/icons';
import ThemeToggle from '@/components/theme-toggle';
import { links } from '@/lib/data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  useEffect(() => {
    window.history.replaceState({}, document.title, '/');
    window.scroll(0, 0);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center sm:top-6"
    >
      <div className="border-border/50 bg-background/70 mx-auto w-fit rounded-full border p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <Dialog open={open} onOpenChange={setOpen}>
          <div className="flex items-center gap-2 sm:hidden">
            <DialogTrigger asChild>
              <Button variant="secondary" size="lg" className="rounded-full">
                Menu <Icons.chevronDown className="ml-2 size-4" />
              </Button>
            </DialogTrigger>
            <ThemeToggle />
          </div>

          <DialogContent className="top-1/2 max-h-screen w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl text-center">
            <DialogHeader>
              <DialogTitle className="text-md self-start font-medium">
                Navigation
              </DialogTitle>
            </DialogHeader>
            <nav>
              <ul>
                {links.map(({ name, hash }) => (
                  <li
                    key={name}
                    onClick={() => {
                      setOpen(false);
                      setActiveSection(name);
                      setTimeOfLastClick(Date.now());
                    }}
                    className="border-muted-foreground/20 py-3 text-sm [&:not(:last-child)]:border-b"
                  >
                    <Link className="block" href={hash}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </DialogContent>
        </Dialog>

        <nav className="text-muted-foreground hidden text-sm sm:block">
          <ul className="flex items-center gap-1">
            {links.map(({ name, hash }) => (
              <li key={name}>
                <Link
                  href={hash}
                  className="hover:text-foreground relative px-4 py-2 transition-colors"
                  onClick={() => {
                    setActiveSection(name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {name}
                  {name === activeSection && (
                    <motion.span
                      className="bg-muted border-border/50 absolute inset-0 -z-10 rounded-full border"
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
