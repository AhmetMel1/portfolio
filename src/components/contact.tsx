'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import Loader from './loader';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { sendEmail } from '@/lib/email';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: TFormSchema) => {
    setLoading(true);
    const { data, error } = await sendEmail(values);
    setLoading(false);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    reset();
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-28 w-full scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        heading="Get In Touch"
        content="Have an idea, role, or project in mind? Reach out directly or send me a message here."
      />

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-border/60 bg-background/80 rounded-3xl border p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight">
            Let’s build something solid
          </h3>
          <p className="text-muted-foreground mt-4 text-sm leading-7">
            I’m open to software opportunities, collaborations, and product
            conversations. You can contact me directly at:
          </p>

          <a
            href="mailto:ahmet.melih0056@gmail.com"
            className="text-primary mt-5 inline-flex items-center text-sm font-medium underline underline-offset-4"
          >
            ahmet.melih0056@gmail.com
          </a>

          <div className="text-muted-foreground mt-8 space-y-3 text-sm">
            <div className="border-border/60 bg-muted/40 rounded-2xl border px-4 py-3">
              Backend Development
            </div>
            <div className="border-border/60 bg-muted/40 rounded-2xl border px-4 py-3">
              API & System Design
            </div>
            <div className="border-border/60 bg-muted/40 rounded-2xl border px-4 py-3">
              Scalable Product Engineering
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-border/60 bg-background/80 rounded-3xl border p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                {...register('email')}
                className={cn(
                  'border-input bg-background/70 placeholder:text-muted-foreground focus-visible:ring-ring h-12 w-full rounded-2xl border px-4 text-sm outline-none transition focus-visible:ring-2',
                  errors.email?.message && 'border-destructive'
                )}
              />
              {errors.email?.message && (
                <p className="text-destructive mt-2 text-sm">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                id="message"
                placeholder="Tell me about your project or message"
                {...register('message')}
                className={cn(
                  'border-input bg-background/70 placeholder:text-muted-foreground focus-visible:ring-ring min-h-[220px] w-full resize-none rounded-2xl border px-4 py-3 text-sm outline-none transition focus-visible:ring-2',
                  errors.message?.message && 'border-destructive'
                )}
              />
              {errors.message?.message && (
                <p className="text-destructive mt-2 text-sm">
                  {errors.message?.message}
                </p>
              )}
            </div>

            <Button
              size="lg"
              className="w-full rounded-2xl"
              disabled={
                loading || watch('email') === '' || watch('message') === ''
              }
            >
              {loading ? (
                <Loader className="size-4" />
              ) : (
                <>
                  Send message
                  <Icons.arrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
