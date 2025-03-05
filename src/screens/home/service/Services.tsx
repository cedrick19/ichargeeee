import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import LocalizationKey from "@/i18n/key";

import bgImg from "@/assets/modern-man-using-smartphone-city-2.webp";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SvgIcons } from "@/components";
import { IconName } from "@/components/svg-icons/utils";

interface ServiceCardProps {
  icon: string;
  label: string;
}
const items: ServiceCardProps[] = [
  {
    icon: "ic_free",
    label: "home.freeUseOfEquipment.label",
  },
  {
    icon: "ic_sale",
    label: "home.saleOfEquipment.label",
  },
];

const Services = (): ReactElement => {
  const { t } = useTranslation();

  const renderCard = (items: ServiceCardProps, ids: number): ReactElement => {
    return (
      <Card
        key={ids}
        className="relative rounded-3xl border-4 border-green-200 bg-gradient-to-b from-green-100 to-neutral-50 p-12 shadow-inner"
      >
        <CardContent className="flex flex-col items-center p-6 pt-12">
          <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
            <SvgIcons name={items.icon as IconName} size={100} />
          </div>

          <Label className="text-center text-2xl font-semibold">
            {t(items.label)}
          </Label>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="relative h-full w-full pb-32">
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 h-[100vh] w-full brightness-50"
      />

      <div className="absolute inset-0 h-[100vh] bg-gradient-to-tr from-[#33E72A] to-transparent" />

      <div className="container relative z-10 mx-auto flex h-full flex-col gap-5 px-10 py-32">
        <Label className="font-staatliches text-5xl tracking-wider text-white md:text-6xl lg:text-8xl">
          24/7 SUPPORT
        </Label>
        <Label className="font-staatliches text-5xl tracking-wider text-white md:text-6xl lg:text-8xl">
          REAL-TIME MONITORING
        </Label>
        <Label className="font-staatliches text-5xl tracking-wider text-white md:text-6xl lg:text-8xl">
          EASY TO USE
        </Label>
      </div>

      <section className="container relative mx-auto w-full space-y-20 rounded-none bg-white p-10 text-center shadow-none drop-shadow-none md:rounded-3xl md:shadow-2xl md:drop-shadow-2xl lg:p-32">
        <Label
          variant={"banner"}
          className="block bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent md:hidden"
        >
          {t(LocalizationKey.home.weOfferServicesThatFitsYourNeeds)}
        </Label>

        <div className="hidden md:flex md:flex-col">
          <Label
            variant={"banner"}
            className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
          >
            {t(LocalizationKey.home.weOffer)}
          </Label>
          <Label
            variant={"banner"}
            className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
          >
            {t(LocalizationKey.home.fitsYourNeeds)}
          </Label>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.map((item, ids) => renderCard(item, ids))}
        </div>
      </section>
    </section>
  );
};

export default Services;
