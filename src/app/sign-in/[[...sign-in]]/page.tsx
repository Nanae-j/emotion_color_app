import Header from "@/components/Header";
import SignUpAnime from "@/components/lottie/SignUpAnime";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative">
      <Header />
      <main className="overflow-x-hidden">
        <div className="relative flex h-screen items-center justify-center">
          <div className="bg-base absolute h-full w-full opacity-90"></div>
          <div className="absolute w-[150%] md:w-full md:max-w-[800px]">
            <SignUpAnime />
          </div>
          <div className="relative z-20 rounded-xl bg-white p-8 shadow">
            <SignIn
              appearance={{
                elements: {
                  cardBox: "!border-none !shadow-none",
                  card: "!border-none !shadow-none",
                  footer: "!bg-none",
                },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
