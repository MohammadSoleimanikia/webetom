import VocSkeleton from "./vocSkeleton";

type Props = {
  count: number;
};

export default function VocSwiperSkeleton({ count }: Props) {
  return (
    <div className="flex w-full gap-6 overflow-hidden px-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="w-70 shrink-0 md:w-[320px] "
        >
          <VocSkeleton />
        </div>
      ))}
    </div>
  );
}