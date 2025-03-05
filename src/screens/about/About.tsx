import { ReactElement } from "react";
import { Label } from "@/components/ui/label";
import { Banner } from "@/components";
import AboutComponent from "./AboutComponent";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";

const Sustainabilities = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className="">
      <Banner title="QUANTA DANCE INC">
        <Label variant="subtitle" className="font-medium text-white">
          {t(LocalizationKey.about.aboutHeading)}
        </Label>
      </Banner>
      <AboutComponent />
    </section>
  );
};

export default Sustainabilities;
