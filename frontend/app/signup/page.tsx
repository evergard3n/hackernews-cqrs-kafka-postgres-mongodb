import { Metadata } from "next";
import Head from "next/head";
import SignUpForm from "../ui/components/signupform";

export const metadata: Metadata = {
  title: "Sign Up",
};
export default function SignUpPage() {
    return (
        <div className="w-3/4 lg:w-1/4">
            <SignUpForm/>
        </div>
    )
}