import { FC } from "react";
import { MemberCard } from "..";
import { motion } from "framer-motion";

interface Props {
  season: 1 | 2 | 3;
}

const Members: FC<Props> = ({ season }) => {
  return (
    <motion.div className="mt-5 grid grid-cols-3 xl:grid-cols-4 gap-5">
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/kindafungible_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/kindafungible_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/kindafungible_s3.png`}
        twitterHandle="kindafungible"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/bean_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/bean_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/bean_s3.png`}
        twitterHandle="Beanthatgotaway"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/fox_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/fox_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/fox_s3.png`}
        twitterHandle="foxxy_sol"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/matt_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/matt_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/matt_s3.png`}
        twitterHandle="matt_degods"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/jb_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/jb_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/jb_s3.png`}
        twitterHandle="JustJB"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/princeakeem_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/princeakeem_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/princeakeem_s3.png`}
        twitterHandle="PrinceAkeemNFT"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/spartanshold_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/spartanshold_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/spartanshold_s3.png`}
        twitterHandle="SpartansHold"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/saddy_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/saddy_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/saddy_s3.png`}
        twitterHandle="0x_Saddy"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/anisalti_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/anisalti_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/not-s3-layered.png`}
        twitterHandle="Anisalti_"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/cuddlez_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/cuddlez_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/cuddlez_s3.png`}
        twitterHandle="Mr_Cuddlez88"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/pixel_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/pixel_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/pixel_s3.png`}
        twitterHandle="PixelRainbowNFT"
        season={season}
      />
      <MemberCard
        image1={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/ac_s1.png`}
        image2={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/ac_s2.png`}
        image3={`${process.env.NEXT_PUBLIC_CDN_URL}/images/members/ac_s3.png`}
        twitterHandle="ACdegods"
        season={season}
      />
    </motion.div>
  );
};

export default Members;
