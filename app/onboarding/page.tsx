"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Stepper from "@/app/components/ui/Stepper";
import Footer from "@/app/components/Footer";
import AccountInfoSection from "./AccountInfoSection";
import LoanInfoSection from "./LoanInfoSection";
import ReviewSection from "./ReviewSection";
import DisburseSection from ".//DisburseSection";

type StoredFormData = {
  stepOne?: any;
  stepTwo?: { fileName: string };
  stepThree?: any;
};

const Page = () => {
  const [currentMainStep, setCurrentMainStep] = useState(0);
  const [accountFormData, setAccountFormData] = useState<StoredFormData>({});

  const handleAccountInfoComplete = (data: StoredFormData) => {
    setAccountFormData(data);
    setCurrentMainStep(1);
  };

  const handleBackToAccountInfo = () => {
    setCurrentMainStep(0);
  };

  const handleContinueToReview = () => {
    setCurrentMainStep(2);
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
      <section className="flex flex-col gap-10 p-4">
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

        <section className="flex gap-15 p-4">
          {currentMainStep === 0 && (
            <AccountInfoSection onComplete={handleAccountInfoComplete} />
          )}
          
          {currentMainStep === 1 && (
            <LoanInfoSection
              onBack={handleBackToAccountInfo}
              onContinue={handleContinueToReview}
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
          <span className="font-semibold cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Page;