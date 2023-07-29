import { FC, useEffect, useRef, useState } from "react";
import { Members, SeasonSelectorToggle } from "@/components";
import { slideUp } from "@/constants/framer.config";
import { AnimatePresence, motion, useInView } from "framer-motion";

const MembersView: FC = () => {
  const [season, setSeason] = useState<1 | 2>(2);

  const membersRef = useRef(null);
  const isInView = useInView(membersRef);
  const didAnimateRef = useRef<boolean>();

  const slideUpAnimation = slideUp(
    isInView, //animate
    didAnimateRef.current === true ? 0 : 300, //distance
    didAnimateRef.current === true ? 0 : 0.6, //duration
    didAnimateRef.current === true ? 0 : 0.1, //delay
    didAnimateRef.current === true ? 1 : 0 //startOpacity
  );

  useEffect(() => {
    if (isInView) didAnimateRef.current = true;
  }, [isInView]);

  return (
    <div className="bg-primary w-full py-16 md:py-32">
      <AnimatePresence mode="wait">
        <motion.div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-center">Meet the Mickeys</h2>
          <p className="text-center -mt-4 mb-2">
            Holder directory with de[id] coming soon.
          </p>
          <SeasonSelectorToggle setSeason={setSeason} />
          <motion.div {...slideUpAnimation} ref={membersRef}>
            <Members season={season} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MembersView;
