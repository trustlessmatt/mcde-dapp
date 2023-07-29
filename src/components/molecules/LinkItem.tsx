import { FC } from "react";

interface Props {
  text: string;
  children: React.ReactNode;
}

const LinkItem: FC<Props> = ({ text, children }) => {
  return (
    <div className="w-full bg-secondary flex items-center justify-between py-5 px-[30px]">
      <p className="font-primaryBold text-xl text-tertiary max-w-[50%]">
        {text}
      </p>
      {children}
    </div>
  );
};

export default LinkItem;
