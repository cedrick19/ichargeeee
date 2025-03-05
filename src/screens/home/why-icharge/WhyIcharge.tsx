import CostEffective from "@/assets/costeffective.svg";
import Convenience from "@/assets/convenience.svg";
import FLexible from "@/assets/flexible.svg";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";
import { PageContainer } from "@/components";

const WhyICharge = () => {
  const { t } = useTranslation();

  return (
    <PageContainer className="flex flex-col sm:px-6 lg:px-8">
      <Label
        variant={"banner"}
        className="mb-12 bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent"
      >
        {t(LocalizationKey.home.whyIcharge)}ICharge
      </Label>

      <div className="space-y-24 sm:space-y-36">
        <div
          className="flex flex-col items-center gap-8 sm:flex-row"
          data-aos="fade-up"
        >
          <div className="flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={Convenience}
              alt="Convenience"
              className="h-full w-full text-green-600"
            />
          </div>
          <div className="text-center sm:text-left">
            <Label variant="heading2" className="mb-4 block">
              {t(LocalizationKey.home.convenience)}
            </Label>
            <Label variant="body">
              {t(LocalizationKey.home.conveniencedesc)}
            </Label>
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-8 sm:flex-row-reverse"
          data-aos="fade-up"
        >
          <div className="round flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={CostEffective}
              alt="Cost-effective"
              className="h-full w-full text-green-600"
            />
          </div>
          <div className="text-center sm:text-right">
            <Label variant={"heading2"} className="mb-4 block">
              {t(LocalizationKey.home.costEffective)}
            </Label>
            <Label variant={"body"}>
              {t(LocalizationKey.home.costEffectivedesc)}
            </Label>
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-8 sm:flex-row"
          data-aos="fade-up"
        >
          <div className="flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={FLexible}
              alt="Flexible"
              className="h-full w-full text-green-600"
            />
          </div>
          <div className="text-center sm:text-left">
            <Label variant={"heading2"} className="mb-4 block">
              {t(LocalizationKey.home.flexible)}
            </Label>
            <Label variant={"body"}>
              {t(LocalizationKey.home.flexibledesc)}
            </Label>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default WhyICharge;
