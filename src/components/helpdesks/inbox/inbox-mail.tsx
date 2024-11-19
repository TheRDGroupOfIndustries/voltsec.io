"use client";
import { Search } from "lucide-react";

import { HelpDeskData } from "@/app/(dashboard)/dashboard/helpdesk/page";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs } from "@/components/ui/tabs";
import { useMemo, useState } from "react";
import { InboxMailDisplay } from "./inbox-display";
import { InboxMailList } from "./inbox-list";

export function InboxMail({ helpdesks }: { helpdesks: HelpDeskData[] }) {
  const [selected, setSelected] = useState(helpdesks[0]?.id || "");
  const defaultLayout = [40, 60];
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const val = search.toLowerCase();
    return helpdesks.filter((h) => h.email.includes(val));
  }, [search]);

  return (
    <ResizablePanelGroup
      className="h-full max-h-screen items-stretch hidden flex-col md:flex"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={defaultLayout[0]} minSize={30} maxSize={60}>
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <InboxMailList
          setSelected={setSelected}
          selected={selected}
          helpdesks={filtered}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <InboxMailDisplay
          helpdesk={helpdesks.find((item) => item?.id === selected) || null}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
