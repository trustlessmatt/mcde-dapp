import Image from "next/image";
import { FC } from "react";
import { Discord, Twitter } from "@/components";
import { useRouter } from "next/router";
import path from "path";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/constants/framer.config";

const Nav: FC = () => {
  const { push, pathname } = useRouter();

  const handleRouter = (path: string) => {
    if (pathname !== path) {
      push(path);
    }
  };

  return (
    <div
      className="h-20 w-[90%] mx-auto flex items-center 
      justify-between border-b border-light-border"
    >
      <Image
        src="/images/fries_logo.png"
        width={40}
        height={40}
        alt="fries logo"
      />
      <div className="flex items-center gap-5">
        <p
          className={`${pathname === "/" && "font-primaryBold"} cursor-pointer`}
          onClick={() => handleRouter("/")}
        >
          About
        </p>
        <p
          className={`${
            pathname === "/staking" && "font-primaryBold"
          } cursor-pointer`}
          onClick={() => handleRouter("/staking")}
        >
          Staking
        </p>
        <p
          className={`${
            pathname === "/merch" && "font-primaryBold"
          } cursor-pointer`}
          onClick={() => handleRouter("/merch")}
        >
          Merch
        </p>
        <a href="https://www.subber.xyz/mickeydegods" rel="noreferrer noopener">
          Giveaways
        </a>
      </div>
      <div className="flex items-center gap-3">
        <motion.a
          {...smallClickAnimation}
          href="https://twitter.com/MickeyDeGods"
          rel="noreferrer noopener"
        >
          <Twitter className="w-6" />
        </motion.a>
        <motion.a
          {...smallClickAnimation}
          href="https://discord.gg/UwAUPgzgmZ"
          rel="noreferrer noopener"
        >
          <Discord className="w-7" />
        </motion.a>
        {/* <p className="text-2xl">Connect Wallet</p> */}
      </div>
    </div>
  );
};

export default Nav;
