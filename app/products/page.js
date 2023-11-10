import React, { Fragment } from "react";
import Image from "next/image";

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
      </div>
    </Fragment>
  );
};

export default AllProductPage;
