import { FC, useState } from "react";
import { SeasonSelector, TLDR, TraitCard } from "@/components";

const AboutView: FC = () => {
  const [season, setSeason] = useState<1 | 2>(2);
  return (
    <div className="bg-secondary w-full py-40">
      <div className="w-full h-full md:max-w-[1800px] md:mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-5">
        <TLDR />
        <div className="lg:hidden pt-12 pb-6">
          <SeasonSelector season={season} setSeason={setSeason} />
        </div>
        <div className="relative flex items-center gap-5">
          <div className="hidden lg:block absolute -top-20 right-0">
            <SeasonSelector season={season} setSeason={setSeason} />
          </div>
          <TraitCard
            name="Mickey DeGods Visor"
            image={`/images/attributes/visor_s${season ?? 2}.png`}
            supply={125}
            rarity={1.32}
          />
          <TraitCard
            name="Mickey DeGods Polo"
            image={`/images/attributes/uniform_s${season ?? 2}.png`}
            supply={139}
            rarity={1.47}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutView;
