import type { Metadata } from "next";
import { Header } from "@/src/modules/common/components/Header";
import { WalletProvider } from "@/src/modules/wagmi/components/WalletProvider";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soneium NFT",
  description:
    "A Demo app for minting NFTs on Soneium Minato"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <Header />
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}