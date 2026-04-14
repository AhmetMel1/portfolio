'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.7 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.2 }}
      className="via-border my-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent to-transparent sm:my-12"
    />
  );
}
