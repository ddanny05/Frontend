import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nuestro primer sitio en nextjs",
  description: "construido con django y nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
