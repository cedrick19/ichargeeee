import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "@/components";
import NotFound from "@/assets/lottie/404.json";
import Lottie from "lottie-light-react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function ErrorScreen(): ReactElement {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <PageContainer className="flex h-screen flex-col items-center justify-center text-center">
      <Lottie
        animationData={NotFound}
        loop={true}
        alt="404 Not Found"
        className="h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]"
      />
      <Button
        onClick={handleGoHome}
        className="mt-8 h-12 w-32"
        variant="default"
      >
        <Home className="mr-2 h-4 w-4" />
        Go Home
      </Button>
    </PageContainer>
  );
}
