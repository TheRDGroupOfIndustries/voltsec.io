"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function InboxMenu() {
  const pathname = usePathname();
  const selected = pathname.split("/").pop()!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={"sm"}
          variant="outline"
          className="ml-auto"
        >{`${selected[0].toUpperCase()}${selected.slice(1)}`}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Inbox Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selected}>
          <Link href="inbox">
            <DropdownMenuRadioItem value="inbox">Inbox</DropdownMenuRadioItem>
          </Link>
          <Link href="draft">
            <DropdownMenuRadioItem value="draft">Draft</DropdownMenuRadioItem>
          </Link>
          <Link href="archive">
            <DropdownMenuRadioItem value="archive">
              Archive
            </DropdownMenuRadioItem>
          </Link>
          <Link href="sent">
            <DropdownMenuRadioItem value="sent">Sent</DropdownMenuRadioItem>
          </Link>
          <Link href="trash">
            <DropdownMenuRadioItem value="trash">Trash</DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
