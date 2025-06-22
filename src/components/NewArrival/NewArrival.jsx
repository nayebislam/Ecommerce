import React from "react";
import Containar from "../../layout/Containar";
import MainHeading from "../../layout/MainHeading";
import SubHeading from "../../layout/SubHeading";
import Featured1 from "../../assets/Featured1.png";
import Featured2 from "../../assets/Featured2.png";
import Featured3 from "../../assets/Featured3.png";
import Featured4 from "../../assets/Featured4.png";

const NewArrival = () => {
  return (
    <section className="pb-[182px]">
      <Containar>
        <div>
          <MainHeading>Featured</MainHeading>
          <SubHeading>New Arrival</SubHeading>
        </div>
        <div className="flex justify-between mt-[60px]">
          <div>
            <img src={Featured1} alt="" />
          </div>
          <div>
            <div>
              <img src={Featured2} alt="" />
            </div>
            <div className="flex justify-between mt-8">
              <div>
                <img src={Featured3} alt="" />
              </div>
              <div>
                <img src={Featured4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Containar>
    </section>
  );
};

export default NewArrival;
