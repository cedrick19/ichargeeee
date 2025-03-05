import { Faqs } from "./types";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

import { Banner, PageContainer } from "@/components";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./component/accordion";

export default function FullScreenResponsiveFAQAccordion() {
  const { t } = useTranslation();

  const faqData = t("customer.faqData", { returnObjects: true }) as Faqs[];

  const [activeCategory, setActiveCategory] = useState<string>(
    t(faqData[0]?.category),
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSetOpenIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAccordionMenu = () => {
    return (
      <div className="container mx-auto mb-6 grid grid-cols-1 gap-2 px-3 md:grid-cols-2 lg:mb-10 lg:grid-cols-3">
        {faqData.map((category) => (
          <Label className="font-bold" key={category.category}>
            <Button
              variant={"custombutton"}
              className={`h-9 w-full whitespace-pre-wrap rounded-full border-2 border-green-500 px-3 py-2 text-sm transition-colors duration-200 sm:h-14 md:px-4 md:py-2 md:text-base lg:text-lg ${
                activeCategory === t(category.category)
                  ? "bg-gradient-to-l from-[#3e8c3b] via-[#55b550] to-[#63cc5e] text-white"
                  : "bg-green-100 text-gray-800 hover:bg-green-200"
              }`}
              onClick={() => setActiveCategory(category.category)}
            >
              {t(category.category)}
            </Button>
          </Label>
        ))}
      </div>
    );
  };

  const renderAccordionQnA = () => {
    return (
      <div className="mb-28 h-full flex-grow px-3">
        {faqData.map(
          (category) =>
            activeCategory === t(category.category) && (
              <Accordion
                key={category.category}
                type="single"
                collapsible
                className="container relative mx-auto space-y-2"
              >
                {category.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger
                      className={`rounded-lg ${
                        openIndex === index ? "bg-green-400" : "bg-green-400"
                      } px-4 py-3 text-left text-base hover:bg-green-500 md:text-lg lg:text-xl`}
                      onClick={() => handleSetOpenIndex(index)}
                    >
                      <div className="flex w-full items-center justify-between">
                        <Label className="text-base font-semibold">
                          {t(item.question)}
                        </Label>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mt-1 rounded-lg border-2 border-green-300 bg-white px-4 py-3 text-left text-sm md:text-base lg:text-lg">
                      <Label
                        className="text-base"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {t(item.answer)}
                      </Label>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ),
        )}
      </div>
    );
  };
  return (
    <PageContainer>
      <Banner title={t(LocalizationKey.customer.heading)} />

      {renderAccordionMenu()}

      {renderAccordionQnA()}
    </PageContainer>
  );
}
