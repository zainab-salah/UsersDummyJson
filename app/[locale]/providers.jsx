"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
// import Loading from "./loading";
export default function Providers({ children, locale, messages }) {
  const queryClient = new QueryClient();
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const loadingTimer = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);

  //     return () => clearTimeout(loadingTimer);
  //   }, []);
  return (
    <AuthContextProvider>
      <NextUIProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <QueryClientProvider client={queryClient}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {/* {isLoading ? <Loading /> : <>{children}</>} */}
              {children}
            </NextIntlClientProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </NextUIProvider>
    </AuthContextProvider>
  );
}
