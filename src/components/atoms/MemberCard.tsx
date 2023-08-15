import { FC } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  image1: string;
  image2: string;
  image3: string;
  twitterHandle: string;
  season: 1 | 2 | 3;
}

const MemberCard: FC<Props> = ({
  image1,
  image2,
  image3,
  twitterHandle,
  season,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className="relative w-[173px] h-[250px] border border-tertiary overflow-hidden cursor-pointer"
        onClick={() =>
          window.open(
            `https://twitter.com/${twitterHandle}`,
            "_blank",
            "noopener noreferrer"
          )
        }
      >
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
                fill
                alt="Mickey DeGods member season 1"
                className="hover:scale-105 ease-in-out duration-300 transform object-cover"
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
                fill
                alt="Mickey DeGods member season 2"
                className="hover:scale-105 ease-in-out duration-300 transform object-cover"
              />
            </motion.div>
          )}
          {season === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              key="season3"
            >
              <Image
                src={image3}
                fill
                alt="Mickey DeGods member season 3"
                className="hover:scale-105 ease-in-out duration-300 transform object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p>{`@${twitterHandle}`}</p>
    </div>
  );
};

export default MemberCard;
