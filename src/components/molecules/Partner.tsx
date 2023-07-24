import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/constants/framer.config";

interface Props {
  image: string;
  name: string;
  link: string;
  width?: number;
}

const Partner: FC<Props> = ({ image, name, link, width = null }) => {
  return (
    <motion.a
      className="flex flex-col items-center justify-end gap-[10px] py-5"
      {...smallClickAnimation}
      href={link}
    >
      <Image
        src={image}
        width={width === null ? 80 : width}
        height={80}
        alt={name}
        className="overflow-hidden rounded-full"
      />
      <p className="text-lg md:text-2xl text-primary text-center">{name}</p>
    </motion.a>
  );
};

export default Partner;
