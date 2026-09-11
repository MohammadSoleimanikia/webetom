import clsx from "clsx";
import { ReactNode } from "react";
import { IoLogoInstagram } from "react-icons/io5";
type Props = {
  children: ReactNode;
  link: string;
};
export default function SocialIconWrapper({ children, link }: Props) {
  return (
    <a
      href={link}
      className={clsx(
        "flex size-10 items-center justify-center rounded-full",
        "hover:bg-secondary border-2 border-white transition-all duration-300",
      )}
    >
      {children}
    </a>
  );
}
