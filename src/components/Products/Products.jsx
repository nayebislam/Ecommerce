import React from "react";
import Containar from "../../layout/Containar";
import MainHeading from "../../layout/MainHeading";
import SubHeading from "../../layout/SubHeading";

const Products = () => {
  return (
    <section>
      <Containar>
        <div className="flex items-end justify-between">
          <div>
            <MainHeading>This Month</MainHeading>
            <SubHeading>Best Selling Products</SubHeading>
          </div>
          <div>
            <button className="py-4 px-12 font-primary font-medium leading-6 bg-primary text-white rounded">
              View All
            </button>
          </div>
        </div>
      </Containar>
    </section>
  );
};

export default Products;
