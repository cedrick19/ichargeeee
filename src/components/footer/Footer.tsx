import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { IconName } from "../svg-icons/utils";
import LocalizationKey from "@/i18n/key";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "../svg-icons";
import { bottomLinks, followUs } from "./utils";
import SectionItem from "./SectionItem";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const Footer = () => {
  const { t } = useTranslation();

  const handleClick = () => window.scrollTo(0, 0);

  const renderSvg = (): ReactElement[] =>
    followUs.map((item) => (
      <Avatar key={item.path} onClick={() => window.open(item.path, "_blank")}>
        <AvatarFallback>
          <SvgIcons name={item.icon as IconName} size={30} />
        </AvatarFallback>
      </Avatar>
    ));

  const links = {
    company: [
      { label: t(LocalizationKey.navigation.partnerwithUs), path: "partner" },
      { label: t(LocalizationKey.navigation.services), path: "/services" },
      { label: t(LocalizationKey.navigation.about), path: "/about" },
      { label: t(LocalizationKey.navigation.faqs), path: "/faqs" },
    ],
    platform: [
      { label: t(LocalizationKey.footer.web), path: "#web" },
      {
        label: "iOS",
        path: "https://apps.apple.com/us/app/icharge-ph/id6478515634",
      },
      {
        label: "Android",
        path: "https://play.google.com/store/apps/details?id=com.phl.charge",
      },
    ],
  };

  const NewsletterSection = () => (
    <div className="flex flex-col gap-3 lg:text-start">
      <Label className="mb-4 text-2xl font-bold">
        {t(LocalizationKey.footer.stayInTheLoop)}
      </Label>
      <Label>{t(LocalizationKey.footer.joinNewsletter)}</Label>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-grow items-center gap-2">
          <Input
            type="email"
            placeholder={t(LocalizationKey.footer.emailPlaceholder)}
            className="flex-grow border-white bg-green-900 text-white placeholder:text-xs"
          />
          <Button variant="default" className="w-24 rounded-xl bg-[#38D430]">
            {t(LocalizationKey.footer.subscribe)} <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="flex justify-evenly gap-5 pt-5 lg:justify-start lg:gap-5">
        {renderSvg()}
      </div>
    </div>
  );

  const renderLogo = () => {
    return (
      <div className="row-span-2 place-items-center md:row-span-1 lg:flex lg:justify-start">
        <div className="ml-3 flex justify-center lg:hidden">
          <SvgIcons name="ic_footer_logo" size={200} />
        </div>
        <div className="hidden lg:block">
          <SvgIcons name="ic_footer_logo" size={220} />
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-gradient-to-b from-green-950 to-green-900 p-6 text-white md:p-10 lg:to-green-700">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {renderLogo()}

          <div className="flex md:justify-center lg:justify-normal">
            <SectionItem
              links={links.platform}
              title={t(LocalizationKey.footer.platforms)}
            />
          </div>
          <div className="col-start-2 flex md:col-start-3 md:justify-center lg:justify-normal">
            <SectionItem
              links={links.company}
              title={t(LocalizationKey.footer.company)}
              onClick={handleClick}
            />
          </div>
          <div className="hidden lg:block">
            <NewsletterSection />
          </div>
        </div>

        <div className="mt-5 items-center border-t border-gray-500 pt-3 lg:hidden" />
        <div className="lg:hidden">
          <NewsletterSection />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-500 pt-6 sm:flex-row">
          <Label variant="default">{t(LocalizationKey.footer.copyright)}</Label>
          <div className="mt-4 hidden gap-4 sm:mt-0 sm:flex">
            {bottomLinks.map((item) => (
              <Link to={item.path} key={item.path} onClick={handleClick}>
                <Label variant="default">{t(item.label)}</Label>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
