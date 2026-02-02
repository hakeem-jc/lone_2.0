import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete = "off",
  registration,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="grid grid-cols-[auto_1fr] gap-1.5 mb-1.5 font-semibold text-gray-400 antialiased"
      >
        <span>{label}</span>
        {registration && <span className="text-gray-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`
          w-full h-[54px] px-5 text-base
          border rounded-[4px]
          bg-[#212121]
          text-white border-gray-400 placeholder:text-gray-500
          font-normal antialiased
          focus:outline-none focus:border-[#1976d2]
          ${error ? "border-red-500" : "border-grey"}
        `}
        {...registration}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
