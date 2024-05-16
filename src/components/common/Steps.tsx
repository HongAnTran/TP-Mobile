import React from 'react';
import Link from 'next/link'; // or 'react-router-dom' depending on your router

export interface StepProps {
  label: string;
  link: string;
  status: 'completed' | 'active' | 'pending';
}

interface StepsProps {
  steps: StepProps[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (

    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <Link href={step.link}>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold
                      ${step.status === 'completed' ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-200 text-gray-700'}
                      ${step.status === 'active' ? 'ring ring-gray-600 ring-offset-2  text-red-500' : ''}
                      ${step.status === 'pending' ? '' : ''}`}
                >
                  {step.status === 'completed' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : step.status === 'pending' ? (
                    index + 1
                  ) : (
                    index + 1
                  )}
                </span>
              </Link>
              <span className="font-semibold text-gray-900">{step.label}</span>
            </li>
            {index < steps.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
