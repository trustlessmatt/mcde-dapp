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
      className={`relative flex flex-col items-center justify-between 
      gap-[10px] py-5 w-[120px] lg:w-auto h-full mx-auto`}
      {...smallClickAnimation}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image
        src={image}
        width={width === null ? 60 : width}
        height={60}
        alt={name}
        className={`${
          rounded ? "overflow-hidden rounded-full" : ""
        } min-h-[60px]`}
      />
      <p
        className="lg:w-[180px] absolute left-1/2 -translate-x-1/2 top-[90px] 
        text-base md:text-lg lg:text-2xl text-tertiary text-center whitespace-nowrap"
      >
        {name}
      </p>
    </motion.a>
  );
};

export default Partner;
