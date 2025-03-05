import { StepCardProps } from "@/screens/home/how-to/type";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

import { handleLenght } from "@/screens/home/how-to/utils";
import HowToCard from "./HowToCard";

const StepCardDesk = ({
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

  const renderLeft = () => {
    return stepNumber % 2 === 0 ? (
      isActive && (
        <div
          className="col-start-1 col-end-3 -mt-[1.5rem] flex h-fit w-full flex-col items-end space-y-3 md:-ml-5 lg:ml-0"
          data-aos="zoom-in"
        >
          <Label variant={"heading2"}>{title}</Label>
          <Label variant={"subtitle"} className="text-end">
            {description}
          </Label>
        </div>
      )
    ) : (
      <HowToCard
        className={cn(
          "col-start-1 col-end-3 -ml-16 -translate-y-1/2 rounded-tr-[150rem]",
          cardStyle,
        )}
        imgClassName={imgClassName}
      />
    );
  };

  const renderRight = () => {
    return stepNumber % 2 === 0 ? (
      <HowToCard
        className={cn(
          "col-start-4 col-end-6 ml-16 -translate-y-1/2 rounded-bl-[150rem]",
          cardStyle,
        )}
        imgClassName={imgClassName}
      />
    ) : (
      isActive && (
        <div
          className="col-start-4 col-end-6 -mt-[1rem] flex h-fit w-full flex-col items-start space-y-3 md:ml-5 lg:ml-0"
          data-aos="zoom-in"
        >
          <Label variant={"heading2"}>{title}</Label>
          <Label variant={"subtitle"} className="text-start">
            {description}
          </Label>
        </div>
      )
    );
  };

  return (
    <section className={`contents gap-0`} onClick={onClick}>
      {renderLeft()}

      <div className="col-start-3 col-end-3 place-content-center items-center md:mx-auto">
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
              "absolute h-20 w-20 place-content-center items-center rounded-full font-sans text-2xl font-bold",
              avatarStyle,
              "top-0 translate-y-[-2.5rem]",
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

export default StepCardDesk;
