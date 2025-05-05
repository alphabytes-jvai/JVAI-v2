// import type React from "react"
// import "./globals.css"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Join Venture AI - Intelligent Solutions for Business",
//   description: "Join Venture AI provides cutting-edge artificial intelligence solutions to transform your business.",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import AOSProvider from "@/components/AOSProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Join Venture AI - Intelligent Solutions for Business",
  description: "Join Venture AI provides cutting-edge artificial intelligence solutions to transform your business.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>{children}</AOSProvider> {/* Wrap children with AOSProvider */}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}