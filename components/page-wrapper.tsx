'use client';

// import { motion, AnimatePresence } from 'framer-motion';
import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

// export const FadeIn = ({ children }: { children: React.ReactNode }) => (
//   <>
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 15 }}
//         transition={{ delay: 0.25 }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   </>
// );

export function Background({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <div className={cn('h-fit bg-white', className)} {...props}>
      {children}
    </div>
  );
}
