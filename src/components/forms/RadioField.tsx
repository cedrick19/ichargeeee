import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { FieldValues } from "react-hook-form";
import { FormFieldProps, LabelValue } from "./types";

interface RadioField<T extends FieldValues> extends FormFieldProps<T> {
  options: LabelValue[];
}

export const RadioField = <T extends FieldValues>(props: RadioField<T>) => {
  const { control, name, label, options } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              {options.map((item) => (
                <FormItem
                  className="flex items-center space-x-3 space-y-0"
                  key={item.value}
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel>{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className="font-poppins text-destructive" />
        </FormItem>
      )}
    />
  );
};

export default RadioField;
