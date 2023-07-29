import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Nav, ScratchOff } from "@/components";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

const LandingView: FC = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768;

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 30,
  //     y: mousePosition.y - 30,
  //     transition: {
  //       duration: 0.1,
  //     },
  //   },
  // };

  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => window.removeEventListener("mousemove", mouseMove);
  // }, []);

  return (
    <div
      className="cursor-grabbing relative bg-primary w-full h-[70vh] md:h-screen 
      flex flex-col overflow-hidden"
    >
      {/* <motion.div
        className="cursor"
        variants={variants}
        animate="default"
        transition={easeInOut}
      /> */}
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          key={1}
          animate={{
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 4,
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
          key={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, delay: 4 }}
        >
          <ScratchOff />
        </motion.div>
        <motion.div
          className="w-full h-full md:hidden"
          key={3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, delay: 4 }}
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
