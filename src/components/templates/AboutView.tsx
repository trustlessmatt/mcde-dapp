import { FC, useEffect, useState } from "react";
import { SeasonSelectorToggle, TLDR, TraitCard } from "@/components";
import axios from "axios";

const AboutView: FC = () => {
  const [season, setSeason] = useState<1 | 2>(2);
  const [visorPrice, setVisorPrice] = useState<number>();
  const [uniformPrice, setUniformPrice] = useState<number>();

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
    <div className="bg-secondary w-full pt-10 pb-20 md:py-40">
      <div className="w-full h-full md:max-w-[1800px] md:mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-5">
        <TLDR />
        <div className="lg:hidden pt-12">
          <SeasonSelectorToggle setSeason={setSeason} />
        </div>
        {/* flex-col md:flex-row */}
        <div className="relative">
          <div className="hidden lg:block absolute -top-20 right-0">
            <SeasonSelectorToggle setSeason={setSeason} />
          </div>
          <div className="w-full max-w-[100vw] flex items-center overflow-x-auto gap-3 lg:gap-6 mb-4 py-6 px-10 lg:px-0">
            <TraitCard
              name="Mickey DeGods Visor"
              image1="/images/attributes/visor_s1.png"
              image2="/images/attributes/visor_s2.png"
              season={season}
              supply={125}
              rarity={1.32}
              link="https://blur.io/collection/degods?traits=%7B%22head%22%3A%5B%22Mickey+DeGods+Visor%22%5D%7D"
              price={`${visorPrice ?? "PRICELESS"} ${visorPrice ? "ETH" : ""}`}
            />
            <TraitCard
              name="Mickey DeGods Polo"
              image1="/images/attributes/uniform_s1.png"
              image2="/images/attributes/uniform_s2.png"
              season={season}
              supply={139}
              rarity={1.47}
              link="https://blur.io/collection/degods?traits=%7B%22clothes%22%3A%5B%22Mickey+DeGods+Uniform%22%5D%7D"
              price={`${uniformPrice ?? "PRICELESS"} ${
                uniformPrice ? "ETH" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
