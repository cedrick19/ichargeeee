import { ReactElement, useState } from "react";
import { IndustryCardType } from "@/screens/home/sector/type";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Spinner } from "@/components";

export const IndustryCard = (props: IndustryCardType): ReactElement => {
  const {
    card: { title, bgImage },
    isDesktop,
    className,
    onClick,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      className={cn(
        "h-[25rem] w-full rounded-3xl rounded-tr-none border-0 bg-cover bg-no-repeat",
        isDesktop
          ? "shadow-2xl shadow-black/50 drop-shadow-2xl"
          : "shadow-lg shadow-black/50 drop-shadow-lg",
        className,
      )}
    >
      <img
        className={cn(
          "-z-10 h-full w-full rounded-3xl rounded-tr-none bg-no-repeat object-cover",
          isHovered && "scale-105",
        )}
        src={bgImage}
        alt={title}
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded ? (
        <div
          className="absolute inset-0 hidden rounded-3xl rounded-tr-none bg-green-500 md:flex"
          style={{ opacity: isHovered ? 0 : 0.15 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : (
        <div className="absolute inset-0 flex h-full w-full place-content-center items-center rounded-3xl rounded-tr-none bg-slate-100">
          <Spinner />
        </div>
      )}
      <Button
        className="absolute bottom-0 h-[25%] w-[90%] justify-between rounded-3xl rounded-tl-none text-2xl md:w-[95%] md:text-3xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {title}
        <ChevronRight size={50} />
      </Button>
    </div>
  );
};
