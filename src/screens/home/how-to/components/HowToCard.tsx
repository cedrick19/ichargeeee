import { cn } from "@/lib/utils";
import { HowToCardProps } from "../type";

const HowToCard = ({
  className,
  imgClassName,
}: Omit<HowToCardProps, "onClick">) => {
  return (
    <div
      className={cn(
        "aspect-square w-full rotate-45 rounded-full p-5 shadow-slate-200 md:p-5 lg:p-10",
        className,
      )}
    >
      <div
        className={cn(
          `shadow-inner-large aspect-square w-full -rotate-45 rounded-full border-2 bg-cover bg-center bg-no-repeat p-0 text-black`,
          imgClassName,
        )}
      />
    </div>
  );
};

export default HowToCard;
