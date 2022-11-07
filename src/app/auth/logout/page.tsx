'use client'

import { signOut } from "next-auth/react"

const Page = () => {
  return (
    <div className="flex flex-col p-4 md:w-10/12 mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-light text-center">{"Log out"}</h1>
      </div>
      <div className="w-full max-w-[868px] mx-auto p-4">
        <button className="btn btn-primary" onClick={() => signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Page