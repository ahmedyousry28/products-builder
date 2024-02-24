import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  width?: "w-full" | "w-fit" | number;
}

const Button = ({ className, children, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${width} bg-indigo-500 p-2 w-full rounded-md text-white ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
