import React from "react";
import p4 from "../assets/p4.png";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";

const CartPage = () => {
  return (
    <div>
      <div className="flex items-center py-[80px]">
        <p className="font-primary text-[14px] leading-[21px] text-[#808080]">
          Home
        </p>
        <span className="px-3">/</span>
        <p className="font-primary text-[14px] leading-[21px] text-black">
          Cart
        </p>
      </div>
      <div className=" flex flex-col gap-y-[40px] mb-6">
        <div className="flex items-center justify-between py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.25)]">
          <div className="w-[25%] text-start font-primary text-[16px] leading-[24px] text-black">
            Product
          </div>
          <div className="w-[25%] text-center font-primary text-[16px] leading-[24px] text-black">
            Price
          </div>
          <div className="w-[25%] text-center font-primary text-[16px] leading-[24px] text-black">
            Quantity
          </div>
          <div className="w-[25%] text-end font-primary text-[16px] leading-[24px] text-black">
            Subtotal
          </div>
        </div>
        <div className="flex items-center justify-between py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.25)]">
          <div className="w-[25%] text-center flex gap-x-5 items-center">
            <img className="w-[50px]" src={p4} alt="" />
            <p className="font-primary text-[16px] leading-[24px] text-black">
              H1 Gamepad
            </p>
          </div>
          <div className="w-[25%] text-center font-primary text-[16px] leading-[24px] text-black">
            $650
          </div>
          <div className="w-[25%] text-center">
            <div className="py-2.5 px-3 border border-[#999999] rounded inline-block">
              <div className="flex items-center gap-x-4">
                <p className="font-primary text-[16px] leading-[24px] text-black">
                  01
                </p>
                <div>
                  <IoChevronUpSharp size={16} />
                  <IoChevronDownSharp size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] text-end font-primary text-[16px] leading-[24px] text-black">
            $650
          </div>
        </div>
        <div className="flex items-center justify-between py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.25)]">
          <div className="w-[25%] text-center flex gap-x-5 items-center">
            <img className="w-[50px]" src={p4} alt="" />
            <p className="font-primary text-[16px] leading-[24px] text-black">
              H1 Gamepad
            </p>
          </div>
          <div className="w-[25%] text-center font-primary text-[16px] leading-[24px] text-black">
            $650
          </div>
          <div className="w-[25%] text-center">
            <div className="py-2.5 px-3 border border-[#999999] rounded inline-block">
              <div className="flex items-center gap-x-4">
                <p className="font-primary text-[16px] leading-[24px] text-black">
                  01
                </p>
                <div>
                  <IoChevronUpSharp size={16} />
                  <IoChevronDownSharp size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] text-end font-primary text-[16px] leading-[24px] text-black">
            $650
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-[80px]">
        <button className="py-4 px-12 rounded border border-[#808080] font-primary font-medium text-[16px] leading-[24px] text-black">
          Return To Shop
        </button>
        <button className="py-4 px-12 rounded border border-[#808080] font-primary font-medium text-[16px] leading-[24px] text-black">
          Update Cart
        </button>
      </div>
      <div className="flex justify-between pb-[140px]">
        <div className="flex items-center gap-x-4">
          <input
            className="py-4 pl-6 pr-[164px] placeholder:font-primary placeholder:text-[16px] placeholder:leading-[24px] text-black outline-none border border-black rounded"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="py-4 px-12 rounded bg-primary font-primary font-medium text-[16px] leading-[24px] text-white">
            Update Cart
          </button>
        </div>
        <div>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
          <button className="py-4 px-8 bg-primary text-white rounded">saehdfi</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
