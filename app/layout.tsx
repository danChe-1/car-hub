import type { Metadata } from "next";
import "./globals.css";
import { NavBar, Footer } from "./components";

export const metadata: Metadata = {
  title: "Car showcase",
  description: "Car showcase website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

