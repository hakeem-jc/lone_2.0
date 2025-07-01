import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import Slider from "@/app/components/ui/Slider";
import Stepper from "@/app/components/ui/Stepper";
import TimelineStepper from "@/app/components/ui/TimelineStepper";
import Footer from "@/app/components/Footer";

const Page = () => {
  const steps = [
    {
      title: "Personal Info",
      description: "Step details here",
      completed: true,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      ),
    },
    {
      title: "Account Info",
      description: "Step details here",
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
      title: "Review",
      description: "Step details here",
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
      title: "Confirmation",
      description: "Step details here",
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

      <section className="flex flex-col gap-6 p-4">
        <h1 className="text-center mb-4 text-lg">Component Library</h1>

        <div>
          <h2 className="mb-2">Buttons</h2>
          <div className="flex gap-4 ">
            <Button
              text="Choose Plan"
              color="blue"
              size="small"
              icon="forward"
            />
            <Button text="Expand" color="black" size="wide" icon="downward" />
          </div>
        </div>

        <div>
          <h2 className="mb-2">Cards</h2>
          <div className="flex gap-4 ">
            <Card
              title="Payment Time: Instant"
              description="Once you’re approved and you accept a loan, you’ll have the money in your account in seconds."
            />
          </div>
        </div>

        <div>
          <h2 className="mb-2">Slider</h2>
          <div className="flex gap-4 ">
            <Slider />
          </div>
        </div>

        <div>
          <div className="mb-2">Steppers</div>
          <Stepper
            steps={[
              {
                title: "User info",
                description: "Step details here",
                completed: true,
              },
              {
                title: "Company info",
                description: "Step details here",
                completed: false,
              },
              {
                title: "Payment info",
                description: "Step details here",
                completed: false,
              },
            ]}
          />

          <TimelineStepper steps={steps} />

        </div>


        <Footer />
      </section>
    </main>
  );
};

export default Page;
