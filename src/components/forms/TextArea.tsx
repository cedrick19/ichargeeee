import { FormFieldProps } from "./types";
import { FieldValues, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea as ShadTextArea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

interface TextAreaProps<T extends FieldValues> extends FormFieldProps<T> {
  className?: string;
}

export const TextArea = <T extends FieldValues>({
  control,
  name,
  label,
  className,
}: TextAreaProps<T>) => {
  const { t } = useTranslation();
  const { formState } = useFormContext();
  const error = formState.errors[name];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={error && "text-red-600"}>
            {label}
            <FormControl>
              <ShadTextArea
                {...field}
                className={cn(
                  "h-20 resize-none bg-gray-200 placeholder:text-gray-500",
                  error ? "border-red-600" : "border-white",
                  className,
                )}
                placeholder={t(LocalizationKey.common.textareaPlaceholder)}
              />
            </FormControl>
            <FormMessage className="font-poppins text-red-600" />
          </FormLabel>
        </FormItem>
      )}
    />
  );
};

export default TextArea;
