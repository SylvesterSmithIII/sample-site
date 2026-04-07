import { Italiana } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const italiana = Italiana({
  variable: "--font-italiana",
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Butter & Crumb",
  description: "Example of a bakery website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${italiana.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        
        </body>
    </html>
  );
}