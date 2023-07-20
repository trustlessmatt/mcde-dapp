import { FC } from "react";
import { smallClickAnimation } from "@/constants/framer.config";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  clickFunc?: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, clickFunc = () => null } = props;
  return (
    <motion.button
      {...smallClickAnimation}
      onClick={clickFunc}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default Button;
