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
          <DialogContent className="">
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
            <div className="text-justify text-base">
              Kami memohon bantuan dari Teman-teman serta Bapak/Ibu untuk dapat
              meningkatkan kualitas website kami dengan melakukan{' '}
              <span className="font-semibold">Reservasi Layanan</span> dan
              mengisi kuisioner setelah melakukan reservasi tersebut.
              <br />
              <br />
              Terima kasih banyak atas bantuannya! 🙏
              <br />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="bg-rme-blue-500 hover:bg-rme-blue-500/90"
                  type="submit"
                >
                  Mulai eksplorasi
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
