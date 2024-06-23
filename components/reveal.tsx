'use client';

import { motion, Variants } from 'framer-motion';
import { HTMLAttributes } from 'react';

const revealVariants: Variants = {
  top: {
    opacity: 0,
    y: -200,
  },
  right: {
    opacity: 0,
    x: -200,
  },
  bottom: {
    opacity: 0,
    y: 200,
  },
  left: {
    opacity: 0,
    x: 200,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export function Reveal({
  children,
  from = 'bottom',
  durationMotion = 0.75,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  from?: 'bottom' | 'top' | 'left' | 'right';
  durationMotion?: number;
}) {
  return (
    <motion.div
      initial={from}
      whileInView="onscreen"
      transition={{
        delay: 0.2,
        duration: durationMotion,
      }}
      viewport={{ once: true }}
      variants={revealVariants}
      className={props.className}
    >
      {children}
    </motion.div>
  );
}
