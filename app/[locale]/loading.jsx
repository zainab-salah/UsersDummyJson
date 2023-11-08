import Logo from "@/public/Logo";
import SvgImg from "/public/tail-spin.svg";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50   ">
      <div className="wow relative rounded-md w-full h-full flex-col bg-primary/50 dark:bg-[#1D232D] p-8 z-50  flex  items-center justify-center">
        <Image
          src={SvgImg}
          className="text-dark dark:text-white"
          alt="loader"
          width={100}
          height={100}
        />

        <Logo classes="w-[200px] dark:hidden mt-10 text-dark" />
        <Logo classes="hidden w-[200px] text-white mt-10 dark:block " />
        <p className="mt-10 text-primary font-bold dark:text-white">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
