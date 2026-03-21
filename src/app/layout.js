import Navbar from "../../components/Nav/Nav";
import Head from "./head";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { shrikhand } from "./fonts";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${work_sans.variable} ${shrikhand.variable}`}>
      <Head />
      <body>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
