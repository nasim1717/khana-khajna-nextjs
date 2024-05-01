"use client";
import { AuthConetxt } from "@/contexts";
import { useState } from "react";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  return <AuthConetxt.Provider value={{ auth, setAuth }}>{children}</AuthConetxt.Provider>;
}
