import React, { Fragment } from "react";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";

const AboutUsPage = () => {
  return (
    <Fragment>
      <div>
        <Image
          className="w-full h-96 object-cover brightness-75"
          src="/images/banner/photo1.jpeg"
          alt=""
          width={1920}
          height={1000}
        />
        <div className="absolute top-1/4 left-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl text-white mb-4">
            持續，為每一位使用者提供優質產品
          </p>
          <p className="text-xl text-white">負責 | 用心</p>
        </div>
        <div>
          <div className="text-3xl uppercase text-center pt-20 pb-20">
            <p className="mb-1">- about us -</p>
            <p>關於錫儀</p>
          </div>
          <div className="flex flex-row items-center text-xl justify-center pb-10">
            <TiSpanner className="mr-2" />
            <p>
              專業於不銹鋼門窗、自動門、帷幕牆、扶手鍛造製品、店舖展示架等相關產業。
            </p>
          </div>
          <div className="h-full shadow-lg px-96">
            <Image
              className="h-full object-cover"
              src="/images/client/siyi.png"
              alt=""
              width={1920}
              height={1000}
            />
            <div className="w-full bg-white flex justify-center items-center pt-10 pb-16">
              <div>
                <p className="text-lg mr-4">
                  目前正須要具設計天份的您一同加入錫儀的行列，若您有興趣請與我們聯繫
                </p>
              </div>
              <div>
                <div className="bg-[#1cafc6] text-white text-lg rounded px-4 py-2">
                  <a
                    className="text-center flex items-center justify-center h-full "
                    href="https://www.1111.com.tw/corp/54941716/?agent=ewo_19yworkvote&agent=op_gpx_t_35K_0904&utm_source=google&utm_medium=pmax&utm_content=o_35K&utm_campaign=main&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn_-qEGupeJCsfOEptmT2HP6zxT8d6JWZ4vLkrYNJ6ap7Gery9m6FpRoCtSwQAvD_BwE"
                    target="_blank"
                  >
                    <div className="mr-2">
                      <FaRegArrowAltCircleRight />
                    </div>
                    <p>1111人力銀行</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsPage;
