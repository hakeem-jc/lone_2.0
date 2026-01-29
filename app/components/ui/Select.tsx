import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  required?: boolean;
};

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  placeholder = "Select",
  registration,
  error,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="grid grid-cols-[auto_1fr] gap-1.5 mb-1.5 font-semibold text-gray-400 antialiased"
      >
        <span>{label}</span>
        {required && <span className="text-gray-400">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`
            w-full h-[54px] px-5 text-base
            border rounded-none
            bg-[#212121]
            text-gray-400
            font-normal antialiased
            focus:outline-none focus:border-[#6c51f5]
            appearance-none
            cursor-pointer
            pr-12
            ${error ? "border-red-500" : "border-[#bab8c6]"}
          `}
          {...registration}
        >
          <option value="" className="text-gray-500">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-400">
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Select;