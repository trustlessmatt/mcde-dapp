import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Discord, Twitter } from "@/components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/constants/framer.config";
import MobileMenu from "./MobileMenu";

const Nav: FC = () => {
  const { push, pathname } = useRouter();

  const [open, setOpen] = useState(false);

  const handleRouter = (path: string) => {
    if (pathname !== path) {
      push(path);
    }
  };

  useEffect(() => {
    console.log("menu is open: ", open);
  }, [open]);

  return (
    <>
      <motion.div
        className="z-50 bg-primary h-20 w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 4.2 }}
      >
        <div className="w-[90%] h-full mx-auto flex items-center justify-end md:justify-between gap-3">
          <Image
            src="/images/fries_logo_red.png"
            width={40}
            height={40}
            alt="fries logo"
            className="md:hidden absolute left-1/2 -translate-x-1/2"
          />
          <Image
            src="/images/fries_logo_red.png"
            width={40}
            height={40}
            alt="fries logo"
            className="hidden md:block"
          />
          <div className="hidden md:flex items-center gap-10">
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
          <div className="hidden md:flex items-center gap-5">
            <motion.a
              {...smallClickAnimation}
              href="https://twitter.com/MickeyDeGods"
              rel="noreferrer noopener"
            >
              <Twitter className="w-5" />
            </motion.a>
            <motion.a
              {...smallClickAnimation}
              href="https://discord.gg/UwAUPgzgmZ"
              rel="noreferrer noopener"
            >
              <Discord className="w-6" />
            </motion.a>
            {/* <p className="text-2xl">Connect Wallet</p> */}
          </div>
          <div
            className="md:hidden cursor-pointer pr-2 transition ease-in-out
          md:hover:-translate-y-1 md:hover:scale-110 duration-300"
            onClick={() => setOpen(true)}
          >
            <svg
              className="fill-black"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H21C21.5523 8 22 8.44772 22 9C22 9.55229 21.5523 10 21 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H1C0.447715 18 0 17.5523 0 17Z"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
