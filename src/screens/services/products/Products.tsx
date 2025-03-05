import { Product } from "./types";
import { useState } from "react";
import { useServices } from "@/screens/services/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductModal from "./components/ProductModal"; // Make sure this component exists and is functioning
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SvgIcons from "@/components/svg-icons/SvgIcons";
import { cn } from "@/lib/utils";
import LocalizationKey from "@/i18n/key";

const Features = () => {
  const { productList, t, productInit } = useServices();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<Product>(productInit);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (e: { stopPropagation: () => void }, item: Product) => {
    e.stopPropagation();
    setContent(item);
    setOpen(true);
  };

  const handleOpenChange = () => {
    setOpen(false);
  };

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="h-fit w-full overflow-hidden from-green-400 via-black to-green-400 bg-cover bg-no-repeat px-10 pt-16"
      id="serviceProducts"
    >
      <div className="container mx-auto flex flex-col place-items-center">
        <Label
          variant={"banner"}
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent lg:mb-14"
        >
          {t(LocalizationKey.services.products)}
        </Label>
        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full lg:h-[100%]"
          setApi={(api) => {
            if (api !== undefined) {
              api.on("select", () =>
                handleCarouselChange(api.selectedScrollSnap()),
              );
            }
          }}
        >
          <CarouselContent>
            {productList.map((data, index) => (
              <CarouselItem
                key={index}
                className="custom-lg:basisOneThird flex h-[32rem] w-[95%] justify-center"
              >
                <div className="flex h-[30rem] w-full flex-col place-content-center items-center rounded-[3rem] border-0 text-center md:w-[23rem]">
                  <div
                    className={cn(
                      "absolute -z-40 h-[30rem] w-[95%] rounded-[3rem] p-5 md:w-[23rem]",
                      "border-0 bg-[#C7E9C0]",
                    )}
                    style={{
                      clipPath: "polygon(100% 0%, 0% 0%, 0% 65%, 100% 25%)",
                      boxShadow: "inset 0 0 0 1px rgba(134, 239, 172, 1)",
                    }}
                  >
                    <div className="hidden h-fit w-full justify-start lg:flex">
                      <SvgIcons name="ic_svl_ig" size={50} />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "absolute -z-50 h-[28rem] w-[95%] rounded-[4rem] shadow-md md:w-[23rem] md:rounded-[3rem]",
                      "bg-[#E0EEDE]",
                    )}
                    style={{
                      clipPath: "polygon(100% 100%, 0% 100%, 0% 60%, 100% 20%)",
                      boxShadow: "inset 0 0 0 1px rgba(134, 239, 172, 1)",
                    }}
                  />
                  <img
                    src={data.productDetails.image}
                    className="h-[50%] w-auto object-contain px-16"
                    alt="Product Image"
                  />
                  <div className="flex flex-col items-center px-5">
                    <Label
                      variant="title"
                      className="flex h-[116px] items-center bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent"
                    >
                      {data.productDetails.name.toLocaleUpperCase()}
                    </Label>
                    <Button
                      className="w-20 rounded-3xl bg-green-500 text-black hover:bg-green-400"
                      onClick={(e) => handleOpen(e, data)}
                    >
                      {t(LocalizationKey.services.more)}
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={cn(
              "custom-lg:flex hidden aspect-square scale-150 rounded-e-none text-green-500 hover:text-green-200",
              "border-[#D1F9C9] bg-[#E0EFDF]",
            )}
          />
          <CarouselNext
            className={cn(
              "custom-lg:flex hidden aspect-square scale-150 rounded-s-none text-green-500 hover:text-green-200",
              "border-[#D1F9C9] bg-[#E0EFDF]",
            )}
          />
        </Carousel>

        <div className="custom-lg:hidden mt-5 flex justify-center">
          {productList.map((_, index) => (
            <div
              key={index}
              className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${
                currentIndex === index ? "bg-opacity-100" : "bg-opacity-25"
              } bg-green-500`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <ProductModal
          item={content}
          open={open}
          handleOpenChange={handleOpenChange}
        />
      </div>
    </section>
  );
};

export default Features;
