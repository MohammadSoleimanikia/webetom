import { Button, Typography } from "@mui/material";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import { OnlineStoreType } from "@/const/ONLINE_STORE";
type Props = {
  data: OnlineStoreType;
};

export default function OnlineStoreMobile({ data }: Props) {
  return (
    <div className="relative flex min-h-110 flex-col md:hidden pb-5">
      {/* content */}
      <div className="flex flex-1">
        {/* right section */}
        <div className="flex w-1/2 flex-col space-y-5 py-5 text-center text-white">
          <Typography variant="h2" className="text-4xl">
            {data.title}
          </Typography>
          <Typography variant="body1" className="text-base">
            {data.description}
          </Typography>

          {/* items */}
          <div className="flex flex-col gap-2">
            {data.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-1.5" key={index}>
                  <Icon className="size-8 stroke-1" />
                  <Typography variant="caption" className="text-start text-sm">
                    {item.title}
                  </Typography>
                </div>
              );
            })}
          </div>
          <Button
            color="secondary"
            className="mt-auto hidden sm:flex"
            endIcon={<FiPhone />}
          >
            از مشاوره رایگان استفاده کنید
          </Button>
        </div>

        {/* left image */}
        <div className="relative w-1/2">
          <Image
            fill
            src={data.imageSrcMobile}
            className="mask-[linear-gradient(to_bottom,black_90%,transparent_100%)] object-contain"
            alt="character"
          />
        </div>
      </div>

      {/* CTA */}
      <Button color="secondary" className="sm:hidden" endIcon={<FiPhone />}>
        از مشاوره رایگان استفاده کنید
      </Button>
    </div>
  );
}
