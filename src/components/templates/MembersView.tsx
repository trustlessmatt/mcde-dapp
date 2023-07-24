import { FC, useState } from "react";
import { Members, SeasonSelector } from "@/components";

const MembersView: FC = () => {
  const [season, setSeason] = useState<1 | 2>(2);
  return (
    <div className="bg-primary w-full py-32">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-center">Meet the Mickeys</h2>
        <p className="text-center -mt-4 mb-2">
          Holder directory with de[id] coming soon.
        </p>
        <SeasonSelector season={season} setSeason={setSeason} />
        <Members season={season} />
      </div>
    </div>
  );
};

export default MembersView;
