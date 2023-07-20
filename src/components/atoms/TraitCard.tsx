import { FC } from "react";
import Image from "next/image";
import { Button, OpenSea } from "@/components";

interface Props {
  name: string;
  image: string;
  supply: number;
  rarity: number;
  price?: string;
}

const TraitCard: FC<Props> = ({
  name,
  image,
  supply,
  rarity,
  price = null,
}) => {
  return (
    <div className="w-[270px] bg-primary flex flex-col">
      {/* header */}
      <div className="w-full h-10 flex items-center bg-tertiary px-5">
        <p className="text-lg text-primary font-primaryBold">{name}</p>
      </div>
      <Image src={image} width={270} height={270} alt={name} />
      <div className="h-16 py-2 flex items-center justify-between px-5">
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Supply</p>
          <p className="font-primaryBold text-tertiary">{`${supply} / 10,000`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Rarity</p>
          <p className="font-primaryBold text-tertiary">{`${rarity}%`}</p>
        </div>
      </div>
      <div className="w-full px-5 pb-5">
        <Button
          className="w-full bg-custom-blue font-primaryBold text-primary h-[40px]"
          clickFunc={() => null}
        >
          <div className="flex items-center justify-center gap-2">
            <p className="">Buy on</p>
            <OpenSea className="w-5" />
            <div className="bg-primary w-[1px] h-5" />
            <p>{price ?? "PRICELESS"}</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TraitCard;
