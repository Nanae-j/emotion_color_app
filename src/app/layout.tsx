import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";
import "./globals.css";
import ClientHeader from "@/components/ClientHeader";
import ServerHeader from "@/components/ServerHeader";

export const metadata: Metadata = {
  title: "HueDay",
  description:
    "HueDayは、日々の出来事や感情を色で表現し、シンプルにシェアするSNSです。象徴する色を選び、言葉とともに投稿することで、他のユーザーと共感し合い、感情や体験を深く共有できます。色を通じて、毎日をより豊かに感じ、他の人々とつながり共に成長する新しいSNSです！",
  openGraph: {
    title: "HueDay",
    description:
      "日々の出来事や感情を色で表現し、シェアするSNS。色を通じて毎日を豊かに感じよう。",
  },
  twitter: {
    title: "HueDay",
    description:
      "日々の出来事や感情を色で表現し、シェアするSNS。色を通じて毎日を豊かに感じよう",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={jaJP}
      // appearance={{
      //   layout: {
      //     unsafe_disableDevelopmentModeWarnings: true,
      //   },
      // }}
    >
      <html lang="jp">
        <body className="font-zen text-default">
          <div className="relative">
            {/* クライアント側のローディング処理 */}
            <ClientHeader />
            {/* サーバー側のヘッダー */}
            <ServerHeader />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
