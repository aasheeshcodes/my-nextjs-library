// app/layout.js

import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js step by step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}