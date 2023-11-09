import React from "react";
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
import { deleteUser } from "@/libs/deleteUser";
import { toast } from "react-toastify";
import { useRouter } from "next-intl/client";

export default function DeleteUserCard({ user,logout }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: async (data) => {
        
        await logout();
        onClose();
      router.push("/");
      toast.success(`${data.firstName} Deleted Successfully.`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDeleteUser = async () => {
    mutation.mutate({ id: user.id });
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="ease-in-up flex items-center justify-between gap-5 rounded-md bg-red/70 px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:px-9 lg:px-6 xl:px-9"
      >
        Remove Account
        <span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24px"
            width="24px"
            className="text-white"
          >
            <path d="M20.37 8.91l-1 1.73-12.13-7 1-1.73 3.04 1.75 1.36-.37 4.33 2.5.37 1.37 3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
          </svg>
        </span>
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="text-dark dark:text-white bg-primary dark:bg-dark pt-6 rounded-md"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader backdrop="blur" className="flex gap-1">
                Delete User
                <span className="text-white dark:text-primary">{user.firstName} ?</span>
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button
                  className="border-2 border-primary rounded-md bg-transparent text-primary"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="danger"
                  type="submit"
                  onClick={handleDeleteUser}
                  className="flex rounded-md px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:shadow-signUp"
                >
                  {mutation.isPending ? `Deleting...` : "Delete"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
