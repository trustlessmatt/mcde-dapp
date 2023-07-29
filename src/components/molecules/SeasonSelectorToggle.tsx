import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Toggle } from "..";

interface Props {
  setSeason: Dispatch<SetStateAction<1 | 2>>;
}

const SeasonSelectorToggle: FC<Props> = ({ setSeason }) => {
  const [isToggled, setIsToggled] = useState<boolean>(true);

  useEffect(() => {
    if (isToggled) {
      setSeason(2);
    } else {
      setSeason(1);
    }
  }, [isToggled]);

  return (
    <Toggle
      imageLeft={`${process.env.NEXT_PUBLIC_CDN_URL}/images/fries_s1.png`}
      imageRight={`${process.env.NEXT_PUBLIC_CDN_URL}/images/fries_s2.png`}
      isToggled={isToggled}
      setIsToggled={setIsToggled}
    />
  );
};

export default SeasonSelectorToggle;
