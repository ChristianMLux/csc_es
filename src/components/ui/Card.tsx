import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  children: React.ReactNode;
};

export const Card = ({
  children,
  hover = false,
  className = "",
  ...props
}: CardProps) => {
  const baseStyles =
    "bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700";
  const hoverStyles = hover
    ? "hover:bg-gray-800/70 hover:scale-[1.02] cursor-pointer"
    : "";

  return (
    <div
      className={`${baseStyles} ${hoverStyles} transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
