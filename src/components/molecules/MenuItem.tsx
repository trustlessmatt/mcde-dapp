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
      className={`flex flex-col gap-2 border border-tertiary pb-5 ${
        topPadding && "pt-5"
      }`}
    >
      <Image src={image} width={173} height={100} alt={name} />
      <div>
        <p className="text-center font-primaryBold text-lg">{name}</p>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
