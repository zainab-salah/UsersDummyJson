"use client";

import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Search = () => {
  const [searchQ, setSearchQ] = useState("");
  const searchApi = process.env.SEARCH_API;
  const t = useTranslations("NavItems");
  const locale = useLocale();
  const rtl = locale == "ar" ? "rtl" : "";
  const { error, data } = useQuery({
    queryKey: ["search", searchQ],
    queryFn: () => fetch(`${searchApi}${searchQ}`).then((res) => res.json()),
  });
  const handleInputChange = (event) => {
    setSearchQ(event.target.value);
  };

  if (error) return toast.error(error.message);

  return (
    <>
      {data ? (
        <Autocomplete
          onChange={handleInputChange}
          defaultItems={data.users}
          variant="bordered"
          placeholder={t("search")}
          className={`max-w-xs ${rtl}`}
        >
          {(user) => (
            <AutocompleteItem key={user.id} textValue={user.firstName}>
              <Link href={`${user.id}`}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={user.firstName}
                    className="flex-shrink-0"
                    size="sm"
                    src={user.image}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{user.firstName}</span>
                    <span className="text-tiny text-default-400">
                      {user.email}
                    </span>
                  </div>
                </div>
              </Link>
            </AutocompleteItem>
          )}
        </Autocomplete>
      ) : null}
    </>
  );
};

export default Search;
