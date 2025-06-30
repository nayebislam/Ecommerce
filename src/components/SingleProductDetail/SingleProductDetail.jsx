import React from "react";
import main from "../../assets/main.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";

const SingleProductDetail = () => {
  return (
    <div className="pb-[140px]">
      <div className="py-[80px]">
        <p className="font-primary text-[14px] leading-[21px] text-[#808080]">
          Account / Gaming /
          <span className="font-primary text-[14px] leading-[21px] text-black">
            Havic HV G-92 Gamepad
          </span>
        </p>
      </div>
      <div className="grid grid-cols-12 space-x-5">
        <div className="col-span-2">
          <div className="flex flex-col gap-y-3">
            <div className="py-3 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={p1} alt="" />
            </div>
            <div className="py-3 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={p2} alt="" />
            </div>
            <div className="py-3 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={p3} alt="" />
            </div>
            <div className="py-3 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={p4} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="pt-[133px] pb-[104px] px-[27px] bg-[#F5F5F5] rounded">
            <img src={main} alt="" />
          </div>
        </div>
        <div className="col-span-4">sDFoug</div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
