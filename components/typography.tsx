import { urbanist } from '@/components/fonts';
import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function H1({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <h1
      className={cn(
        `${urbanist.className} scroll-m-20 text-4xl font-bold tracking-tight text-[#60b7eb] md:text-4xl`,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <h1
      className={cn(
        `${urbanist.className} text-2xl font-bold text-[#60b7eb] md:text-3xl`,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H3({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <h1
      className={cn(
        `${urbanist.className} scroll-m-20 text-2xl font-semibold tracking-tight text-[#60b7eb]`,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function P({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        'text-justify leading-7 text-slate-500 [&:not(:first-child)]:mt-2',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
