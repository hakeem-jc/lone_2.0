"use client";
import Button from "@/app/components/ui/Button";

interface ReviewSectionProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function ReviewSection({ onBack, onContinue }: ReviewSectionProps) {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center w-full mb-6">
        <h2 className="text-2xl font-bold block">Review</h2>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <p className="text-gray-300 mb-4">
          Please review your application details before proceeding.
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Personal Information
            </h3>
            <p className="text-gray-400 text-sm">
              Your personal information will appear here
            </p>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Loan Details
            </h3>
            <p className="text-gray-400 text-sm">
              Your loan information will appear here
            </p>
          </div>
        </div>

        <div className="pt-4 text-center flex gap-4 justify-center">
          <Button
            text="Back"
            color="black"
            size="wide"
            icon={false}
            type={"button"}
            onClick={onBack}
          />
          <Button
            text="Continue to Disburse"
            color="blue"
            size="wide"
            icon={false}
            type={"button"}
            onClick={onContinue}
          />
        </div>
      </div>
    </section>
  );
}