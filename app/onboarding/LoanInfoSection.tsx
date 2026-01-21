"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/app/components/ui/Button";
import Slider from "@/app/components/ui/Slider";
import Input from "@/app/components/ui/Input";
import Card from "@/app/components/ui/Card";
import { getPaymentDates } from "@/app/utils/helper";

type LoanFormValues = {
  loanAmount: number;
  repaymentDate: string;
};

interface LoanInfoSectionProps {
  onBack: () => void;
  onContinue: (data: LoanFormValues) => void;
}

export default function LoanInfoSection({
  onContinue,
}: LoanInfoSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoanFormValues>({
    mode: "onBlur",
    defaultValues: {
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

  const onSubmit: SubmitHandler<LoanFormValues> = (data) => {
    console.log("Loan form data:", data);
    onContinue(data);
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

        <div
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="flex flex-col gap-12 items-center text-center max-w-2xl">
            <h2 className="text-2xl  w-full">Loan Details</h2>

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
    </section>
  );
}
