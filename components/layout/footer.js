"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { routerItem } from "@/constants/router";
import { AboutCompany, CompanyTitle, CompanyInfo } from "@/document/text";

const footer = () => {
  return (
    <footer>
      <div className="w-full h-[25rem] relative flex justify-center max-sm:h-[30rem]">
        <Image
          className=" absolute top-0 h-full object-cover opacity-20"
          src="/images/products/造型格柵/1封面.png"
          alt="錫儀企業有限公司footer"
          width={1920}
          height={1280}
        />
        <div className="sectionPadding h-full w-full flex flex-col justify-center absolute top-0">
          <div className="flex flex-row items-center max-md:justify-center">
            <Image
              className=""
              src="/images/client/logo.png"
              alt="footer"
              width={50}
              height={50}
            />
            <p className="text-2xl font-bold text-gray-700 max-md:text-lg ">
              {CompanyTitle}
            </p>
          </div>
          <div className="flex flex-row-reverse max-md:flex-col max-md:text-sm">
            {CompanyInfo.map((info, i) => (
              <div
                className=" w-full h-[10rem] text-end my-4 max-md:text-start max-md:h-[8rem] pointer-events-none"
                key={i}
              >
                <div>
                  TEL1 : <span>{info.tel1}</span>
                </div>
                <div>
                  TEL2 : <span>{info.tel2}</span>
                </div>
                <div>
                  FAX : <span>{info.fax}</span>
                </div>
                <div>
                  地址 : <span>{info.address}</span>
                </div>
                <div>
                  營業時間 : <span>{info.business_hours}</span>
                </div>
                <div>
                  EMAIL : <span>{info.email}</span>
                </div>
              </div>
            ))}
            <div className=" w-full h-[10rem] max-sm:h-full">
              <div className="grid grid-cols-6 text-center list-none border-l-[1px] border-l-black my-4 max-xl:grid-cols-4">
                {routerItem.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <li className="text-black border-r-[1px] text-sm border-r-black text_hover">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </div>
              <div>
                <p className="mb-4">{AboutCompany}</p>
                <div className="grid grid-flow-row text-slate-600 max-md:text-center max-md:text-sm">
                  <p>Copyright © 2023 SIYI ALL RIGHTS RESERVED</p>
                  <div className="flex flex-row max-md:justify-center">
                    <p>WEB DESIGN BY</p>
                    <Link href="https://www.vlt.com.tw/">
                      <p className="ml-1 text_hover">晨豐科技</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
