import { FC } from "react";
import { Partners } from "@/components";

const CollabsView: FC = () => {
  return (
    <div className="w-full bg-secondary py-16 md:py-32">
      <div className="w-full max-w-[945px] mx-auto flex flex-col items-center justify-center gap-5">
        <h2 className="text-center text-tertiary">Collabs & Partners</h2>
        <Partners />
      </div>
    </div>
  );
};

export default CollabsView;
