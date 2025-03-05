import { ReactElement } from "react";
import costEffective from "@/assets/ichargemodel.png";
import RocketLogo from "@/assets/about/rocket.png";
import UnionLogo from "@/assets/about/Union.png";
import VectorLogo from "@/assets/about/Vector.png";
import Lightning from "@/assets/about/lightning-fill.png";
import { Label } from "@/components/ui/label";
import { SectionTitleProps, SectionContentProps } from "./types";
import { PageContainer } from "@/components";
import SummaryCard from "../component/SumCard";
import {
  Certs,
  CertsMobileBottomRow,
  CertsMobileTopRow,
  SumVal,
} from "../utils";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  icon,
  className = "",
}: SectionTitleProps): ReactElement => (
  <h2
    className={cn(
      "container mx-auto flex items-center gap-2 bg-gradient-to-b from-[#044F00] to-[#078E00] bg-clip-text p-4 text-2xl font-bold text-transparent md:text-3xl",
      className,
    )}
  >
    <img src={icon} alt="" className="h-16 w-16" />
    <Label variant="title">{children}</Label>
  </h2>
);

const SectionContent = ({
  children,
  className,
}: SectionContentProps): ReactElement => (
  <div
    className={cn(
      "border-t-2 border-green-700 bg-[#38D430]/10 p-10",
      className,
    )}
  >
    <div className="container mx-auto max-w-7xl text-green-800">{children}</div>
  </div>
);

const AboutComponent = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <PageContainer>
        <div
          className="flex max-w-7xl flex-col gap-3 lg:flex-row"
          data-aos="fade-up"
        >
          <div className="flex w-full justify-center">
            <img
              src={costEffective}
              alt="iCharge devices"
              className="h-75 w-72 text-green-600"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Label
              variant={"banner"}
              className="bg-gradient-to-b from-[#044F00] to-[#078E00] bg-clip-text font-medium text-transparent"
            >
              {t(LocalizationKey.about.whoWeAre)}
            </Label>
            <div className="flex flex-col gap-5 text-gray-700">
              <Label className="text-base">
                {t(LocalizationKey.about.whoWeAreDesc1)}
              </Label>

              <Label className="text-base">
                {t(LocalizationKey.about.whoWeAreDesc2)}
              </Label>

              <Label className="text-base">
                {t(LocalizationKey.about.whoWeAreDesc3)}
              </Label>
            </div>
          </div>
        </div>
      </PageContainer>

      <div className="bg-[url('@/assets/about/about-banner.jpg')] bg-cover bg-center">
        <div className="container relative mx-auto min-h-[301px]">
          <div className="relative z-10 flex min-h-[301px] flex-col justify-center p-4 sm:p-6 md:p-8">
            <div className="mx-auto sm:mx-0">
              {[
                t(LocalizationKey.about.stayPowered),
                t(LocalizationKey.about.stayConnected),
              ].map((text, index) => (
                <h2
                  key={index}
                  className="mb-4 flex items-center justify-center text-white sm:justify-start sm:text-3xl md:text-4xl"
                >
                  <img
                    src={Lightning}
                    className="mr-2 h-6 w-6 sm:h-8 sm:w-8 md:h-16 md:w-16"
                    aria-hidden="true"
                  />
                  <Label variant={"banner"}>{text}</Label>
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-10 px-4 md:px-0">
        <section data-aos="fade-up">
          <SectionTitle icon={RocketLogo}>
            <Label variant={"banner"}>
              {t(LocalizationKey.about.ourMission)}
            </Label>
          </SectionTitle>
          <SectionContent className="rounded-none md:mr-36 md:rounded-br-[5rem]">
            <Label variant={"subtitle"}>
              {t(LocalizationKey.about.ourMissionDesc)}
            </Label>
          </SectionContent>
        </section>

        <section data-aos="fade-up">
          <SectionTitle icon={UnionLogo} className="justify-end">
            <Label variant={"banner"}>
              {t(LocalizationKey.about.ourVision)}
            </Label>
          </SectionTitle>
          <SectionContent className="rounded-none md:ml-36 md:rounded-bl-[5rem]">
            <Label variant={"subtitle"}>
              {t(LocalizationKey.about.ourVisionDesc)}
            </Label>
          </SectionContent>
        </section>

        <section data-aos="fade-up">
          <SectionTitle icon={VectorLogo}>
            <Label variant={"banner"}>
              {t(LocalizationKey.about.ourReach)}
            </Label>
          </SectionTitle>
          <SectionContent className="rounded-none md:mr-36 md:rounded-br-[5rem]">
            <div className="flex flex-col gap-5">
              <Label variant={"subtitle"}>
                {t(LocalizationKey.about.ourReachDesc1)}
              </Label>

              <Label variant={"subtitle"}>
                {t(LocalizationKey.about.ourReachDesc2)}
              </Label>

              <Label variant={"subtitle"}>
                {t(LocalizationKey.about.ourReachDesc3)}
              </Label>
            </div>
          </SectionContent>
        </section>

        <PageContainer className="flex flex-col gap-20 px-0 md:px-10">
          {SumVal.map((data, index) => (
            <SummaryCard
              stepSummary={data}
              sideBg={data.SumImage}
              mobileBg={data.SumImageMobile}
              key={index}
              isFlipped={index === 1 ? true : false}
            />
          ))}
          <section className="hidden justify-center gap-3 overflow-hidden lg:flex lg:flex-row">
            {Certs.map((data, index) => (
              <img
                src={data.imageName}
                key={index}
                className="h-[90px] xl:h-[120px]"
              />
            ))}
          </section>
          <section className="relative -top-10 flex flex-col items-center -space-x-1 lg:hidden">
            <div className="flex gap-3">
              {CertsMobileTopRow.map((data, index) => (
                <img src={data.imageName} key={index} className="h-[60px]" />
              ))}
            </div>
            <div className="relative top-3 flex gap-3">
              {CertsMobileBottomRow.map((data, index) => (
                <img src={data.imageName} key={index} className="h-[60px]" />
              ))}
            </div>
          </section>
        </PageContainer>
      </div>
    </>
  );
};

export default AboutComponent;
