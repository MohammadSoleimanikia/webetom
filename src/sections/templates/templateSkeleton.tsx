import { Skeleton } from "@mui/material";

export default function TemplateSkeleton() {
  return (
    <div className="shadow-card-extra-small mx-1 my-1 w-[calc(100%-8px)] rounded-2xl p-4">
      {/* image */}
      <div>
        <Skeleton
          variant="rounded"
          animation="wave"
          className="h-40! w-full! rounded-2xl!"
        />
      </div>

      {/* title */}
      <div className="flex justify-center gap-3">
        <Skeleton
          variant="rounded"
          animation="wave"
          className="mt-4 h-5! w-24! rounded!"
        />
        <Skeleton
          variant="circular"
          animation="wave"
          className="mt-4 size-5! rounded!"
        />
      </div>

      {/* btn */}
      <Skeleton variant="rounded" animation="wave" className="mt-3 h-8! w-full!" />
    </div>
  );
}
