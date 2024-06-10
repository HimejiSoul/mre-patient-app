import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import axios, { AxiosResponse } from 'axios';

export async function fetchAllPatientFind(query: any, id_layanan: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/find_pasien_endpoint/find_pasien?keyword=${query}&id_layanan=${id_layanan}`,
    );
    const allDataPatient = response.data.id_pasien;
    // console.log(allDataPatient);
    return allDataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
    // throw new Error('Failed to fetch card data.');
  }
}
export async function fetchAllPatientTable(id_layanan: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/all_pasien_endpoint/all_pasien?id_layanan=${id_layanan}`,
    );
    const allDataPatient = response.data.data;
    // console.log(allDataPatient);
    return allDataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchPatientTable(id_pasien: any, id_layanan: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/table_kb/table_kb?id_pasien=${id_pasien}&id_layanan=${id_layanan}`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchPatientById(id_pasien: any) {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${process.env.API_ENDPOINT}/edit_kb/edit_kb?id_pasien=${id_pasien}`,
    );
    const dataPatient = response.data.data;
    // console.log(dataPatient);
    return dataPatient;
  } catch (error) {
    console.error('Database Error:', error);
    // throw new Error('Failed to fetch card data.');
  }
}

export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchPatientData(id_layanan: string) {
  const apiEndpoint = `${process.env.API_ENDPOINT}/count_endpoint/count`;
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${apiEndpoint}?id_layanan=${id_layanan}`,
    );
    const jumlah_pasien = response.data.jumlah;
    // console.log(jumlah_pasien);
    return jumlah_pasien;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));
    console.log(invoice);
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}
