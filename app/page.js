import React, { Fragment } from "react";
import Image from "next/image";
import WhyUs from "@/components/why-us";
import Products from "@/components/products";

const HomPage = () => {
  return (
    <Fragment>
      <Image
        className="w-full h-full object-cover"
        src="/images/banner/bk.jpg"
        alt="錫儀企業有限公司首頁形象照"
        width={1920}
        height={1280}
      />
      <section className="section">
        <WhyUs />
        <Products />
      </section>
    </Fragment>
  );
};

export default HomPage;
