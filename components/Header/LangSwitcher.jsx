"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");

  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const rtl = locale == "ar" ? "rtl" : "";
  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Select
      radius="sm"
      key="sm"
      placeholder={t("locale", { locale: locale })}
      className={`w-28 mr-20 md:mr-6 max-w-md !bg-transparent ${rtl} lg:mr-5`}
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
      color="default"
      classNames={{
       heading:"bg-transparent"
      }}
    >
      {["en", "ar"].map((cur) => (
        <SelectItem key={cur} value={cur} className="w-28 ">
          {t("locale", { locale: cur })}
        </SelectItem>
      ))}
    </Select>
  );
}
