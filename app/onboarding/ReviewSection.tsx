"use client";
import { useState } from "react";
import { useLoanStore } from "@/app/store/loanStore";
import Button from "@/app/components/ui/Button";
import { getPaymentDates } from "@/app/utils/helper";
import Modal from "@/app/components/ui/Modal";

interface ReviewSectionProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function ReviewSection({
  onBack,
  onContinue,
}: ReviewSectionProps) {
  const accountInfo = useLoanStore((state) => state.accountInfo);
  const loanInfo = useLoanStore((state) => state.loanInfo);
  const getCompleteApplication = useLoanStore(
    (state) => state.getCompleteApplication,
  );

  // Calculate loan details
  const loanAmount = loanInfo?.loanAmount || 0;
  const loanTerm = 5; // 5 months
  const adminFeeRate = 0.05; // 5%
  const totalAdminFee = loanAmount * adminFeeRate;
  const amountYouReceive = loanAmount - totalAdminFee;
  const monthlyPayment = loanAmount / loanTerm + totalAdminFee;
  const totalOutstanding = loanAmount + totalAdminFee * loanTerm;

  // Get payment dates
  const { firstPayment, lastPayment } = getPaymentDates(
    loanInfo?.repaymentDate ? new Date(loanInfo.repaymentDate) : undefined,
  );

  const handleContinue = () => {
    // Get complete application data for final submission
    const completeData = getCompleteApplication();
    console.log("Complete application:", completeData);
    onContinue();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccept = () => {
    // TODO - Add disbursement API call here
    handleContinue();
  };

  const handleDecline = () => {
    // Just close the modal without submitting
    console.log("User declined");
  };

  return (
    <section className="w-full">
      <div className="bg-secondary p-10 flex flex-col">
        <h2 className="text-3xl">Review Your Loan Details</h2>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-6">
          Please review your application details before proceeding.
        </p>

        <div className="space-y-6 mb-6">
          {/* Loan Summary Section */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Loan Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Monthly Payment Amount:</span>
                <span className="text-white font-semibold text-lg">
                  ${monthlyPayment.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Amount You Will Receive:</span>
                <span className="text-white font-semibold text-lg">
                  ${amountYouReceive.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Total Admin Fee:</span>
                <span className="text-white font-semibold">
                  ${totalAdminFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Total Outstanding:</span>
                <span className="text-white font-semibold">
                  ${totalOutstanding.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">First Payment Due Date:</span>
                <span className="text-white font-semibold">{firstPayment}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Length of Loan:</span>
                <span className="text-white font-semibold">
                  {loanTerm} months
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Final Payment Due Date:</span>
                <span className="text-white font-semibold">{lastPayment}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Effective Annual Rate:</span>
                <span className="text-white font-semibold">0%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Interest Rate:</span>
                <span className="text-white font-semibold">0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Payment Account:</span>
                <span className="text-white font-semibold">****4568</span>
              </div>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Personal Information
            </h3>
            {accountInfo && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex justify-between md:block">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white md:block">
                    {accountInfo.firstName} {accountInfo.middleName}{" "}
                    {accountInfo.lastName}
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-400">Date of Birth:</span>
                  <span className="text-white md:block">
                    {accountInfo.dateOfBirth}
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white md:block">
                    {accountInfo.emailAddress}
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-400">Phone:</span>
                  <span className="text-white md:block">
                    {accountInfo.phoneNumber}
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-400">Address:</span>
                  <span className="text-white md:block">
                    {accountInfo.street}, {accountInfo.city},{" "}
                    {accountInfo.state} {accountInfo.zipcode}
                  </span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="text-gray-400">Monthly Income:</span>
                  <span className="text-white md:block">
                    ${accountInfo.monthlyIncome}
                  </span>
                </div>
              </div>
            )}
          </div>

          <p className="text-gray-400 mb-6">
            <strong className="text-white">Note:</strong> The loan amount will
            be sent to the account ending with the last 4 digits shown above
            here.
            <br />
            The repayment amount will also be automatically taken from this
            account each month on the repayment date chosen or the prior
            business date if this date falls on a holiday or weekend.
          </p>
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
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAccept={handleAccept}
        onDecline={handleDecline}
        title="Accept Terms and Conditions"
      >
        <>
          <p className="leading-relaxed text-gray-300">
            By accepting these terms and conditions, you agree to the following
            loan agreement terms. This agreement outlines your responsibilities
            as a borrower and our commitments as a lender.
          </p>
          <p className="leading-relaxed text-gray-300">
            You acknowledge that the loan amount, interest rate, and repayment
            schedule have been clearly communicated to you. Late payments may
            result in additional fees and could affect your credit score.
          </p>
          <p className="leading-relaxed text-gray-300">
            Please ensure you have read and understood all terms before
            proceeding. By clicking "I Accept," you are entering into a legally
            binding agreement.
          </p>
        </>
      </Modal>
    </section>
  );
}
