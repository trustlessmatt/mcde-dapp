import { FC } from "react";
import Image from "next/image";
import { MenuItem as MenuItemType } from "@/types";
import { useWindowSize } from "@/hooks/useWindowSize";

interface Props extends MenuItemType {
  index: number;
}

const MenuItem: FC<Props> = ({ image, name, description, index }) => {
  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 768;

  const leftSideItem =
    index === 0 ||
    (!isMobile && index === 3) ||
    (isMobile && index === 2) ||
    (isMobile && index === 4);
  const topRow = (!isMobile && index < 3) || (isMobile && index < 4);

  return (
    <div
      className={`w-[175px] flex flex-col gap-2 items-center 
      ${topRow && "border-b"} 
      ${!leftSideItem ? "border-l" : ""}
      border-tertiary pb-2 md:pb-5 ${index !== 5 ? "pt-2 md:pt-5" : ""}`}
    >
      <Image src={image} width={175} height={100} alt={name} />
      <div>
        <p className="text-center font-primaryBold text-lg">{name}</p>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
