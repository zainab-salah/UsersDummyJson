"use client";

import React from "react";
import { useForm } from "react-hook-form";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/libs/updateUser";
import { toast } from "react-toastify";
import { useLocale, useTranslations } from "next-intl";

export default function ModalCard({ user, setNewUser }) {
  const t = useTranslations(["EditCard"]);
  const locale = useLocale();
  const rtl = locale == "ar" ? "rtl" : "";
  
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: user?.id,
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      gender: user?.gender,
    },
  });
 

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: async (data) => {
      onClose();
 
      setNewUser(data);
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
      <button
        className="ease-in-up  flex items-cUpdate justify-between gap-5 rounded-md bg-primary px-8 py-3 
        text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:px-9 lg:px-6 xl:px-9"
        onClick={onOpen}
      >
        {t("editAccount")}
        <span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="18px"
            width="18px"
          >
            <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        </span>
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={`${rtl} text-dark dark:text-white  bg-body-color dark:bg-dark pt-6 rounded-md`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader backdrop="blur" className="flex flex-col gap-1">
                {t("title")}
              </ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                  <div className="mb-2">
                    <label
                      htmlFor="username"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("username")}
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder={`${t("udateYour")} ${t("username")}`}
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("username")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="firstName"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("fname")}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={`${t("udateYour")} ${t("fname")}`}
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("firstName")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="lastName"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("lname")}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder={`${t("udateYour")} ${t("lname")}`}
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("lastName")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={`${t("udateYour")} ${t("email")}`}
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="gender"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {t("gender")}
                    </label>
                    <select
                      type="text"
                      name="gender"
                      placeholder={`${t("udateYour")} ${t("gender")}`}
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("gender")}
                    >
                      <option value="male">{t("male")}</option>
                      <option value="female">{t("female")}</option>
                    </select>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    className="border-2  text-base rounded-md border-white text-white"
                    onPress={onClose}
                  >
                    {t("cancel")}
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    className=" flex   rounded-md dark:bg-primary bg-dark 
                    px-9 py-4 text-base font-medium text-white transition duration-300
                   ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  >
                    {mutation.isPending ? t("updating") : t("update")}
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}