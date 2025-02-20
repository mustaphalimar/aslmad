import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-16 2xl:max-w-screen-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
