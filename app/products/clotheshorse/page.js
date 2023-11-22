import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { products } from "@/document/products";

const Clotheshorse = () => {
  const selectedProduct = products.find((product) => product.id === 2);
  return (
    <Fragment>
      <div>
        <Image
          className="w-full h-96 object-cover brightness-75 max-md:h-56"
          src="/images/banner/product_detail.jpg"
          alt=""
          width={1920}
          height={1000}
        />
        <div className="absolute top-1/4 left-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl text-white mb-4 max-md:text-xl">
            持續，為每一位使用者提供優質產品
          </p>
          <p className="text-xl text-white max-md:text-lg">負責 | 用心</p>
        </div>
        <div className="bg-[#f1f1f1]">
          <div className="text-3xl uppercase text-center pt-20 pb-20 max-md:text-xl max-lg:py-10">
            <p className="mb-1">成果展示</p>
            <p className="mt-2 text-xl text-rose-700">- 戶外曬衣架 -</p>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-5 px-64 pb-20 max-xl:px-40 max-xl:grid-cols-2 max-lg:px-20 max-md:grid-cols-1 max-sm:px-7">
            {selectedProduct &&
              selectedProduct.imageSrc.map((image, index) => (
                <div
                  className="w-full h-96 overflow-hidden bg-white shadow"
                  key={index}
                >
                  <Image
                    className="h-full object-contain"
                    src={image}
                    width={1920}
                    height={1000}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Clotheshorse;
