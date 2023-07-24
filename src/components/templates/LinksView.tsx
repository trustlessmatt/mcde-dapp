import { FC } from "react";
import { Button, LinkItem } from "@/components";
import Image from "next/image";
import { useRouter } from "next/router";

const LinksView: FC = () => {
  const router = useRouter();

  return (
    <div className="bg-primary w-full py-32">
      <div className="flex flex-col items-center justify-center gap-5">
        <div>
          <h2 className="text-center">Mickey Orientation</h2>
          <p className="text-center mb-5">
            Here&apos;s some stuff you can do...
          </p>
        </div>
        <div className="w-[90%] md:w-[560px] mx-auto flex flex-col items-center justify-center gap-5">
          <LinkItem text="Join Mickey DeGods">
            {/* TODO: blur link with both attributes */}
            <Button className="bg-tertiary flex items-center justify-center gap-1 w-[140px] py-[10px]">
              <p className="text-primary text-lg font-primaryBold">Buy on</p>
              <Image
                src="/images/blur.png"
                width={50}
                height={20}
                alt="magic eden logo"
              />
            </Button>
          </LinkItem>
          <LinkItem text="Stake Combos for $DUST">
            <Button
              className="bg-tertiary flex items-center justify-center w-[140px] py-[10px]"
              clickFunc={() => router.push("/staking")}
            >
              <p className="text-primary text-lg font-primaryBold">Staking</p>
            </Button>
          </LinkItem>
          <LinkItem text="Wen Mickey merch?">
            <div className="flex flex-col items-center justify-center w-[140px]">
              <p className="font-primaryBold text-tertiary text-lg">Webstore</p>
              <p className="text-tertiary text-base -mt-2">SOON</p>
            </div>
          </LinkItem>
          <LinkItem text="Follow Mickey DeGods">
            <div className="flex items-center justify-center w-[140px] gap-[10px]">
              <Button
                className="bg-[#00ACEE] flex items-center justify-center w-[65px]"
                clickFunc={() =>
                  window.open(
                    "https://twitter.com/MickeyDeGods",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                <svg
                  width="65"
                  height="40"
                  viewBox="0 0 65 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.6367 16.5938C39.6367 16.7695 39.6367 16.9102 39.6367 17.0859C39.6367 21.9727 35.9453 27.5625 29.1602 27.5625C27.0508 27.5625 25.1172 26.9648 23.5 25.9102C23.7812 25.9453 24.0625 25.9805 24.3789 25.9805C26.1016 25.9805 27.6836 25.3828 28.9492 24.3984C27.332 24.3633 25.9609 23.3086 25.5039 21.832C25.75 21.8672 25.9609 21.9023 26.207 21.9023C26.5234 21.9023 26.875 21.832 27.1562 21.7617C25.4688 21.4102 24.2031 19.9336 24.2031 18.1406V18.1055C24.6953 18.3867 25.293 18.5273 25.8906 18.5625C24.8711 17.8945 24.2383 16.7695 24.2383 15.5039C24.2383 14.8008 24.4141 14.168 24.7305 13.6406C26.5586 15.8555 29.3008 17.332 32.3594 17.5078C32.2891 17.2266 32.2539 16.9453 32.2539 16.6641C32.2539 14.625 33.9062 12.9727 35.9453 12.9727C37 12.9727 37.9492 13.3945 38.6523 14.1328C39.4609 13.957 40.2695 13.6406 40.9727 13.2188C40.6914 14.0977 40.1289 14.8008 39.3555 15.2578C40.0938 15.1875 40.832 14.9766 41.4648 14.6953C40.9727 15.4336 40.3398 16.0664 39.6367 16.5938Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                className="bg-[#5865F2] flex items-center justify-center w-[65px]"
                clickFunc={() =>
                  window.open(
                    "https://discord.gg/UwAUPgzgmZ",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                <svg
                  width="65"
                  height="40"
                  viewBox="0 0 65 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.6719 13.7109C41.9922 17.1562 43.1523 21.0234 42.7305 25.4883C42.7305 25.4883 42.7305 25.5234 42.6953 25.5234C41.1484 26.6836 39.3906 27.5625 37.5273 28.125C37.4922 28.1602 37.4922 28.125 37.457 28.125C37.0703 27.5625 36.7188 27 36.4023 26.4023C36.4023 26.3672 36.4023 26.332 36.4375 26.2969C37 26.0859 37.5273 25.8398 38.0547 25.5234C38.0898 25.5234 38.0898 25.4531 38.0547 25.418C37.9492 25.3477 37.8438 25.2773 37.7383 25.1719C37.7031 25.1719 37.7031 25.1719 37.668 25.1719C34.3281 26.7188 30.6719 26.7188 27.2969 25.1719C27.2617 25.1719 27.2266 25.1719 27.2266 25.1719C27.1211 25.2773 27.0156 25.3477 26.9102 25.418C26.8398 25.4531 26.875 25.5234 26.9102 25.5234C27.4023 25.8398 27.9648 26.0859 28.5273 26.2969C28.5625 26.332 28.5625 26.3672 28.5625 26.4023C28.2461 27 27.8945 27.5625 27.5078 28.125C27.4727 28.125 27.4375 28.1602 27.4375 28.125C25.5742 27.5625 23.8164 26.6836 22.2695 25.5234C22.2344 25.5234 22.2344 25.4883 22.2344 25.4883C21.8828 21.6211 22.6211 17.7188 25.293 13.7109C25.293 13.7109 25.293 13.7109 25.3281 13.7109C26.6641 13.0781 28.0703 12.6562 29.5117 12.4102C29.5469 12.375 29.582 12.4102 29.582 12.4102C29.793 12.7617 29.9688 13.1484 30.1094 13.5C31.6914 13.2539 33.2734 13.2539 34.8555 13.5C34.9961 13.1484 35.1719 12.7617 35.3828 12.4102C35.3828 12.4102 35.418 12.375 35.4531 12.4102C36.8945 12.6562 38.3008 13.0781 39.6367 13.7109C39.6719 13.7109 39.6719 13.7109 39.6719 13.7109ZM29.0547 23.1328C30.0742 23.1328 30.918 22.1836 30.918 21.0586C30.918 19.8984 30.1094 18.9844 29.0547 18.9844C28.0352 18.9844 27.1914 19.8984 27.1914 21.0586C27.1914 22.1836 28.0352 23.1328 29.0547 23.1328ZM35.9102 23.1328C36.9648 23.1328 37.7734 22.1836 37.7734 21.0586C37.8086 19.8984 36.9648 18.9844 35.9102 18.9844C34.8906 18.9844 34.082 19.8984 34.082 21.0586C34.082 22.1836 34.8906 23.1328 35.9102 23.1328Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </LinkItem>
        </div>
      </div>
    </div>
  );
};

export default LinksView;
