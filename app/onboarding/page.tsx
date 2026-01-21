"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Header from "@/app/components/Header";
import Stepper from "@/app/components/ui/Stepper";
import TimelineStepper from "@/app/components/ui/TimelineStepper";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Footer from "@/app/components/Footer";
import Slider from "@/app/components/ui/Slider";

type FormValues = {
  prefill: boolean;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  emailAddress: string;
  phoneNumber: string;
  monthlyIncome: string;
  monthlyRent: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  housingStatus: string;
};

type FormValuesTwo = {
  file: FileList;
};

type FormValuesThree = {
  privacyPolicy: boolean;
};

type StoredFormData = {
  stepOne?: FormValues;
  stepTwo?: { fileName: string };
  stepThree?: FormValuesThree;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const {
    register: registerStepTwo,
    handleSubmit: handleSubmitStepTwo,
    formState: { errors: errorsStepTwo },
  } = useForm<FormValuesTwo>({
    mode: "onBlur",
  });

  const {
    register: registerStepThree,
    handleSubmit: handleSubmitStepThree,
    formState: { errors: errorsStepThree },
  } = useForm<FormValuesThree>({
    mode: "onBlur",
  });

  // State for main stepper (Account Info, Loan Info, Review, Disburse)
  const [currentMainStep, setCurrentMainStep] = useState(0);

  // State Account Info Section
  // TODO - Update this name to reflect that it's for the Account Info Section
  const [currentPage, setCurrentPage] = useState("one");
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  const isPageCompleted = (page: string) => {
    const pageOrder = ["one", "two", "three"];
    const currentIndex = pageOrder.indexOf(currentPage);
    const pageIndex = pageOrder.indexOf(page);
    return pageIndex <= currentIndex;
  };
  const [formData, setFormData] = useState<StoredFormData>({});
  const [isPrefilled, setIsPrefilled] = useState(false);

  const handleBack = () => {
    if (currentPage === "two") {
      setCurrentPage("one");
    } else if (currentPage === "three") {
      setCurrentPage("two");
    }
  };

  const steps = [
    {
      title: "Personal Info",
      description: "Tell us about yourself",
      completed: isPageCompleted("one"),
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
      completed: isPageCompleted("two"),
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
      completed: isPageCompleted("three"),
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

  const onSubmitOne: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    setFormData((prev) => ({ ...prev, stepOne: data }));
    setCurrentPage("two");
  };

  const onSubmitTwo: SubmitHandler<FormValuesTwo> = (data: FormValuesTwo) => {
    const file = data.file?.[0];
    if (!file) return;

    console.log("Uploaded file:", file);
    // const formDataObj = new FormData();
    // formDataObj.append("file", file);
    // setFormData((prev) => ({ ...prev, stepTwo: { fileName: file.name } }));

    const formData = new FormData();
    formData.append("file", file);
    setFormData((prev) => ({ ...prev, stepTwo: { fileName: file.name } }));

    setCurrentPage("three");
  };

  const onSubmitThree: SubmitHandler<FormValuesThree> = (
    data: FormValuesThree,
  ) => {
    console.log(data);
    setFormData((prev) => ({ ...prev, stepThree: data }));
    console.log("Complete form data:", { ...formData, stepThree: data });
    setCurrentMainStep(1);
  };

  const prefill = () => {
    if (!isPrefilled) {
      setValue("firstName", "John");
      setValue("middleName", "Williams");
      setValue("lastName", "Doe");
      setValue("dateOfBirth", "1990-05-15");
      setValue("emailAddress", "john.doe@example.com");
      setValue("phoneNumber", "+1 123 456 7890");
      setValue("monthlyIncome", "5000");
      setValue("monthlyRent", "1500");
      setValue("street", "123 Main St");
      setValue("city", "New York");
      setValue("state", "NY");
      setValue("zipcode", "10001");
      setValue("housingStatus", "rent");
      setIsPrefilled(true);
    } else {
      setValue("firstName", "");
      setValue("middleName", "");
      setValue("lastName", "");
      setValue("dateOfBirth", "");
      setValue("emailAddress", "");
      setValue("phoneNumber", "");
      setValue("monthlyIncome", "");
      setValue("monthlyRent", "");
      setValue("street", "");
      setValue("city", "");
      setValue("state", "");
      setValue("zipcode", "");
      setValue("housingStatus", "");
      setIsPrefilled(false);
    }
  };

  const handleContinueToReview = () => {
    setCurrentMainStep(2);
  };

  const handleContinueToDisburse = () => {
    setCurrentMainStep(3);
  };

  const handleBackToAccountInfo = () => {
    setCurrentMainStep(0);
    setCurrentPage("one");
  };

  const handleBackToLoanInfo = () => {
    setCurrentMainStep(1);
  };

  const handleBackToReview = () => {
    setCurrentMainStep(2);
  };

  return (
    <main className="pt-24">
      <Header />
      <section className="flex flex-col gap-10 p-4">
        <Stepper
          steps={[
            {
              title: "Account info",
              description: "Tell us about yourself",
              completed: currentMainStep >= 0,
            },
            {
              title: "Loan info",
              description: "How much do you want to borrow",
              completed: currentMainStep >= 1,
            },
            {
              title: "Review",
              description: "Wrap up some paperwork",
              completed: currentMainStep >= 2,
            },
            {
              title: "Disburse",
              description: "Money in your account in seconds",
              completed: currentMainStep >= 3,
            },
          ]}
        />

        <section className="flex gap-15 p-4">
          {currentMainStep === 0 ? (
            <>
              <div>
                <TimelineStepper steps={steps} />
              </div>

              <section className="w-full">
                {currentPage === "one" && (
                  <form onSubmit={handleSubmit(onSubmitOne)}>
                    <div className="flex justify-between items-center w-full">
                      <h2 className="text-lg block">Personal Info</h2>

                      <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={isPrefilled}
                          onChange={prefill}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Prefill with Demo Data
                        </span>
                      </label>
                    </div>

                    <div className="grid gap-10 mb-4 sm:grid-cols-2">
                      <Input
                        id="firstName"
                        label="First Name"
                        placeholder="John"
                        registration={register("firstName", {
                          required: "First Name is required",
                          maxLength: 20,
                        })}
                        error={errors.firstName}
                      />

                      <Input
                        id="middleName"
                        label="Middle Name"
                        placeholder="Williams"
                        registration={register("middleName", {
                          required: "Middle Name is required",
                          maxLength: 20,
                        })}
                        error={errors.middleName}
                      />

                      <Input
                        id="lastName"
                        label="Last Name"
                        placeholder="Doe"
                        registration={register("lastName", {
                          required: "Last Name is required",
                        })}
                        error={errors.lastName}
                      />

                      <Input
                        id="dateOfBirth"
                        label="Date of Birth"
                        type="date"
                        registration={register("dateOfBirth", {
                          required: "Date of birth is required",
                        })}
                        error={errors.dateOfBirth}
                      />

                      <Input
                        id="emailAddress"
                        label="Email Address"
                        type="email"
                        placeholder="john.doe@example.com"
                        registration={register("emailAddress", {
                          required: "Email is required",
                        })}
                        error={errors.emailAddress}
                      />

                      <Input
                        id="phoneNumber"
                        label="Phone Number"
                        type="tel"
                        placeholder="+1 123 456 7890"
                        registration={register("phoneNumber", {
                          required: "Phone number is required",
                        })}
                        error={errors.phoneNumber}
                      />

                      <Input
                        id="monthlyIncome"
                        label="Monthly Income"
                        type="number"
                        placeholder="5000"
                        registration={register("monthlyIncome")}
                        error={errors.monthlyIncome}
                      />

                      <Input
                        id="monthlyRent"
                        label="Monthly Rent"
                        type="number"
                        placeholder="1500"
                        registration={register("monthlyRent")}
                        error={errors.monthlyRent}
                      />

                      <Input
                        id="street"
                        label="Street"
                        placeholder="123 Main St"
                        registration={register("street")}
                        error={errors.street}
                      />

                      <Input
                        id="city"
                        label="City"
                        placeholder="New York"
                        registration={register("city")}
                        error={errors.city}
                      />

                      <Input
                        id="state"
                        label="State"
                        placeholder="NY"
                        registration={register("state")}
                        error={errors.state}
                      />

                      <Input
                        id="zipcode"
                        label="Zip Code"
                        placeholder="10001"
                        registration={register("zipcode")}
                        error={errors.zipcode}
                      />

                      <div>
                        <label
                          htmlFor="housingStatus"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Housing Status
                        </label>
                        <select
                          id="housingStatus"
                          className="bg-secondary border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          {...register("housingStatus")}
                        >
                          <option value="">Select</option>
                          <option value="rent">Rent</option>
                          <option value="own">Own</option>
                          <option value="with_family">With Family</option>
                        </select>
                        {errors.housingStatus && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.housingStatus.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="pt-4 text-center">
                      <Button
                        text="Save and Continue"
                        color="blue"
                        size="wide"
                        icon={false}
                        type={"submit"}
                      />
                    </div>
                  </form>
                )}

                {currentPage === "two" && (
                  <form onSubmit={handleSubmitStepTwo(onSubmitTwo)}>
                    <div className="flex justify-between items-center w-full mb-4">
                      <h2 className="text-lg block">
                        Identity Verification / Know Your Customer
                      </h2>
                    </div>

                    <div className="mb-6">
                      <button
                        type="button"
                        className="relative flex w-full border overflow-hidden border-neutral-700 shadow-2xs rounded-lg text-sm focus:outline-hidden focus:z-10 focus:border-neutral-600 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 text-neutral-400"
                      >
                        <span className="h-full py-3 px-4 bg-neutral-800 text-nowrap">
                          Choose File
                        </span>
                        <span
                          className="group grow flex overflow-hidden h-full py-3 px-4"
                          data-hs-file-upload-previews=""
                        >
                          <span className={selectedFileName ? "hidden" : ""}>
                            No Chosen File
                          </span>
                          {selectedFileName && (
                            <span className="text-white">
                              {selectedFileName}
                            </span>
                          )}
                        </span>
                        <span className="absolute top-0 left-0 size-full opacity-0 cursor-pointer">
                          <input
                            type="file"
                            {...registerStepTwo("file", {
                              required: "Please select a file",
                            })}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                setSelectedFileName(file.name);
                              }
                            }}
                            className="w-full h-full cursor-pointer"
                          />
                        </span>
                      </button>

                      {errorsStepTwo.file && (
                        <p className="text-red-500 text-sm mt-1">
                          {errorsStepTwo.file.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 text-center flex gap-4 justify-center">
                      <Button
                        text="Back"
                        color="black"
                        size="wide"
                        icon={false}
                        type={"button"}
                        onClick={handleBack}
                      />
                      <Button
                        text="Save and Continue"
                        color="blue"
                        size="wide"
                        icon={false}
                        type={"submit"}
                      />
                    </div>
                  </form>
                )}

                {currentPage === "three" && (
                  <form onSubmit={handleSubmitStepThree(onSubmitThree)}>
                    <div className="flex justify-between items-center w-full">
                      <h2 className="text-lg block">Review and Confirmation</h2>
                    </div>

                    <section className="flex w-full flex-wrap">
                      <p className="w-1/3 pb-4 pt-4">
                        <strong>Name:</strong> {formData.stepOne?.firstName}{" "}
                        {formData.stepOne?.middleName}{" "}
                        {formData.stepOne?.lastName}
                      </p>
                      <p className="w-1/3">
                        <strong>DOB:</strong> {formData.stepOne?.dateOfBirth}
                      </p>
                      <p className="w-1/3">
                        <strong>Email:</strong> {formData.stepOne?.emailAddress}
                      </p>
                      <p className="w-1/3">
                        <strong>Phone Number:</strong>{" "}
                        {formData.stepOne?.phoneNumber}
                      </p>
                      <p className="w-1/3">
                        <strong>Monthly Income:</strong> $
                        {formData.stepOne?.monthlyIncome}
                      </p>
                      <p className="w-1/3">
                        <strong>Monthly Rent / Mortgage Payment:</strong> $
                        {formData.stepOne?.monthlyRent}
                      </p>
                      <div className="flex items-center mt-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          {...registerStepThree("privacyPolicy")}
                          className="cursor-pointer w-4 h-4 text-blue-600 rounded-sm focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                        />
                        <label
                          htmlFor="privacyPolicy"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          I’ve read the{" "}
                          <span className="font-semibold cursor-pointer">
                            privacy policy
                          </span>{" "}
                          and consent to identity verification
                        </label>
                        {errorsStepThree.privacyPolicy && (
                          <p className="text-red-500 text-sm mt-1">
                            {errorsStepThree.privacyPolicy.message}
                          </p>
                        )}
                      </div>
                    </section>
                    <div className="pt-4 text-center flex gap-4 justify-center">
                      <Button
                        text="Back"
                        color="black"
                        size="wide"
                        icon={false}
                        type={"button"}
                        onClick={handleBack}
                      />
                      <Button
                        text="Save and Continue"
                        color="blue"
                        size="wide"
                        icon={false}
                        type={"submit"}
                      />
                    </div>
                  </form>
                )}
              </section>
            </>
          ) : currentMainStep === 1 ? (
            <section className="w-full">
              <div>
                <div className="bg-secondary p-10">
                  <h2 className="text-3xl">
                    Congratulations! You’ve been Approved for a Pay Advance Loan
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
                    onClick={handleBackToAccountInfo}
                  />
                  <Button
                    text="Continue to Review"
                    color="blue"
                    size="wide"
                    icon={false}
                    type={"button"}
                    onClick={handleContinueToReview}
                  />
                </div>
              </div>
            </section>
          ) : currentMainStep === 2 ? (
            <section className="w-full">
              <div className="flex justify-between items-center w-full mb-6">
                <h2 className="text-2xl font-bold block">Step 3</h2>
              </div>

              <div className="pt-4 text-center flex gap-4 justify-center">
                <Button
                  text="Back"
                  color="black"
                  size="wide"
                  icon={false}
                  type={"button"}
                  onClick={handleBackToLoanInfo}
                />
                <Button
                  text="Continue to Disburse"
                  color="blue"
                  size="wide"
                  icon={false}
                  type={"button"}
                  onClick={handleContinueToDisburse}
                />
              </div>
            </section>
          ) : (
            <section className="w-full">
              <div className="flex justify-between items-center w-full mb-6">
                <h2 className="text-2xl font-bold block">Disburse</h2>
              </div>

              <div className="rounded-lg p-6 text-center">
                <div className="mb-6">
                  <svg
                    className="mx-auto h-16 w-16 text-green-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Application Approved!
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Your loan has been approved and funds will be disbursed
                    shortly.
                  </p>
                </div>

                <div className="rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-400 mb-2">
                    Disbursement Amount
                  </p>
                  <p className="text-3xl font-bold text-white">$5,000.00</p>
                </div>

                <div className="text-left space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Processing Time:</span>
                    <span className="text-white">1-2 business days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Account:</span>
                    <span className="text-white">****1234</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-500">Processing</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-4 justify-center">
                  <Button
                    text="Back to Review"
                    color="black"
                    size="wide"
                    icon={false}
                    type={"button"}
                    onClick={handleBackToReview}
                  />
                  <Button
                    text="Download Receipt"
                    color="blue"
                    size="wide"
                    icon={false}
                    type={"button"}
                  />
                </div>
              </div>
            </section>
          )}
        </section>
      </section>

      <div className="text-center my-10">
        <p>
          We’ll never share your details. See our{" "}
          <span className="font-semibold cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
