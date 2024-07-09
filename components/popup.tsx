'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import helperGIF from '@/public/helper.gif';

export function BetaDialog() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const dialogShown = sessionStorage.getItem('dialogShown');
    if (!dialogShown) {
      setShowDialog(true);
      sessionStorage.setItem('dialogShown', 'true');
    }
  }, []);

  return (
    <>
      {showDialog && (
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Selamat datang di website Ninasys 👋</DialogTitle>
              <DialogDescription>
                Website reservasi pasien rekam medis untuk Bidan Nina Nurlayina
              </DialogDescription>
            </DialogHeader>
            <Image
              sizes="100vw"
              src={helperGIF}
              layout={'responsive'}
              alt={`A cute animal!`}
              className="max-h-[180px] rounded-lg object-contain"
              unoptimized={true}
            />
            <div className="space-y-3 text-base">
              <p>
                Kami memohon bantuan dari Teman-teman serta Bapak/Ibu untuk
                dapat meningkatkan kualitas website kami dengan:
              </p>
              <ul className="space-y-[8px] sm:space-y-[2px]">
                <li className="flex items-center">
                  <svg
                    className="me-2 h-3.5 w-3.5 flex-shrink-0 text-rme-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Melihat berbagai halaman yang tersedia.
                </li>
                <li className="flex items-center">
                  <svg
                    className="me-2 h-3.5 w-3.5 flex-shrink-0 text-rme-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Melakukan Reservasi Layanan.
                </li>
                <li className="flex items-center">
                  <svg
                    className="me-2 h-3.5 w-3.5 flex-shrink-0 text-rme-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Mengisi kuisioner setelah melakukan reservasi.
                </li>
              </ul>
              <p>Terima kasih banyak atas bantuannya! 🙏</p>
              <br />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="bg-rme-blue-500 hover:bg-rme-blue-500/90"
                  type="submit"
                >
                  Mulai eksplorasi ✨
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
