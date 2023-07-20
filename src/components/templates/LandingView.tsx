import Image from "next/image";
import { FC } from "react";
import { Nav } from "@/components";

const LandingView: FC = () => {
  return (
    <div className="bg-primary w-full h-screen flex flex-col">
      <Nav />
      <div className="flex flex-1 flex-col items-center justify-center gap-10">
        <Image
          src="/images/fries_logo.png"
          width={366}
          height={366}
          alt="fries logo"
        />
        <div className="flex items-center gap-2">
          <p className="text-2xl text-tertiary">The original</p>
          <Image
            src="/images/degods_text.png"
            width={86}
            height={20}
            alt="degods text"
          />
          <p className="text-2xl text-tertiary">sub-community.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
