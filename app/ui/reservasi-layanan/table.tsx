'use client';

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  Row,
} from '@tanstack/react-table';
import {
  Bell,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  PencilIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { urbanist } from '@/app/ui/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';

type SubPatient = {
  tglDatang: string;
  s: string;
  td: string;
  bb: number;
  lain2: string;
  a: string;
  p: string;
};

type Patient = {
  id_pasien: number;
  name: string;
  usia: number;
  tglDatang: string;
  metodeKontrasepsi: string;
  subRows?: SubPatient[];
};

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
};

// const dataPatients: Patient[] = pasienData.data;
// console.log(dataPatients);

function SubmitButton() {
  return (
    <Button
      type="submit"
      className=" flex w-fit bg-blue-600 hover:bg-blue-400 "
    >
      <p>Kirim Pesan</p>
      <ChevronRight className="ml-2 h-5 w-5 " />
    </Button>
  );
}

const DialogWA = ({ patientname }: any) => {
  const FormSchema = z.object({
    tglKirim: z.any(),
    waktuKirim: z.string(),
    isiPesan: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tglKirim: '',
      waktuKirim: '',
      isiPesan: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
  return (
    <div className="rounded-md bg-[#D0E4FF] px-4 py-6">
      <h1 className={`${urbanist.className} text-lg font-bold`}>
        Kirim Reminder ke {patientname}
      </h1>
      <span className="text-sm font-medium text-[#6F90BA]">
        Tentukan tanggal kirim dan waktu kirim reminder Whatsapp
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col"
        >
          <div className="my-2 mb-8 flex w-full flex-col gap-3 rounded-md bg-white p-4 ">
            <div className="flex w-full gap-4">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="tglKirim"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pilih Tanggal Kirim</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="waktuKirim"
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
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <FormField
                control={form.control}
                name="isiPesan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Isi Pesan</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Masukkan Pesan..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
      <div className="flex w-full justify-end">
        <SubmitButton />
      </div>
    </div>
  );
};

const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: 'jenisLayanan',
    header: () => 'Jenis Layanan',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'tglReservasi',
    header: 'Tanggal Reservasi',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'tglLayanan',
    header: () => 'Tanggal Layanan',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'waktuDatang',
    header: () => 'Waktu Datang',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'desc',
    header: () => 'Deskripsi',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'status',
    header: () => 'Status',
    cell: ({ row, getValue }) => {
      const status = getValue<string>();
      // console.log(status);
      let statusClass = 'rounded-xl text-center text-[10px] font-semibold';

      if (status == 'Selesai') {
        statusClass += ' bg-[#D8F5A3] text-[#2A4100]';
      } else if (status == 'Berjalan') {
        statusClass += ' bg-[#D7E8FF] text-[#001C41]';
      }
      // console.log(statusClass);

      return (
        <div className={statusClass}>
          <p>{status}</p>
        </div>
      );
    },
    footer: (props) => props.column.id,
  },
];

export default function ReservasiTable({
  dataPatient, // query,
  // currentPage,
}: {
  dataPatient: any;
  // query: string;
  // currentPage: number;
}) {
  return (
    <div className="mt-6 flow-root overflow-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-auto rounded-lg bg-gray-50 p-2 md:pt-0">
          <TableComponent data={dataPatient} columns={columns} />
        </div>
      </div>
    </div>
  );
}
function TableComponent({ data, columns }: TableProps<Patient>): JSX.Element {
  const table = useReactTable<Patient>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table className="min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="px-3 py-5 font-semibold"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white">
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  {/* first row is a normal row */}
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="whitespace-nowrap px-3 py-3" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
