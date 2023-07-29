import { FC } from "react";
import { Nav } from "@/components";

const Merch: FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Nav />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl text-tertiary">Merch</h1>
        <p className="text-tertiary">Coming soon...</p>
      </div>
    </div>
  );
};

export default Merch;
