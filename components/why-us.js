import React from "react";
import Image from "next/image";
import { whyText } from "@/document/text";
import Button from "./button";

const AboutUs = () => {
  return (
    <div className="text-center py-16 max-lg:py-12 max-md:py-10">
      {whyText.map((why, i) => (
        <div key={i}>
          <p className="section_title">{why.title}</p>
          <p className="my-4 text-lg max-md:text-base">{why.des}</p>
        </div>
      ))}
      <Button className={"main_btn"}>view more</Button>
    </div>
  );
};

export default AboutUs;
