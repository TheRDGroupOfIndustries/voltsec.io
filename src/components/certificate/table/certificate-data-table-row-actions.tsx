"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Certificates } from "@prisma/client";
import { Row } from "@tanstack/react-table";
import { PenSquareIcon } from "lucide-react";
import EditCertificateForm from "../EditCertificateForm";
import useMutation from "@/core/hooks/useMutation";
import { deleteCertification } from "@/core/server/account/Certification/IdCertificate";
import { toast } from "sonner";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export function CertificateDataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const certificate = row?.original as Certificates;
  const { mutate, isPending } = useMutation(deleteCertification);
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <PenSquareIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[160px]"
        >
          <DialogTrigger className="w-full">
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DialogTrigger>

          {/* <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={userLabel.label}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={async () => {
              const { success, error } = await mutate(certificate.id);
              if (success) toast.success(success);
              else toast.error(error);
            }}
            disabled={isPending}
            className="focus:bg-destructive focus:text-destructive-foreground"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogTitle>Edit User Details</DialogTitle>
        <EditCertificateForm certificate={certificate} />
      </DialogContent>
    </Dialog>
  );
}
