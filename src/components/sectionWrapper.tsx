import type { ReactNode } from "react";
import clsx from "clsx/lite";
import { Container, Typography } from "@mui/material";
import { TOP_PADDING } from "@/const/LAYOUT";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  container?: boolean;
  title?: string;
  actionButton?: ReactNode;
};

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  container = true,
  title = "",
  actionButton = undefined,
}: SectionWrapperProps) {
  return (
    <section className={clsx(TOP_PADDING, "w-full", className)}>
      {container ? (
        <Container
          maxWidth="xxl"

          className={clsx("w-full", containerClassName)}
        >
          {title !== "" && (
            <div className="mb-3 md:mb-5 flex flex-col items-center gap-2 sm:relative sm:flex-row sm:justify-center">
              <Typography variant="h2" className="text-center">
                {title}
              </Typography>

              {actionButton && (
                <div className="w-full text-left sm:absolute sm:left-0 sm:w-auto">
                  {actionButton}
                </div>
              )}
            </div>
          )}
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}
