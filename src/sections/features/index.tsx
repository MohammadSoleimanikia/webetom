import React from "react";
import FeatureItemMobile from "./featureItemMobile";
import { FEATURES } from "@/data/FEATURES";
import FeatureCardDesktop from "./featureCardDesktop";
import clsx from "clsx";
import { Divider } from "@mui/material";

export default function Features() {
  return (
    <>
      {/* // mobile--------------------------------------------- */}
      <div className="flex flex-wrap justify-around gap-5 sm:hidden">
        {FEATURES.map((item,index) => (
          <FeatureItemMobile key={index} item={item} />
        ))}
      </div>

      {/* desktop--------------------------------------------------- */}
      <div
        className={clsx(
          "bg-primary hidden w-full rounded-xl",
          "items-start justify-between gap-2 p-2 md:px-5 xl:px-20 py-5 sm:flex",
        )}
      >
        {FEATURES.map((item, index) => (
          <React.Fragment key={index}>
            <FeatureCardDesktop item={item} />

            {/* did not add for last item */}
            {index !== FEATURES.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  width: "1.5px",
                  border: 0,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255,255,255,.8), transparent)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
