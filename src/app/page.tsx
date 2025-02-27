import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Header from "../components/Header";
import SignUpAnime from "@/components/lottie/SignUpAnime";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="overflow-x-hidden">
        <SignedOut>
          <div className="relative flex h-screen items-center justify-center">
            <div className="bg-base absolute h-full w-full opacity-90"></div>
            <div className="absolute w-[150%] md:w-full md:max-w-[800px]">
              <SignUpAnime />
            </div>
            <div className="relative z-20 w-[90%] max-w-[800px] rounded-lg bg-white px-4 py-8 shadow">
              <p className="mb-8 text-center leading-[2] tracking-wider lg:text-xl">
                <span className="text-red p-2 text-xl font-black tracking-widest lg:text-2xl">
                  <span className="p-1">&quot;</span>
                  HueDay
                  <span className="p-1">&quot;</span>
                </span>
                では、
                <br />
                あなたの感情を色で表現し、
                <br />
                日々の経験を記録できます。
                <br />
                自分自身と向き合い、
                <br />
                共に成長していく新しいSNSの世界へようこそ！
              </p>
              <div className="flex items-center justify-center gap-x-7">
                <div className="text-red px-6 py-1 font-bold tracking-wide transition-all ease-in hover:opacity-70">
                  <SignInButton />
                </div>
                <div className="border-red bg-red hover:text-red o rounded-full border-2 px-6 py-1 font-bold tracking-wide text-white transition-all ease-in hover:bg-transparent">
                  <SignUpButton />
                </div>
              </div>
            </div>
          </div>
        </SignedOut>
      </main>
    </div>
  );
}
