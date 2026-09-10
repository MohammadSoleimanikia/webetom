"use client";
import { TemplateType } from "@/data/TEMPLATED_DATA";
import { Button, Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
type Props = {
  item: TemplateType;
};

export default function TemplateCard({ item }: Props) {
  const Icon = item.icon;
  return (
    <div className="shadow-card-small flex min-h-60 w-full flex-col rounded-xl bg-white p-2">
      {/* image section */}
      <div className="relative h-40 w-full overflow-hidden rounded-xl">
        <Image
          fill
          className="object-cover"
          src={item.imageSrc}
          alt={item.title}
        />
      </div>
      {/* content */}
      <div className="flex flex-1 flex-col items-center space-y-2 px-1 pt-3">
        <div className="w-full">
          <Typography
            variant="h6"
            className={clsx(
              "flex items-center justify-center text-center font-bold",
              "gap-3",
            )}
          >
            {item.title}
            <Icon
              className={`size-6`}
              style={{
                color: item.color,
              }}
            />
          </Typography>
        </div>
        <Button
          LinkComponent={Link}
          href={item.link}
          className="bg-primary-lighter text-primary w-full"
        >
          مشاهده دمو
        </Button>
      </div>
    </div>
  );
}
