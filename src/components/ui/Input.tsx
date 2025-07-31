import React from "react";

type InputProps = (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
) & {
  label?: string;
  error?: string;
  type?: string;
};

export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    { type = "text", label, error, required = false, className = "", ...props },
    ref
  ) => {
    const baseStyles =
      "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200";
    const errorStyles = error ? "border-red-500 focus:ring-red-500" : "";

    const renderInput = () => {
      if (type === "textarea") {
        return (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${baseStyles} ${errorStyles} ${className} min-h-[100px] resize-y`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        );
      }
      return (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          className={`${baseStyles} ${errorStyles} ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      );
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        {renderInput()}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
