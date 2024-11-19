import {
  PentestType,
  Role,
  SelectedBot,
  SelectedScanMode,
} from "@prisma/client";
import * as z from "zod";

export const pentestFormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email(),
  pentestType: z.enum(["WEB", "APPLICATION", "NETWORK", "CLOUD"]),
  pentestStatus: z.enum(["PENDING", "COMPLETED", "PROCESS", "FAILED"]),
  scope: z.string(),
  selectedBot: z.enum(["HACKWING", "VOLTBOT"]),
  selectedScanMode: z.enum(["BALANCESCAN", "DEEPSCAN", "LIGHTSCAN"]),
});

export const editUserSchema = z.object({
  name: z.optional(z.string()),
  email: z.optional(z.string().email()),
  role: z.enum([Role.EMPLOYEE, Role.USER, Role.ADMIN]),
  voltsecCharges: z.optional(z.any())
});
export const EditPentestFormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email(),
  pentestType: z.enum(["WEB", "APPLICATION", "NETWORK", "CLOUD"]),
  pentestStatus: z.enum(["PENDING", "COMPLETED", "PROCESS", "FAILED"]),
  scope: z.string(),

  selectedBot: z.enum(["HACKWING", "VOLTBOT"]),
  selectedScanMode: z.enum(["BALANCESCAN", "DEEPSCAN", "LIGHTSCAN"]),
});

export const scheduleFormSchema = z.object({
  emailReportTo: z.string(),
  pentestType: z.enum(["APPLICATION", "CLOUD", "NETWORK", "WEB"]),
  timeline: z.enum(["Weekly", "Monthly", "Yearly"]),
  scope: z.string(),
});
