import React from "react";
import Link from "next/link";
import { routerItem } from "@/constants/router";
import Image from "next/image";

const MainNavigation = () => {
  return (
    <div className="h-20 w-full center_btw bg-white opacity-80 border-b-[1px] sticky top-0 pr-16 pl-16">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src="/images/client/logo.png"
            layout="respos"
            width={48}
            height={48}
          />
          <p className="text-2xl font-bold text-gray-700">錫儀企業有限公司</p>
        </div>
      </Link>
      <div className="w-[30rem] text-end">
        <ul className="grid grid-cols-4 text-base gap-6">
          {routerItem.map((item) => (
            <Link href={item.link}>
              <li className="text-gray-500 hover:text-black" key={item.id}>
                {item.tittle}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
