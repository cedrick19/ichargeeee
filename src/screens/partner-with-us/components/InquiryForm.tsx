import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";

import LocalizationKey from "@/i18n/key";

import iChargeLogo from "@/assets/icharge-big.svg";

import { SvgIcons } from "@/components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import Customer from "./Customer";
import Marketing from "./Marketing";

export const InquiryForm = (): ReactElement => {
  const { t } = useTranslation();

  const [form, setForm] = useState("customer");

  const renderContact = (): ReactElement => {
    return (
      <div className="flex flex-col items-start justify-center gap-8 rounded-none border-0 bg-gradient-to-b from-[#044F00] to-[#078E00] p-10 text-white shadow-none drop-shadow-none md:rounded-t-xl md:shadow-2xl md:drop-shadow-2xl lg:rounded-l-xl lg:rounded-tr-none">
        <div className="flex w-full justify-center">
          <img src={iChargeLogo} alt="iCharge Logo" className="mx-auto" />
        </div>
        <Label>{t(LocalizationKey.partnerWithUs.inquiryForm.attention)}</Label>

        <Separator className="bg-white" />
        <Label variant={"body"} className="flex items-center gap-5">
          <SvgIcons name="ic_viber" size={40} />
          @icharge
        </Label>
        <Label variant={"body"} className="flex items-center gap-5">
          <Phone size={32} strokeWidth={3} /> +63 918 738 8888
        </Label>

        <Label variant={"body"} className="flex items-center gap-5">
          <Mail size={32} strokeWidth={3} />
          {form === "customer" ? "iChargeBGC@gmail.com" : "QDiCharge@gmail.com"}
        </Label>

        <Label
          variant={"body"}
          className="hidden items-center gap-5 whitespace-pre-line lg:flex"
        >
          <MapPin size={32} strokeWidth={3} />
          Unit 2402 Trade and Financial Tower, 7th Avenue, BGC, Taguig
        </Label>

        <div className="flex items-center gap-5 lg:hidden">
          <MapPin size={32} strokeWidth={3} />
          <div className="flex flex-col">
            <Label variant={"body"}>Unit 2402 </Label>
            <Label variant={"body"}>Trade and Financial Tower,</Label>
            <Label variant={"body"}>7th Avenue, BGC, Taguig</Label>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="mx-auto flex h-full w-full items-center justify-center py-0 md:container md:px-10">
      <Card className="grid h-full w-full grid-cols-1 rounded-none border-0 bg-transparent shadow-none md:rounded-xl md:bg-white md:shadow-2xl md:drop-shadow-2xl lg:grid-cols-2">
        {renderContact()}

        <div>
          <CardHeader id="inquiryForm" className="rounded-t-xl pt-20">
            <CardTitle className="text-center">
              <Label variant={"title"}>
                {t(LocalizationKey.partnerWithUs.inquiryForm.title)}
              </Label>
            </CardTitle>

            <CardDescription className="pt-10">
              <Select defaultValue="customer" onValueChange={setForm}>
                <SelectTrigger className="w-full border-white bg-gray-200 font-poppins lg:w-1/2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-white bg-gray-200">
                  <SelectItem
                    value="marketing"
                    className="cursor-pointer focus:bg-[#44D62C]"
                  >
                    <Label>Marketing / Business</Label>
                  </SelectItem>
                  <SelectItem
                    value="customer"
                    className="cursor-pointer focus:bg-[#44D62C]"
                  >
                    <Label>Customer Service</Label>
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardDescription>
          </CardHeader>

          <CardContent>
            {form === "customer" ? <Customer /> : <Marketing />}
          </CardContent>
        </div>
      </Card>
    </section>
  );
};

export default InquiryForm;
