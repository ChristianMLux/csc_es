import { Loader2 } from "lucide-react";

type SpinnerProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export const Spinner = ({ size = "md", className = "" }: SpinnerProps) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizes[size]} animate-spin text-green-600`} />
    </div>
  );
};

type LoadingIndicatorProps = {
  text?: string;
};

export const LoadingIndicator = ({
  text = "Lädt...",
}: LoadingIndicatorProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <Spinner size="lg" />
      <p className="text-gray-400">{text}</p>
    </div>
  );
};
