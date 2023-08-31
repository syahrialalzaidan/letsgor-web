import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LetsGOR",
  description: "Titipin is a platform for you to book field.",
  icons: {
    icon: "/logo/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <link rel="icon" href="/logo/Logo.svg" />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
