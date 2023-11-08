import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Index";
import { notFound } from "next/navigation";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className}   dark:bg-black  `}
        suppressHydrationWarning={true}
      >
        <Providers locale={locale} messages={messages}>
          {/* <Header /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
