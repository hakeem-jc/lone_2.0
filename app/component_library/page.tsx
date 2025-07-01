"use client";
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

        <form className="max-w-3xl">
          <h3 className="mb-4 text-lg font-medium leading-none text-white">
            Forms
          </h3>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-secondary border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="username.example"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-secondary border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-secondary border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="bg-secondary border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••"
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="phone-input"
                className="block mb-2 text-sm font-medium text-white"
              >
                Phone number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-secondary border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                />
              </div>
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-400"
              >
                Select a phone number that matches the format.
              </p>
            </div>

            <label className="inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Toggle me
              </span>
            </label>
<div>
  <label
    htmlFor="countries"
    className="block mb-2 text-sm font-medium text-white"
  >
    Housing Status (Own, Rent, Other)
  </label>
  <select
    id="countries"
    className="bg-secondary border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option>Own</option>
    <option>Rent</option>
    <option>Other</option>
  </select>
</div>

            
          </div>

          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Next Step: Payment Info
          </button>
        </form>

        <Footer />
      </section>
    </main>
  );
};

export default Page;
