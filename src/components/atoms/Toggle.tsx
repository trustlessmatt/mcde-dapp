import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

interface ToggleSwitchProps {
  imageLeft: string;
  imageRight: string;
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  imageLeft,
  imageRight,
  isToggled,
  setIsToggled,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={imageLeft}
        width={40}
        height={40}
        alt="Left Image"
        className="bg-primary rounded-full"
      />
      <div
        className={`w-[44px] h-[24px] relative rounded-full bg-custom-red p-0.5 cursor-pointer`}
        onClick={() => setIsToggled(!isToggled)}
      >
        <div
          className={`w-[20px] h-[20px] absolute top-1/2 -translate-y-1/2 rounded-full 
          bg-white transition-all ease-out duration-300 ${
            isToggled ? " translate-x-full" : ""
          }`}
        />
      </div>
      <Image src={imageRight} width={40} height={40} alt="Right Image" />
    </div>
  );
};

export default ToggleSwitch;
