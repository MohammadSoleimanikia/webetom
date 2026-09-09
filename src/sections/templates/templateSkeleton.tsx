import { TemplateType } from "@/data/TEMPLATED_DATA";
import TemplateCard from "./templateCard";

type Props = {
  items: TemplateType[];
};

export default function TemplateSectionSkeleton({ items }: Props) {
  return (
    <div dir="rtl" className="relative h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-nowrap gap-5 px-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="
              h-full! min-w-0 flex-none
              basis-full
              sm:basis-[calc((100%-20px)/2)]
              lg:basis-[calc((100%-40px)/3)]
              2xl:basis-[calc((100%-60px)/4)]
            "
          >
            <TemplateCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}