"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoanStore, LoanInfoData } from "@/app/store/loanStore";
import Button from "@/app/components/ui/Button";
import Slider from "@/app/components/ui/Slider";
import Input from "@/app/components/ui/Input";
import Card from "@/app/components/ui/Card";
import Modal from "@/app/components/ui/Modal";
import { getPaymentDates } from "@/app/utils/helper";

type LoanFormValues = {
  loanAmount: number;
  repaymentDate: string;
};

interface LoanInfoSectionProps {
  onBack: () => void;
  onContinue: (data: LoanFormValues) => void;
}

export default function LoanInfoSection({ onContinue }: LoanInfoSectionProps) {

  const storedLoanInfo = useLoanStore((state) => state.loanInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoanFormValues>({
    mode: "onBlur",
    defaultValues: storedLoanInfo || {
      loanAmount: 500,
      repaymentDate: "",
    },
  });

  // Watch form values
  const loanAmount = watch("loanAmount") || 500;
  const repaymentDate = watch("repaymentDate");

  // Calculate monthly fee (5% of loan amount)
  const monthlyFee = loanAmount * 0.05;

  // Calculate monthly payment (loan amount / repayment period + monthly fee). Default repayment period to 5
  const monthlyPayment = loanAmount / 5 + monthlyFee;

  // Get first and last payment dates based on repayment date or today
  const { firstPayment, lastPayment } = getPaymentDates(
    repaymentDate ? new Date(repaymentDate) : undefined,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataToSubmit, setFormDataToSubmit] = useState<LoanFormValues | null>(null);

  const onSubmit: SubmitHandler<LoanFormValues> = (data) => {
    console.log("Loan form data:", data);
    setFormDataToSubmit(data);
    setIsModalOpen(true);
  };

  const handleAccept = () => {
    // Submit the form when user accepts
    if (formDataToSubmit) {
      onContinue(formDataToSubmit);
    }
  };

  const handleDecline = () => {
    // Just close the modal without submitting
    console.log("User declined");
  };

  return (
    <section className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-secondary p-20 flex flex-col gap-10 items-center">
          <h2 className="text-3xl">
            Congratulations! You've been Approved for a Pay Advance Loan
          </h2>
          <div className="w-6/12 flex flex-col gap-10">
            <Slider
              value={loanAmount}
              onChange={(value) => setValue("loanAmount", value)}
            />

            <Input
              id="repaymentDate"
              label="Repayment Date"
              type="date"
              registration={register("repaymentDate", {
                required: "Repayment Date is required",
              })}
              error={errors.repaymentDate}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <div className="flex flex-col gap-12 items-center text-center max-w-2xl">
            <h2 className="text-2xl w-full">Loan Details</h2>

            <div className="flex flex-col md:flex-row gap-6">
              <Card
                title="Payment Time: Instant"
                description="Once you're approved and you accept a loan, you'll have the money in your account in seconds."
              />

              <Card
                title={`Monthly Fee: $${monthlyFee.toFixed(2)}`}
                description="This is a monthly fee charged for the service of the loan, priced at 20% of the loan amount"
              />

              <Card
                title={`Monthly Payment: $${monthlyPayment.toFixed(2)}`}
                description="The total monthly payment you make. No hidden fees, no surprises"
              />
            </div>
          </div>

          <div className="w-full max-w-2xl text-left text-gray-300 mt-8 mb-8 px-4">
            <p className="text-base leading-relaxed">
              So you'd make your first payment of ${monthlyPayment.toFixed(2)}{" "}
              on {firstPayment} and your last on {lastPayment}.
            </p>
          </div>
        </div>

        <div className="pt-4 text-center flex gap-4 justify-center">
          <Button
            text="Sounds Great, Continue"
            color="blue"
            size="wide"
            icon="forward"
            type={"submit"}
          />
        </div>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAccept={handleAccept}
        onDecline={handleDecline}
        title="Confirm Repayment Date"
      >
        <>
          <p className="leading-relaxed text-gray-300">
            You have selected {firstPayment} as your first loan payment date.
            All other payments will be collected on the same day of each month. This
            date is fixed for the life of the loan and will not be adjustable
            after you have completed the acceptance of this loan.
          </p>
          <p className="leading-relaxed text-gray-300">
            Please ensure that the repayment date you have selected coincides
            with your salary payment as this is the date that the loan payment
            will be taken from your account each month. If the date falls on a
            weekend or a public holiday, the payment will be taken the last
            business day before this date. If you wish to amend this date,
            select "Decline". To confirm this date, select "I accept".
          </p>
        </>
      </Modal>
    </section>
  );
}