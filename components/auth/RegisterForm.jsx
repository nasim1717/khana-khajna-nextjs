"use client";

import { createUsers } from "@/app/action";
import { validationForm } from "@/utils/formValidation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const [errorHandle, setErrorHandle] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const isError = validationForm(formInput);
    if (isError) {
      const mergeError = { ...errorHandle, ...isError };
      setErrorHandle(mergeError);
    } else {
      try {
        const response = await createUsers(formInput);
        if (response?.success) {
          router.push("/login");
        } else {
          setErrorHandle({ ...errorHandle, email: response?.email });
        }
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          className={
            errorHandle.firstName && !formInput.firstName ? "border-red-500" : "border-black/20"
          }
          onChange={(e) => {
            setFormInput({ ...formInput, firstName: e.target.value });
          }}
        />
        {!formInput.firstName && <h1 className="text-red-500">{errorHandle?.firstName}</h1>}
      </div>

      <div>
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          id="lname"
          className={
            errorHandle.lastName && !formInput.lastName ? "border-red-500" : "border-black/20"
          }
          onChange={(e) => {
            setFormInput({ ...formInput, lastName: e.target.value });
          }}
        />
        {!formInput.lastName && <h1 className="text-red-500">{errorHandle?.lastName}</h1>}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className={errorHandle.email && !formInput.email ? "border-red-500" : "border-black/20"}
          onChange={(e) => {
            setFormInput({ ...formInput, email: e.target.value });
          }}
        />
        {!formInput.email && <h1 className="text-red-500">{errorHandle?.email}</h1>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={
            errorHandle.password && !formInput.password ? "border-red-500" : "border-black/20"
          }
          onChange={(e) => {
            setFormInput({ ...formInput, password: e.target.value });
          }}
        />
        {!formInput.password && <h1 className="text-red-500">{errorHandle?.password}</h1>}
      </div>

      <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">
        Create Account
      </button>
    </form>
  );
}
