"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// サーバーコンポーネントは直接インポートできないため、
// クライアント側でUIを構築し、サーバーコンポーネントはページレベルで読み込む

const ClientHeader = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsReady(true);
      // 認証状態が変わったらページをリフレッシュ
      if (!isSignedIn) {
        router.refresh();
      }
    }
  }, [isLoaded, isSignedIn, router]);

  // ローディング中の表示
  if (!isReady) {
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
        {/* ローディングインジケーター */}
        <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
      </header>
    );
  }

  // 認証状態が確定したら、サーバーコンポーネントが適切に読み込まれるようにする
  return null;
};

export default ClientHeader;
