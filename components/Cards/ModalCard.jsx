"use client";

import React, { useState } from "react";
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

export default function ModalCard({ user, setNewUser }) {
  const [data, setData] = useState(user);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: data.id,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      gender: data.gender,
    },
  });
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: async (data) => {
      onClose();
      setData(data);
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
        Edit my Account
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
        className=" text-dark dark:text-white bg-body-color dark:bg-dark pt-6 rounded-md"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader backdrop="blur" className="flex flex-col gap-1">
                Edit your info
              </ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                  <div className="mb-2">
                    <label
                      htmlFor="username"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Update your  User Name"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("username")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="firstName"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Update your First Name"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("firstName")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="lastName"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Update your Last Name"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("lastName")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Update your Email"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="gender"
                      className=" mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Gender
                    </label>
                    <select
                      type="text"
                      name="gender"
                      placeholder="Chosse your Gender"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-dark dark:text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      {...register("gender")}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" className="border-2  text-base rounded-md border-white text-white" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    className=" flex   rounded-md dark:bg-primary bg-dark 
                    px-9 py-4 text-base font-medium text-white transition duration-300
                   ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  >
                    {mutation.isPending ? `Loading...` : "Update"}
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
