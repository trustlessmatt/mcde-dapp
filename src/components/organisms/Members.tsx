import { FC } from "react";
import { MemberCard } from "..";
import { motion } from "framer-motion";

interface Props {
  season: 1 | 2;
}

const Members: FC<Props> = ({ season }) => {
  return (
    <motion.div className="mt-5 grid grid-cols-4 gap-5">
      <MemberCard
        image1={`/images/members/jb_s1.png`}
        image2={`/images/members/jb_s2.png`}
        twitterHandle="JustJB"
        season={season}
      />
      <MemberCard
        image1={`/images/members/saddy_s1.png`}
        image2={`/images/members/saddy_s2.png`}
        twitterHandle="0x_Saddy"
        season={season}
      />
      <MemberCard
        image1={`/images/members/matt_s1.png`}
        image2={`/images/members/matt_s2.png`}
        twitterHandle="matt_degods"
        season={season}
      />
      <MemberCard
        image1={`/images/members/princeakeem_s1.png`}
        image2={`/images/members/princeakeem_s2.png`}
        twitterHandle="PrinceAkeemNFT"
        season={season}
      />
      <MemberCard
        image1={`/images/members/fox_s1.png`}
        image2={`/images/members/fox_s2.png`}
        twitterHandle="foxxy_sol"
        season={season}
      />
    </motion.div>
  );
};

export default Members;