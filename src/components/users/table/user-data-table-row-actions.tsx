"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { PenSquareIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@prisma/client";
import EditUserForm from "../edit/editUserForm";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const user = row?.original as User;


  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/user/${user.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Handle success (e.g., refresh the table or show a success message)
        console.log("User deleted successfully");
        window.location.reload();
      } else {
        // Handle error
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("An error occurred while deleting the user:", error);
    }
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'>
            <PenSquareIcon className='h-4 w-4' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='w-[160px]'>
          <DialogTrigger className='w-full'>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem onSelect={handleDelete}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogTitle>Edit User Details</DialogTitle>
        <EditUserForm user={user} />
      </DialogContent>
    </Dialog>
  );
}
