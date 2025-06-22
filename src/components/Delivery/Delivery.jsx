import React from "react";
import Containar from "../../layout/Containar";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";


const Delivery = () => {
  return (
    <section className="pb-[167px]">
      <Containar>
        <div className="flex justify-center gap-x-[88px]">
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] bg-[#2F2E30] rounded-full flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
                <TbTruckDelivery size={40} color="white" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="font-primary font-semibold text-[20px] leading-7 text-black">
                FREE AND FAST DELIVERY
              </h2>
              <p className="font-primary text-[14px] leading-[21px] text-black mt-2">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] bg-[#2F2E30] rounded-full flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
                <RiCustomerServiceLine size={40} color="white" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="font-primary font-semibold text-[20px] leading-7 text-black">
                24/7 CUSTOMER SERVICE
              </h2>
              <p className="font-primary text-[14px] leading-[21px] text-black mt-2">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] bg-[#2F2E30] rounded-full flex items-center justify-center">
              <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
                <AiOutlineSafetyCertificate size={40} color="white" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="font-primary font-semibold text-[20px] leading-7 text-black">
                MONEY BACK GUARANTEE
              </h2>
              <p className="font-primary text-[14px] leading-[21px] text-black mt-2">
                We reurn money within 30 days
              </p>
            </div>
          </div>
        </div>
      </Containar>
    </section>
  );
};

export default Delivery;
