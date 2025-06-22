import React from "react";
import Containar from "../../layout/Containar";
import Countdown from "react-countdown";
import RenderedTime from "./RenderedTime";

const Offer = () => {
  return (
    <section className="pb-[161px]">
      <Containar>
        <div className="bg-[url(./assets/Offer-Banner.png)] bg-center bg-no-repeat bg-cover py-[69px] pl-[56px]">
          <span className="font-primary font-semibold text-[16px] leading-[20px] text-[#00FF66]">
            Categories
          </span>
          <p className="max-w-[425px] font-secondary text-5xl leading-[60px] text-[#FAFAFA] py-8">
            Enhance Your Music Experience
          </p>
          <div>
            <Countdown date={Date.now() + 432000000} renderer={RenderedTime} />
          </div>
          <button className="py-4 px-12 bg-[#00FF66] text-white rounded font-primary text-[16px] leading-6 font-medium mt-[40px] cursor-pointer">
            Buy Now!
          </button>
        </div>
      </Containar>
    </section>
  );
};

export default Offer;
