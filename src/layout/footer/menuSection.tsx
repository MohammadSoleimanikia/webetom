import { MenuType } from "@/data/FOOTER_MENU";
import { Button, Link, Typography } from "@mui/material";
type Props = {
  menu: MenuType;
};
export default function MenuSection({ menu }: Props) {
  return (
    <div className="w-full ">
      <Typography
        variant="h5"
        className="border-secondary w-fit text-xl border-b-2"
      >
        {menu.title}
      </Typography>

      <div className="mt-3 flex flex-col items-start">
        {menu.items.map((menuItem,index) => {
          const Icon = menuItem.icon;
          return (
            <Button
              key={index}
              startIcon={<Icon className="stroke-1" />}
              className="font-normal text-white"
              variant="text"
              LinkComponent={Link}
              href={menuItem.link}
            >
              {menuItem.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
