import React, { PropsWithChildren, useCallback } from "react";
const ReusableButtonCss =
  "win-btn w-10 h-10 p-0 m-0 outline-none focus:outline-none rounded-[5px] bg-transparent flex justify-center items-center hover:bg-white hover:bg-opacity-10 hover:drop-shadow-sm duration-200";

const ReusableButton = ({
  children,
  needsAttention = false,
  onClick,
  className,
}: PropsWithChildren<{
  needsAttention?: boolean;
  onClick?: () => void;
}> &
  React.HTMLAttributes<HTMLDivElement>) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <button
      className={`${className} ${ReusableButtonCss} ${
        needsAttention ? "attention" : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ReusableButton;
