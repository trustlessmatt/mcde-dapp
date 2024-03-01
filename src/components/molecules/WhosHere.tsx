import { FC } from "react";
import Image from "next/image";
import { Twitter } from "..";

const stubbedUsers = [
  {
    name: "Kindafungible",
    image: "/temp/fungi.png",
    job: "Clean the toilets",
  },
  {
    name: "JB",
    image: "/temp/jb.png",
    job: "Replace the fryer oil",
  },
  {
    name: "Mr_Cuddlez88",
    image: "/temp/cuddlez.png",
    job: "Grease the glory hole",
  },
  {
    name: "Beanthatgotaway",
    image: "/temp/bean.png",
    job: "Sweep the parking lot",
  },
  {
    name: "0x_saddy",
    image: "/temp/saddy.png",
    job: "Refill the soda machine",
  },
];

const WhosHere: FC = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-subtext">Role call:</p>
      {stubbedUsers.map((user) => (
        <div
          className="w-full border-b border-dark-border flex gap-1 items-center justify-between py-3"
          key={user.name}
        >
          <div className="flex items-center gap-2">
            <Image
              src={user.image}
              width={40}
              height={40}
              alt="user"
              className="rounded-full overflow-hidden"
            />
            <p className="text-white text-sm">{user.name}</p>
            <button>
              <Twitter width={16} fill="#808080" color="#808080" />
            </button>
          </div>
          <p className="text-subtext text-sm">{user.job}</p>
        </div>
      ))}
    </div>
  );
};

export default WhosHere;
