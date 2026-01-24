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
    <ol className="flex w-full flex-col items-start p-4 space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-8 rtl:space-x-reverse">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex w-full sm:w-auto items-start sm:items-center space-x-3 rtl:space-x-reverse ${
            step.completed ? "text-white" : "text-gray-400"
          }`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
              step.completed ? "border-white" : "border-gray-400"
            }`}
          >
            {index + 1}
          </span>

          <span className="flex flex-col">
            <h3 className="font-medium leading-tight">{step.title}</h3>
            <p className="text-sm leading-snug">{step.description}</p>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;