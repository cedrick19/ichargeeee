import { IMarketing } from "../type";

import { ReactElement, useRef } from "react";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";

import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalizationKey from "@/i18n/key";

import { Form, TextArea, TextField } from "@/components";
import { Button } from "@/components/ui/button";

import { inquiryDefaultValues, inquiryFormSchema } from "../utils";
import { inquiryId, publicKey, serviceId } from "@/lib/viteKey";
import PhoneField from "@/components/forms/PhoneField";

const Marketing = (): ReactElement => {
  const inquiryFormRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const { t } = useTranslation();

  const inquiryForm = useForm<IMarketing>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: inquiryDefaultValues,
  });

  const sendEmail = () => {
    if (inquiryFormRef.current) {
      emailjs
        .sendForm(serviceId, inquiryId, inquiryFormRef.current, {
          publicKey: publicKey,
        })
        .then(toastSuccess, toastError);
    }
  };

  const toastSuccess = () => {
    return toast({
      variant: "success",
      title: "Successfully sent",
      description: "You've sent an email to the ICharge Team.",
    });
  };

  const toastError = () => {
    return toast({
      variant: "destructive",
      title: "Error",
      description: "There is an error.",
    });
  };

  const handleInquiryFormSubmit: SubmitHandler<IMarketing> = () => {
    sendEmail();
    inquiryForm.reset();
  };
  return (
    <Form
      forms={inquiryForm}
      ref={inquiryFormRef}
      onSubmit={handleInquiryFormSubmit}
    >
      <div className="flex flex-col gap-5">
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
          <TextField
            control={inquiryForm.control}
            name="firstname"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.marketing.firstname,
            )}
          />
          <TextField
            control={inquiryForm.control}
            name="lastname"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.marketing.lastname,
            )}
          />
          <TextField
            control={inquiryForm.control}
            name="company"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.marketing.company,
            )}
          />
          <TextField
            control={inquiryForm.control}
            type="email"
            name="email"
            label={t(LocalizationKey.partnerWithUs.inquiryForm.marketing.email)}
          />
          <PhoneField
            label={
              LocalizationKey.partnerWithUs.inquiryForm.marketing.phoneNumber
            }
            name="phoneNumber"
          />
        </div>

        <TextArea
          className="h-52"
          control={inquiryForm.control}
          name="content"
          label={t(LocalizationKey.partnerWithUs.inquiryForm.marketing.content)}
        />

        <div className="text-end">
          <Button className="w-full shadow-2xl drop-shadow-2xl lg:w-80">
            {t(LocalizationKey.partnerWithUs.inquiryForm.marketing.formBtn)}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Marketing;
