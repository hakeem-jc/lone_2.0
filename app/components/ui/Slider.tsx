"use client";
import { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(500); // default value

  return (
    <div className="w-full">
      <label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Range steps: {value}
      </label>
      <input
        id="steps-range"
        type="range"
        min="0"
        max="5000"
        step="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}

export default Slider;