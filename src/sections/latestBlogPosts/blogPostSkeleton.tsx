import { Skeleton } from "@mui/material";

export default function BlogPostSkeleton() {
  return (
    <div className="w-60 shadow-card-extra-small rounded-xl p-2">
      {/* image */}
      <Skeleton
        variant="rounded"
        animation="wave"
        className="h-36! w-full! rounded-xl!"
      />

      {/* title */}
      <Skeleton variant="text" animation="wave" className="mt-2 h-6! w-5/6!" />

      <Skeleton variant="text" animation="wave" className="h-6! w-3/5!" />

      {/* date / meta */}
      <Skeleton variant="text" animation="wave" className="mt-1 h-5! w-2/5!" />
    </div>
  );
}
