import React from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const products = () => {
  return (
    <div className="text-center pt-16 max-lg:pt-12 max-md:pt-10">
      <p className="section_title">
        產品項目 <span className=" text-2xl text-rose-700">Products</span>
      </p>
      <div className="w-full h-full grid grid-cols-3 gap-4 mt-4 mb-4">
        <div className="grid col-span-2 gap-4">
          <div className="relative w-full h-96 cursor-pointer ">
            <Image
              className="w-full h-96 object-cover"
              src="/images/products/入口門/1.png"
              alt="鋁框入門口"
              width={1920}
              height={1000}
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 hover:opacity-50">
              <div className="absolute top-1/2 left-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className=" text-3xl text-white z-10">入口門造型</p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-96 cursor-pointer ">
            <Image
              className="w-full h-full object-cover"
              src="/images/products/車道限高指示/3.png"
              height={1920}
              width={1280}
              alt="停車場限高指示"
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 hover:opacity-50">
              <div className="absolute top-1/2 left-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className=" text-3xl text-white z-10">停車場限高指示</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full cursor-pointer ">
          <Image
            className="w-full h-full object-cover"
            src="/images/products/陽台玻璃欄杆/1.png"
            height={1920}
            width={1280}
            alt="陽台玻璃欄杆"
          />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 hover:opacity-50">
            <div className="absolute top-1/2 left-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className=" text-3xl text-white z-10">陽台玻璃欄杆</p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/products">
        <Button className={"main_btn"}>view more</Button>
      </Link>
    </div>
  );
};

export default products;
