import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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

      <div className="inline-block">
        <SignedIn>
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
