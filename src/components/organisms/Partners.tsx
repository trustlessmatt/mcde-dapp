import { FC } from "react";
import { Partner } from "@/components";

const Partners: FC = () => {
  return (
    <>
      <div className="hidden lg:flex w-full flex-col gap-10 items-center">
        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/ugs_labs.png"
            name="UGS Labs"
            link="https://twitter.com/UGS_Labs"
          />
          <Partner
            image="/images/partners/sharky.png"
            name="Sharky.fi"
            link="https://twitter.com/SharkyFi"
          />
          <Partner
            image="/images/partners/mob_studios.png"
            name="MOB Studios"
            link="https://twitter.com/mobstudios_"
          />
          <Partner
            image="/images/partners/degen_picks.png"
            name="Degen Picks"
            link="https://twitter.com/DegenPicksXYZ"
            rounded={false}
          />
          <Partner
            image="/images/partners/josie.png"
            name="josie"
            link="https://twitter.com/joseline0x"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between">
          <Partner
            image="/images/partners/degodcast.png"
            name="DeGodCast"
            link="https://twitter.com/DeGodCast"
            width={250}
            rounded={false}
          />
          <Partner
            image="/images/partners/mcy00ts.png"
            name="McY00ts"
            link="https://twitter.com/TheMcY00ts"
            width={250}
            rounded={false}
          />
          <Partner
            image="/images/partners/nippies.png"
            name="Nippies"
            link="https://twitter.com/Nippies_"
            width={250}
            rounded={false}
          />
        </div>
        <div className="w-full flex items-center justify-between px-20">
          <Partner
            image="/images/partners/pearly.png"
            name="Pearly"
            link="https://twitter.com/Pearlyrex"
          />
          <Partner
            image="/images/partners/annoyed_rex_club.png"
            name="Annoyed Rex Club"
            link="https://twitter.com/AnnoyedRexClub"
          />
          <Partner
            image="/images/partners/none_hallie.png"
            name="None Hallie"
            link="https://twitter.com/NoneHallie"
          />
          <Partner
            image="/images/partners/bad_trip_mask.png"
            name="Bad Trip Mask"
            link="https://twitter.com/Bad_trip_mask"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between px-40 mt-10">
          <Partner
            image="/images/partners/gossip_goblin.png"
            name="Gossip Goblin"
            link="https://twitter.com/Gossip_Goblin"
          />
          <Partner
            image="/images/partners/guzzlerdao.png"
            name="GuzzlerDAO"
            link="https://twitter.com/GuzzlerDao"
            width={120}
            rounded={false}
          />
          <Partner
            image="/images/partners/oogy.png"
            name="Oogy"
            link="https://twitter.com/oogyNFT"
          />
        </div>
      </div>

      {/* mobile view */}
      <div className="flex lg:hidden w-full flex-col gap-10 items-center px-5 sm:px-20">
        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/ugs_labs.png"
            name="UGS Labs"
            link="https://twitter.com/UGS_Labs"
          />
          <Partner
            image="/images/partners/sharky.png"
            name="Sharky.fi"
            link="https://twitter.com/SharkyFi"
          />
          <Partner
            image="/images/partners/mob_studios.png"
            name="MOB Studios"
            link="https://twitter.com/mobstudios_"
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/degen_picks.png"
            name="Degen Picks"
            link="https://twitter.com/DegenPicksXYZ"
            rounded={false}
          />
          <Partner
            image="/images/partners/josie.png"
            name="josie"
            link="https://twitter.com/joseline0x"
          />
          <Partner
            image="/images/partners/pearly.png"
            name="Pearly"
            link="https://twitter.com/Pearlyrex"
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/annoyed_rex_club.png"
            name="Annoyed Rex Club"
            link="https://twitter.com/AnnoyedRexClub"
          />
          <Partner
            image="/images/partners/none_hallie.png"
            name="None Hallie"
            link="https://twitter.com/NoneHallie"
          />
          <Partner
            image="/images/partners/bad_trip_mask.png"
            name="Bad Trip Mask"
            link="https://twitter.com/Bad_trip_mask"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <Partner
            image="/images/partners/gossip_goblin.png"
            name="Gossip Goblin"
            link="https://twitter.com/Gossip_Goblin"
          />
          <Partner
            image="/images/partners/guzzlerdao.png"
            name="GuzzlerDAO"
            link="https://twitter.com/GuzzlerDao"
            width={120}
            rounded={false}
          />
          <Partner
            image="/images/partners/oogy.png"
            name="Oogy"
            link="https://twitter.com/oogyNFT"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Partner
            image="/images/partners/degodcast.png"
            name="DeGodCast"
            link="https://twitter.com/DeGodCast"
            width={250}
          />
          <Partner
            image="/images/partners/mcy00ts.png"
            name="McY00ts"
            link="https://twitter.com/TheMcY00ts"
            width={250}
          />
          <Partner
            image="/images/partners/nippies.png"
            name="Nippies"
            link="https://twitter.com/Nippies_"
            width={250}
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
