import { MenuItem } from "@/types";

export const menu: MenuItem[] = [
  {
    name: "Classic Fries",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/fries.png`,
    description: "20 pc",
  },
  {
    name: "Burgers",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/burger.png`,
    description: "250 pc",
  },
  {
    name: "Nuggets",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/nuggets.png`,
    description: "200 pc",
  },
  {
    name: "Drinks",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/drink.png`,
    description: "150 pc",
  },
  {
    name: "Ice Cream",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/ice_cream.png`,
    description: "69 pc",
  },
  {
    name: "Special Fries",
    image: `${process.env.NEXT_PUBLIC_CDN_URL}/images/menu/special_fries.png`,
    description: "1/1s",
  },
];
