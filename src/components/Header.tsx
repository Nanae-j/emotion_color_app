import { prisma } from "@/lib/prisma";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  const { userId } = await auth();

  if (!userId) {
    return;
  }

  const username = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      username: true,
    },
  });

  // console.log(username);

  return (
    <header className="fixed z-[999] flex w-full items-center justify-between rounded-b-2xl bg-white px-8 py-4 shadow">
      <h1 className="inline-block">
        <Link href="/" className="block w-[80px] md:w-auto">
          <Image
            src="/images/logo-square-dot.svg"
            alt="HueDay"
            className="block"
            width={125}
            height={60}
          />
        </Link>
      </h1>

      <div className="flex items-center gap-3">
        <SignedIn>
          <Link
            href={`/profile/${username?.username}`}
            className="hover:text-orange p-1 text-xs transition-all md:text-sm"
          >
            プロフィール
          </Link>
          <UserButton
            showName={true}
            appearance={{
              elements: {
                userButtonOuterIdentifier: "!text-default",
                userButtonAvatarBox: "md:!w-[50px] md:!h-[50px]",
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
