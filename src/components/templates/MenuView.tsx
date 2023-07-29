import { FC, useRef } from "react";
import { MEButton, MenuItems, MovingText, StakeCTA } from "@/components";
import { useInView } from "framer-motion";

const MenuView: FC = () => {
  const menuRef = useRef(null);
  const isInView = useInView(menuRef);
  return (
    <div ref={menuRef} className="bg-secondary w-full pt-16 md:pt-32">
      <div className="flex flex-col items-center justify-center gap-5 pb-28">
        <h2 className="text-center">Mickey DeGods Menu</h2>
        <p className="text-center -mt-4 mb-5">
          A deflationary collection on Solana, stakable for $DUST.
        </p>
        <MEButton />
        <MenuItems />
        <StakeCTA />
      </div>
      {isInView && (
        <MovingText text="we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // &nbsp;" />
      )}
    </div>
  );
};

export default MenuView;
