import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/constants/framer.config";

interface Props {
  image: string;
  name: string;
  link: string;
  width?: number;
  rounded?: boolean;
}

const Partner: FC<Props> = ({
  image,
  name,
  link,
  width = null,
  rounded = true,
}) => {
  return (
    <motion.a
      className={`relative flex flex-col items-center justify-between gap-[10px] py-5 ${
        width === null ? "w-[100px] lg:w-auto" : ""
      } h-full`}
      {...smallClickAnimation}
      href={link}
    >
      <Image
        src={image}
        width={width === null ? 80 : width}
        height={80}
        alt={name}
        className={`${
          rounded ? "overflow-hidden rounded-full" : ""
        } min-h-[80px]`}
      />
      <p className="w-[130px] absolute left-1/2 -translate-x-1/2 top-[120px] text-lg md:text-2xl text-tertiary text-center">
        {name}
      </p>
    </motion.a>
  );
};

export default Partner;
