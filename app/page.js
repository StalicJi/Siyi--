import React, { Fragment } from "react";
import Image from "next/image";
import WhyUs from "@/components/why-us";
import Products from "@/components/products";
import Link from "next/link";
import Button from "@/components/button";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

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
      <div className="grid grid-cols-5 gap-4 mt-20 mb-28 h-[30rem] max-xl:h-96 max-lg:h-64 max-md:h-52 max-[550px]:h-40">
        <div className=" col-span-2 overflow-hidden ">
          <Image
            className="w-full h-full object-cover brightness-90"
            src="/images/ach_display/15.png"
            alt=""
            width={1920}
            height={1280}
          />
        </div>
        <div className="overflow-hidden">
          <Image
            className="w-full h-full object-cover brightness-75"
            src="/images/ach_display/8.png"
            alt=""
            width={1920}
            height={1280}
          />
        </div>
        <div className="col-span-2 overflow-hidden brightness-90">
          <Image
            className="w-full h-full object-cover"
            src="/images/ach_display/20.png"
            alt=""
            width={1920}
            height={1280}
          />
        </div>
      </div>
      <section className="section text-center">
        <div>
          <p className="section_title">
            聯絡我們 <span className=" text-2xl text-rose-700">contact</span>
          </p>
          <p className="text-xl mt-10 max-lg:text-lg">
            若您有任何關於產品的疑問或意見，歡迎與我們洽詢，我們會盡其所能的協助您。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10 mb-20 text-xl mx-16 max-xl:mx-6 max-lg:text-lg max-md:mx-2 max-md:text-base max-[550px]:grid-cols-1">
          <Link href="mailto:si.yi999@msa.hinet.net">
            <Button className="w-full border rounded-md py-4 flex items-center justify-center duration-300 hover:bg-rose-700 hover:text-white">
              <MdEmail className="mr-4 max-xl:mr-2" />
              <p>si.yi999@msa.hinet.net</p>
            </Button>
          </Link>
          <Link href="tel:(07)372-1199">
            <Button className="w-full border rounded-md py-4 flex items-center justify-center duration-300 hover:bg-rose-700 hover:text-white">
              <FaPhone className="mr-4" />
              <p>(07)372-1199</p>
            </Button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default HomPage;
