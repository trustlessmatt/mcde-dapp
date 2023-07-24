import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components";

const StakeCTA: FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <div className="w-[519px] mx-auto flex flex-col items-center border border-tertiary">
        <div className="w-full h-10 bg-tertiary">
          <p className="h-full text-primary font-primaryBold flex items-center justify-center">
            Stake it for $DUST
          </p>
        </div>
        <div className="w-full h-full bg-primary flex item-center justify-between">
          <div className="px-5 flex flex-col justify-center">
            <h2 className="text-[26px]">Make it a combo</h2>
            <p>Combo 3 to 5 menu items, stakable for daily $DUST rewards.</p>
          </div>
          <Image
            src="/images/combo.png"
            width={173}
            height={160}
            alt="combo NFT"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p>Make it a combo in Discord</p>
        <Button
          className="bg-primary px-1 py-0.5"
          clickFunc={() =>
            window.open(
              "https://discord.gg/wSXAEdbC",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          #🍟-combo-request
        </Button>
      </div>
    </div>
  );
};

export default StakeCTA;
