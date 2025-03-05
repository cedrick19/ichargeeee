import { StepCardProps } from "@/screens/home/how-to/type";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

import { handleLenght } from "@/screens/home/how-to/utils";
import HowToCard from "./HowToCard";

const StepCardMobile = ({
  stepNumber,
  title,
  description,
  imgClassName,
  currentStep,
  onClick,
}: StepCardProps) => {
  const isActive = currentStep >= stepNumber;
  const cardStyle = isActive
    ? "bg-[#2FCE27] shadow-inner drop-shadow-lg"
    : "bg-white shadow-inner drop-shadow-lg";
  const avatarStyle = isActive
    ? "bg-gradient-to-t from-green-500 to-green-800 text-white"
    : "bg-slate-100 text-black";

  const renderRight = () => {
    return (
      <div className="flex flex-col">
        <HowToCard
          className={cn(
            "ml-16 -translate-y-1/2 rounded-bl-[150rem]",
            cardStyle,
          )}
          imgClassName={imgClassName}
        />
        <div
          className="relative -top-24 left-16 flex w-[90%] flex-col items-start space-y-3 py-10"
          data-aos="zoom-in"
        >
          <Label variant={"heading2"}>{title}</Label>
          <Label variant={"subtitle"} className="text-start">
            {description}
          </Label>
        </div>
      </div>
    );
  };

  return (
    <section className={`flex flex-row gap-5`} onClick={onClick}>
      <div className="place-content-center items-center md:mx-auto">
        <div
          className={cn(
            "relative flex h-full w-2 justify-center",
            handleLenght(stepNumber).item,
          )}
        >
          <div
            className={cn(
              "w-2",
              handleLenght(stepNumber).height,
              currentStep > stepNumber ? "bg-green-500" : "bg-slate-100",
              "transition-colors duration-500 ease-in-out",
            )}
          />
          <div
            className={cn(
              "absolute h-16 w-16 place-content-center items-center rounded-full font-sans text-2xl font-bold",
              avatarStyle,
              "top-2 translate-y-[-2.5rem]",
            )}
          >
            {stepNumber}
          </div>
        </div>
      </div>

      {renderRight()}
    </section>
  );
};

export default StepCardMobile;
