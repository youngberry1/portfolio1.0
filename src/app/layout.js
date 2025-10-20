// app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Abdul Barcky Arimiyao | Portfolio",
  description:
    "I'm a Full Stack Developer | UI/UX Enthusiast | Problem Solver. Crafting beautiful, functional web experiences.",
  openGraph: {
    title: "Abdul Barcky Arimiyao | Portfolio",
    description:
      "I'm a Full Stack Developer | UI/UX Enthusiast | Problem Solver. Crafting beautiful, functional web experiences.",
    url: "https://trendingboss.vercel.app/",
    siteName: "Abdul Barcky Arimiyao Portfolio",
    images: [
      {
        url: "/brand.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Barcky Arimiyao Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Barcky Arimiyao | Portfolio",
    description:
      "I'm a Full Stack Developer | UI/UX Enthusiast | Problem Solver. Crafting beautiful, functional web experiences.",
    creator: "@TrendingBoss1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        {metadata.openGraph.images.map((img, index) => (
          <meta key={index} property="og:image" content={img.url} />
        ))}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
      </Head>
      <body className={`${inter.variable} font-sans bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
