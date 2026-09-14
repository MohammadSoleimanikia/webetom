import clsx from "clsx";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  link: string;
};
export default function SocialIconWrapper({ children, link }: Props) {
  return (
    <a
      href={link}
      className={clsx(
        "flex size-10 items-center justify-center rounded-2xl",
        "hover:bg-secondary bg-white/20 transition-all duration-300",
      )}
    >
      {children}
    </a>
  );
}
