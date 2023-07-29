import { FC, useEffect, useRef, useState } from "react";
import { SeasonSelectorToggle, TLDR, TraitCard } from "@/components";
import axios from "axios";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { slideLeft } from "@/constants/framer.config";
import { useWindowSize } from "@/hooks/useWindowSize";

const AboutView: FC = () => {
  const [season, setSeason] = useState<1 | 2>(2);
  const [visorPrice, setVisorPrice] = useState<number>();
  const [uniformPrice, setUniformPrice] = useState<number>();

  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 768;

  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef);
  const didAnimateRef = useRef<boolean>();

  const slideLeftAnimation = slideLeft(
    isInView, //animate
    didAnimateRef.current === true || isMobile ? 0 : 200, //distance
    didAnimateRef.current === true || isMobile ? 0 : 0.6, //duration
    didAnimateRef.current === true || isMobile ? 0 : 0.1 //delay
  );

  useEffect(() => {
    if (isInView) didAnimateRef.current = true;
  }, [isInView]);

  useEffect(() => {
    axios
      .get("https://api.degods.dustlabs.com/degods/marketStats/attributesFp")
      .then((res) => {
        const vPrice = res.data.attributesFP.head.mickey_degods_visor;
        setVisorPrice(vPrice);
        const uPrice = res.data.attributesFP.clothes.mickey_degods_uniform;
        setUniformPrice(uPrice);
      });
  }, []);

  return (
    <div className="bg-secondary w-full pt-10 pb-20 md:py-20">
      <div className="w-full h-full md:max-w-[1800px] md:mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-5">
        <TLDR />
        <div className="lg:hidden pt-12">
          <SeasonSelectorToggle setSeason={setSeason} />
        </div>
        {/* flex-col md:flex-row */}
        <div className="relative">
          <div className="hidden lg:block absolute -top-12 right-0">
            <SeasonSelectorToggle setSeason={setSeason} />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              ref={cardsRef}
              {...slideLeftAnimation}
              className="w-full max-w-[100vw] flex items-center overflow-x-auto gap-3 lg:gap-6 mb-4 py-6 px-10 lg:px-0"
            >
              <TraitCard
                name="Mickey DeGods Visor"
                image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/attributes/visor_s1.png`}
                image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/attributes/visor_s2.png`}
                season={season}
                supply={125}
                rarity={1.32}
                link="https://blur.io/collection/degods?traits=%7B%22head%22%3A%5B%22Mickey+DeGods+Visor%22%5D%7D"
                price={`${visorPrice ?? "PRICELESS"} ${
                  visorPrice ? "ETH" : ""
                }`}
              />
              <TraitCard
                name="Mickey DeGods Polo"
                image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/attributes/uniform_s1.png`}
                image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/attributes/uniform_s2.png`}
                season={season}
                supply={139}
                rarity={1.47}
                link="https://blur.io/collection/degods?traits=%7B%22clothes%22%3A%5B%22Mickey+DeGods+Uniform%22%5D%7D"
                price={`${uniformPrice ?? "PRICELESS"} ${
                  uniformPrice ? "ETH" : ""
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
