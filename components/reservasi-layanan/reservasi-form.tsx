'use client';

import { AlertTriangle } from 'lucide-react';
import { createReservasi, verifyCaptcha } from '@/lib/actions';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Card, CardFooter } from '@/components/ui/card';
import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { Alert } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
  hariReservasi: z
    .string()
    .or(z.date())
    .transform((arg) => new Date(arg)),
  waktuTersedia: z.string({
    required_error: 'Harap Diisi',
  }),
});

const ENUM_VALUES = {
  layanan: ['Keluarga Berencana', 'Periksa Kehamilan', 'Imunisasi'],
  waktuTersedia: ['08.00-12.30', '15.30-20.30'],
};

export default function ReservasiForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      // Server function to verify captcha
      await verifyCaptcha(token);
      setIsverified(true);
      console.log(isVerified);
      console.log(isLoading);
    } catch (error) {
      setIsverified(false);
      console.log(isVerified);
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      hariReservasi: new Date(),
    },
  });

  function onSubmit(data: any) {
    setIsLoading(true);
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
          <Card className="w-full max-w-2xl px-6 py-8">
            <TitleSection
              title="Layanan Reservasi"
              subtitle="Pilih layanan dan waktu reservasi"
            />
            <FormWrapper>
              <Row>
                <FormField
                  control={form.control}
                  name="layanan"
                  render={({ field }) => (
                    <FormItem className="col-span-12">
                      <FormLabel>Layanan</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Layanan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ENUM_VALUES.layanan.map((layanan, index) => (
                            <SelectItem key={index} value={layanan}>
                              {layanan}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                      {field.value === 'Imunisasi' && (
                        <Alert
                          variant="warning"
                          className="animate-fade-in-translate !mt-2 flex items-center justify-center"
                        >
                          <AlertTriangle size={20} strokeWidth={1.5} />
                          <p className="w-full text-sm">
                            Layanan Imunisasi hanya tersedia pada hari Rabu.
                          </p>
                        </Alert>
                      )}
                    </FormItem>
                  )}
                />
              </Row>
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
                  name="hariReservasi"
                  form={form}
                  placeholder="Hari Reservasi.."
                  type="date"
                  label="Hari Reservasi"
                  className="col-span-12"
                />
              </Row>
              <Row>
                <InputField
                  name="waktuTersedia"
                  form={form}
                  placeholder="Waktu Tersedia..."
                  type="select"
                  data={ENUM_VALUES.waktuTersedia
                    .filter((data) => data !== '')
                    .map((data) => ({
                      value: data,
                      label: data,
                    }))}
                  label="Waktu Reservasi"
                  className="col-span-12"
                />
              </Row>
              <CardFooter className="flex flex-col items-start p-0">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                />
                <Button
                  className="mt-3 w-full bg-rme-blue-500 hover:bg-[#60b7eb]"
                  disabled={isLoading || !isVerified}
                >
                  {isLoading ? (
                    <>
                      <Loader2Icon size={20} className="mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>Lakukan Reservasi</>
                  )}
                </Button>
              </CardFooter>
            </FormWrapper>
          </Card>
        </form>
      </Form>
    </div>
  );
}
