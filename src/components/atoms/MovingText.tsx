import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  text: string;
}

const MovingText: FC<Props> = ({ text }) => {
  return (
    <div className="relative w-full h-5 flex items-center justify-center bg-tertiary overflow-hidden py-1">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute text-base uppercase text-center font-neuebitBold text-custom-yellow tracking-[0.3em] whitespace-nowrap"
      >
        {text}
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
          delay: 7,
        }}
        className="absolute text-base uppercase text-center font-neuebitBold text-custom-yellow tracking-[0.3em] whitespace-nowrap"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default MovingText;
