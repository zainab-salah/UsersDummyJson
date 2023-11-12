"use client";
import Link from "next-intl/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { Shap1 } from "@/components/Shapes/Shap1";

import { useLocale, useTranslations } from "next-intl";
import { useAuth } from "../context/AuthContext";

const SigninPage = () => {
  const { user } = useAuth();
  const t = useTranslations(["login"]);
  const locale = useLocale();
  const rtl = locale == "ar" ? "rtl" : "";

  const schema = yup.object({
    username: yup.string().required(t("usernameReq")),

    password: yup.string().required(t("passReq")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    console.log(result);
  };

  return (
    <>
      <section className="relative lg:h-screen  z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className={`${rtl} mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 px-6 py-10 dark:bg-dark sm:p-[60px]`}
              >
                {user ? (
                  <>
                    <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                      {t("urSignedIn")}
                    </h3>
                    <div className="my-6">
                      <Link
                        href="/account"
                        className=" flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                      >
                        {t("GoToSettings")}
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                      {t("signIn")}
                    </h3>

                    <div className="mb-8 flex items-center justify-center mt-2">
                      <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
                      <p className="text-center mx-2 text-[#38973a]">
                        <span className="font-bold">{t("qlogin")} </span>
                        <br />
                        <span className="font-bold">{t("username")}: </span>
                        kminchelle
                        <br />
                        <span className="font-bold">{t("password")}: </span>
                        0lelplR
                      </p>
                      <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-8">
                        <label
                          htmlFor="username"
                          className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {t("username")}
                        </label>
                        <input
                          type="text"
                          name="username"
                          placeholder={`${t("EnterYour")} ${t("username")}`}
                          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...register("username")}
                        />
                        {errors.username && (
                          <p className="  my-1 text-red">
                            {errors.username.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-8">
                        <label
                          htmlFor="password"
                          className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          {t("password")}
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder={`${t("EnterYour")} ${t("password")}`}
                          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...register("password")}
                        />
                        {errors.password && (
                          <p className="  my-1 text-red">
                            {errors.password.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-6">
                        <button
                   
                          type="submit"
                          className=" flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                          login
                   
                        </button>
                      </div>
                    </form>
               
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Shap1 />
      </section>
    </>
  );
};

export default SigninPage;
