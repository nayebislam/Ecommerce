import React from "react";
import Containar from "../../layout/Containar";
import footerlogo from "../../assets/logo2.png";
import { AiOutlineSend } from "react-icons/ai";
import qrcode from "../../assets/qrcode.png";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";
import { RiFacebookLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="pt-[80px] bg-black">
      <Containar>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>
              <img src={footerlogo} alt="#footerlogo" />
            </div>
            <h3 className="font-primary font-medium text-[20px] leading-7 text-white my-6">
              Subscribe
            </h3>
            <p className="font-primary text-[16px] leading-6 text-white">
              Get 10% off your first order
            </p>
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="py-3 pl-4 pr-10 outline-0 border border-white rounded w-[217px] placeholder:text-[#646464] placeholder:font-primary placeholder:text-[16px] placeholder:leading-6 text-white font-primary text-[16px] leading-6"
              />
              <AiOutlineSend
                size={24}
                color="white"
                className="absolute top-3 right-[15px]"
              />
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <h3 className="font-primary font-medium text-[20px] leading-7 text-white mb-2">
                Support
              </h3>
              <li className="font-primary text-[16px] leading-6 text-white max-w-[175px]">
                <a href="#">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">exclusive@gmail.com</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">+88015-88888-9999</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <h3 className="font-primary font-medium text-[20px] leading-7 text-white mb-2">
                Account
              </h3>
              <li className="font-primary text-[16px] leading-6 text-white max-w-[175px]">
                <a href="#">My Account</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">Login / Register</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">Cart</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">Wishlist</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <h3 className="font-primary font-medium text-[20px] leading-7 text-white mb-2">
                Quick Link
              </h3>
              <li className="font-primary text-[16px] leading-6 text-white max-w-[175px]">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">Terms Of Use</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">FAQ</a>
              </li>
              <li className="font-primary text-[16px] leading-6 text-white">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-primary font-medium text-[20px] leading-7 text-white">
              Download App
            </h3>
            <p className="font-primary font-medium text-[12px] leading-[18px] text-white mt-6 mb-2">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-x-[11px]">
              <img src={qrcode} alt="#qrcode" className="cursor-pointer" />
              <div>
                <img
                  src={playstore}
                  alt="#playstore"
                  className="mb-[9px] cursor-pointer"
                />
                <img
                  src={appstore}
                  alt="#appstore"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <ul className="flex items-center gap-x-6 mt-6">
              <li>
                <a href="#">
                  <RiFacebookLine size={24} color="white" />
                </a>
              </li>
              <li>
                <a href="#">
                  <TbBrandTwitter size={24} color="white" />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoInstagram size={24} color="white" />
                </a>
              </li>
              <li>
                <a href="#">
                  <RiLinkedinLine size={24} color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Containar>
      <div className="h-[1px] bg-[#141414] mt-[60px]"></div>
        <p className="font-primary text-[16px] leading-6 text-[#3d3d3d] text-center pt-4 pb-6">© Copyright Nayeb 2024. All right reserved</p>
    </section>
  );
};

export default Footer;
