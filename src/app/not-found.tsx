import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-5 text-xl tracking-wider">
          このページは見つかりません
        </p>
        <Link
          href={"/"}
          className="hover:text-red p-5 font-bold tracking-widest transition-colors"
        >
          TOPに戻る
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
