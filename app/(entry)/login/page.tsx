'use client';

import { AtSign, KeyRound, AlertCircle } from 'lucide-react';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { urbanist } from '@/app/ui/fonts';
import Link from 'next/link';

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <form
      action={dispatch}
      className="z-10 mx-8 max-w-[420px] rounded-2xl bg-white px-8 py-16 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
    >
      <section className="_TITLE mb-16 text-center">
        <h2
          className={`${urbanist.className} text-rme-pink-900 text-lg font-semibold`}
        >
          Selamat Datang
        </h2>
        <h1
          className={`${urbanist.className} text-3xl font-bold text-rme-black`}
        >
          Masuk untuk Melihat Rekam Medis
        </h1>
      </section>
      <section className="_FORM w-full space-y-2">
        <label htmlFor="email"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="email"
            // type="email"
            name="email"
            placeholder="Username"
            required
          />
          <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
        <label htmlFor="password"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
          />
          <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
      </section>
      <section className="_FORGET_PASS mt-4 flex justify-end text-xs font-medium text-rme-gray-500 hover:underline hover:underline-offset-2">
        <Link href="/dashboard">Lupa Password?</Link>
      </section>

      <LoginButton />

      <section
        className="_ERROR_MESSAGE mt-2 flex w-full text-sm text-red-500"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <AlertCircle className="mr-2 h-5 w-5" />
            <p>{errorMessage}</p>
          </>
        )}
      </section>
      <section className="_CREATE_ACCOUNT mt-4 text-center text-sm font-semibold text-rme-gray-500">
        Belum punya akun?{' '}
        <Link
          href="/register"
          className="text-rme-pink-900 font-bold hover:underline hover:underline-offset-2"
        >
          Buat Akun
        </Link>
      </section>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="bg-rme-pink-900 mt-4 w-full hover:bg-pink-900 focus-visible:outline-pink-500 active:bg-pink-600"
      aria-disabled={pending}
    >
      Masuk
    </Button>
  );
}
