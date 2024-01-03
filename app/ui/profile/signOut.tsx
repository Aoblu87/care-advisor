"use client";

import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();

  const navigate = () => router.push("/");

  //   const handleLogout = async () => {
  //     try {
  //       await fetch("/api/users/logout");
  //       navigate();
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //   };
  return (
    <button
      type="button"
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      onClick={() => {
        navigate();
      }}
    >
      Sign out
    </button>
  );
}
