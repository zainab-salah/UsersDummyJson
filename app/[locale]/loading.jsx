
import SvgImg from "/public/tail-spin.svg";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50   ">
      <div className="wow relative rounded-md w-full h-full flex-col bg-[#1D232D] p-8 z-50  flex  items-center justify-center">
        <Image
          src={SvgImg}
          className="text-primary"
          alt="loader"
          width={100}
          height={100}
        />
        <Image
          src="/next.svg"
          className="mt-10 "
          alt="logo"
          
          width={200}
          height={200}
        />
        <p className="mt-10 text-white font-bold "> Loading...</p>
      </div>
    </div>
  );
};

export default Loading;