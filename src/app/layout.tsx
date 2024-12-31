import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LoadingScreen } from "@/components/loading";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tasks.mallardlabs.xyz"),
  title: "Tasks | Mallard Labs",
  description: "View tasks and track progress on Mallard Labs' public projects and initiatives.",
  openGraph: {
    title: "Tasks | Mallard Labs",
    description: "View tasks and track progress on Mallard Labs' public projects and initiatives.",
    images: [
      {
        url: "/tasksdotmallard.webp", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Mallard Labs Tasks"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasks | Mallard Labs",
    description: "View tasks and track progress on Mallard Labs' public projects and initiatives.",
    images: ["/tasksdotmallard.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
