import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Progress from "@/components/Progress";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

export const metadata: Metadata = {
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%23b85c38'/%3E%3Ctext x='50' y='68' font-size='54' text-anchor='middle' fill='white' font-family='Georgia'%3ER%3C/text%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f4",
};

// Applies the saved / system colour theme before first paint (no flash).
const themeScript = `try{var t=localStorage.getItem('rd-theme');if(t)document.documentElement.setAttribute('data-theme',t);else if(matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.setAttribute('data-theme','dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Progress />
        <Header />
        <MobileMenu />
        {children}
        <Footer />
        <ToTop />
        {/* Site interactions: theme toggle, reveal animations, menu, carousel, WhatsApp, etc. */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
