import { FormFieldProps } from "./types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LocalizationKey from "@/i18n/key";
import { cn } from "@/lib/utils";
import { ChangeEventHandler } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type TextFieldTypes =
  | "file"
  | "text"
  | "number"
  | "password"
  | "email"
  | "tel"
  | "time";

interface TextFieldProps<T extends FieldValues> extends FormFieldProps<T> {
  className?: string;
  type?: TextFieldTypes;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TextField = <T extends FieldValues>({
  control,
  name,
  label,
  className,
  type = "text",
  placeholder,
  onChange,
}: TextFieldProps<T>) => {
  const { t } = useTranslation();

  const { formState } = useFormContext();

  const placeholderText =
    placeholder || t(LocalizationKey.common.textfieldPlaceholder);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className={`${formState.errors[field.name] && "text-red-600"} `}
          >
            {label}

            <FormControl>
              <Input
                type={type}
                {...field}
                placeholder={placeholderText}
                onChange={(event) => {
                  field.onChange(event);
                  onChange?.(event);
                }}
                className={cn(
                  "w-full border-white bg-gray-200 placeholder:text-gray-500",
                  formState.errors[field.name] && "border-red-600",
                  className,
                )}
              />
            </FormControl>
            <FormMessage className="font-poppins text-red-600" />
          </FormLabel>
        </FormItem>
      )}
    />
  );
};

export default TextField;
