"use client"
import Logo from "@/public/Logo";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import {Spinner} from "@nextui-org/react";
const Loading = () => {
  const t = useTranslations(["login"]);
  const locale = useLocale();

  const rtl = locale == "ar" ? "rtl" : "";

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50   ">
      <div className="wow relative rounded-md w-full h-full flex-col bg-primary/50 dark:bg-[#1D232D] p-8 z-50  flex  items-center justify-center">
     
  <Spinner size="lg"
          className="text-dark dark:text-white"
  
  />
        <Logo classes="w-[200px] dark:hidden mt-10 text-dark" />
        <Logo classes="hidden w-[200px] text-white mt-10 dark:block " />
        <p className={`${rtl} mt-10 text-primary font-bold dark:text-white`}>
          {t("signLoad")}
        </p>
      </div>
    </div>
  );
};

export default Loading;
