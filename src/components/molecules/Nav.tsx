import Image from "next/image";
import { FC } from "react";
import { Discord, Twitter } from "@/components";

const Nav: FC = () => {
  return (
    <div className="h-20 w-[90%] mx-auto flex items-center justify-between border-b border-border">
      <Image
        src="/images/fries_logo.png"
        width={40}
        height={40}
        alt="fries logo"
      />
      <div className="flex items-center gap-5">
        <p className="text-2xl">About</p>
        <p className="text-2xl">Staking</p>
        <p className="text-2xl">Merch</p>
        <p className="text-2xl">Giveaways</p>
      </div>
      <div className="flex items-center gap-3">
        <Twitter className="w-5" />
        <Discord className="w-5" />
        {/* <p className="text-2xl">Connect Wallet</p> */}
      </div>
    </div>
  );
};

export default Nav;
