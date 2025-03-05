import { FormFieldProps, LabelValue } from "./types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LocalizationKey from "@/i18n/key";
import { FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface SelectFieldProps<T extends FieldValues> extends FormFieldProps<T> {
  options: LabelValue[];
}
export const SelectField = <T extends FieldValues>(
  props: SelectFieldProps<T>,
) => {
  const { control, name, label, options } = props;

  const { t } = useTranslation();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full border-white bg-gray-200">
                <SelectValue
                  placeholder={
                    <Label className="text-gray-500">
                      {t(LocalizationKey.common.selectPlaceholder)}
                    </Label>
                  }
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="border-white bg-gray-200">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer focus:bg-[#aecfab]"
                >
                  <Label variant={"default"}>{option.label}</Label>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
