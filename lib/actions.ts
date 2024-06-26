'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { isRedirectError } from 'next/dist/client/components/redirect';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createReservasi(formData: any) {
  const apiEndpoint = `${process.env.API_ENDPOINT}/api/reservasi`;

  // Transform the id_layanan value
  const layananMapping: any = {
    'Keluarga Berencana': '0',
    'Periksa Kehamilan': '1',
    Imunisasi: '2',
  };

  if (formData.id_layanan in layananMapping) {
    formData.id_layanan = layananMapping[formData.id_layanan];
  }

  console.log(formData);
  try {
    const response = await axios.post(apiEndpoint, formData);
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || 'Gagal Membuat Reservasi';
      console.error(errorMessage);
      throw new Error(errorMessage);
    } else {
      console.error('Unexpected error', error);
      throw new Error('An unexpected error occurred');
    }
  }
}

export async function editKBPatient(formData: FormData, id_pasien: any) {
  console.log(id_pasien);
  const KBData = { data: formData };
  const apiEndpoint = `${process.env.API_ENDPOINT}/edit_kb/edit_kb?id_pasien=${id_pasien}`;
  try {
    const response = await axios.post(apiEndpoint, KBData);
    console.log(response.data);
    redirect(`/dashboard/keluarga-berencana`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}
export async function createKBPatient(formData: FormData) {
  const KBData = { data: formData };
  const apiEndpoint = `${process.env.API_ENDPOINT}/regist_kb/regist_kb`;
  try {
    const response = await axios.post(apiEndpoint, KBData);
    // console.log(response.data);
    const id = response.data.id_pasien;
    redirect(`/dashboard/keluarga-berencana/${id}/soap`);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}
export async function createKBSOAPPatient(formData: FormData, id: any) {
  const KBSOAPData = { data: { id_pasien: id, ...formData } };
  const apiEndpoint = `${process.env.API_ENDPOINT}/soap_kb/soap_kb`;
  try {
    const response = await axios.post(apiEndpoint, KBSOAPData);
    // console.log(response.data);
    redirect('/dashboard/keluarga-berencana');
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error('Error:', error);
  }
}

export async function createKehamilanPatient(formData: FormData) {
  const kehamilanData = { data: formData };
  const apiEndpoint = `${process.env.API_ENDPOINT}/regist_kehamilan/regist_kehamilan`;
  try {
    const response = await axios.post(apiEndpoint, kehamilanData);
    // console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
  redirect('/dashboard/periksa-kehamilan');
}

export async function verifyCaptcha(token: string | null) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  );
  if (res.data.success) {
    console.log('success');
    return 'success!';
  } else {
    throw new Error('Failed Captcha');
  }
}

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Invoice',
    };
  }
  revalidatePath('/dashboard/invoices');
}
