"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface selectProps {
  selectText: string;
  inputSize: string;
  optionText: string[];
  inputRef: React.RefObject<HTMLSelectElement>;
}

export default function Parts_input_select({
  selectText,
  optionText,
  inputSize,
  inputRef,
}: selectProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="input_select_cnt relative w-fit">
      <select
        name="contact_type"
        id="contact_type"
        value={selectedValue}
        onChange={handleChange}
        ref={inputRef}
        className={`select-text px-4 ${
          selectedValue === "" ? "select-placeholder" : "select-selected"
        } ${inputSize} rounded-md appearance-none`}
      >
        <option value="" disabled className="select-placeholder">
          {selectText}
        </option>
        {optionText.map((text, key) => (
          <option key={key} value={text}>
            {text}
          </option>
        ))}
        ;
      </select>
      <FontAwesomeIcon
        icon={faAnglesDown}
        className=" w-3 absolute right-[1.7vw] top-[50%] translate-y-[-50%] text-black/70"
      />
    </div>
  );
}
