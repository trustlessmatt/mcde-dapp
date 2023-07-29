import { FC, useEffect, useRef } from "react";
import { MEButton, MenuItems, StakeCTA } from "@/components";
import { slideLeft, slideRight } from "@/constants/framer.config";
import { motion, useInView } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";

const MenuView: FC = () => {
  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 768;

  const menuRef = useRef(null);
  const isInView = useInView(menuRef);
  const didAnimateRef = useRef<boolean>();

  const slideLeftAnimation = slideLeft(
    isInView, //animate
    didAnimateRef.current === true || isMobile ? 0 : -300, //distance
    didAnimateRef.current === true || isMobile ? 0 : 0.6, //duration
    didAnimateRef.current === true || isMobile ? 0 : 0.5, //delay
    didAnimateRef.current === true || isMobile ? 1 : 0 //startOpacity
  );

  const slideRightAnimation = slideRight(
    isInView, //animate
    didAnimateRef.current === true || isMobile ? 0 : 300, //distance
    didAnimateRef.current === true || isMobile ? 0 : 0.6, //duration
    didAnimateRef.current === true || isMobile ? 0 : 0.5, //delay
    didAnimateRef.current === true || isMobile ? 1 : 0 //startOpacity
  );

  useEffect(() => {
    if (isInView) didAnimateRef.current = true;
  }, [isInView]);

  return (
    <div className="bg-secondary w-full pt-16 md:pt-32">
      <div
        className="flex flex-col items-center justify-center gap-5 pb-28"
        ref={menuRef}
      >
        <h2 className="text-center">Mickey DeGods Menu</h2>
        <p className="text-center -mt-4 mb-5">
          A deflationary collection on Solana, stakable for $DUST.
        </p>

        <MEButton />
        <motion.div {...slideLeftAnimation}>
          <MenuItems />
        </motion.div>
        <motion.div {...slideRightAnimation}>
          <StakeCTA />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuView;
