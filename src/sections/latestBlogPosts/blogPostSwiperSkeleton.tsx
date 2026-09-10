import BlogPostSkeleton from "./blogPostSkeleton";

type Props = {
  count: number;
};

export default function BlogPostSwiperSkeleton({ count }: Props) {
  return (
    <div className="flex w-full gap-6 overflow-hidden px-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-60 shrink-0">
          <BlogPostSkeleton />
        </div>
      ))}
    </div>
  );
}