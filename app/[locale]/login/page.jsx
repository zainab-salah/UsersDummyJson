"use client";
import Link from "next-intl/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Shap1 } from "@/components/Shapes/Shap1";

import { useRouter } from "next-intl/client";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const SigninPage = () => {
  const { user, login } = useAuth();
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

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      reset();
      router.push("/account");
      toast.success("Logged In!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 px-6 py-10 dark:bg-dark sm:p-[60px]">
                {user ? (
                  <>
                    <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                      You're Signed in!
                    </h3>
                    <div className="my-6">
                        <Link
                         href="/account"
                        
                          className=" flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                     Go to your account settings
                        </Link>
                      </div>
                  </>
                ) : (
                  <>
                    <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                      Sign In
                    </h3>
                

                    <div className="mb-8 flex items-center justify-center">
                      <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>

                      <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-8">
                        <label
                          htmlFor="username"
                          className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter your  User Name"
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
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter your Password"
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
                          disabled={
                            mutation.isPending ||
                            mutation.isLoading ||
                            mutation.isFetching
                          }
                          type="submit"
                          className=" flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                        >
                          {mutation.isPending ? `Loading...` : "Sign In"}
                        </button>
                      </div>
                    </form>
                    {/* <p className="text-center text-base font-medium text-body-color">
                  Don't Have an account?
                  <Link
                    href="/signup"
                    className="mx-1 text-primary hover:underline"
                  >
                    Create New Account
                  </Link>
                </p> */}
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

// const schema = yup.object({
//   email: yup
//     .string()
//     .required("البريد الالكتروني مطلوب!")
//     .email("الرجاء ادخل بريد الكتروني صالح"),
//   password: yup.string().required("كلمة المرور مطلوبة!"),
// });
const schema = yup.object({
  username: yup.string().required("User name is required!"),

  password: yup.string().required("Password is required!"),
});
