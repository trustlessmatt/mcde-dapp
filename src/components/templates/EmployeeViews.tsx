import { FC, useState } from "react";
import Image from "next/image";
import WhosHere from "../molecules/WhosHere";

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
    <div className="w-full h-full flex flex-col flex-1 items-center">
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
        <div className="h-full w-full flex flex-col flex-1 gap-10 items-center justify-center max-w-[480px] mx-auto">
          <p className="text-3xl font-primaryBold text-white">
            A holiday bonus from the bosses &lt;3
          </p>
          <p className="text-white text-center">
            We write this from the beach in Cancún. Your bags might be down, but
            we&apos;re up. Here&apos;s a little free $DUST (SPL) claim because
            Mickey DeGods corporate values its employees.
          </p>
          <div className="w-full flex gap-5 items-center">
            {/* claim option 1 */}
            <div className="w-full flex flex-col gap-3 items-center">
              <p className="text-white">$FRIES Claim</p>
              <button
                onClick={() => console.log("claim fries")}
                className="w-full text-black bg-custom-yellow h-[50px]"
              >
                Claim free $$ for being a Mickey
              </button>
            </div>
            {/* claim option 2 */}
            <div className="w-full flex flex-col gap-3 items-center">
              <p className="text-white">$DUST Claim</p>
              <button
                onClick={() => console.log("claim dust")}
                className="w-full text-black bg-custom-yellow h-[50px]"
              >
                Claim free $$ for being a Mickey
              </button>
            </div>
          </div>
          <WhosHere />
        </div>
      )}
    </div>
  );
};

export default EmployeeViews;
