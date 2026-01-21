"use client";
import { useState } from 'react';

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider = ({ 
  value: externalValue, 
  onChange, 
  min = 0, 
  max = 5000, 
  step = 100 
}: SliderProps) => {
  const [internalValue, setInternalValue] = useState(500); // default value
  
  // Use external value if provided, otherwise use internal state
  const currentValue = externalValue !== undefined ? externalValue : internalValue;

  const handleChange = (newValue: number) => {
    if (onChange) {
      // If onChange is provided, call it (controlled component)
      onChange(newValue);
    } else {
      // Otherwise update internal state (uncontrolled component)
      setInternalValue(newValue);
    }
  };

  return (
    <div className="w-full flex gap-10 items-center">
      <label htmlFor="steps-range" className="block text-2xl font-medium text-white">
        ${currentValue}
      </label>

      <div className='flex-grow'>
        <input
          id="steps-range"
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </div>
  );
}

export default Slider;