import React from "react";
import { Loader2 } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950";

    const variants = {
      primary:
        "bg-green-600 text-white hover:bg-green-700 disabled:hover:bg-green-600 focus:ring-green-500",
      secondary:
        "bg-gray-800 text-white hover:bg-gray-700 disabled:hover:bg-gray-800 focus:ring-gray-600",
      outline:
        "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white disabled:hover:bg-transparent disabled:hover:text-green-600 focus:ring-green-500",
      ghost:
        "text-gray-300 hover:text-white hover:bg-gray-800 disabled:hover:bg-transparent disabled:hover:text-gray-300 focus:ring-gray-600",
      danger:
        "bg-red-600 text-white hover:bg-red-700 disabled:hover:bg-red-600 focus:ring-red-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
