"use client";
import Button from "@/app/components/ui/Button";
import { useLoanStore } from "@/app/store/loanStore";

interface DisburseSectionProps {
  onBack: () => void;
}

export default function DisburseSection({ onBack }: DisburseSectionProps) {
  const resetApplication = useLoanStore((state) => state.resetApplication);

  return (
    <section className="w-full">
      <div className="bg-secondary p-10 flex flex-col">
        <h2 className="text-3xl">Disburse</h2>
      </div>

      <div className="rounded-lg p-6 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-green-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold text-white mb-2">
            Application Approved!
          </h3>
          <p className="text-gray-300 mb-4">
            Your loan has been approved and funds will be disbursed shortly.
          </p>
        </div>

        <div className="rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-400 mb-2">Disbursement Amount</p>
          <p className="text-3xl font-bold text-white">$5,000.00</p>
        </div>

        <div className="text-left space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Processing Time:</span>
            <span className="text-white">Already In Your Account 😉</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Account:</span>
            <span className="text-white">****1234</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Status:</span>
            <span className="text-green-500">Disbursed</span>
          </div>
        </div>

        <div className="pt-4 flex gap-4 justify-center">
          <Button
            text="Reset Application"
            color="blue"
            size="wide"
            icon={false}
            type={"button"}
            onClick={resetApplication}
          />
        </div>
      </div>
    </section>
  );
}
