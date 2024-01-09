"use client";
import Link from "next/link";
import { useState } from "react";
import ButtonGoogleAuth from "./button-google-auth";
import LoginForm from "./login-form";

export default function Login() {
  const [loading, setLoading] = useState(false);


  
  return (
    <>
      <div>
        <div className=" mt-0  sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Sign in
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Don&apos;t have an account yet?
                  <Link
                    href="/auth/registrer"
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                  
                <ButtonGoogleAuth />

                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                  Or
                </div>
                {loading ? (
                  <div className="flex justify-center">
                    <div
                      className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <LoginForm loading={loading} setLoading={setLoading} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
