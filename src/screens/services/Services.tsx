import { ReactElement } from "react";
import { ChevronRight } from "lucide-react";

import { useTranslation } from "react-i18next";

import { Banner } from "@/components/banner";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Equipment from "./equipment/Equipment";
import LocalizationKey from "@/i18n/key";

import ServiceIndustries from "./sector-industries/ServiceIndustries";
import SustainabilitySocial from "./sustainability-and-social-impact/SustainabilitySocial";

import Products from "./products/Products";

const Services = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <main>
      <Banner title={t(LocalizationKey.services.servicesHeading)}>
        <div className="flex flex-col items-center justify-center gap-16">
          <Label variant="subtitle" className="font-medium text-white">
            {t(LocalizationKey.services.servicesSubHeading)}
          </Label>

          <Button
            variant="custombutton"
            className="group h-10 items-center bg-white text-green-600 hover:text-white"
            onClick={() =>
              document
                .getElementById("serviceProducts")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t(LocalizationKey.services.viewProducts)}
            <ChevronRight />
          </Button>
        </div>
      </Banner>
      <section className="mb-8">
        <Equipment />
      </section>
      <section className="space-y-10">
        <ServiceIndustries />
      </section>
      <Products />
      <section className="py-24">
        <SustainabilitySocial />
      </section>
    </main>
  );
};

export default Services;
