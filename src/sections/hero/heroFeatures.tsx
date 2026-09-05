import { HERO_FEATURES } from "@/const/HERO_FEATURES";
import FeaturesItem from "./featuresItem";

export default function HeroFeatures() {
  return (
    <div className="hidden h-20 w-full py-2 px-4 justify-between rounded-full bg-white lg:flex">
      {HERO_FEATURES.map((item) => (
        <FeaturesItem key={item.title} item={item} />
      ))}
    </div>
  );
}
