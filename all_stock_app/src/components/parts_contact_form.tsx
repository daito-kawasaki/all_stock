"use client";

import { useRef } from "react";
import Parts_input_select from "./parts_input_select";
import PartsInputText from "./parts_input_text";
import PartsInputTextArea from "./parts_input_textarea";
import PartsSendBut from "./parts_send_but";

export default function PartsContactForm(): JSX.Element {
  const typeRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      type: typeRef.current?.value,
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      gender: genderRef.current?.value,
      email: emailRef.current?.value,
      contents: contentsRef.current?.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();

      if (response.ok) {
        console.log("メール送信成功");
      } else {
        console.error("メール送信失敗", response.status, result);
      }
    } catch (error) {
      console.error("エラー発生", error);
    }
  };
  return (
    <div className="contactform w-fit mx-auto">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className=" flex flex-col gap-10"
      >
        <Parts_input_select
          selectText="お問い合わせ種別"
          optionText={["cafe", "salon", "motorcycle"]}
          inputSize="input-full"
          inputRef={typeRef}
        />
        <PartsInputText
          inputSize="input-full"
          placeholder="お名前"
          inputRef={nameRef}
        />
        <PartsInputText
          inputSize="input-half"
          placeholder="年齢"
          inputRef={ageRef}
        />
        <Parts_input_select
          selectText="性別"
          optionText={["男性", "女性", "その他"]}
          inputSize="input-half"
          inputRef={genderRef}
        />
        <PartsInputText
          inputSize="input-full"
          placeholder="メールアドレス"
          inputRef={emailRef}
        />
        <PartsInputTextArea
          name="contact_content"
          placeholder="お問い合わせ内容"
          inputRef={contentsRef}
        />
        <PartsSendBut />
      </form>
    </div>
  );
}
