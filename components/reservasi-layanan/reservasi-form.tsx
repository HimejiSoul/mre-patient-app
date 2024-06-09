'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useFormStatus } from 'react-dom';
import { createReservasi } from '@/lib/actions';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { urbanist } from '@/components/fonts';
import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';

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
  nama: z.string({
    required_error: 'Harap Diisi',
  }),
  noHP: z.coerce.number({
    required_error: 'Harap Diisi',
    invalid_type_error: 'Harap Diisi',
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
});

export default function ReservasiForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // nama: 'Rai Barokah Utari',
    },
  });

  function onSubmit(data: any) {
    createReservasi(data);
    console.log(data);
  }

  return (
    <div className="h-[100dvh] rounded-xl px-4 py-6 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center"
        >
          <Card className=" w-[500px] bg-rme-pink-150 px-4 py-6">
            <TitleSection
              title="Layanan Reservasi"
              subtitle="Pilih layanan dan waktu reservasi"
            />
            <FormWrapper>
              <Row>
                <InputField
                  name="nama"
                  placeholder="Nama Lengkap"
                  label="Nama"
                  className="col-span-12"
                  form={form}
                />
              </Row>
              <Row>
                <InputField
                  name="noHP"
                  placeholder="Nomor HP"
                  label="No. HP"
                  className="col-span-12"
                  form={form}
                  type="number"
                />
              </Row>
              <Row>
                <InputField
                  name="layanan"
                  form={form}
                  placeholder="Pilih Layanan..."
                  type="select"
                  data={[
                    'Keluarga Berencana',
                    'Periksa Kehamilan',
                    'Imunisasi',
                  ]}
                  label="Pilih Layanan"
                  className="col-span-12"
                />
                <p className="col-span-12 mb-5 text-xs">
                  *Imunisasi Khusus Hari Rabu
                </p>
              </Row>
              <Row>
                <InputField
                  name="hariReservasi"
                  form={form}
                  placeholder="Hari Reservasi.."
                  type="date"
                  label="Hari Reservasi"
                  className="col-span-6"
                />
                <InputField
                  name="waktuTersedia"
                  form={form}
                  placeholder="Waktu Tersedia..."
                  type="select"
                  data={['08.00-12.30', '15.30-20.30']}
                  label="Waktu Reservasi"
                  className="col-span-6"
                />
              </Row>
              <CardFooter className="flex justify-between">
                <SubmitButton />
              </CardFooter>
            </FormWrapper>
          </Card>
        </form>
      </Form>
    </div>
  );
}
