import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed z-[999] w-full rounded-b-2xl bg-white px-8 py-4 shadow">
      <h1>
        <Image
          src="/images/logo-square-dot.svg"
          alt="HueDay"
          width={125}
          height={60}
        />
      </h1>

      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
