import { OnlineStoreType } from "@/data/ONLINE_STORE";
import { Button, Divider, Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";

type Props = {
  data: OnlineStoreType;
};

export default function OnlineStoreDesktop({ data }: Props) {
  return (
    <div
      className={clsx(
        "bg-background relative hidden min-h-96 overflow-hidden",
        "rounded-2xl md:flex",
      )}
    >
      {/* content side */}
      <div
        className={clsx(
          "flex w-1/2 flex-col items-center p-5 lg:p-8 xl:px-14",
          "space-y-8",
        )}
      >
        {/* header */}
        <div className="space-y-3">
          <Typography variant="h2" >
            {data.title}
          </Typography>
          <Typography variant="body1" className="text-lg" >
            {data.description}
          </Typography>
        </div>

        {/* feature items */}
        <div className="flex w-full justify-between">
          {data.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={index}>
                <div className="flex w-full flex-col items-center gap-2">
                  <Icon className="size-12 stroke-1 lg:size-14" />
                  <Typography
                    variant="body1"
                    className="px-2 text-center text-sm lg:text-base"
                  >
                    {item.title}
                  </Typography>
                </div>
                {/* did not add for last item */}
                {index !== data.items.length - 1 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      width: "2px",
                      border: 0,
                      background:
                        "linear-gradient(to bottom, transparent, rgba(207,207,207,.8), transparent)",
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        {/* CTA */}
        <Button
          color="secondary"
          className="mt-auto px-15 xl:px-20"
          endIcon={<FiPhone />}
        >
          از مشاوره رایگان استفاده کنید
        </Button>
      </div>
      {/* image side */}
      <div className="relative h-96 w-1/2">
        {/* bg */}
        <Image
          fill
          className="absolute inset-0 rounded-2xl object-cover"
          src={data.imageSrcDesktopBg}
          alt="back ground of character"
        />
        {/* character */}
        <Image
          fill
          className="w-full object-contain object-bottom px-2 pt-4"
          src={data.imageSrcDesktop}
          alt="character"
        />
      </div>
    </div>
  );
}
