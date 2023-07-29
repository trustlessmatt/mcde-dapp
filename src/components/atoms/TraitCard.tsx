import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  name: string;
  image1: string;
  image2: string;
  season: 1 | 2;
  supply: number;
  rarity: number;
  price?: string;
  link: string;
}

const TraitCard: FC<Props> = ({
  name,
  image1,
  image2,
  season,
  supply,
  rarity,
  price = null,
  link,
}) => {
  return (
    <div className="min-w-[270px] bg-primary flex flex-col border border-tertiary">
      {/* header */}
      <div className="w-full h-10 flex items-center bg-tertiary px-5">
        <p className="text-lg text-primary font-primaryBold">{name}</p>
      </div>
      <AnimatePresence mode="wait">
        {season === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            key="season1"
          >
            <Image
              src={image1}
              width={270}
              height={270}
              alt="Mickey DeGods trait season 1"
            />
          </motion.div>
        )}
        {season === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            key="season2"
          >
            <Image
              src={image2}
              width={270}
              height={270}
              alt="Mickey DeGods trait season 2"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-16 py-2 flex items-center justify-between px-5">
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Supply</p>
          <p className="font-primaryBold text-tertiary">{`${supply} / 10,000`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Rarity</p>
          <p className="font-primaryBold text-tertiary">{`${rarity}%`}</p>
        </div>
      </div>
      <div className="w-full px-5 pb-5">
        <Button
          className="w-full bg-black font-primaryBold text-primary h-[40px]"
          clickFunc={() => window.open(link, "_blank", "noopener noreferrer")}
        >
          <div className="flex items-center justify-center gap-2">
            <p className="">Buy on</p>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/blur.png`}
              width={50}
              height={20}
              alt="magic eden logo"
            />
            <div className="bg-primary w-[1px] h-5" />
            <p>{price ?? "PRICELESS"}</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TraitCard;
