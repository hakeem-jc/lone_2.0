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
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="bg-secondary border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...registration}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
