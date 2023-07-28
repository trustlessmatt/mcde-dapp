import { FC, useState } from "react";
import { Members, SeasonSelectorToggle } from "@/components";

const MembersView: FC = () => {
  const [season, setSeason] = useState<1 | 2>(2);
  return (
    <div className="bg-primary w-full py-16 md:py-32">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-center">Meet the Mickeys</h2>
        <p className="text-center -mt-4 mb-2">
          Holder directory with de[id] coming soon.
        </p>
        <SeasonSelectorToggle setSeason={setSeason} />
        <Members season={season} />
      </div>
    </div>
  );
};

export default MembersView;
