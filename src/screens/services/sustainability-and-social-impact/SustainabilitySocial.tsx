import { ReactElement } from "react";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

const SustainabilitySocial = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col space-y-10 px-20 text-center">
      <div className="flex flex-col space-y-5 border border-solid border-[#78e996] p-8 md:p-10">
        <Label
          variant="banner"
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-[1.5em] text-transparent md:text-xl"
        >
          {t(LocalizationKey.services.serviceSustainabilitySocialTitle)}
        </Label>
        <Label variant="subtitle" className="text-xs md:text-sm">
          {t(LocalizationKey.services.serviceSustainabilitySocialbody)}
        </Label>
      </div>
    </section>
  );
};

export default SustainabilitySocial;
