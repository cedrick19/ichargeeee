import SaleOfEquipment from "@/assets/sale-of-equipment.svg";
import FreeUseofEquipment from "@/assets/free-use-of-equipment.svg";
import { Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

const Equipment = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-4 mb-16 flex flex-col sm:px-8 lg:px-20">
      <div className="space-y-24 sm:space-y-36">
        <div
          className="flex flex-col items-center gap-8 sm:flex-row"
          data-aos="fade-up"
        >
          <div className="flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={FreeUseofEquipment}
              alt="Convenience"
              className="h-full w-full text-green-600"
            />
          </div>

          <div className="text-center sm:text-left">
            <Label variant="heading2" className="mb-4 block">
              {t(LocalizationKey.services.serviceFreeEquipmentTitle)}
            </Label>
            <div className="mb-8">
              <Label variant="body">
                {t(LocalizationKey.services.serviceFreeEquipmentsubTitle)}
              </Label>
            </div>
            <div className="mb-2 flex items-center gap-2 sm:gap-5">
              <div className="flex h-7 w-8 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600 sm:h-8 sm:w-9">
                <Check className="h-4 w-4 sm:h-6 sm:w-6" color="white" />
              </div>
              <Label variant="subtitle" className="w-full">
                {t(LocalizationKey.services.serviceFreeEquipmentbody1)}
              </Label>
            </div>
            <div className="mb-2 flex items-center gap-2 sm:gap-5">
              <div className="flex h-7 w-8 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600 sm:h-8 sm:w-9">
                <Check className="h-4 w-4 sm:h-6 sm:w-6" color="white" />
              </div>
              <Label variant="subtitle" className="w-full">
                {t(LocalizationKey.services.serviceFreeEquipmentbody2)}
              </Label>
            </div>
            <div className="flex items-center gap-2 sm:gap-5">
              <div className="flex h-7 w-8 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600 sm:h-8 sm:w-9">
                <Check className="h-4 w-4 sm:h-6 sm:w-6" color="white" />
              </div>
              <Label variant="subtitle" className="w-full">
                {t(LocalizationKey.services.serviceFreeEquipmentbody3)}
              </Label>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-between gap-8 sm:flex-row"
          data-aos="fade-up"
        >
          <div className="round block h-48 w-48 shrink-0 flex-row-reverse items-center justify-center sm:hidden sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={SaleOfEquipment}
              alt="Cost-effective"
              className="h-full w-full text-green-600"
            />
          </div>
          <div className="text-center sm:text-right">
            <Label
              variant={"heading2"}
              className="mb-4 block text-center md:text-left"
            >
              {t(LocalizationKey.services.serviceSaleEquipmentTitle)}
            </Label>
            <div className="mb-8 text-center md:text-left">
              <Label variant={"body"}>
                {t(LocalizationKey.services.serviceSaleEquipmentsubTitle)}
              </Label>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 sm:gap-5">
                <div className="flex h-7 w-8 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600 sm:h-8 sm:w-9">
                  <Check className="h-4 w-4 sm:h-6 sm:w-6" color="white" />
                </div>
                <Label variant="subtitle" className="w-full text-left">
                  {t(LocalizationKey.services.serviceSaleEquipmentbody1)}
                </Label>
              </div>
              <div className="flex items-center gap-2 sm:gap-5">
                <div className="flex h-7 w-8 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600 sm:h-8 sm:w-9">
                  <Check className="h-4 w-4 sm:h-6 sm:w-6" color="white" />
                </div>
                <Label variant="subtitle" className="w-full text-left">
                  {t(LocalizationKey.services.serviceSaleEquipmentbody2)}
                </Label>
              </div>
              <div className="flex items-center gap-2 sm:gap-5">
                <div className="flex h-7 w-8 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600 sm:h-8 sm:w-9">
                  <Check className="h-4 w-4 sm:h-6 sm:w-6" color="white" />
                </div>
                <Label variant="subtitle" className="w-full text-left">
                  {t(LocalizationKey.services.serviceSaleEquipmentbody3)}
                </Label>
              </div>
            </div>
          </div>
          <div className="round hidden h-48 w-48 shrink-0 flex-row-reverse items-center justify-center sm:block sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={SaleOfEquipment}
              alt="Cost-effective"
              className="h-full w-full text-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
