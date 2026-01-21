"use client";
import { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(500); // default value

  return (
    <div className="w-full flex gap-10 items-center">
      <label htmlFor="steps-range" className="block text-2xl font-medium text-white">
        ${value}
      </label>

      <div className='flex-grow'>
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
    </div>
  );
}

export default Slider;