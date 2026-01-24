"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/Button";
import { useLoanStore } from "@/app/store/loanStore";

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const applicationStarted = useLoanStore((state) => state.applicationStarted);
  const setApplicationStarted = useLoanStore(
    (state) => state.setApplicationStarted,
  );
  const resetApplication = useLoanStore((state) => state.resetApplication);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleGetStarted = () => {
    setApplicationStarted(true);
    router.push("/onboarding");
  };

  const handleCancelApplication = () => {
    if (
      confirm(
        "Are you sure you want to cancel your application? All progress will be lost.",
      )
    ) {
      resetApplication();
      router.push("/");
    }
  };

  return (
    <nav className="bg-secondary fixed w-full z-20 top-0 start-0 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="./"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./logo.png" className="h-14" alt="Lone Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {applicationStarted ? (
            <Button
              text="Cancel Application"
              color="blue"
              size="small"
              icon={false}
              onClick={handleCancelApplication}
            />
          ) : (
            <Button
              text="Get Started"
              color="blue"
              size="small"
              icon="forward"
              onClick={handleGetStarted}
            />
          )}

          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "flex" : "hidden"
          }`}
          id="navbar-sticky"
        ></div>
      </div>
    </nav>
  );
};

export default Header;
