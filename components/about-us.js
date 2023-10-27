import React from "react";
import Image from "next/image";
import { aboutText } from "@/document/about";
import Button from "./button";

const AboutUs = () => {
  return (
    <div className="text-center py-16">
      {aboutText.map((about) => (
        <div key={about.title}>
          <p className="section_title">{about.title}</p>
          <p className="">{about.des}</p>
        </div>
      ))}
      <Button className={"main_btn"}>view more</Button>
    </div>
  );
};

export default AboutUs;
