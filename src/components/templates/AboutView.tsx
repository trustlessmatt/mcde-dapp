import { FC } from "react";
import { TLDR, TraitCard } from "@/components";

const AboutView: FC = () => {
  return (
    <div className="bg-secondary w-full h-screen">
      <div className="w-full h-full max-w-[1800px] mx-auto flex items-center justify-evenly gap-5">
        <TLDR />
        <div className="relative flex items-center gap-5">
          <TraitCard
            name="Mickey DeGods Visor"
            image="/images/fries.png"
            supply={125}
            rarity={1.32}
          />
          <TraitCard
            name="Mickey DeGods Polo"
            image="/images/fries.png"
            supply={139}
            rarity={1.47}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutView;
