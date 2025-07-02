import { Geist, Geist_Mono } from "next/font/google";
import { inter, poppins500 } from "@/styles";
import "./globals.css";
import "../styles/global.css";
import ThemeRegistry from "@/styles/ThemeRegistry";
import { Navbar } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EdRoro Nexus",
  description: "Next.js application with MUI and Emotion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${poppins500.className}`}>
        <ThemeRegistry>
          <Navbar transparent />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
