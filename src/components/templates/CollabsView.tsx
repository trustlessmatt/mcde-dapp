import { FC, useRef } from "react";
import { MovingText, Partners } from "@/components";
import { useInView } from "framer-motion";

const CollabsView: FC = () => {
  const collabsRef = useRef(null);
  const isInView = useInView(collabsRef);
  return (
    <>
      <div ref={collabsRef} className="w-full bg-primary py-16 md:py-24">
        <div className="w-full max-w-[945px] mx-auto flex flex-col items-center justify-center gap-5">
          <h2 className="text-center text-tertiary">Collabs & Partners</h2>
          <Partners />
        </div>
      </div>
      {isInView && (
        <MovingText text="we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // we're burnin' it // &nbsp;" />
      )}
    </>
  );
};

export default CollabsView;
