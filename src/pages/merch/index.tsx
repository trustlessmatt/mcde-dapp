import { FC } from "react";
import Image from "next/image";
import { Nav } from "@/components";
import { useWindowSize } from "@/hooks/useWindowSize";

const Merch: FC = () => {
  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 768;
  return (
    <div className="relative w-full min-h-screen md:h-screen flex flex-col items-center">
      <Nav />
      <Image
        src={`/EXCLUSIVE.png`}
        width={1140}
        height={420}
        alt="text"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-10"
      />
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/mop.png`}
        width={isMobile ? 250 : 420}
        height={isMobile ? 250 : 420}
        alt="mop and bucket"
        className="absolute bottom-4 right-0"
      />
    </div>
  );
};

export default Merch;
