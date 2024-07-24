import React from "react";

interface inputTextProps {
  placeholder: string;
  name: string;
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

export default function PartsInputTextArea({
  placeholder,
  name,
  inputRef,
}: inputTextProps) {
  return (
    <div className="input_select_cnt">
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={10}
        ref={inputRef}
        className=" w-[43.9238653vw] px-4 pt-3 rounded-md"
      ></textarea>
    </div>
  );
}
