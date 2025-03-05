import LocalizationKey from "@/i18n/key";
import { CertImage, CertImageMobile, SumStep } from "./types";
import Summary1 from "@/assets/about/SummaryImages/advanced.png";
import Summary2 from "@/assets/about/SummaryImages/inhouse.png";
import Summary3 from "@/assets/about/SummaryImages/proprietary.png";
import Summary1Mobile from "@/assets/about/SummaryImages/advanced_mobile.png";
import Summary2Mobile from "@/assets/about/SummaryImages/inhouse_mobile.png";
import Summary3Mobile from "@/assets/about/SummaryImages/proprietary_mobile.png";
import Recycle from "@/assets/about/certifications/Recycle.png";
import Durability from "@/assets/about/certifications/Durability.png";
import cccCertification from "@/assets/about/certifications/TripleC.png";
import ceCertification from "@/assets/about/certifications/CE.png";
import iccCertification from "@/assets/about/certifications/ImportCommodityClearance.png";
import psCertification from "@/assets/about/certifications/PhilippineStandard.png";
import PhilGeps from "@/assets/about/certifications/Procurement.png";

export const SumVal: SumStep[] = [
  {
    SumImage: Summary1,
    SumImageMobile: Summary1Mobile,
    header: LocalizationKey.about.summaryHead1,
    desc: LocalizationKey.about.summaryDesc1,
    list: [
      LocalizationKey.about.keyFeaturesList11,
      LocalizationKey.about.keyFeaturesList12,
      LocalizationKey.about.keyFeaturesList13,
    ],
  },
  {
    SumImage: Summary2,
    SumImageMobile: Summary2Mobile,
    header: LocalizationKey.about.summaryHead2,
    desc: LocalizationKey.about.summaryDesc2,
    list: [
      LocalizationKey.about.keyFeaturesList21,
      LocalizationKey.about.keyFeaturesList22,
      LocalizationKey.about.keyFeaturesList23,
    ],
  },
  {
    SumImage: Summary3,
    SumImageMobile: Summary3Mobile,
    header: LocalizationKey.about.summaryHead3,
    desc: LocalizationKey.about.summaryDesc3,
    list: [
      LocalizationKey.about.keyFeaturesList31,
      LocalizationKey.about.keyFeaturesList32,
      LocalizationKey.about.keyFeaturesList33,
    ],
  },
];

export const Certs: CertImage[] = [
  {
    imageName: Recycle
  },
  {
    imageName: Durability
  },
  {
    imageName: cccCertification
  },
  {
    imageName: ceCertification
  },
  {
    imageName: iccCertification
  },
  {
    imageName: psCertification
  },
  {
    imageName: PhilGeps
  },
];

export const CertsMobileTopRow: CertImageMobile[] = [
  {
    imageName: Recycle
  },
  {
    imageName: Durability
  },
  {
    imageName: cccCertification
  },
  {
    imageName: ceCertification
  },
];

export const CertsMobileBottomRow: CertImageMobile[] = [
  {
    imageName: iccCertification
  },
  {
    imageName: psCertification
  },
  {
    imageName: PhilGeps
  },
];
