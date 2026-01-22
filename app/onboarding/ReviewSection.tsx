"use client";
import { useLoanStore } from "@/app/store/loanStore";
import Button from "@/app/components/ui/Button";

interface ReviewSectionProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function ReviewSection({ onBack, onContinue }: ReviewSectionProps) {
  const accountInfo = useLoanStore((state) => state.accountInfo);
  const loanInfo = useLoanStore((state) => state.loanInfo);
  const getCompleteApplication = useLoanStore((state) => state.getCompleteApplication);

  const handleContinue = () => {
    // Get complete application data for final submission
    const completeData = getCompleteApplication();
    console.log("Complete application:", completeData);
    onContinue();
  };

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
            {accountInfo && (
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-gray-400">Name:</p>
                <p className="text-white">
                  {accountInfo.firstName} {accountInfo.middleName} {accountInfo.lastName}
                </p>
                <p className="text-gray-400">Email:</p>
                <p className="text-white">{accountInfo.emailAddress}</p>
                <p className="text-gray-400">Phone:</p>
                <p className="text-white">{accountInfo.phoneNumber}</p>
                <p className="text-gray-400">Date of Birth:</p>
                <p className="text-white">{accountInfo.dateOfBirth}</p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-700 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Loan Details
            </h3>
            {loanInfo && (
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-gray-400">Loan Amount:</p>
                <p className="text-white">${loanInfo.loanAmount.toFixed(2)}</p>
                <p className="text-gray-400">First Payment Date:</p>
                <p className="text-white">{loanInfo.repaymentDate}</p>
              </div>
            )}
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
            onClick={handleContinue}
          />
        </div>
      </div>
    </section>
  );
}