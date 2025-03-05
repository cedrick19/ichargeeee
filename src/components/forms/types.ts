import { Control, FieldValues, Path } from "react-hook-form";

export interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
}

export interface LabelValue {
  label: string;
  value: string;
}
