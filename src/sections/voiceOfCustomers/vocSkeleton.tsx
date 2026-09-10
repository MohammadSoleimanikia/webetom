import { Skeleton } from "@mui/material";

export default function VocSkeleton() {
  return (
    <div className="shadow-card-extra-small mx-1 my-1 w-[calc(100%-8px)] rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" animation="wave" className="h-12! w-12!" />

        <div className="flex-1">
          <Skeleton variant="text" animation="wave" className="h-6! w-2/3!" />
          <Skeleton variant="text" animation="wave" className="h-5! w-1/2!" />
        </div>
      </div>

      {/* Rating */}
      <Skeleton
        variant="rounded"
        animation="wave"
        className="mt-4 h-5! w-24! rounded!"
      />

      {/* Comment */}
      <Skeleton variant="text" animation="wave" className="mt-3 h-6! w-full!" />
      <Skeleton variant="text" animation="wave" className="h-6! w-11/12!" />
      <Skeleton variant="text" animation="wave" className="h-6! w-3/4!" />

      {/* Footer */}
      <Skeleton variant="text" animation="wave" className="mt-3 h-5! w-1/3!" />
    </div>
  );
}
