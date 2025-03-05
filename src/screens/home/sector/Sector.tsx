import { IndustriesCard } from "./type";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "@/components";
import { IndustryCard } from "./component/IndustryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import sectorHospital from "@/assets/sectors/sectorHospitality.webp";
import sectorHealthCare from "@/assets/sectors/sectorHealthcare.webp";
import sectorTransport from "@/assets/sectors/sectorTransport.webp";
import sectorEvents from "@/assets/sectors/sectorEvents.webp";
import sectorRetail from "@/assets/sectors/sectorRetail.webp";
import LocalizationKey from "@/i18n/key";

const Sector = (): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const topSector: IndustriesCard[] = [
    {
      title: t(LocalizationKey.services.retail.title),
      bgImage: sectorRetail,
    },
    {
      title: t(LocalizationKey.services.healthcare.title),
      bgImage: sectorHealthCare,
    },
  ];
  const bottomSector: IndustriesCard[] = [
    {
      title: t(LocalizationKey.services.transport.title),
      bgImage: sectorTransport,
    },
    {
      title: t(LocalizationKey.services.events.title),
      bgImage: sectorEvents,
    },
    {
      title: t(LocalizationKey.services.hospitality.title),
      bgImage: sectorHospital,
    },
  ];
  const sector: IndustriesCard[] = [...topSector, ...bottomSector];

  const handleCarouselChange = (index: number): void => {
    setCurrentIndex(index); // Update the current carousel index
  };
  const handleSectorNavigate = (id: string): void => {
    navigate("services", { state: { value: id } });
  };
  return (
    <>
      <PageContainer className="hidden flex-col space-y-10 lg:flex">
        <div className="flex flex-col space-y-5 text-center">
          <Label
            variant="banner"
            className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
          >
            {t(LocalizationKey.services.sectorHeading)}
          </Label>
          <Label variant="subtitle">
            {t(LocalizationKey.services.sectorSubHeading)}
          </Label>
        </div>
        {/* desktop view */}
        <div className="grid grid-cols-2 gap-10">
          {topSector.map(({ title, bgImage }, index) => (
            <IndustryCard
              card={{ title, bgImage }}
              key={index}
              isDesktop={true}
              onClick={() => handleSectorNavigate(title)}
            />
          ))}
        </div>
        <div className="hidden grid-cols-3 gap-10 lg:grid">
          {bottomSector.map(({ title, bgImage }, index) => (
            <IndustryCard
              card={{ title, bgImage }}
              key={index}
              isDesktop={true}
              onClick={() => handleSectorNavigate(title)}
            />
          ))}
        </div>
        {/* desktop view */}
      </PageContainer>
      {/* mobile view */}
      <div className="space-y-5 pb-16 lg:hidden">
        <div className="flex flex-col space-y-5 text-center">
          <Label
            variant="banner"
            className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
          >
            {t(LocalizationKey.services.sectorHeading)}
          </Label>
          <Label variant="subtitle">
            {t(LocalizationKey.services.sectorSubHeading)}
          </Label>
        </div>
        <Carousel
          className="overflow-hidden"
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={(api) => {
            if (api !== undefined) {
              api.on("select", () =>
                handleCarouselChange(api.selectedScrollSnap()),
              );
            }
          }}
        >
          <CarouselContent className="flex h-[100%] py-8">
            {sector.map(({ title, bgImage }, index) => (
              <CarouselItem
                className="relative mr-4 min-w-0 flex-[0_0_70%]"
                key={index}
              >
                <IndustryCard
                  card={{ title, bgImage }}
                  className={
                    index !== currentIndex ? "opacity-25" : "opacity-100"
                  }
                  isDesktop={false}
                  onClick={() => handleSectorNavigate(title)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="custom-lg:hidden mt-5 flex justify-center">
            {sector.map((_, index) => (
              <div
                key={index}
                className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${
                  currentIndex === index ? "bg-opacity-100" : "bg-opacity-25"
                } bg-green-500`}
              />
            ))}
          </div>
        </Carousel>
      </div>
      {/* mobile view */}
    </>
  );
};

export default Sector;
