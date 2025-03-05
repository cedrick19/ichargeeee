import { z } from "zod";

export const formSchema = z.object({
  fullname: z.string().min(1, "fullname is requried"),
  email: z.string().email({ message: "must be a valid email" }),
  phoneNumber: z.string().optional(),
  message: z.string().min(1, "message is required"),
});

export const formDefaultValues = {
  fullname: "",
  email: "",
  message: "",
};
