import { CardItems, StepCardProps } from "./type";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Award,
  BatteryCharging,
  ScanLine,
  SlidersVertical,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import LocalizationKey from "@/i18n/key";

export const cardItems: CardItems[] = [
  {
    title: "App",
    description: "Download icharge App",
    icons: <Award size={40} color="green" />,
  },
  {
    title: "Scan",
    description: "Scan the QR code on the charging station",
    icons: <ScanLine size={40} color="green" />,
  },
  {
    title: "Charge",
    description: "Enjoy charging",
    icons: <BatteryCharging size={40} color="green" />,
  },
  {
    title: "Return",
    description: "Return the powerbank to the station",
    icons: <SlidersVertical size={40} color="green" />,
  },
];

export const handleLenght = (step: number) => {
  if (step === 4) {
    return {
      item: "items-start",
      height: "h-0",
    };
  } else {
    return {
      item: "items-center",
      height: "h-full",
    };
  }
};

export const useStepReference = () => {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  const stepRefsDesk = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefsMob = useRef<(HTMLDivElement | null)[]>([]);
  const stepCard = useMemo<Omit<StepCardProps, "currentStep" | "onClick">[]>(
    () => [
      {
        stepNumber: 1,
        title: t(LocalizationKey.home.scan),
        description: t(LocalizationKey.home.scanDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline1.webp')]",
      },
      {
        stepNumber: 2,
        title: t(LocalizationKey.home.topUp),
        description: t(LocalizationKey.home.topUpDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline2.webp')]",
      },
      {
        stepNumber: 3,
        title: t(LocalizationKey.home.charge),
        description: t(LocalizationKey.home.chargeDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline3.webp')]",
      },
      {
        stepNumber: 4,
        title: t(LocalizationKey.home.return),
        description: t(LocalizationKey.home.returnDescription),
        imgClassName: "bg-[url('@/assets/timeline/timeline4.webp')]",
      },
    ],
    [t],
  );

  useEffect(() => {
    const observers = stepCard.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setStep(index + 1);
          }
        },
        { threshold: 0.5 },
      );

      if (stepRefsDesk.current[index]) {
        observer.observe(stepRefsDesk.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [stepCard]);

  useEffect(() => {
    const observers = stepCard.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setStep(index + 1);
          }
        },
        { threshold: 0.5 },
      );

      if (stepRefsMob.current[index]) {
        observer.observe(stepRefsMob.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [stepCard]);

  return {
    step,
    setStep,
    stepRefsDesk,
    stepRefsMob,
    t,
    stepCard,
  };
};
