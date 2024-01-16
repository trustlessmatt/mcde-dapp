import Nav from "@/components/molecules/Nav";
import { FC } from "react";

const Fries: FC = () => {
  return (
    <div className="relative w-full min-h-screen md:h-screen flex flex-col items-center">
      <Nav />
      <p className="text-3xl font-primaryBold mt-40 text-black">About $FRIES</p>
    </div>
  );
};

export default Fries;
