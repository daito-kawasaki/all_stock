import React from "react";

interface inputTextProps {
  placeholder: string;
  inputSize: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function PartsInputText({
  placeholder,
  inputSize,
  inputRef,
}: inputTextProps) {
  return (
    <div className="input_select_cnt relative">
      <input
        type="text"
        placeholder={placeholder}
        className={`${inputSize} px-4 rounded-md`}
        ref={inputRef}
      />
    </div>
  );
}
