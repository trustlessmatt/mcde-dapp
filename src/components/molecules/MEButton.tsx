import { FC } from "react";
import { Button } from "@/components";
import Image from "next/image";

const MEButton: FC = () => {
  return (
    <Button
      clickFunc={() =>
        window.open(
          "https://magiceden.io/creators/mickeydegods",
          "_blank",
          "noopener noreferrer"
        )
      }
      className="bg-white border border-me-purple flex items-center gap-2 px-5 py-3"
    >
      <p className="font-primaryBold text-me-purple">Buy on</p>
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/magic_eden.png`}
        width={35}
        height={20}
        alt="magic eden logo"
      />
    </Button>
  );
};

export default MEButton;
