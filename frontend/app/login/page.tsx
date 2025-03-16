import LoginForm from "../ui/components/loginform";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Log In",
};
export default function Login() {
  return (
    <div className="w-3/4 lg:w-1/4">
      <LoginForm />
    </div>
  );
}
