"use client";

import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "lucide-react";
import { CertificateDataTableViewOptions } from "./certificate-data-table-view-options";
import { CertificateDataTableFacetedFilter } from "./certificate-data-table-faceted-filter";
import { roles } from "./certificate-data-table-columns";
import Link from "next/link";
import CreateCertificateDialog from "../CreateCertificateDialog";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search Certificates"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("role") && (
          <CertificateDataTableFacetedFilter
            column={table.getColumn("role")}
            title="Roles"
            options={roles}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <DeleteIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="">
        <CreateCertificateDialog />
      </div>
      <CertificateDataTableViewOptions table={table} />
    </div>
  );
}
