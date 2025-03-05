import { ReactElement, useEffect } from "react";
import { Check } from "lucide-react";
import { useServices } from "@/screens/services/utils";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import LocalizationKey from "@/i18n/key";

const ServiceIndustries = (): ReactElement => {
  const { location, serviceIndustries, t } = useServices();
  useEffect(() => {
    const passedId = location.state?.value;
    const element = document.getElementById(passedId);
    const elementMobile = document.getElementById(`${passedId}M`);
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
    if (elementMobile) {
      elementMobile.scrollIntoView({ behavior: "instant" });
    }
  }, [location.state?.value]);

  return (
    <section className="space-y-10">
      <div className="flex flex-col space-y-5 text-center">
        <Label
          variant="banner"
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
        >
          {t(LocalizationKey.services.sectorHeading)}
        </Label>
        <Label variant="subtitle">
          {t(LocalizationKey.services.sectorSubHeading)}
        </Label>
      </div>
      {/* desktop view */}
      {serviceIndustries.map((data, index) => (
        <div
          data-aos="zoom-in-up"
          className={cn("hidden lg:flex", index % 2 === 0 ? "pr-10" : "pl-10")}
          key={index}
          id={index === 3 ? "Events" : data.title}
        >
          <div
            className={cn(
              "flex w-full border-t-4 border-green-500 bg-green-500/25",
              index % 2 !== 0 && "flex-row-reverse",
            )}
          >
            <img
              src={data.image}
              className={cn(
                "min-h-[35rem] w-[52%] object-cover",
                index % 2 === 0 ? "rounded-br-[15rem]" : "rounded-tl-[15rem]",
              )}
            />
            <div className="flex w-[48%] flex-col space-y-5 p-5">
              <Label variant="title">{data.title}</Label>
              <Label variant="subtitle">{data.subTitle}</Label>
              {data.description.map((data, index) => (
                <div className="flex w-full gap-5" key={index}>
                  <div className="flex h-8 w-9 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600">
                    <Check color="white" />
                  </div>

                  <Label variant="subtitle" className="w-full">
                    {data}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* desktop view */}
      {/* mobile view */}
      {serviceIndustries.map((data, index) => (
        <div
          className={cn(
            "flex w-full flex-col border-b-4 border-green-500 bg-green-500/25 lg:hidden",
          )}
          key={index}
          id={index === 3 ? "EventsM" : `${data.title}M`}
        >
          <img
            src={data.image}
            className={cn(
              "h-full w-full object-cover",
              index % 2 === 0 ? "rounded-br-[6rem]" : "rounded-bl-[6rem]",
            )}
          />
          <div className="flex w-full flex-col space-y-5 p-5">
            <Label variant="title" className="text-center">
              {data.title}
            </Label>
            <Separator
              orientation="horizontal"
              className="border-2 border-green-500"
            />
            <Separator orientation="vertical" className="" />
            <Label variant="subtitle">{data.subTitle}</Label>
            {data.description.map((data, index) => (
              <div className="flex w-full gap-5" key={index}>
                <div className="flex h-8 w-9 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600">
                  <Check color="white" />
                </div>

                <Label variant="subtitle" className="w-full">
                  {data}
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* mobile view */}
    </section>
  );
};

export default ServiceIndustries;
