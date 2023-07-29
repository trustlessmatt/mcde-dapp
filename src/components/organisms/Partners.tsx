import { FC } from "react";
import { Partner } from "@/components";

const Partners: FC = () => {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-10">
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/ugs_labs.png`}
        name="UGS Labs"
        link="https://twitter.com/UGS_Labs"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/sharky.png`}
        name="Sharky.fi"
        link="https://twitter.com/SharkyFi"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/mob_studios.png`}
        name="MOB Studios"
        link="https://twitter.com/mobstudios_"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/degen_picks.png`}
        name="Degen Picks"
        link="https://twitter.com/DegenPicksXYZ"
        rounded={false}
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/josie.png`}
        name="josie"
        link="https://twitter.com/joseline0x"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/degodcast.png`}
        name="DeGodCast"
        link="https://twitter.com/DeGodCast"
        width={250}
        rounded={false}
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/mcy00ts.png`}
        name="McY00ts"
        link="https://twitter.com/TheMcY00ts"
        width={250}
        rounded={false}
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/nippies.png`}
        name="Nippies"
        link="https://twitter.com/Nippies_"
        width={250}
        rounded={false}
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/pearly.png`}
        name="Pearly"
        link="https://twitter.com/Pearlyrex"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/annoyed_rex_club.png`}
        name="Annoyed Rex Club"
        link="https://twitter.com/AnnoyedRexClub"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/none_hallie.png`}
        name="None Hallie"
        link="https://twitter.com/NoneHallie"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/bad_trip_mask.png`}
        name="Bad Trip Mask"
        link="https://twitter.com/Bad_trip_mask"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/gossip_goblin.png`}
        name="Gossip Goblin"
        link="https://twitter.com/Gossip_Goblin"
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/guzzlerdao.png`}
        name="GuzzlerDAO"
        link="https://twitter.com/GuzzlerDao"
        width={120}
        rounded={false}
      />
      <Partner
        image={`${process.env.NEXT_PUBLIC_CDN_URL}/images/partners/oogy.png`}
        name="Oogy"
        link="https://twitter.com/oogyNFT"
      />
    </div>
  );
};

export default Partners;
