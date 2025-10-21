// app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://trendingboss.vercel.app"),
  title: "Abdul Barcky Arimiyao | Portfolio",
  description:
    "I'm a Full Stack Developer | UI/UX Enthusiast | Problem Solver. Crafting beautiful, functional web experiences.",
  icons: {
    icon: "/favicon.jpg",
  },
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
      <body className={`${inter.variable} font-sans bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
