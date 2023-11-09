"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import SectionTitle from "@/components/common/SectionTitle";

import Loading from "../loading";

import { Shap3 } from "@/components/Shapes/Shap3";

import Shap2 from "@/components/Shapes/Shap2";
import ModalCard from "@/components/Cards/ModalCard";
import { useRouter } from "next/navigation";
import getcookie from "@/libs/getCookie";

const Account = () => {
  const userCredentials = getcookie();
  const id = userCredentials.id;
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      fetch(`https://dummyjson.com/users/${id}`).then((res) => res.json()),
  });

  const router = useRouter();
  if (!userCredentials) {
    router.push("/login");
  }
  const handleLogout = () => {
    Cookies.remove("userdata", { path: "/" });

    router.push("/login");
  };

  if (isPending || isFetching) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

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

          {data ? (
            <div
              className="wow fadeInUp  relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
              data-wow-delay=".2s"
            >
              <h3 className="mb-4 text-2xl font-bold leading-tight text-center text-black dark:text-white">
                Your Info
              </h3>
              <div className="flex items-center justify-center p-4 my-5">
                <img
                  src={data.image}
                  alt={data.username}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
              <div className="my-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:pr-0">
                <ModalCard user={data} />
                <button
                  onClick={handleLogout}
                  className="  rounded-md border-2 border-white px-7 py-3 text-base font-bold text-dark hover:opacity-70 dark:text-white  "
                >
                  Sign Out
                </button>
              </div>
              <div className="flex flex-col gap-4 text-body-color">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <div className="flex items-center gap-5">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                      >
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                      </svg>
                    </div>
                    <p>First Name: {data.firstName}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg
                        viewBox="0 0 640 512"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                      >
                        <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8 2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9 19.7-26.6 31.3-59.5 31.3-95.1 0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                      </svg>
                    </div>
                    <p>Last Name: {data.lastName}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <div className="flex items-center gap-5">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg
                        viewBox="0 0 384 512"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                      >
                        <path d="M192 368c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112zm0 64c97.2 0 176-78.8 176-176S289.2 80 192 80 16 158.8 16 256s78.8 176 176 176z" />
                      </svg>
                    </div>
                    <p>Gender : {data.gender}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                      >
                        <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <p>Email: {data.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <div className="flex items-center gap-5">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                      >
                        <path d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24s10.8 24 24 24zm-160-24c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64c0 35.3 28.7 64 64 64zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H320c0-44.18-35.82-80-80-80h-64c-44.2 0-80 35.8-80 80H64c-8.822 0-16-7.178-16-16V160h480v256zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24s10.8 24 24 24z" />
                      </svg>
                    </div>
                    <p>User Name: {data.username}</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                      >
                        <path d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394h164zM628 630H400V394h228v236z" />
                      </svg>
                    </div>
                    <p>User Id: {data.id}</p>
                  </div>
                </div>
              </div>

              <Shap2 />
            </div>
          ) : (
            <Loading />
          )}
        </div>

        <Shap3 />
      </section>
    </>
  );
};

export default Account;
