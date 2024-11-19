"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CloudCog,
  FileScan,
  LucideLock,
  LucideSettings,
  Router,
  ScanSearch,
  ScanText,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import useMutation from "@/core/hooks/useMutation";
import { useRouter } from "next/navigation";
import { createPentest } from "@/core/server/account/pentest/createPentest";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import PopUp from "../Scanner/pentest/PopUp";
import Loading from "@/app/loading";

const buttonClasses = (
  isActive: boolean,
  baseClass: string,
  activeClass: string
) => `${baseClass} ${isActive ? activeClass : ""}`;

function PentestScanner({ settings }: any) {
  const tabs = [
    {
      title: "Web",
      Icon: ScanText,
    },
    {
      title: "Network",
      Icon: Router,
    },
    {
      title: "Application",
      Icon: FileScan,
    },
    {
      title: "Cloud",
      Icon: CloudCog,
    },
  ];

  const modes = [
    {
      title: "Light scan",
      value: "LIGHTSCAN",
    },
    {
      title: "Balanced scan",
      value: "BALANCEDSCAN",
    },
    {
      title: "Deep scan",
      value: "DEEPSCAN",
    },
  ]

  const [selectedMode, setSelectedMode] = useState(modes[0].value);
  const [scanType, setScanType] = useState(tabs[0].title);
  const [PentestRequest, setPentestRequest] = useState({
    scope: "",
  });
  const [charges, setCharges] = useState<number>(0);
  const [pop, setPop] = useState<boolean>(false);
  const { mutate, isPending } = useMutation(createPentest);
  const router = useRouter();

  const getVoltCharges = async () => {
    try {
      const charges = await fetch("/api/getVoltcharge");
      const json = await charges.json();
      setCharges(json.voltsecCharges);
    } catch (e) {
      console.log(e);
    }
  };

  const updateCharges = async () => {
    try {
      setCharges(charges - 1);
      const recudeCharge = charges - 1;
      const res = await fetch("/api/updateVoltcharge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentVoltCharge: recudeCharge }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getVoltCharges();
  }, []);

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();
    setPop(true);
    if (charges <= 0) {
      toast.error("Out of voltsec charges. Please buy more.");
      return;
    }
    await updateCharges();
    const { success, error } = await mutate({
      scope: PentestRequest.scope,
      settings: settings,
    });

    if (success) {
      // toast.success(success);
      if (scanType === "Web") {
        router.push(
          `/home/pentest/web/webResult?url=${PentestRequest.scope}&mode=${selectedMode}`
        );
      }
      if (scanType === "Network") {
        router.push(
          `/home/pentest/network/results?url=${PentestRequest.scope}`
        );
      }
      setPentestRequest({ scope: "" });
    } else {
      toast.error(error);
    }

    setPop(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPentestRequest({ ...PentestRequest, scope: e.target.value });
  };

  const handleModeChange = (mode: string) => {
    if (mode === "Cloud" || mode === "Application") return;
    setScanType(mode);
    // settings.selectedScanMode = mode;
  };
  return (
    <div className="relative w-full sm:h-full h-auto mb-12 sm:mb-0">
      {pop &&
      <div className="absolute w-full h-full inset-0 z-50 backdrop-blur-sm">
      <Loading />
      </div>
      }
      <h1 className="flex justify-between items-center w-full mb-2 p-2 py-4 text-4xl font-bold pr-8">
        Let&apos;s start
        <span className="text-lg text-blue-800 font-normal flex justify-center items-center gap-2"><Zap size={20} /> {charges} Voltcharge left</span>
      </h1>
      <div className="sm:w-5/6 w-full h-5/6 flex flex-col gap-8 px-4 ">
        <h2 className="text-2xl font-semibold text-black -mb-8">Pentest Type</h2>
        <div className="flex sm:flex-row justify-start items-start flex-col w-full sm:w-auto sm:gap-2 gap-8 pt-3 border-b-2 border-blue-200 pb-5">
          {tabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => handleModeChange(tab.title)}
              type="button"
              variant={"outline"}
              className={`
                w-full sm:w-fit
                ${buttonClasses(
                  scanType === tab.title,
                  "flex items-center justify-center gap-3 border-2 p-7 text-sm text-gray-400",
                  "bg-primary text-white hover:bg-primary/90 hover:text-white text-lg"
                )}
            ${tab.title === "Cloud" || tab.title === "Application" ? "text-gray-400 hover:bg-transparent hover:cursor-not-allowed hover:text-gray-400" : ""}
            `}
            >
              <tab.Icon
                className={`
            ${tab.title === "Network" ? "text-green-500": ""}
            ${tab.title === "Cloud" ? "text-yellow-300": ""}
            ${tab.title === "Application" ? "text-red-400": ""}
                  h-6 w-6 ${scanType === tab.title ? "text-white" : "text-gray-500"} ${tab.title === "Cloud" || tab.title === "Application" ? "text-gray-200" : "text-gray-200"}`}
              />
              {tab.title}
              {tab.title === `Application` && (
                <span className="text-xs text-gray-400">
                  <LucideLock size={18} />
                </span>
              )}
              {tab.title === `Cloud` && (
                <span className="text-xs text-gray-400">
                  <LucideLock size={18} />
                </span>
              )}
            </Button>
          ))}
        </div>
          <h2 className="text-2xl font-semibold text-black -mb-6">Settings</h2> 
        <div className="relative w-full sm:h-16 h-auto flex sm:flex-row flex-col gap-4 rounded-2xl p-4 sm:p-0">
        <div className="sm:w-1/3 w-full h-ful">
        <Select defaultValue={selectedMode} onValueChange={(e) => {setSelectedMode(e)}}>
          <SelectTrigger className="w-full h-full">
            <SelectValue placeholder="Scan Mode" />
          </SelectTrigger>
          <SelectContent>
            {modes.map((mde, i) => (
             <SelectItem key={i} value={mde.value}>{mde.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        </div>
        <div className="sm:w-1/3 w-full h-full">
        <Select defaultValue="voltbot">
          <SelectTrigger className="w-full h-full">
            <SelectValue placeholder="AI Bot" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="voltbot">Voltbot</SelectItem>
            <SelectItem value="hackwing">Hackwing</SelectItem>
          </SelectContent>
        </Select>
        </div>
        </div>
        <h2 className="text-2xl font-semibold text-black -mb-6">Scope</h2> 
        <Input
          placeholder={`${scanType === "Web" ? "https://example.com or www.example.com" : "www.domain.com” & “124.657.000.32"}`}
          className="border-2 px-5 py-7 text-sm"
          required
          value={PentestRequest.scope}
          onChange={handleChange}
        />
        {/* <div className=""> */}
        <Button
          size={"lg"}
          type="submit"
          disabled={charges <= 0 ? true : false || pop ? true : false}
          onClick={charges <= 0 ? () => {} : sendData}
          className={`w-fit text-xl flex items-center justify-center gap-2 ${charges <= 0 ? "cursor-not-allowed opacity-50" : ""} space-y-8`}
        >
          Launch Pentest <ScanSearch size={20} />
        </Button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default PentestScanner;
