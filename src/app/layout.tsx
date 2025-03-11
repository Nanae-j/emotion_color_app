import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            <Header />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
