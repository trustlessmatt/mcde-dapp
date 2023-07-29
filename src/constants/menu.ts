import { MenuItem } from "@/types";

export const menu: MenuItem[] = [
  {
    name: "Fries",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/fries.png`,
    description: "25 pc",
  },
  {
    name: "Burgers",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/burger.png`,
    description: "100 pc",
  },
  {
    name: "Nuggets",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/nuggets.png`,
    description: "100 pc",
  },
  {
    name: "Drinks",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/drink.png`,
    description: "100 pc",
  },
  {
    name: "Ice Cream",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/ice_cream.png`,
    description: "100 pc",
  },
  {
    name: "Special Fries",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/special_fries.png`,
    description: "1/1s",
  },
];
