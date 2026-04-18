import Topbar from "@/components/layout/topbar";
import "./globals.css"; // This links your theme to the whole site
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}