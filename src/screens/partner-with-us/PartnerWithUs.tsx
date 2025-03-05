import { ReactElement } from "react";

import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import LocalizationKey from "@/i18n/key";

import bgImg from "@/assets/modern-man-using-smartphone-city-2.png";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Banner, PageContainer } from "@/components";

import { InquiryForm, RenderItem } from "./components";
import { data } from "./utils";

const PartnerWithUs = (): ReactElement => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner title={t(LocalizationKey.partnerWithUs.partnerWithUsHeading)}>
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col">
            <Label variant="subtitle" className="font-medium text-white">
              {t(LocalizationKey.partnerWithUs.heading1)}
            </Label>
            <Label variant="subtitle" className="font-medium text-white">
              {t(LocalizationKey.partnerWithUs.heading2)}
            </Label>
          </div>

          <Button
            onClick={() => scrollToSection("inquiryForm")}
            variant={"custombutton"}
            className="group h-10 items-center bg-white text-green-600 hover:text-white"
          >
            {t(LocalizationKey.partnerWithUs.bannerBtn)}
            <ChevronRight className="text-green-600 group-hover:text-white" />
          </Button>
        </div>
      </Banner>

      <PageContainer className="flex flex-col gap-20">
        {data.map((item, ids) => (
          <RenderItem
            key={ids}
            imgSrc={item.imgSrc}
            title={t(item.title)}
            list={item.list.map((label) => t(label))}
          />
        ))}
      </PageContainer>

      <section className="relative h-full w-full pb-16">
        <img
          src={bgImg}
          alt="Background"
          className="absolute inset-0 h-[90vh] w-full bg-cover brightness-50"
        />

        <div className="absolute inset-0 h-[90vh] bg-gradient-to-tr from-[#33E72A] to-transparent" />

        <div className="container relative z-10 mx-auto flex h-full flex-col gap-5 px-10 py-32">
          <Label variant={"banner"} className="text-white">
            {t(LocalizationKey.partnerWithUs.wantToPartner)}
          </Label>
          <Label variant={"banner"} className="text-white">
            {t(LocalizationKey.partnerWithUs.getInTouch)}
          </Label>
        </div>

        <InquiryForm />
      </section>
    </>
  );
};

export default PartnerWithUs;
