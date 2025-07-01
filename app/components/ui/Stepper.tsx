import React from "react";

type Step = {
  title: string;
  description: string;
  completed: boolean;
};

type StepperProps = {
  steps: Step[];
};

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <ol className="flex justify-center items-center w-full flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 rtl:space-x-reverse">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex items-center ${
            step.completed ? "text-blue-500" : "text-gray-400"
          } space-x-2.5 rtl:space-x-reverse`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
              step.completed ? "border-blue-500" : "border-gray-400"
            }`}
          >
            {index + 1}
          </span>
          <span>
            <h3 className="font-medium leading-tight">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;