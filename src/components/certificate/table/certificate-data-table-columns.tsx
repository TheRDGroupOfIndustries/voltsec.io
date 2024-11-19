"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book, Shield, User2Icon } from "lucide-react";
import { ROLES } from "@/resource/enum/enum";
import { CertificateDataTableColumnHeader } from "./certificate-data-table-column-header";
import { CertificateDataTableRowActions } from "./certificate-data-table-row-actions";

export const roles = [
  {
    value: ROLES.ADMIN,
    label: "Admin",
    icon: Shield,
  },
  {
    value: "USER",
    label: "User",
    icon: User2Icon,
  },
  {
    value: "MANAGER",
    label: "Manager",
    icon: Book,
  },
];
export const labels = [
  {
    value: "editor",
    label: "Editor",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "user",
    label: "User",
  },
  {
    value: "manager",
    label: "Manager",
  },
];
export const columns = [
  {
    id: "select",
    header: ({ table }: any) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }: any) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }: any) => (
      <CertificateDataTableColumnHeader
        column={column}
        title="Id"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("id")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "issuedTo",
    header: ({ column }: any) => (
      <CertificateDataTableColumnHeader
        column={column}
        title="Issued To"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("issuedTo")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "eId",
    header: ({ column }: any) => (
      <CertificateDataTableColumnHeader
        column={column}
        title="Certificate eId"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("eId")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "issuedDate",
    header: ({ column }: any) => (
      <CertificateDataTableColumnHeader
        column={column}
        title="Issued Date"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {new Date(row.getValue("issuedDate")).toDateString()}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "expiryDate",
    header: ({ column }: any) => (
      <CertificateDataTableColumnHeader
        column={column}
        title="Expiry Date"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {new Date(row.getValue("expiryDate")).toDateString()}
          </span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: ({ column }: any) => (
      <CertificateDataTableColumnHeader
        column={column}
        title='Action'
      />
    ),
    cell: ({ row }: any) => <CertificateDataTableRowActions row={row} />,
  },
];
