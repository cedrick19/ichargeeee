import { DataCardProps, IMarketing, ICustomer } from "./type";

import { z } from "zod";

import LocalizationKey from "@/i18n/key";

import ichargeModel from "@/assets/ichargemodel.webp";
import joinUs from "@/assets/pwu-join-us.webp";

export const data: DataCardProps[] = [
  {
    imgSrc: ichargeModel,
    title: LocalizationKey.partnerWithUs.whyPartnerWithUs,
    list: [
      LocalizationKey.partnerWithUs.whyPartnerWithUsDesc1,
      LocalizationKey.partnerWithUs.whyPartnerWithUsDesc2,
    ],
  },
  {
    imgSrc: joinUs,
    title: LocalizationKey.partnerWithUs.joinUs,
    list: [
      LocalizationKey.partnerWithUs.joinUsDesc1,
      LocalizationKey.partnerWithUs.joinUsDesc2,
    ],
  },
];

export const inquiryDefaultValues: IMarketing = {
  firstname: "",
  lastname: "",
  company: "",
  email: "",
  phoneNumber: "",
  content: "",
};

export const inquiryFormSchema = z.object({
  firstname: z.string().min(1, "First name is requried"),
  lastname: z.string().min(1, "Last name is requried"),
  company: z.string().min(1, "Company is requried"),
  email: z.string().email({ message: "must be a valid email" }),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+63 9\d{2} \d{3} \d{4}$/, {
      message: "Must be in the format +63 9xx xxx xxxx",
    }),
  content: z.string().min(1, "Content is required"),
}) as z.ZodType<IMarketing>;

export const customerDefaultValues: Partial<ICustomer> = {
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
  content: "",
  rentalLocation: "",
  rentalTime: "",
  returnLocation: "",
  returnTime: "",
};

export const customerFormSchema = z.object({
  firstname: z.string().min(1, "First name is requried"),
  lastname: z.string().min(1, "Last name is requried"),
  email: z.string().email({ message: "must be a valid email" }),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+63 9\d{2} \d{3} \d{4}$/, {
      message: "Must be in the format +63 9xx xxx xxxx",
    }),
  content: z.string().min(1, "Content is required"),
  rentalLocation: z.string().min(1, "Rental Location is required"),
  rentalTime: z.string().min(1, "Rental Time is required"),
  returnLocation: z.string().min(1, "Return Location is required"),
  returnTime: z.string().min(1, "Return Time is required"),
}) as z.ZodType<Partial<ICustomer>>;
