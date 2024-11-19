"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@prisma/client";
import { Book, Shield, User2Icon } from "lucide-react";
import { DataTableColumnHeader } from "./user-data-table-column-header";
import { DataTableRowActions } from "./user-data-table-row-actions";
import { ROLES } from "@/resource/enum/enum";

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
    value: ROLES.EMPLOYEE,
    label: "Employee",
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

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "name",
    header: ({ column }: any) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2 items-center">
          {/* <Avatar className="h-8 w-8">
            <AvatarImage
              src={row.getValue("image") || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>
              {row.getValue("image")?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar> */}
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }: any) => (
      <DataTableColumnHeader
        column={column}
        title="Email"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("email")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }: any) => (
      <DataTableColumnHeader
        column={column}
        title="Role"
      />
    ),
    cell: ({ row }: any) => {
      const role = roles.find((role) => role.value === row.getValue("role"));
      if (!role) {
        return null;
      }
      return (
        <div className="flex w-[100px] items-center">
          {role.icon && (
            <role.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{role.label}</span>
        </div>
      );
    },
    filterFn: (row: any, id: any, value: any) => {
      return value.includes(row.getValue(id));
    },
  }, 
  
  {
    accessorKey: "id",
    header: ({ column }: any) => (
      <DataTableColumnHeader
        column={column}
        title="User ID"
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
    accessorKey: "voltsecCharges",
    header: ({ column }: any) => (
      <DataTableColumnHeader
        column={column}
        title="Voltsec Charges"
      />
    ),
    cell: ({ row }: any) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("voltsecCharges")}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ column }: any) => (
      <DataTableColumnHeader
        column={column}
        title="Action"
      />
    ),
    cell: ({ row }: any) => <DataTableRowActions row={row} />,
  },
];
