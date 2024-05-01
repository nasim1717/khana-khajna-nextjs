"use client";

import { performLogin } from "@/app/action";
import { AuthConetxt } from "@/contexts";
import { validationForm } from "@/utils/formValidation";
import { useRouter } from "next/navigation";
import { useContext, useRef, useState } from "react";

export default function LoginForm() {
  const { setAuth } = useContext(AuthConetxt);
  const router = useRouter();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitResponse, setSubmitResponse] = useState(false);
  const [errorHandle, setEerroHandle] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const isError = validationForm(formData);
      if (isError) {
        const meargError = { ...errorHandle, ...isError };
        setEerroHandle(meargError);
        setSubmitResponse(false);
      } else {
        const response = await performLogin(formData);
        if (response?.success) {
          setFormData({ email: "", password: "" });
          setAuth(response?.user);
          formRef.current.reset();
          router.push("/");
        } else {
          setEerroHandle({ ...errorHandle, email: response?.email, password: response?.password });
          setSubmitResponse(true);
        }
      }
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  return (
    <form ref={formRef} className="login-form" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className={errorHandle.email && !formData.email ? "border-red-500" : "border-black/20"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {(errorHandle.email && submitResponse && (
          <h1 className="text-red-500">{errorHandle?.email}</h1>
        )) ||
          (!formData.email && <h1 className="text-red-500">{errorHandle?.email}</h1>)}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={
            errorHandle.password && !formData.password ? "border-red-500" : "border-black/20"
          }
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {(errorHandle?.password && submitResponse && (
          <h1 className="text-red-500">{errorHandle?.password}</h1>
        )) ||
          (!formData.password && <h1 className="text-red-500">{errorHandle?.password}</h1>)}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`${
          loading ? "bg-[#eb4a36] opacity-15" : "bg-[#eb4a36]"
        }  py-3 rounded-md text-white w-full mt-4`}
      >
        Login
      </button>
    </form>
  );
}
