import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Macework Creativ",
    default: "Macework Creativ - Yaratıcı Teknoloji ve Ürün Stüdyosu",
  },
  description: "Macework Creativ, yenilikçi SaaS ürünleri, ölçeklenebilir dijital çözümler ve modern teknoloji altyapıları geliştiren kreatif stüdyodur.",
  openGraph: {
    title: "Macework Creativ - Yaratıcı Teknoloji ve Ürün Stüdyosu",
    description: "Macework Creativ, yenilikçi SaaS ürünleri ve dijital çözümler geliştiren kreatif teknoloji stüdyosudur.",
    url: "https://macework.com",
    siteName: "Macework Creativ",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macework Creativ - Yaratıcı Teknoloji ve Ürün Stüdyosu",
    description: "Yenilikçi SaaS ürünleri ve dijital çözümler geliştiren kreatif teknoloji stüdyosudur.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
