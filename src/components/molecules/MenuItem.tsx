import { FC } from "react";
import Image from "next/image";
import { MenuItem } from "@/types";

const MenuItem: FC<MenuItem> = ({
  image,
  name,
  description,
  topPadding = true,
}) => {
  return (
    <div
      className={`w-[175px] flex flex-col gap-2 items-center border border-tertiary pb-2 md:pb-5 ${
        topPadding && "pt-2 md:pt-5"
      }`}
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
