"use client";

import React from "react";
import PartsContactForm from "./parts_contact_form";
import Parts_ttl from "./parts_ttl";

export default function Contact_sec() {
  const imgPath = "/img/";
  return (
    <div className="contact_sec bg-[#cac1b9]/40 pt-[16.1vw] pb-[3.66vw]">
      <Parts_ttl ttl="お問い合わせ" sub_ttl="Contact" margin="mb-[7.32vw]" />
      <PartsContactForm />
    </div>
  );
}
