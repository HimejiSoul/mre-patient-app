'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
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
      className="mt-5 w-fit self-end bg-rme-pink-900 hover:bg-pink-500"
    >
      Lakukan Reservasi
      <PlusIcon className="h-5 md:ml-4" />
    </Button>
  );
}

const FormSchema = z.object({
  generalInformation: z.object({
    nama: z.string({
      required_error: 'Harap Diisi',
    }),
  }),
  UbahPassword: z.object({
    currentPass: z.string(),
    NewPass: z.string(),
    confirmNewPass: z.string(),
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
    <div className="rounded-xl bg-rme-pink-150 px-4 py-6 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col"
        >
          <GeneralInformation form={form} />
          <UbahPassword form={form} />
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
          Informasi Personal
        </p>
        <p className="mb-2 block text-sm font-medium text-[#597395]">
          Data Pribadi
        </p>
      </div>

      <div className=" flex w-full flex-col gap-3 overflow-auto rounded-md bg-white px-6 py-4">
        {/* kolom 1 */}
        <div className="flex w-full md:w-96">
          <FormField
            control={form.control}
            name="generalInformation.nama"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Panjang" type="string" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

const UbahPassword = ({ form }: any) => {
  return (
    <div className="mt-6">
      {/* General Information */}
      <>
        <p className={` ${urbanist.className} text-xl font-bold`}>
          Ubah Password?
        </p>
        <p className="mb-2 block text-sm font-medium text-[#597395]">
          Ubah password Anda dengan mengisi data di bawah ini
        </p>
      </>

      <div className=" flex w-full flex-col gap-3 overflow-auto rounded-md bg-white px-6 py-4">
        {/* kolom 1 */}
        <div className="flex w-full md:w-96">
          <FormField
            control={form.control}
            name="ubahPassword.currentPass"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password Saat Ini</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Password Saat ini"
                    type="string"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* kolom 2 */}
        <div className="flex w-full md:w-96">
          <FormField
            control={form.control}
            name="ubahPassword.currentPass"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password Baru</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Password Baru"
                    type="string"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* kolom 3 */}
        <div className="flex w-full md:w-96">
          <FormField
            control={form.control}
            name="ubahPassword.currentPass"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Konfirmasi Password Baru</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Password Baru Lagi"
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
    </div>
  );
};
