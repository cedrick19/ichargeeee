import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";
import StepCardDesk from "./components/StepCardDesk";

import LocalizationKey from "@/i18n/key";
import StepCardMobile from "./components/StepCardMobile";
import { useStepReference } from "./utils";

const HowTo = () => {
  const { t, step, setStep, stepCard, stepRefsDesk, stepRefsMob } =
    useStepReference();
  return (
    <PageContainer className="container mx-auto flex flex-col text-center">
      <div className="space-y-14 lg:space-y-28 overflow-hidden">
        <Label
          variant={"banner"}
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
        >
          {t(LocalizationKey.home.howtoUseIcharge)}
        </Label>
        <div className="pointer-events-none hidden md:block md:translate-y-20 lg:translate-y-32">
          {stepCard.map((card, index) => (
              <div
                className="mx-auto grid w-[70%] grid-cols-5 flex-col"
                ref={(el) => (stepRefsDesk.current[index] = el)}
                key={index}
              >
                <StepCardDesk
                  stepNumber={card.stepNumber}
                  title={card.title}
                  description={card.description}
                  imgClassName={card.imgClassName}
                  currentStep={step}
                  onClick={() => setStep(card.stepNumber)}
                />
              </div>
          ))}
        </div>
        <div className="pointer-events-none block translate-y-20 md:hidden">
          {stepCard.map((card, index) => (
              <div
                className="ml-10 flex w-[60%] flex-col"
                ref={(el) => (stepRefsMob.current[index] = el)}
                key={index}
              >
                <StepCardMobile
                  stepNumber={card.stepNumber}
                  title={card.title}
                  description={card.description}
                  imgClassName={card.imgClassName}
                  currentStep={step}
                  onClick={() => setStep(card.stepNumber)}
                />
              </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default HowTo;
