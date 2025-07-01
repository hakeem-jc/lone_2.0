import Header from "@/app/components/Header";
import Stepper from "@/app/components/ui/Stepper";
import TimelineStepper from "@/app/components/ui/TimelineStepper";

const Page = () => {
  const steps = [
    {
      title: "Personal Info",
      description: "Tell us about yourself",
      completed: false,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
        </svg>
      ),
    },
    {
      title: "Identity Verification (KYC)",
      description: "Validate your ID",
      completed: false,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
        </svg>
      ),
    },
    {
      title: "Review and Confirmation",
      description: "One last check",
      completed: false,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="pt-24">
      <Header />
      <section className="flex flex-col gap-10 p-4">
        <Stepper
          steps={[
            {
              title: "Account info",
              description: "Tell us about yourself",
              completed: true,
            },
            {
              title: "Loan info",
              description: "How much do you want to borrow",
              completed: false,
            },
            {
              title: "Review",
              description: "Wrap up some paperwork",
              completed: false,
            },
            {
              title: "Disburse",
              description: "Money in your account in seconds",
              completed: false,
            },
          ]}
        />

        <section className="flex gap-12 p-4">
          <TimelineStepper steps={steps} />

          <section>
            <h2 className="text-lg">Personal Info</h2>

            
          </section>

        </section>
      </section>
    </main>
  );
};

export default Page;
