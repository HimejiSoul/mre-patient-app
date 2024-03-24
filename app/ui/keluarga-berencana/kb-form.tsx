'use client';

import { useFormStatus } from 'react-dom';
import { createKBPatient } from '@/app/lib/actions';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { urbanist } from '@/app/ui/fonts';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className="mt-5 w-fit bg-rme-pink-900 hover:bg-pink-500"
    >
      Lakukan Reservasi
    </Button>
  );
}

const FormSchema = z.object({
  generalInformation: z.object({
    nama: z.string({
      required_error: 'Harap Diisi',
    }),
    layanan: z.string({
      required_error: 'Harap Diisi',
    }),
    hariReservasi: z.date({
      required_error: 'Harap Diisi',
    }),
    waktuTersedia: z.string({
      required_error: 'Harap Diisi',
    }),
  }),
});

export default function KBForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      generalInformation: {
        nama: 'Rai Barokah Utari',
      },
    },
  });

  function onSubmit(data: any) {
    // createKBPatient(data);
    console.log(data);
  }

  return (
    <div className="bg-rme-pink-150 rounded-xl px-4 py-6 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col"
        >
          <GeneralInformation form={form} />
          <SubmitButton />
        </form>
      </Form>
    </div>
  );
}

const GeneralInformation = ({ form }: any) => {
  return (
    <div>
      {/* General Information */}
      <div>
        <p className={` ${urbanist.className} text-xl font-bold`}>
          Reservasi Layanan
        </p>
        <p className="mb-2 block text-sm font-medium text-[#597395]">
          Pilih layanan dan waktu reservasi
        </p>
      </div>

      <div className=" flex w-full flex-col gap-3 overflow-auto rounded-md bg-white px-6 py-4">
        {/* kolom 1 */}
        <div className="flex w-96">
          <div className="w-full">
            <FormField
              control={form.control}
              name="generalInformation.nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nama Panjang"
                      type="string"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* kolom 2 */}
        <div className="flex w-96">
          <div className="w-full">
            <FormField
              control={form.control}
              name="generalInformation.layanan"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel>Layanan</FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Layanan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="kb">Keluarga Berencana</SelectItem>
                      <SelectItem value="pk">Periksa Kehamilan</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* kolom 3 */}
        <div className="flex w-96 gap-4">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="generalInformation.hariReservasi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hari Reservasi</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span className="text-[#A9BCD6]">Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="generalInformation.waktuTersedia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Waktu Reservasi yang Tersedia</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="00:00" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Tidak Tamat SD">
                        10:00-12:00
                      </SelectItem>
                      <SelectItem value="Tamat SLTA">12:00-14:00</SelectItem>
                      <SelectItem value="Tamat SD">14:00-16:00</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
