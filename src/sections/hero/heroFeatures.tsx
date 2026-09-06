import { HERO_FEATURES } from "@/const/HERO_FEATURES";
import FeaturesItem from "./featuresItem";
import clsx from "clsx";

export default function HeroFeatures() {
  return (
    <div
      className={clsx(
        "h-auto w-full rounded-full bg-white px-4 py-2 shadow-xs",
        "hidden flex-wrap justify-around gap-2 xl:gap-5 lg:flex",
      )}
    >
      {HERO_FEATURES.map((item,index) => (
        <FeaturesItem key={index} item={item} />
      ))}
    </div>
  );
}
