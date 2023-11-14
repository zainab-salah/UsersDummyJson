"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { AuthContextProvider } from "./context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react"
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
// import Loading from "./loading";
export default function Providers({ children, locale, messages,session }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <SessionProvider session={session}>


    <AuthContextProvider>
      <NextUIProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <QueryClientProvider client={queryClient}>
            <NextIntlClientProvider locale={locale} messages={messages}>
            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
        
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
              {children}
            </NextIntlClientProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </NextUIProvider>
    </AuthContextProvider>
    </SessionProvider>
  );
}
