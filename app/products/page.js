import React, { Fragment } from "react";
import Image from "next/image";
import Button from "@/components/button";
import { products } from "@/document/products";
import Link from "next/link";

const AllProductPage = () => {
  return (
    <Fragment>
      <div>
        <Image
          className="w-full h-96 object-cover relative"
          src="/images/products/入口門/1.png"
          alt="錫儀企業有限公司各頁形象照"
          width={1920}
          height={1000}
        />
        <div className="w-full h-96 bg-black opacity-20 absolute top-20 left-0" />
        <div className="absolute top-1/4 left-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl text-white mb-4">
            持續，為每一位使用者提供優質產品
          </p>
          <p className="text-xl text-white">負責 | 用心</p>
        </div>
        <div className="bg-[#f1f1f1]">
          <div className="text-3xl uppercase text-center py-10">
            <p>- Products -</p>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-5 mx-64 pb-20">
            {products.map((product) => (
              <div
                className="w-full h-full rounded flex flex-col items-center shadow-xl bg-white relative"
                key={product.id}
              >
                <div className="w-full h-96">
                  <Image
                    className="w-full h-96 rounded-t object-cover"
                    src={product.imageSrc[0]}
                    width={1920}
                    height={1000}
                  />
                </div>
                <div className="bg-black opacity-20 w-full h-96 rounded absolute top-0" />
                <p className="text-2xl mt-4">{product.title}</p>
                <Link href={`${product.navagation}`}>
                  <Button className="main_btn">view detail</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AllProductPage;
