import { FC } from "react";
import { Partner } from "@/components";

const Partners: FC = () => {
  return (
    <>
      <div className="hidden lg:flex w-full flex-col gap-16 items-center">
        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/ugs_labs.png"
            name="UGS Labs"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/sharky.png"
            name="Sharky.fi"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/mob_studios.png"
            name="MOB Studios"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/degen_picks.png"
            name="Degen Picks"
            link="https://twitter.com/DegenPicksXYZ"
          />
          <Partner
            image="/images/partners/josie.png"
            name="josie"
            link="https://twitter.com/MickeyDeGod"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between">
          <Partner
            image="/images/partners/degodcast.png"
            name="DeGodCast"
            link="https://twitter.com/MickeyDeGod"
            width={250}
          />
          <Partner
            image="/images/partners/mcy00ts.png"
            name="McY00ts"
            link="https://twitter.com/MickeyDeGod"
            width={250}
          />
          <Partner
            image="/images/partners/nippies.png"
            name="Nippies"
            link="https://twitter.com/MickeyDeGod"
            width={250}
          />
        </div>
        <div className="w-full flex items-center justify-between px-20">
          <Partner
            image="/images/partners/pearly.png"
            name="Pearly"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/annoyed_rex_club.png"
            name="Annoyed Rex Club"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/none_hallie.png"
            name="None Hallie"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/bad_trip_mask.png"
            name="Bad Trip Mask"
            link="https://twitter.com/DegenPicksXYZ"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between px-40">
          <Partner
            image="/images/partners/gossip_goblin.png"
            name="Gossip Goblin"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/guzzlerdao.png"
            name="GuzzlerDAO"
            link="https://twitter.com/MickeyDeGod"
            width={120}
          />
          <Partner
            image="/images/partners/oogy.png"
            name="Oogy"
            link="https://twitter.com/MickeyDeGod"
          />
        </div>
      </div>

      {/* mobile view */}
      <div className="flex lg:hidden w-full flex-col gap-10 items-center px-10">
        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/ugs_labs.png"
            name="UGS Labs"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/sharky.png"
            name="Sharky.fi"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/mob_studios.png"
            name="MOB Studios"
            link="https://twitter.com/MickeyDeGod"
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/degen_picks.png"
            name="Degen Picks"
            link="https://twitter.com/DegenPicksXYZ"
          />
          <Partner
            image="/images/partners/josie.png"
            name="josie"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/pearly.png"
            name="Pearly"
            link="https://twitter.com/MickeyDeGod"
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/annoyed_rex_club.png"
            name="Annoyed Rex Club"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/none_hallie.png"
            name="None Hallie"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/bad_trip_mask.png"
            name="Bad Trip Mask"
            link="https://twitter.com/DegenPicksXYZ"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/gossip_goblin.png"
            name="Gossip Goblin"
            link="https://twitter.com/MickeyDeGod"
          />
          <Partner
            image="/images/partners/guzzlerdao.png"
            name="GuzzlerDAO"
            link="https://twitter.com/MickeyDeGod"
            width={120}
          />
          <Partner
            image="/images/partners/oogy.png"
            name="Oogy"
            link="https://twitter.com/MickeyDeGod"
          />
        </div>
        <Partner
          image="/images/partners/degodcast.png"
          name="DeGodCast"
          link="https://twitter.com/MickeyDeGod"
          width={250}
        />
        <Partner
          image="/images/partners/mcy00ts.png"
          name="McY00ts"
          link="https://twitter.com/MickeyDeGod"
          width={250}
        />
        <Partner
          image="/images/partners/nippies.png"
          name="Nippies"
          link="https://twitter.com/MickeyDeGod"
          width={250}
        />
      </div>
    </>
  );
};

export default Partners;
