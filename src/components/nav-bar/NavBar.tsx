import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import useScroll from "@/hooks/useScroll";
import { LinkList } from "./type";
import { Building2, Handshake, Phone } from "lucide-react";
import { SvgIcons } from "../svg-icons";

import { Drawer } from "./component";

import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";
import { cn } from "@/lib/utils";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";

export const NavBar = () => {
  const { t } = useTranslation();
  const { language, handleLanguageChange } = useLanguageSwitcher();
  const navigate = useNavigate();
  const location = useLocation();
  const isScroll = useScroll(window.innerHeight);

  const footerClass =
    location.pathname === "/cookies" ||
    location.pathname === "/privacy" ||
    location.pathname === "/terms-and-conditions"
      ? "bg-gradient-to-t from-[#055c00] to-[#022700]"
      : null;

  const handleBackHome = () => {
    return navigate("/");
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

  const renderNavigation = () => {
    return (
      <div className="hidden gap-5 lg:flex">
        {linkList.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Button
              key={index}
              variant="link"
              className={`font-normal hover:text-gray-500 hover:no-underline ${
                isActive ? "font-bold text-white underline" : ""
              } ${isScroll ? "text-black" : "text-white"}`}
            >
              <Link to={item.path as string} className="font-poppins">
                {item.label}
              </Link>
            </Button>
          );
        })}
      </div>
    );
  };
  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex h-14 w-full items-center justify-between px-4 py-14 backdrop-blur-3xl transition-all lg:relative lg:backdrop-blur-none ${
        isScroll &&
        "border-b-[1px] bg-gradient-to-t from-[#055c00] to-[#022700]"
      } ${footerClass}`}
    >
      <Button variant={"icon"} onClick={handleBackHome}>
        <SvgIcons name="ic_icharge_white" size={150} />
      </Button>

      {renderNavigation()}

      <div className="flex items-center">
        <div className="hidden flex-row gap-2 lg:flex">
          {language.map(({ lng, active, code }, index) => {
            return (
              <Label
                key={index}
                className={cn(
                  "p-2 text-white hover:rounded-md hover:font-extrabold",
                  active ? "rounded-md bg-white/10 font-extrabold" : "",
                )}
                onClick={() => handleLanguageChange(index, code)}
              >
                {lng}
              </Label>
            );
          })}
        </div>

        <Drawer />
      </div>
    </header>
  );
};

export default NavBar;
