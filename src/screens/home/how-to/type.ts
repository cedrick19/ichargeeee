import { PropsWithChildren, ReactNode } from "react";

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imgClassName: string;
  currentStep: number;
  onClick: () => void;
}
export interface HowToCardProps extends PropsWithChildren {
  className?: string;
  imgClassName: string;
  onClick: () => void;
}

export interface CardItems {
  title: string;
  description: string;
  icons: ReactNode;
}
