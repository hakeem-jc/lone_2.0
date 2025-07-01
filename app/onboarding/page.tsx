import Header from "@/app/components/Header";
import Stepper from "@/app/components/ui/Stepper";


const Page = () => {
  return (
    <main className="pt-24">
      <Header />
      <section className="flex flex-col gap-6 p-4">
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
              }
            ]}
          />
      </section>
    </main>
  );
}

export default Page;