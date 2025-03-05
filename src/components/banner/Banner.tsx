import { PropsWithChildren, ReactElement } from "react";
import { Label } from "../ui/label";

interface IBanner extends PropsWithChildren {
  title: string;
}

export const Banner = (props: IBanner): ReactElement => {
  const { title, children } = props;
  return (
    <>
      <section className="absolute inset-0 h-[85vh] w-full bg-[url('@/assets/bg_green_wave.webp')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto flex h-full flex-col items-center justify-center gap-2 p-2 px-4 py-8 text-center">
          <Label variant={"banner"} className="text-white sm:mb-6">
            {title}
          </Label>
          {children}
        </div>
      </section>

      <div className="h-[70vh]" />
    </>
  );
};

export default Banner;
