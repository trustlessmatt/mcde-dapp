import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TwitterFooter, DiscordFooter } from "@/components";

const Footer: FC = () => {
  const { push, pathname } = useRouter();

  const handleRouter = (path: string) => {
    if (pathname !== path) {
      push(path);
    }
  };
  return (
    <div className="w-full bg-custom-black">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="relative w-[90%] max-w-[1600px] flex items-center justify-between py-10 px-20 border-b border-dark-border">
          {/* mickey branding */}
          <div className="flex items-center gap-5">
            <Image
              src="/images/fries_logo_white.png"
              width={20}
              height={20}
              alt="fries logo"
            />
            <p className="text-white font-primaryBold">Mickey DeGods</p>
          </div>
          {/* second nav */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5 text-primary">
            <p
              className={`${
                pathname === "/" && "font-primaryBold"
              } cursor-pointer`}
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
            <a
              href="https://www.subber.xyz/mickeydegods"
              rel="noreferrer noopener"
            >
              Giveaways
            </a>
          </div>
          {/* socials */}
          <div className="flex items-center gap-3 text-primary">
            <a
              href="https://twitter.com/MickeyDeGods"
              rel="noreferrer noopener"
            >
              <TwitterFooter />
            </a>
            <a href="https://discord.gg/3qJtqzQJ" rel="noreferrer noopener">
              <DiscordFooter />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-5 px-20">
          <p className="text-dark-border text-center">
            The original DeGods sub-community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
