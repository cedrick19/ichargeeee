import { LinkList } from "../type";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Building2, Handshake, Menu, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SvgIcons } from "@/components/svg-icons";

import LocalizationKey from "@/i18n/key";
import { cn } from "@/lib/utils";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";

export const Drawer = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const { language, handleLanguageChange } = useLanguageSwitcher();

  const navigate = useNavigate();
  const location = useLocation();

  const handleBackHome = () => {
    closeDrawer();
    navigate("/");
  };

  const closeDrawer = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const linkList: LinkList[] = [
    {
      label: t(LocalizationKey.navigation.partnerwithUs),
      path: "/partner",
      icon: Handshake,
    },
    {
      label: t(LocalizationKey.navigation.services),
      path: "/services",
      icon: Phone,
    },
    {
      label: t(LocalizationKey.navigation.about),
      path: "/about",
      icon: Building2,
    },
  ];

  const renderDrawerMenu = () => {
    return linkList.map((item, index) => (
      <Button
        key={index}
        variant="ghost"
        className={`flex h-auto items-center justify-start rounded-xl ${
          location.pathname === item.path && "bg-[#38D430]"
        }`}
        onClick={closeDrawer}
      >
        {item.icon && (
          <item.icon
            className={`${location.pathname === item.path && "text-white"} mr-2 h-10 w-10 text-green-500`}
          />
        )}
        <Link to={item.path as string} className="font-poppins">
          <Label
            className={`${location.pathname === item.path && "text-white"} text-xl`}
          >
            {item.label}
          </Label>
        </Link>
      </Button>
    ));
  };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen);
      }}
    >
      <SheetTrigger>
        <Menu
          size={30}
          className="inline-flex text-white lg:hidden"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col bg-white">
        <SheetHeader>
          <SheetTitle className="flex justify-center" onClick={handleBackHome}>
            <SvgIcons name="ic_svl_g2" size={150} />
          </SheetTitle>
          <SheetDescription />
          <div className="flex flex-col space-y-2">{renderDrawerMenu()}</div>
        </SheetHeader>
        <Separator className="my-4 bg-slate-300" />
        <SheetFooter className="mt-auto flex-row justify-between">
          {language.map(({ lng, active, code }, index) => {
            return (
              <Label
                key={index}
                className={cn(
                  "p-2 text-[11px] text-gray-500",
                  active ? "rounded-md font-extrabold" : "",
                )}
                onClick={() => handleLanguageChange(index, code)}
              >
                {lng}
              </Label>
            );
          })}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
