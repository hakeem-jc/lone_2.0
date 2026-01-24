"use client";
import { useState } from "react";
import { useLoanStore } from "@/app/store/loanStore";
import Header from "@/app/components/Header";
import Stepper from "@/app/components/ui/Stepper";
import Footer from "@/app/components/Footer";
import AccountInfoSection from "./AccountInfoSection";
import LoanInfoSection from "./LoanInfoSection";
import ReviewSection from "./ReviewSection";
import DisburseSection from "./DisburseSection";
import Modal from "@/app/components/ui/Modal";
import PrivacyModalContent from "@/app/components/PrivacyModalContent";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Get state and actions from Zustand store
  const currentMainStep = useLoanStore((state) => state.currentMainStep);
  const setCurrentMainStep = useLoanStore((state) => state.setCurrentMainStep);
  const setAccountInfo = useLoanStore((state) => state.setAccountInfo);
  const setKYC = useLoanStore((state) => state.setKYC);
  const setPrivacyPolicy = useLoanStore((state) => state.setPrivacyPolicy);
  const setLoanInfo = useLoanStore((state) => state.setLoanInfo);

  const handleAccountInfoComplete = (data: any) => {
    setAccountInfo(data.stepOne);
    setKYC(data.stepTwo);
    setPrivacyPolicy(data.stepThree);
    setCurrentMainStep(1);
  };

  const handleLoanInfoComplete = (data: any) => {
    setLoanInfo(data);
    setCurrentMainStep(2);
  };

  const handleBackToAccountInfo = () => {
    setCurrentMainStep(0);
  };

  const handleBackToLoanInfo = () => {
    setCurrentMainStep(1);
  };

  const handleContinueToDisburse = () => {
    setCurrentMainStep(3);
  };

  const handleBackToReview = () => {
    setCurrentMainStep(2);
  };

  return (
    <main className="pt-24">
      <Header />
      <section className="flex flex-col gap-10">
        <Stepper
          steps={[
            {
              title: "Account info",
              description: "Tell us about yourself",
              completed: currentMainStep >= 0,
            },
            {
              title: "Loan info",
              description: "How much do you want to borrow",
              completed: currentMainStep >= 1,
            },
            {
              title: "Review",
              description: "Wrap up some paperwork",
              completed: currentMainStep >= 2,
            },
            {
              title: "Disburse",
              description: "Money in your account in seconds",
              completed: currentMainStep >= 3,
            },
          ]}
        />

        <section className="flex gap-15">
          {currentMainStep === 0 && (
            <AccountInfoSection onComplete={handleAccountInfoComplete} />
          )}

          {currentMainStep === 1 && (
            <LoanInfoSection
              onBack={handleBackToAccountInfo}
              onContinue={handleLoanInfoComplete}
            />
          )}

          {currentMainStep === 2 && (
            <ReviewSection
              onBack={handleBackToLoanInfo}
              onContinue={handleContinueToDisburse}
            />
          )}

          {currentMainStep === 3 && (
            <DisburseSection onBack={handleBackToReview} />
          )}
        </section>
      </section>

      <div className="text-center my-10">
        <p>
          We'll never share your details. See our{" "}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="font-semibold cursor-pointer text-white hover:underline"
          >
            Privacy Policy
          </button>
        </p>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Lone Privacy Policy"
        showFooter={false}
      >
        <PrivacyModalContent />
      </Modal>
    </main>
  );
};

export default Page;
