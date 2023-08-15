import { smallClickAnimation } from "@/constants/framer.config";
import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  season: 1 | 2 | 3;
  setSeason: Dispatch<SetStateAction<1 | 2 | 3>>;
}

const SeasonSelectorButtons: FC<Props> = ({ season, setSeason }) => {
  return (
    <div className="h-[40px] bg-primary flex items-center border border-tertiary">
      <motion.button
        {...smallClickAnimation}
        className={`${
          season === 1 && "font-primaryBold"
        } w-[100px] h-full flex items-center justify-center border-r border-tertiary`}
        onClick={() => setSeason(1)}
      >
        Season 1
      </motion.button>
      <motion.button
        {...smallClickAnimation}
        className={`${
          season === 2 && "font-primaryBold"
        } w-[100px] h-full flex items-center justify-center border-r border-tertiary`}
        onClick={() => setSeason(2)}
      >
        Season 2
      </motion.button>
      <motion.button
        {...smallClickAnimation}
        className={`${
          season === 3 && "font-primaryBold"
        } w-[100px] h-full flex items-center justify-center`}
        onClick={() => setSeason(3)}
      >
        Season 3
      </motion.button>
    </div>
  );
};

export default SeasonSelectorButtons;
