import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="rounded-lg bg-white text-3xl font-semibold transition-transform hover:scale-110 font-mono">
          {!user.isSignedIn && (
            <div className="p-3 ">
              <SignInButton />
            </div>
          )}{" "}
          {!!user.isSignedIn && (
            <div className="p-3 ">
              <SignOutButton />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
