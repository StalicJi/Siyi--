import React, { Fragment } from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <Fragment>
      <div>
        <Image
          className="w-full h-96 object-cover brightness-75 max-md:h-56"
          src="/images/banner/Kaohsiung.jpg"
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
          <div className="text-3xl uppercase text-center pt-20 pb-20 max-md:text-xl max-md:py-10 ">
            <p>- contact Us-</p>
            <p>聯絡我們</p>
          </div>
          {/* Google Map */}
          <div className="grid grid-cols-2 px-32 pb-20 max-xl:px-10 max-lg:flex-col max-lg:flex max-lg:pb-10 max-md:px-2">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.3119948724643!2d120.35509377654289!3d22.679426679415705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1aa52a57eccb%3A0x1f03c5d6fa27c4fa!2zODE06auY6ZuE5biC5LuB5q2m5Y2A5LuB5b-D6LevMjDlt7czNuS5izHomZ8!5e0!3m2!1szh-TW!2stw!4v1700204064864!5m2!1szh-TW!2stw"
                width="100%"
                height="450px"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white">
              <div className=" m-12 max-md:m-6 ">
                <div className="contact_cnt">
                  <FaLocationDot />
                  <div className="contact_text">
                    <div>地址：</div>
                    <div className="hover:text-rose-700 duration-300">
                      <a
                        href="https://www.google.com/maps?q=814高雄市仁武區仁心路20巷36之1號"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        814高雄市仁武區仁心路20巷36之1號
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact_cnt">
                  <FaRegClock />
                  <div className="contact_text">
                    <div>時間：</div>
                    <div className="hover:text-rose-700 duration-300 cursor-pointer">
                      星期一 ~ 星期六 08:00 - 17:00
                    </div>
                  </div>
                </div>
                <div className="contact_cnt">
                  <FaPhone />
                  <div className="contact_text">
                    <div>電話：</div>
                    <div className="hover:text-rose-700 duration-300">
                      <a href="tel:(07)372-1199">(07)372-1199</a>
                    </div>
                  </div>
                </div>
                <div className="contact_cnt">
                  <FaPhone />
                  <div className="contact_text">
                    <div>電話：</div>
                    <div className="hover:text-rose-700 duration-300">
                      <a href="tel:(07)372-9393">(07)372-9393</a>
                    </div>
                  </div>
                </div>
                <div className="contact_cnt">
                  <FaFax />
                  <div className="contact_text">
                    <div>傳真：</div>
                    <div className="hover:text-rose-700 duration-300 cursor-pointer">
                      <a href="tel:(07)372-7676">(07)372-7676</a>
                    </div>
                  </div>
                </div>
                <div className="contact_cnt">
                  <MdEmail />
                  <div className="contact_text">
                    <div>email：</div>
                    <div className="hover:text-rose-700 duration-300">
                      <a href="mailto:si.yi999@msa.hinet.net">
                        si.yi999@msa.hinet.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;
