import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "../styles/globals.css";
import { siteMetadata } from "@/data/siteMetadata";
import { ThemeProvider } from "@/components/ThemeProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
