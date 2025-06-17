import React from "react";
import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import Containar from "../../layout/Containar";

const Navbar = () => {
  return (
    <nav className="pt-[42px] pb-3.5 border border-b border-[#D9D9D9]">
      <Containar>
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <img src={logo} alt="#logo" />
            </a>
          </div>
          <div>
            <ul className="flex gap-x-[48px] items-center">
              <li>
                <a
                  className="font-primary text-base leading-[24px] text-black"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-primary text-base leading-[24px] text-black"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="font-primary text-base leading-[24px] text-black"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-primary text-base leading-[24px] text-black"
                  href="#"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="w-[243px] relative mr-6">
              <input
                className="w-full py-[7px] pl-5 pr-9 bg-secondary outline-0 rounded placeholder:font-primary placeholder:text-[12px] placeholder:leading-[18px] placeholder:text-black"
                type="text"
                placeholder="What are you looking for?"
              />
              <IoSearchOutline
                size={24}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <IoMdHeartEmpty size={24} className="cursor-pointer" />
              <FaOpencart size={24} className="cursor-pointer" />
              <GoPerson size={24} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </Containar>
    </nav>
  );
};

export default Navbar;
