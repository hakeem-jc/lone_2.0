"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Header from "@/app/components/Header";
import Stepper from "@/app/components/ui/Stepper";
import TimelineStepper from "@/app/components/ui/TimelineStepper";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Footer from "@/app/components/Footer";

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

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

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

  const onSubmitOne: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };

  const onSubmitTwo: SubmitHandler<FormValues> = (data: FormValues) => {
    // const file = data.file[0];
    // console.log('Uploaded file:', file);

    // // You can now send file via FormData, etc.
    // const formData = new FormData();
    // formData.append('file', file);
    console.log(data);
  };

  const onSubmitThree: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };

  const [currentPage, setCurrentPage] = useState("one");

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

        <section className="flex gap-15 p-4">
          <div>
            <TimelineStepper steps={steps} />
          </div>

          <section className="w-full">
            {currentPage === "one" && (
              <form onSubmit={handleSubmit(onSubmitOne)}>
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-lg block">Personal Info</h2>

                  <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Toggle me
                    </span>
                  </label>
                </div>

                <div className="grid gap-4 mb-4 sm:grid-cols-2">
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

                  {/* Housing Status dropdown */}
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
                    onClick={() => {
                      // TODO - Add next section logic
                    }}
                  />
                </div>
              </form>
            )}

            {currentPage === "two" && (
              <form onSubmit={handleSubmit(onSubmitTwo)}>
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-lg block">
                    Identity Verification / Know Your Customer
                  </h2>
                </div>

                {/* TODO - Add file upload component */}
                {/* <Input
                  id="firstName"
                  label="First Name"
                  placeholder="John"
                  registration={register("firstName", {
                    required: "First Name is required",
                    maxLength: 20,
                  })}
                  error={errors.firstName}
                /> */}

                <div>
                  <label className="block mb-1 font-medium">Upload File</label>
                  <input
                    type="file"
                    // {...register('file', { required: 'Please select a file' })}
                    className="block w-full"
                  />
                  {/* {errors.file && (
                      <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
                    )} */}
                </div>

                <div className="flex items-center mt-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    // {...register("privacyPolicy")}
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
                </div>
              </form>
            )}

            {currentPage === "three" && (
              <form onSubmit={handleSubmit(onSubmitThree)}>
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-lg block">Review and Confirmation</h2>
                </div>

                <section className="flex w-full flex-wrap">
                  <p className="w-1/3">
                    <strong>Name:</strong> Temp
                  </p>
                  <p className="w-1/3">
                    <strong>DOB:</strong>{" "}
                  </p>
                  <p className="w-1/3">
                    <strong>Email:</strong>{" "}
                  </p>
                  <p className="w-1/3">
                    <strong>Phone Number:</strong>{" "}
                  </p>
                  <p className="w-1/3">
                    <strong>Monthly Income:</strong>{" "}
                  </p>
                  <p className="w-1/3">
                    <strong>Monthly Rent / Mortgage Payment:</strong>{" "}
                  </p>
                  <div className="flex items-center mt-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      // {...register("privacyPolicy")}
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
                  </div>
                </section>
              </form>
            )}
          </section>
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
