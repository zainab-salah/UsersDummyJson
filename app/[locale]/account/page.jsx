"use client";
import React from "react";
// import { useAuth } from "../context/AuthContext";

import Cookies from "js-cookie";
import SectionTitle from "@/components/common/SectionTitle";
import NoEnter from "@/components/common/NoEnter";
 
import Loading from "../loading";
import InfoCard from "@/components/Cards/InfoCard";

const Account = () => {
  const userDataCookie = Cookies.get("userData");
  const user = userDataCookie ? JSON.parse(userDataCookie) : null;


  return (
    <>
      <section className="relative z-10 py-28 md:py-36 lg:py-36">
        <div className="container overflow-hidden">
          <SectionTitle
            title="Account Settings"
            paragraph="Welcome to your Account Settings "
            center
            mb="80px"
          />
          {/* <div className="my-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:pr-0">
            <divnk
              href="/forget-password"
              className="ease-in-up   rounded-md bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp   md:px-9 lg:px-6 xl:px-9"
            >
              تغير كلمة مرور حسابي
            </divnk>
            <divnk
              href="/withdraw"
              className="  rounded-md border-2 border-white px-7 py-3 text-base font-bold text-dark hover:opacity-70 dark:text-white  "
            >
              اجراء عملية سحب اموال
            </divnk>

            <div></div>
          </div> */}
          {user ? (
            <>
            <InfoCard user={user} />
            </>
         
          ) : user ? <NoEnter /> : <Loading /> }

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              ></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-[-1]">
          <img src="/images/shapes/shape.svg" alt="shape" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Account;
