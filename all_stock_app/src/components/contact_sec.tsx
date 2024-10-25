"use client";

import React from "react";
import PartsContactForm from "./parts_contact_form";
import Parts_ttl from "./parts_ttl";
import Image from "next/image";
import { Element } from "react-scroll";
export default function Contact_sec() {
  const imgPath = "/img/";
  return (
    <div
      id="contact"
      className="contact_sec bg-[#cac1b9]/40 pt-[16.1vw] pb-[3.66vw] relative"
    >
      <Element name="contact">
        <div className=" absolute top-[1%] left-[10%] w-[21.5959vw] h-auto">
          <Image
            src={`${imgPath}contact_img.png`}
            alt=""
            width={295}
            height={249}
            className="w-full h-auto"
          />
        </div>
        <Parts_ttl ttl="お問い合わせ" sub_ttl="Contact" margin="mb-[7.32vw]" />
        <PartsContactForm />
      </Element>
    </div>
  );
}
