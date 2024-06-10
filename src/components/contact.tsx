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
      className="my-36 w-full scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        heading="Get In Touch"
        content="Please contact me directly at ahmet.melih0056@gmail.com or through this form."
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-full max-w-xl border">
          <input
            type="email"
            id="email"
            placeholder="Your email"
            {...register('email')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.email?.message && 'border-destructive'
            )}
          />
          {errors.email?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-xl">
          <textarea
            id="message"
            placeholder="Your message"
            {...register('message')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.message?.message && 'border-destructive'
            )}
          ></textarea>
          {errors.message?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.message?.message}
            </p>
          )}
        </div>
        <Button
          size="lg"
          disabled={loading || watch('email') === '' || watch('message') === ''}
        >
          {loading ? (
            <Loader className="size-4" />
          ) : (
            <>
              Submit
              <Icons.arrowRight className="ml-2 size-4" />
            </>
          )}{' '}
        </Button>
      </form>
    </motion.section>
  );
}
