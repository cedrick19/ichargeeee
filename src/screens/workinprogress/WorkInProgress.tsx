import { useNavigate } from "react-router-dom";
import Lottie from "lottie-light-react";
import { Home } from "lucide-react";

import wipAnimation from "@/assets/lottie/wip.json";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const WorkInProgress = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex h-full flex-col items-center p-4 text-center">
      <Lottie
        animationData={wipAnimation}
        loop={true}
        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[700px]"
      />
      <Label variant={"heading1"} className="mt-4">
        Under Construction
      </Label>
      <Label variant={"body"} className="mt-2 text-muted-foreground">
        We're currently working on this feature. Check back soon!
      </Label>
      <Button
        onClick={handleGoHome}
        className="mt-8 h-10 w-28 md:h-12 md:w-32"
        variant="default"
      >
        <Home className="mr-2 h-4 w-4" />
        Go Home
      </Button>
    </div>
  );
};

export default WorkInProgress;
