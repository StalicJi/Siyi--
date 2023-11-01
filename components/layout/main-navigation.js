"use client";
import React, { useState } from "react";
import Link from "next/link";
import { routerItem } from "@/constants/router";
import Image from "next/image";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { CompanyTitle } from "@/document/text";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" sticky h-20 w-full center_btw bg-white opacity-95 top-0 px-16 max-md:px-5 max-md:h-16 z-50 shadow-md">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src="/images/client/logo.png"
            alt="錫儀企業有限公司logo"
            width={50}
            height={50}
            className="max-md:w-9"
          />
          <p className="text-2xl font-bold text-black max-md:text-xl  max-sm:text-base">
            {CompanyTitle}
          </p>
        </div>
      </Link>
      <div className="w-[30rem] text-end max-lg:w-[23rem] max-md:w-40">
        <ul className="grid grid-cols-4 text-base gap-6 max-lg:gap-0 max-md:hidden">
          {routerItem.map((item) => (
            <Link href={item.link} key={item.id}>
              <li className="text-black text_hover">{item.title}</li>
            </Link>
          ))}
        </ul>
        <div
          aria-hidden="true"
          className="md:hidden cursor-pointer flex justify-end"
          onClick={handleToggleMenu}
        >
          {!showMenu ? (
            <GrMenu className=" w-6 h-6 transition duration-500 ease-in-out" />
          ) : (
            <div>
              <GrClose className=" w-6 h-6 ttransition duration-500 ease-in-out" />
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed top-[4rem] left-0 w-full h-full md:hidden bg-white transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div>
          <ul className="grid grid-row-4 gap-4 py-6">
            {routerItem.map((item) => (
              <Link href={item.link} key={item.id}>
                <li
                  className={`text-gray-700 border-b-[1px] ${
                    showMenu ? "transform translate-x-0" : ""
                  }`}
                  onClick={() => {
                    handleToggleMenu();
                  }}
                >
                  <div className="mb-3 ml-8 text-base">{item.title}</div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
