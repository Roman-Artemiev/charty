import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/main/globals.scss";
import ClientProvider from "./ClientProvider";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charty",
  description: "Charty is a simple e-shop where you can view all games and 'buy' them. This is a demo project. No real purchases are made.",
  icons: {
    icon: [
      '/favicon/favicon.ico?v=4',
    ],
    apple: [
      '/favicon/apple-touch-icon?v=4',
    ],
    shortcut: [
      '/favicon/apple-touch-icon.png',
    ],
  },
  // manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={OpenSans.className} suppressHydrationWarning={true}>
          <ClientProvider>
            {children}
          </ClientProvider>
        </body>
      </html>
  );
}