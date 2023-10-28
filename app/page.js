import React, { Fragment } from "react";
import Image from "next/image";
import AboutUs from "@/components/about-us";

const HomPage = () => {
  return (
    <Fragment>
      <Image
        className="w-full h-auto"
        src="/images/banner/封面.jpg"
        alt="封面形象照"
        width={1920}
        height={1000}
      />
      <section className="section">
        <AboutUs />
      </section>
    </Fragment>
  );
};

export default HomPage;
