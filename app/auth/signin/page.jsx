
'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-[55rem] w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-5xl font-bold text-center mb-6 text-gray-900">
            Sign In
          </h2>
          <p className="text-center text-gray-600 mb-6 text-2xl">
            Please sign in with your Google account.
          </p>
          <div className="flex justify-center mt-10">
            <div>
              <button
                onClick={() => signIn("google")}
                className="flex items-center justify-center gap-3 text-[15px] w-full px-20 py-5 bg-gray-100 text-black rounded-full hover:bg-sky-600/10 focus:outline-none focus:scale-[0.98]"
              >
                <Image
                  src="/images/google.svg"
                  className="h-30"
                  alt=""
                  height={25}
                  width={25}
                />

                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return ( 
    <div className="py-40 flex items-start justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
        <div className="md:flex justify-start items-center py-4 px-16">
          <div className="md:shrink-0">
            <Image
              className="h-32 w-full rounded-full object-cover md:h-20 md:w-20"
              src={session?.user?.image} // Fallback image if no avatar
              alt="User Avatar"
              width={20}
              height={20}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-3xl text-indigo-500 font-semibold">
              {session?.user?.name}
            </div>
            <p className="block mt-1 text-[14px] leading-tight font-medium text-black hover:underline">
              {session?.user?.email}
            </p>
            <button
              onClick={() => signOut()}
              className="mt-4 px-4 py-2 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
