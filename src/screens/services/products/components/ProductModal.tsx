import { ProdModal } from "../types";
import { ReactElement, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/dialog/Dialog";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import SubLabel from "./SubLabel";


const ProductModal = ({
  item,
  open,
  handleOpenChange,
}: ProdModal): ReactElement => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="grid h-[500px] w-[90%] grid-cols-1 overflow-hidden border-0 bg-[#56575A] p-20 sm:h-[600px] lg:w-[1024px] lg:grid-cols-2 text-center"
        style={{ borderRadius: "2.5rem" }}
      >
        <div className="space-y-2 p-0 lg:hidden">
          <h1 className="font-sans text-xl font-bold tracking-tighter text-white">
            {item.productDetails.name}
          </h1>
          <h1 className="text-md font-sans font-semibold text-white">
            {item.productDetails.description}
          </h1>
        </div>
        <img
          src={item.productDetails.image}
          className="relative h-[250px] w-[100%] object-contain md:h-[307.5px] lg:top-[20%]"
        />
        <SubLabel item={item} />
        <DialogTitle />
        <DialogDescription />
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
