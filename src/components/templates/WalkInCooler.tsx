import { FC } from "react";
import Image from "next/image";

const WalkInCooler: FC = () => {
  return (
    <div className="w-full bg-tertiary">
      <Image
        src="/images/walkin.png"
        width={1440}
        height={500}
        alt="walk-in cooler"
        className="mx-auto"
      />
    </div>
  );
};

export default WalkInCooler;
