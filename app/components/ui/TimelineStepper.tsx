import React from "react";

type TimelineStep = {
  title: string;
  description: string;
  icon: React.ReactNode;
  completed?: boolean;
};

type TimelineStepperProps = {
  steps: TimelineStep[];
};

const TimelineStepper: React.FC<TimelineStepperProps> = ({ steps }) => {
  return (
    <ol className="ml-12 relative border-s border-gray-700 text-gray-400">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`ms-6 ${index !== steps.length - 1 ? "mb-10" : ""}`}
        >
          <span
            className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-gray-900 ${
              step.completed ? "bg-green-900" : "bg-gray-700"
            }`}
          >
            <span
              className={`w-3.5 h-3.5 ${
                step.completed ? "text-green-400" : "text-gray-400"
              }`}
            >
              {step.icon}
            </span>
          </span>
          <h3 className="font-medium leading-tight">{step.title}</h3>
          <p className="text-sm">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default TimelineStepper;
