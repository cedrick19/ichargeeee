import { ICustomer } from "../type";

import { ReactElement, useRef } from "react";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalizationKey from "@/i18n/key";

import { Form, TextArea, TextField } from "@/components";
import { Button } from "@/components/ui/button";

import { customerDefaultValues, customerFormSchema } from "../utils";
import { chatId, publicKey, serviceId } from "@/lib/viteKey";
import PhoneField from "@/components/forms/PhoneField";

const Customer = (): ReactElement => {
  const customerRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const { t } = useTranslation();

  const inquiryForm = useForm<ICustomer>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: customerDefaultValues,
  });

  const sendEmail = () => {
    if (customerRef.current) {
      emailjs
        .sendForm(serviceId, chatId, customerRef.current, {
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

  const handleInquiryFormSubmit: SubmitHandler<ICustomer> = () => {
    sendEmail();
    inquiryForm.reset();
  };

  return (
    <Form
      forms={inquiryForm}
      ref={customerRef}
      onSubmit={handleInquiryFormSubmit}
    >
      <div className="flex flex-col gap-5">
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
          <TextField
            control={inquiryForm.control}
            name="firstname"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.customer.firstname,
            )}
          />

          <TextField
            control={inquiryForm.control}
            name="lastname"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.customer.lastname,
            )}
          />

          <TextField
            control={inquiryForm.control}
            type="email"
            name="email"
            label={t(LocalizationKey.partnerWithUs.inquiryForm.customer.email)}
          />
          <PhoneField
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.customer.phoneNumber,
            )}
            name="phoneNumber"
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
          <TextField
            control={inquiryForm.control}
            name="rentalLocation"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.customer.rentalLocation,
            )}
          />

          <TextField
            control={inquiryForm.control}
            type="time"
            name="rentalTime"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.customer.rentalTime,
            )}
          />

          <TextField
            control={inquiryForm.control}
            name="returnLocation"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.customer.returnLocation,
            )}
          />

          <TextField
            control={inquiryForm.control}
            type="time"
            name="returnTime"
            label={t(
              LocalizationKey.partnerWithUs.inquiryForm.customer.returnTime,
            )}
          />
        </div>

        <TextArea
          className="h-52"
          control={inquiryForm.control}
          name="content"
          label={t(LocalizationKey.partnerWithUs.inquiryForm.customer.content)}
        />

        <div className="text-end">
          <Button className="w-full shadow-2xl drop-shadow-2xl lg:w-80">
            {t(LocalizationKey.partnerWithUs.inquiryForm.customer.formBtn)}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Customer;
