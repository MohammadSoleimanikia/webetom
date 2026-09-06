import type { ReactNode } from "react";
import clsx from "clsx/lite";
import { Container, Typography } from "@mui/material";
import { TOP_PADDING } from "@/const/LAYOUT";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  container?: boolean;
  title?:string;
};

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  container = true,
  title=""
}: SectionWrapperProps) {
  return (
    <section className={clsx(TOP_PADDING, "w-full", className)}>
      
      {title!=="" && <Typography variant="h2" className="text-center mb-2">{title}</Typography>}
      {container ? (
        <Container
          maxWidth="xxl"

          className={clsx("w-full", containerClassName)}
        >
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}
