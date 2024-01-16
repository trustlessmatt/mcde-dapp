import { FC } from "react";
import Image from "next/image";

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
      <p className="text-white/50">Who&apos;s here</p>
      <div className="grid grid-flow-row grid-cols-2 gap-5">
        {stubbedUsers.map((user) => (
          <div className="flex gap-1 items-center" key={user.name}>
            <Image
              src={user.image}
              width={40}
              height={40}
              alt="user"
              className="rounded-full overflow-hidden"
            />
            <div className="flex flex-col">
              <p className="text-white text-sm">{user.name}</p>
              <p className="text-white/50 text-sm">{user.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhosHere;
