import Lottie from "lottie-light-react";

import spinner from "@/assets/lottie/spinner.json";

export const Spinner = () => {
  return (
    <Lottie
      animationData={spinner}
      loop={true}
      className="h-[150px] w-[150px]"
    />
  );
};

export default Spinner;
