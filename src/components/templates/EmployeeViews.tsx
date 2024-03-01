import { FC, useState } from "react";
import Image from "next/image";
import WhosHere from "../molecules/WhosHere";
import { Volume2 } from "lucide-react";

export enum EmployeeViewsEnum {
  DEID,
  CLAIM,
  ADMIN,
}

const EmployeeViews: FC = () => {
  const [currentView, setCurrentView] = useState<EmployeeViewsEnum>(
    EmployeeViewsEnum.DEID
  );
  return (
    <div className="w-full max-w-[620px] mx-auto h-full flex flex-col flex-1 items-center">
      {currentView === EmployeeViewsEnum.DEID && (
        <div className="h-full w-full flex flex-col flex-1 gap-5 items-center justify-center">
          <Image
            src="/fries.png"
            width={80}
            height={80}
            alt="mickey degods logo"
          />
          <p className="text-3xl font-primaryBold text-white">
            Mickey DeGods Walk-In
          </p>
          <button
            onClick={() => setCurrentView(EmployeeViewsEnum.CLAIM)}
            className="text-white border p-2"
          >
            de[id] login here
          </button>
        </div>
      )}
      {currentView === EmployeeViewsEnum.CLAIM && (
        <div
          className="h-full w-full flex flex-col flex-1 gap-5 items-center 
          justify-center py-40"
        >
          <p className="text-4xl text-center font-primaryBold text-custom-yellow">
            The grease pits need cleaning.
            <br />
            Get on it, Kindafungible.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-subtext text-center">Play sound</p>
            <Volume2 size={16} fill="#808080" color="#808080" />
          </div>
          <div
            className="w-full bg-custom-black-2 rounded-[20px] p-5 flex flex-col 
            gap-2 items-center justify-center"
          >
            <p className="text-subtext text-sm">Claim</p>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/dust-sol.png"
                width={40}
                height={40}
                alt="dust"
              />
              <p className="text-white font-extrabold text-2xl">3.33</p>
            </div>
          </div>
          <button
            className="w-full h-[70px] bg-custom-red border border-custom-yellow 
            rounded-[20px] flex items-center justify-center text-white"
          >
            Get paid
          </button>
          <p className="text-white text-center w-full">
            Resets in 20 hours 33 minutes
          </p>
          <WhosHere />
        </div>
      )}
    </div>
  );
};

export default EmployeeViews;
