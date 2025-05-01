import React from 'react';

type ButtonProps = {
  text: string;
  color?: 'blue' | 'black';
  size?: 'small' | 'wide';
  icon?: 'forward' | 'downward';
  onClick?: () => void;
};

const colors: Record<string, string> = {
  blue:  'bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer',
  black:  'bg-[#212121] hover:bg-[#252525] focus:ring-blue-800 cursor-pointer',
};

const sizes: Record<string, string> = {
  small: 'text-sm px-3 py-2',
  wide: 'text-base px-10 py-2.5',
};

const icons: Record<string, any> = {
  forward: (
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  ),
  downward: (
    <svg
      className="w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1v12m0 0l4-4m-4 4L1 9"
      />
    </svg>
  ),
};

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'blue',
  size = 'md',
  icon = 'forward',
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-medium rounded-lg text-center inline-flex items-center focus:ring-4 focus:outline-none ${colors[color]} ${sizes[size]}`}
    >
      {text}
      {icon && icons[icon]}
    </button>
  );
};

export default Button;