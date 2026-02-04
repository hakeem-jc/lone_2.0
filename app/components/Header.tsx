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
        </div>
      </div>
    </nav>
  );
};

export default Header;
