/* eslint-disable @typescript-eslint/no-explicit-any */
import  { forwardRef, PropsWithChildren, Ref } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues> extends PropsWithChildren {
  forms: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  ref?: Ref<HTMLFormElement>;
}

export const Form = forwardRef<HTMLFormElement, FormProps<any>>(
  ({ forms, onSubmit, children }, ref) => {
    return (
      <FormProvider {...forms}>
        <form ref={ref} onSubmit={forms.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormProvider>
    );
  },
);

export default Form;
