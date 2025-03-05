import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface PageContainerProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const PageContainer = ({
  children,
  id,
  className,
}: PageContainerProps) => {
  return (
    <section
      className={cn("container mx-auto h-full px-10 py-16", className)}
      id={id}
    >
      {children}
    </section>
  );
};

export default PageContainer;
