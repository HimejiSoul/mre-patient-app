'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { useFormStatus } from 'react-dom';
import { createReservasi, verifyCaptcha } from '@/lib/actions';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

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
      // nama: 'Rai Barokah Utari',
    },
  });

  function onSubmit(data: any) {
    setIsLoading(true);
    createReservasi(data);
    console.log(data);
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div className="h-[100dvh] rounded-xl px-4 py-6 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center"
        >
          <Card className="w-full max-w-2xl bg-rme-pink-150 px-6 py-8">
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
                  data={ENUM_VALUES.layanan
                    .filter((data) => data !== '')
                    .map((data) => ({
                      value: data,
                      label: data,
                    }))}
                  label="Pilih Layanan"
                  className="col-span-12"
                />
                <p className="col-span-12 text-xs">
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
                  data={ENUM_VALUES.waktuTersedia
                    .filter((data) => data !== '')
                    .map((data) => ({
                      value: data,
                      label: data,
                    }))}
                  label="Waktu Reservasi"
                  className="col-span-6"
                />
              </Row>
              <CardFooter className="flex flex-col items-start p-0">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                />
                <Button
                  className="mt-3 w-fit bg-rme-pink-900 hover:bg-pink-500"
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
