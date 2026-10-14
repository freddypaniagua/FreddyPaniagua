import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DemoBanner from "@/components/DemoBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.demoNotice} ${site.tagline}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-zinc-100">
        <DemoBanner />
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
