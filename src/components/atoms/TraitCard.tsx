import { FC } from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  supply: number;
  rarity: number;
}

const TraitCard: FC<Props> = ({ name, image, supply, rarity }) => {
  return (
    <div className="w-[270px] h-[442px] bg-primary flex flex-col">
      {/* header */}
      <div className="w-full h-10 flex items-center bg-tertiary px-5">
        <p className="text-sm text-primary">{name}</p>
      </div>
      <Image src={image} width={270} height={270} alt={name} />
      <div className="h-16 py-2 flex items-center justify-between px-5">
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Supply</p>
          <p className="text-lg text-tertiary">{`${supply} / 10,000`}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-tertiary">Rarity</p>
          <p className="text-lg text-tertiary">{`${rarity}%`}</p>
        </div>
      </div>
      {/* TODO: add buy button */}
    </div>
  );
};

export default TraitCard;
