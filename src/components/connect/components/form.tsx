"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalConnect } from "./modal";
import { ButtonSubmit } from "./button";
import clsx from "clsx";

export const ConnectForm = () => {
  const t = useTranslations("Connect");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [tel, setTel] = useState("");
  const [telError, setTelError] = useState(false);
  const [plan, setPlan] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ---------------------------- FORM START ------------------------------------

  // ---------------------------- Input name ------------------------------------
  const changeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(e.target.value.length === 0);
  };
  // ---------------------------- Input end ------------------------------------

  // ---------------------------- Input tel ------------------------------------
  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(3); // "+998" prefiksini tashlab ketish
    let formatted = "";
    if (digits.length > 0) formatted += `(${digits.slice(0, 2)}`;
    if (digits.length >= 3) formatted += `)-${digits.slice(2, 5)}`;
    if (digits.length >= 6) formatted += `-${digits.slice(5, 7)}`;
    if (digits.length >= 8) formatted += `-${digits.slice(7, 9)}`;
    return `+998 ${formatted}`;
  };

  const changeInputTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith("+998")) {
      setTel(`+998 ${inputValue}`);
      return;
    }
    const formattedTel = formatPhoneNumber(inputValue);
    setTel(formattedTel);
    setTelError(formattedTel.length !== 19);
  };

  // ---------------------------- Input end ------------------------------------
  // ---------------------------- Input plan ------------------------------------
  const changeTextarePlan = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlan(e.target.value);
  };
  // ---------------------------- Input plan ------------------------------------

  // ---------------------------- Telegram start ------------------------------------
  const botToken = "7705601884:AAEYV5geTNUEFhWAJM8pI8VJygf5nREmKZw";
  const chatId = "1325078946";
  // https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
  // chatId olish:  U "message" obyektida ko'rinadi.
  // ---------------------------- Telegram end ------------------------------------

  // ---------------------------- Post start ------------------------------------
  const postMessege = async () => {
    const post = `<b>Ism:</b> ${name}\n<b>Tel:</b> ${tel}\n${
      plan ? `<b>Talim olish rejasi:</b> ${plan}` : `\n`
    }`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        parse_mode: "html",
        text: post,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // ---------------------------- Psot end ------------------------------------

  // ---------------------------- Submit start ------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameError && !telError && name.length !== 0 && tel.length === 19) {
      postMessege();
      setName("");
      setTel("+998 ");
      setPlan("");
      setIsModalOpen(true);
    } else {
      setNameError(name === "");
      setTelError(tel.length !== 19);
    }
  };
  // ---------------------------- Submit end ------------------------------------

  // ---------------------------- FORM END ------------------------------------

  return (
    <div className="w-full p-4 lg:p-8 xl:p-14 ">
      <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-black mb-4 lg:mb-8">
        {t("form")}
      </h3>
      <form
        className="w-full flex flex-col justify-center items-center gap-y-3 lg:gap-y-5 "
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          type="text"
          value={name}
          className={clsx(
            "w-full px-4 lg:px-6 py-2 lg:py-4 leading-7 rounded-lg border",
            nameError ? "border-red-500" : "border-borderGrey"
          )}
          placeholder={nameError ? t("nameError") : t("name")}
          onChange={changeInputName}
        />

        <input
          name="tel"
          type="tel"
          value={tel !== "+998 " ? tel : ""}
          placeholder={"+998 (XX)-XXX-XX-XX"}
          className={clsx(
            "w-full px-4 lg:px-6 py-2 lg:py-4 leading-7 select-none rounded-lg border",
            telError ? "border-red-500" : "border-borderGrey"
          )}
          onChange={changeInputTel}
        />

        <textarea
          name="plan"
          value={plan}
          onChange={changeTextarePlan}
          placeholder={t("plan")}
          className="w-full px-4 lg:px-6 py-2 lg:py-4 leading-7 select-none rounded-lg border border-borderGrey"
        />
        <div className=" w-full flex justify-end">
          <ButtonSubmit onSubmit={handleSubmit} />
        </div>
      </form>
      <ModalConnect
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
