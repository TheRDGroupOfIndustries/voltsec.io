"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/core/lib/utils";
import { Icons } from "@/assets/icon/icons";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import SignOutButton from "../auth/sign-out";
import { useSession } from "next-auth/react"; // Import useSession

import { TooltipProvider } from "../ui/tooltip";
import UserAvatar from "./avatar-box";
import { ModeToggle } from "./modeToggle";
import { Nav } from "./nav";
import { routes } from "@/resource/routes/routes";
import { language } from "@/resource/language/language";
import { User } from "next-auth";

const DashboardLayoutStyles = {
  RESIZABLE_PANEL_GROUP: "h-screen border items-stretch",
  RESIZABLE_PANEL1:
    "h-screen w-full relative min-w-[36px] transition-all duration-300 ease-in-out",
  ICONS: "h-6 w-6 mr-2",
  ICON_DIV: "flex flex-row w-full",
  ICON_SPAN: "text-xl font-bold",
  AVATAR_DIV:
    "h-auto max-w-14 absolute bottom-5 p-2  w-full flex flex-col gap-2 justify-start items-center",
  RESIZABLE_PANEL2: "h-screen overflow-y-auto",
};

const DashboardLayout = ({
  children,
  count,
}: {
  children: ReactNode;
  count: {
    user: number;
    pentest: number;
    certificates: number;
    helpdesk: number;
    shedule: number;
    chat?: number
  };
}) => {
  const defaultLayout = [20, 80];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sales, setSales] = useState(false);
  const [tester, setTester] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { data: session } = useSession(); // Use useSession to get session data
  const user: any = session?.user ?? null; // Extract user from session

  useEffect(() => {

    if (user) { 
      // console.log(session);  
    if (user.role === "SALES") {
      setSales(true);
    }
    if (user.role === "PENTESTER") {
      setTester(true);
    }
    if (user.role === "ADMIN") {
      setAdmin(true);
    }
    }
    return () => {
      setSales(false);
      setTester(false);
      setAdmin(false);
    }
  }, [user]);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className={DashboardLayoutStyles.RESIZABLE_PANEL_GROUP}
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={3.5}
          collapsible={true}
          minSize={12}
          maxSize={30}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(isCollapsed && DashboardLayoutStyles.RESIZABLE_PANEL1)}
        >
          <div
            className={cn(
              "flex h-[52px] items-start  justify-start",
              isCollapsed ? "items-center justify-center" : "p-4"
            )}
          >
            <Link href={"/"}>
              <div className={DashboardLayoutStyles.ICON_DIV}>
                <Icons.SHIELDCHECK className={DashboardLayoutStyles.ICONS} />
                <span
                  className={cn(
                    DashboardLayoutStyles.ICON_SPAN,
                    isCollapsed && "hidden"
                  )}
                >
                  {language.VOLTSEC}
                </span>
              </div>
            </Link>
          </div>
          <Separator />
          {
            <>
              {tester && (
                <Nav
                  isCollapsed={isCollapsed}
                  links={[
                    {
                      title: language.PENTEST_TASK,
                      label: count?.pentest.toString(),
                      icon: Icons.SHIELDCHECK,
                      link: routes.DASHBOARD_LAYOUT.PENTEST,
                    },
                    {
                      title: language.USERS,
                      label: count?.user.toString(),
                      icon: Icons.USERS,
                      link: routes.DASHBOARD_LAYOUT.USERS,
                    },
                    {
                      title: language.CHAT,
                      // label: count?.shedule.toString(),
                      icon: Icons.CHAT,
                      link: routes.DASHBOARD_LAYOUT.CHAT,
                    },
                  ]}
                />
              )}

              {sales && (
                <Nav
                  isCollapsed={isCollapsed}
                  links={[
                    {
                      title: language.USERS,
                      label: count?.user.toString(),
                      icon: Icons.USERS,
                      link: routes.DASHBOARD_LAYOUT.USERS,
                    },
                    {
                      title: language.HELPDESK,
                      label: count?.helpdesk.toString(),
                      icon: Icons.MESSAGECIRCLEQUESTION,
                      link: routes.DASHBOARD_LAYOUT.HELPDESK,
                    },
                    {
                      title: language.CHAT,
                      // label: count?.shedule.toString(),
                      icon: Icons.CHAT,
                      link: routes.DASHBOARD_LAYOUT.CHAT,
                    },
                  ]}
                />
              )}
            {
              admin && 
              <Nav
              isCollapsed={isCollapsed}
              links={[
                  {
                    title: language.DASHBOARD,
                    label: "",
                    icon: Icons.LAYOUTDASHBOARD,
                    link: "",
                  },
                  {
                    title: language.PENTEST_TASK,
                    label: count?.pentest.toString(),
                    icon: Icons.SHIELDCHECK,
                    link: routes.DASHBOARD_LAYOUT.PENTEST,
                  },
                  {
                    title: language.USERS,
                    label: count?.user.toString(),
                    icon: Icons.USERS,
                    link: routes.DASHBOARD_LAYOUT.USERS,
                  },
                  {
                    title: language.HELPDESK,
                    label: count?.helpdesk.toString(),
                    icon: Icons.MESSAGECIRCLEQUESTION,
                    link: routes.DASHBOARD_LAYOUT.HELPDESK,
                  },

                  {
                    title: language.CERTIFICATES,
                    label: count?.certificates.toString(),
                    icon: Icons.BADGECHECK,
                    link: routes.DASHBOARD_LAYOUT.CERTIFICATE,
                  },
                  {
                    title: language.SHEDULE,
                    label: count?.shedule.toString(),
                    icon: Icons.TIME,
                    link: routes.DASHBOARD_LAYOUT.SHEDULE,
                  },
                  {
                    title: language.CHAT,
                    // label: count?.shedule.toString(),
                    icon: Icons.CHAT,
                    link: routes.DASHBOARD_LAYOUT.CHAT,
                  },
                ]}
                />
              }
            </>
          }

          <div className={DashboardLayoutStyles.AVATAR_DIV}>
            {user && <UserAvatar user={user} />}{" "}
            {/* Render UserAvatar if user is present */}
            <ModeToggle />
            <SignOutButton />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          className={DashboardLayoutStyles.RESIZABLE_PANEL2}
          defaultSize={defaultLayout[1]}
          minSize={30}
        >
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default DashboardLayout;
