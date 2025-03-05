import { Product } from "./products/types";
import { Industries } from "./sector-industries/types";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import LocalizationKey from "@/i18n/key";

import Products12Pro from "@/assets/Products/products/icharge12Pro.webp";
import Products12 from "@/assets/Products/products/icharge12.webp";
import Products8Plus from "@/assets/Products/products/icharge8Plus.webp";
import Products8 from "@/assets/Products/products/icharge8.webp";
import Products6 from "@/assets/Products/products/icharge6.webp";
import Products24Max from "@/assets/Products/products/ichargeMax.webp";
import ProductsQCRC from "@/assets/Products/products/ichargeQCRC.webp";
import ProductsQCSQ from "@/assets/Products/products/ichargeQCSQ.webp";

import sectorHospitality from "@/assets/sectors/sectorHospitality.webp";
import sectorHealthCare from "@/assets/sectors/sectorHealthcare.webp";
import sectorTransport from "@/assets/sectors/sectorTransport.webp";
import sectorEvents from "@/assets/sectors/sectorEvents.webp";
import sectorRetail from "@/assets/sectors/sectorRetail.webp";

export const useServices = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const productInit: Product = {
    productDetails: {
      name: "",
      description: "",
      image: "",
      seatCapacity: "",
    },
    productDescriptions: {
      wattage: { fullLoad: "", standBy: "" },
      dimensions: { h: "", l: "", w: "" },
      content: { code: "", slots: "", powerbanks: "" },
    },
  };

  const productList: Product[] = [
    {
      productDetails: {
        name: "iCharge 6",
        description: t(LocalizationKey.services.icharge6desc),
        image: Products6,
        seatCapacity: t(LocalizationKey.services.icharge6desc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "75W", standBy: "3W" },
        dimensions: { h: "1150mm", l: "260mm", w: "235mm" },
        content: { code: "QI-6", slots: "6", powerbanks: "4" },
      },
    },
    {
      productDetails: {
        name: "iCharge 8",
        description: t(LocalizationKey.services.icharge8desc),
        image: Products8,
        seatCapacity: t(LocalizationKey.services.icharge8desc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "65W", standBy: "3W" },
        dimensions: { h: "174mm", l: "343mm", w: "188mm" },
        content: { code: "QI-8", slots: "8", powerbanks: "5" },
      },
    },
    {
      productDetails: {
        name: "iCharge 8 Plus",
        description: t(LocalizationKey.services.icharge8plusdesc),
        image: Products8Plus,
        seatCapacity: t(LocalizationKey.services.icharge8plusdesc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "65W", standBy: "3W" },
        dimensions: { h: "174mm", l: "343mm", w: "188mm" },
        content: { code: "QI-8Plus", slots: "8", powerbanks: "5" },
      },
    },
    {
      productDetails: {
        name: "iCharge 12",
        description: t(LocalizationKey.services.icharge12desc),
        image: Products12,
        seatCapacity: t(LocalizationKey.services.icharge12desc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "75W", standBy: "3W" },
        dimensions: { h: "260mm", l: "260mm", w: "235mm" },
        content: { code: "QI-12", slots: "12", powerbanks: "8" },
      },
    },
    {
      productDetails: {
        name: "iCharge 12 Pro",
        description: t(LocalizationKey.services.icharge12prodesc),
        image: Products12Pro,
        seatCapacity: t(LocalizationKey.services.icharge12prodesc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "75W", standBy: "3W" },
        dimensions: { h: "260mm", l: "260mm", w: "235mm" },
        content: { slots: "12", powerbanks: "8", code: "QI-12Pro" },
      },
    },
    {
      productDetails: {
        name: "iCharge 24 Max",
        description: t(LocalizationKey.services.icharge24maxdesc),
        image: Products24Max,
        seatCapacity: t(LocalizationKey.services.icharge24maxdesc2),
      },
      productDescriptions: {
        wattage: { fullLoad: "160W", standBy: "24.2W" },
        dimensions: { h: "1650mm", l: "540mm", w: "450mm" },
        content: { code: "QI-Max", slots: "24", powerbanks: "16" },
      },
    },
    {
      productDetails: {
        name: "iCharge Standee SR",
        description: t(LocalizationKey.services.ichargestandeesrdesc),
        image: ProductsQCRC,
      },
      productDescriptions: {
        wattage: { fullLoad: "-", standBy: "-" },
        dimensions: { h: "890mm", l: "450mm", w: "288mm" },
        content: { code: "-", slots: "-", powerbanks: "-" },
      },
    },
    {
      productDetails: {
        name: "iCharge Standee SS",
        description: t(LocalizationKey.services.ichargestandeessdesc),
        image: ProductsQCSQ,
      },
      productDescriptions: {
        wattage: { fullLoad: "-", standBy: "-" },
        dimensions: { h: "956mm", l: "360mm", w: "340mm" },
        content: { code: "-", slots: "-", powerbanks: "-" },
      },
    },
  ];

  const serviceIndustries: Industries[] = [
    {
      title: t(LocalizationKey.services.retail.title),
      subTitle: t(LocalizationKey.services.retail.subtitle),
      image: sectorRetail,
      description: [
        t(LocalizationKey.services.description.retail[0]),
        t(LocalizationKey.services.description.retail[1]),
        t(LocalizationKey.services.description.retail[2]),
        t(LocalizationKey.services.description.retail[3]),
      ],
    },
    {
      title: t(LocalizationKey.services.healthcare.title),
      subTitle: t(LocalizationKey.services.healthcare.subtitle),
      image: sectorHealthCare,
      description: [
        t(LocalizationKey.services.description.healthcare[0]),
        t(LocalizationKey.services.description.healthcare[1]),
        t(LocalizationKey.services.description.healthcare[2]),
      ],
    },
    {
      title: t(LocalizationKey.services.transport.title),
      subTitle: t(LocalizationKey.services.transport.subtitle),
      image: sectorTransport,
      description: [
        t(LocalizationKey.services.description.transport[0]),
        t(LocalizationKey.services.description.transport[1]),
        t(LocalizationKey.services.description.transport[2]),
      ],
    },
    {
      title: t(LocalizationKey.services.events.title2),
      subTitle: t(LocalizationKey.services.events.subtitle),
      image: sectorEvents,
      description: [
        t(LocalizationKey.services.description.events[0]),
        t(LocalizationKey.services.description.events[1]),
        t(LocalizationKey.services.description.events[2]),
      ],
    },
    {
      title: t(LocalizationKey.services.hospitality.title),
      subTitle: t(LocalizationKey.services.hospitality.subtitle),
      image: sectorHospitality,
      description: [
        t(LocalizationKey.services.description.hospitality[0]),
        t(LocalizationKey.services.description.hospitality[1]),
        t(LocalizationKey.services.description.hospitality[2]),
      ],
    },
  ];

  return {
    productList,
    productInit,
    t,
    serviceIndustries,
    location,
  };
};
