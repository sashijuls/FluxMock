import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FirebaseInit from "@/components/FirebaseInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Flux — Smart Finance for Indonesian Students in Taiwan",
  description:
    "Flux is the financial ecosystem built for Indonesian students studying in Taiwan. Send money smarter, pay tuition, and manage your wallet with zero stress.",
  keywords: ["fintech", "remittance", "Indonesian students", "Taiwan", "FluxSnipe", "FluxWallet"],
  openGraph: {
    title: "Flux — Smart Finance for Indonesian Students in Taiwan",
    description: "Easier remittance, smarter FX, student wallet — all in one app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <FirebaseInit />
        {children}
      </body>
    </html>
  );
}
