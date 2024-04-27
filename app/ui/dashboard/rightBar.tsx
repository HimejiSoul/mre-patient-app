'use client';

import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { urbanist } from '../fonts';

export default function Rightbar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex h-screen flex-col gap-6 bg-white p-6">
      <div className="font-base flex h-10 flex-row justify-end gap-3 text-right text-sm">
        <div className="flex flex-col">
          <p className="font-bold">Rai Barokah Utari</p>
          <p className="text-xs text-rme-pink-900">Pasien</p>
        </div>
        <div className="w-10 rounded-full bg-rme-pink-900"></div>
      </div>
      <div className={`flex flex-col font-bold text-black`}>
        <p className={`${urbanist.className} text-lg`}>Kalender</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="self-center"
        />
      </div>
      <div className="my-2 border border-[#C5D3E3]" />
    </div>
  );
}
