"use client";

import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "./user-data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./user-data-table-view-options";
import { CirclePlus, DeleteIcon, SquareChevronRight } from "lucide-react";
import { roles } from "./user-data-table-columns";
import Link from "next/link";
import { useState } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [compose, setCompose] = useState(false);
  const [selectedGmail, setSelectedGmail] = useState('');
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search User By Name"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("role") && (
          <DataTableFacetedFilter
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

        <div onClick={() => setCompose(true)} className="relative border bg-blue-600 text-white cursor-pointer rounded-xl px-2 py-1 font-semibold hover:scale-90 transition-transform">
          {!compose ? (
             <h1 className='flex gap-2 justify-center items-center'>
              <CirclePlus size={18} /> Compose
              </h1>
              ) : (
                <Input
                  placeholder="Enter the email address"
                  value={selectedGmail ?? ""}
                  onChange={(event) =>{table.getColumn("name"), setSelectedGmail(event.target.value)}}
                  className="h-8 w-[150px] lg:w-[250px] bg-transparent border-none text-white outline-none focus-visible:ring-0 placeholder:text-white focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-0"
                />
              )}
        </div>
        {compose && (
          <Link
          href={{
            pathname: "/dashboard/users/compose",
            query: { table: `${selectedGmail}` },
          }}
          >
          <div className="relative border bg-blue-600 text-white cursor-pointer rounded-xl px-2 py-2 font-semibold hover:scale-90 transition-transform">
            <SquareChevronRight />
          </div>
        </Link>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
