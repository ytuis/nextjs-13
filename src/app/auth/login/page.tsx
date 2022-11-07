'use client'

import { signIn } from "next-auth/react"

const Page = () => {
  return (
    <div className="flex flex-col p-4 md:w-10/12 mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-light text-center">{"sign in"}</h1>
      </div>
      <div className="w-full max-w-[868px] mx-auto p-4">
        <button className="btn btn-primary" onClick={() => signIn("google")}>
          sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Page
