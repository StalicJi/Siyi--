import React, { Fragment } from "react";
import Image from "next/image";
import Button from "@/components/button";
import { products } from "@/document/products";
import Link from "next/link";

const AllProductPage = () => {
  return (
    <Fragment>
      <div className=" relative">
        <Image
          className="w-full h-96 object-cover brightness-75 max-md:h-56"
          src="/images/banner/product_detail.jpg"
          alt=""
          width={1920}
          height={1000}
        />
        <div className="absolute top-44 left-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-md:top-28">
          <p className="text-3xl text-white mb-4 max-md:text-xl">
            持續，為每一位使用者提供優質產品
          </p>
          <p className="text-xl text-white max-md:text-lg">負責 | 用心</p>
        </div>
        <div className="bg-[#f1f1f1]">
          <div className="text-3xl uppercase text-center pt-20 pb-20 max-md:text-xl max-lg:py-10">
            <p className="mb-1">- products -</p>
            <p>產品項目</p>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-5 px-64 pb-20 max-xl:px-40 max-xl:grid-cols-2 max-lg:px-20 max-md:grid-cols-1 max-sm:px-7">
            {products.map((product) => (
              <div
                className="w-full h-full rounded flex flex-col items-center shadow-xl bg-white "
                key={product.id}
              >
                <div className="w-full h-96 max-xl:h-72 max-lg:h-56">
                  <Image
                    className="w-full h-full rounded-t object-cover brightness-95 "
                    src={product.imageSrc[0]}
                    width={1920}
                    height={1000}
                  />
                </div>
                {/* <div className="bg-black opacity-20 w-full h-96 rounded absolute top-0" /> */}
                <p className="text-2xl mt-4 max-md:text-xl">{product.title}</p>
                <Link href={`${product.navagation}`}>
                  <Button className="main_btn max-md:h-10">view detail</Button>
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
