import { Inter } from "next/font/google";
import { LoadingScreen } from "@/components/loading";
import "./globals.css";
import Head from "next/head";

// Define the OGImage type
interface OGImage {
    url: string;
    width: number;
    height: number;
    alt: string;
}

// Existing TwitterMetadata and AppMetadata interfaces
interface TwitterMetadata {
    card: string;
    title: string;
    description: string;
    images: string[];
}

interface AppMetadata {
    metadataBase: URL;
    title: string;
    description: string;
    openGraph: {
        title: string;
        description: string;
        images: OGImage[]; // Use OGImage type here
        type: string;
    };
    twitter: TwitterMetadata;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: AppMetadata = {
  metadataBase: new URL("https://tasks.mallardlabs.xyz"),
  title: "Tasks | Mallard Labs",
  description: "View taskboards for Mallard Labs' projects.",
  openGraph: {
    title: "Tasks | Mallard Labs",
    description: "View taskboards for Mallard Labs' projects.",
    images: [
      {
        url: "/tasksdotmallard.webp",
        width: 1200,
        height: 630,
        alt: "Mallard Labs Tasks",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasks | Mallard Labs",
    description: "View taskboards for Mallard Labs' projects.",
    images: ["/tasksdotmallard.webp"],
  },
};

const twitterMetadata = {
  card: "summary_large_image",
  title: "Tasks | Mallard Labs",
  description: "View taskboards for Mallard Labs' projects.",
  images: ["/tasksdotmallard.webp"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title || "Tasks | Mallard Labs")}</title>
        <meta name="description" content={String(metadata.description || "View taskboards for Mallard Labs' projects.")} />
        <meta property="og:title" content={String(metadata.openGraph?.title || "Tasks | Mallard Labs")} />
        <meta property="og:description" content={String(metadata.openGraph?.description || "View taskboards for Mallard Labs' projects.")} />
        <meta property="og:image" content={String(Array.isArray(metadata.openGraph?.images) ? (metadata.openGraph.images[0] as OGImage)?.url : "/tasksdotmallard.webp")} />
        <meta property="og:image:width" content={String(Array.isArray(metadata.openGraph?.images) ? (metadata.openGraph.images[0] as OGImage)?.width : 1200)} />
        <meta property="og:image:height" content={String(Array.isArray(metadata.openGraph?.images) ? (metadata.openGraph.images[0] as OGImage)?.height : 630)} />
        <meta property="twitter:card" content={twitterMetadata.card} />
        <meta property="twitter:title" content={twitterMetadata.title} />
        <meta property="twitter:description" content={twitterMetadata.description} />
        <meta property="twitter:image" content={twitterMetadata.images[0]} />
      </Head>
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
