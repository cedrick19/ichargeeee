import { FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import { useState } from "react";

interface PhoneInputField extends PhoneInputProps {
  name: string;
  label: string;
}

interface CountryData {
  dialCode: string;
  format: string;
}

const PhoneField = ({ name, label, ...rest }: PhoneInputField) => {
  const { formState, setValue } = useFormContext();
  const [phoneValue, setPhoneValue] = useState<string>();
  const handlePhoneChange = (value: string, country: CountryData) => {
    setPhoneValue(
      `+${country.dialCode} ${value.replace(country.dialCode, "")}`,
    );
    setValue(name, phoneValue);
  };
  const error = formState.errors[name];
  return (
    <div>
      <Label className={error ? "text-red-600" : ""}>{label}</Label>
      <PhoneInput
        country={"ph"}
        onChange={handlePhoneChange}
        inputStyle={{
          backgroundColor: "#e5e7eb",
          borderColor: error ? "#dc2626" : "white",
          width: "100%",
        }}
        buttonStyle={{
          borderColor: error ? "#dc2626" : "white",
          backgroundColor: '#e5e7eb',
          borderRightColor: "#e5e7eb",
        }}
        enableAreaCodeStretch
        inputProps={{ required: true }}
        placeholder="12345678910"
        {...rest}
      />
      <FormMessage className={`font-poppins ${error ? "text-red-600" : ""}`} />
    </div>
  );
};

export default PhoneField;
