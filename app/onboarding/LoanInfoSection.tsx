"use client";
import Button from "@/app/components/ui/Button";
import Slider from "@/app/components/ui/Slider";

interface LoanInfoSectionProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function LoanInfoSection({ onBack, onContinue }: LoanInfoSectionProps) {
  return (
    <section className="w-full">
      <div>
        <div className="bg-secondary p-10">
          <h2 className="text-3xl">
            Congratulations! You've been Approved for a Pay Advance Loan
          </h2>
          <form action="">
            <Slider />
          </form>
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
            text="Continue to Review"
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