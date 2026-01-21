"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/app/components/ui/Button";
import Slider from "@/app/components/ui/Slider";
import Input from "@/app/components/ui/Input";

type LoanFormValues = {
  loanAmount: number;
  repaymentDate: string;
};

interface LoanInfoSectionProps {
  onBack: () => void;
  onContinue: (data: LoanFormValues) => void;
}

export default function LoanInfoSection({
  onBack,
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
      loanAmount: 0,
      repaymentDate: "",
    },
  });

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
              value={watch("loanAmount")}
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

        <div className="pt-4 text-center flex gap-4 justify-center">
          <Button
            text="Sounds Great, Continue"
            color="black"
            size="wide"
            icon="forward"
            type={"submit"}
          />
        </div>
      </form>
    </section>
  );
}