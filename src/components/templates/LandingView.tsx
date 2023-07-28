import { FC } from "react";
import Image from "next/image";
import { Nav, ScratchOff } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

const LandingView: FC = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="relative bg-primary w-full h-[60vh] md:h-screen flex flex-col overflow-hidden">
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3.6,
          }}
        >
          <div className="z-30 flex items-center justify-center gap-2">
            <p className="text-xl md:text-3xl text-tertiary whitespace-nowrap">
              The original
            </p>
            <Image
              src="/images/degods_text.png"
              width={isMobile ? 64 : 86}
              height={isMobile ? 15 : 20}
              alt="degods text"
              className="pb-0.5 md:pb-0"
              onDragStart={(e) => e.preventDefault()}
            />
            <p className="text-xl md:text-3xl text-tertiary whitespace-nowrap">
              sub-community.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full h-full hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 3.7 }}
        >
          <ScratchOff />
        </motion.div>
        <motion.div
          className="w-full h-full md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 3.7 }}
          style={{
            backgroundImage: 'url("/images/md_burger.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 20,
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default LandingView;
