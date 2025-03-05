import { FloatingForm } from "./type";
import { ReactElement, useRef } from "react";
import { MessageCircleMore } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

import { chatId, publicKey, serviceId } from "@/lib/viteKey";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { Form, TextArea, TextField } from "../forms";

import { formDefaultValues, formSchema } from "./utils";

export const FloatingButton = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const forms = useForm<FloatingForm>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  const sendEmail = () => {
    if (formRef.current) {
      emailjs
        .sendForm(serviceId, chatId, formRef.current, {
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

  const handleSubmit: SubmitHandler<FloatingForm> = (data) => {
    console.log("Form data:", data);
    sendEmail();
    forms.reset();
  };

  return (
    <Popover>
      <PopoverTrigger className="data-[state=open]:rounded-eyedrop fixed bottom-10 right-10 hidden h-20 w-20 items-center justify-center rounded-full border-white bg-gradient-to-b from-[#38D430] to-[#1D6E19] text-white shadow-2xl drop-shadow-2xl sm:flex">
        <MessageCircleMore size={48} strokeWidth={3} />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="right-10 mr-2 flex h-full flex-col gap-3 rounded-xl border-white bg-white shadow-2xl drop-shadow-2xl"
      >
        <div className="flex flex-col gap-1">
          <Label className="text-base font-semibold text-green-600">
            We&apos;re Here to Help!
          </Label>
          <Label className="text-base font-semibold text-green-600">
            Send Us a Message.
          </Label>
        </div>
        <Separator className="bg-green-600" />
        <Form ref={formRef} forms={forms} onSubmit={handleSubmit}>
          <TextField name="fullname" control={forms.control} label="Fullname" />
          <TextField name="email" control={forms.control} label="Email" />
          <TextArea
            name="message"
            control={forms.control}
            label="Message"
            className="h-36 w-full resize-none"
          />
          <Button className="mt-2 w-full">Send Message</Button>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

export default FloatingButton;
