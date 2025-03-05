import { ProdModal } from "../types";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import LocalizationKey from "@/i18n/key";

const SubLabel = ({ item }: Omit<ProdModal, "open" | "handleOpenChange">) => {
  const { t } = useTranslation();
  const {
    productDetails: { name, description, seatCapacity },
    productDescriptions: { content, dimensions, wattage },
  } = item;

  return (
    <div className="hidden space-y-10 py-10 lg:flex lg:flex-col">
      {/* Name and Description */}
      <div className="space-y-1 lg:flex lg:flex-col">
        <Label variant={"heading1"} className="tracking-wider text-white">
          {name}
        </Label>
        <Label className="font-semibold text-white">{description}</Label>
        <Label className="hidden font-semibold text-white md:block">
          {seatCapacity}
        </Label>
      </div>

      {/* Product Details */}
      <div className="flex h-fit justify-between text-center text-white">
        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Code */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">
            {t(LocalizationKey.services.contents)}
          </Label>
          <Label>
            {t(LocalizationKey.services.slot)}: {content.slots}
          </Label>
          <Label>
            {t(LocalizationKey.services.powerbanks)}: {content.powerbanks}
          </Label>
        </div>

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Dimension */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">{t(LocalizationKey.services.size)}</Label>
          <Label>h: {dimensions.h}</Label>
          <Label>w: {dimensions.w}</Label>
          <Label>l: {dimensions.l}</Label>
        </div>

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />

        {/* Wattage */}
        <div className="flex flex-col space-y-5">
          <Label className="text-xl">
            {t(LocalizationKey.services.wattage)}
          </Label>
          <Label>
            {t(LocalizationKey.services.standby)}: {wattage.standBy}
          </Label>
          <Label>
            {t(LocalizationKey.services.fullload)}: {wattage.fullLoad}
          </Label>
        </div>

        <Separator
          orientation="vertical"
          className="h-48 border-2 border-white"
        />
      </div>
    </div>
  );
};

export default SubLabel;
