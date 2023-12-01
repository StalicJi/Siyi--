import React from "react";
import { whyText } from "@/document/text";
import Button from "./button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="text-center pt-16 max-lg:pt-12 max-md:pt-10">
      {whyText.map((why, i) => (
        <div key={i}>
          <p className="section_title">
            錫儀金屬{" "}
            <span className=" text-2xl text-rose-700">{why.title}</span>
          </p>
          <p className="my-4 text-lg max-md:text-base">{why.des}</p>
        </div>
      ))}
      <Link href="/about-siyi">
        <Button className={"main_btn"}>view more</Button>
      </Link>
    </div>
  );
};

export default AboutUs;
