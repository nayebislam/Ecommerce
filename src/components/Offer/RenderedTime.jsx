import React from "react";

const RenderedTime = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-x-6">
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center">
        <p className="font-primary font-semibold text-[16px] leading-[20px] text-black">{days}</p>
        <p className="font-primary text-[11px] leading-[18px] text-black">Days</p>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center">
        <p className="font-primary font-semibold text-[16px] leading-[20px] text-black">{hours}</p>
        <p className="font-primary text-[11px] leading-[18px] text-black">Hours</p>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center">
        <p className="font-primary font-semibold text-[16px] leading-[20px] text-black">{minutes}</p>
        <p className="font-primary text-[11px] leading-[18px] text-black">Minutes</p>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center">
        <p className="font-primary font-semibold text-[16px] leading-[20px] text-black">{seconds}</p>
        <p className="font-primary text-[11px] leading-[18px] text-black">Seconds</p>
      </div>
    </div>
  );
};

export default RenderedTime;
