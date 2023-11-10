import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Index";
import { notFound } from "next/navigation";
import Providers from "./providers";
import Head from "./head";
const inter = Inter({ subsets: ["latin"] });
 

async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <Head />
      <body
        className={`${inter.className} dark:bg-black`}
        suppressHydrationWarning={true}
      >
        <Providers locale={locale} messages={messages}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
