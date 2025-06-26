import React from "react";
import Containar from "../../layout/Containar";
import MainHeading from "../../layout/MainHeading";
import SubHeading from "../../layout/SubHeading";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import pestproduct1 from "../../assets/Best-Product1.png";
import pestproduct2 from "../../assets/Best-Product2.png";
import pestproduct3 from "../../assets/Best-Product3.png";
import pestproduct4 from "../../assets/Best-Product4.png";

const BestSellingProducts = () => {
  const ProductsData = [
    {
      img: pestproduct1,
      name: "The north coat",
      price: "$260",
      prevprice: "$360",
      amount: "(65)",
    },
    {
      img: pestproduct2,
      name: "Gucci duffle bag",
      price: "$960",
      prevprice: "$1160",
      amount: "(65)",
    },
    {
      img: pestproduct3,
      name: "RGB liquid CPU Cooler",
      price: "$160",
      prevprice: "$170",
      amount: "(65)",
    },
    {
      img: pestproduct4,
      name: "Small BookSelf",
      price: "$360",
      amount: "(65)",
    },
  ];
  return (
    <section className="pb-[122px]">
      <Containar>
        <div className="border-[0.5px] border-[#D9D9D9] mb-[27px]"></div>
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
        <div className="flex justify-between mt-[60px]">
          {ProductsData.map((product) => (
            <div className="inline-block relative">
              <div className="absolute top-3 right-3">
                <div className="h-[34px] w-[34px] rounded-full bg-white flex justify-center items-center cursor-pointer">
                  <FaRegHeart size={16} color="black" />
                </div>
                <div
                  className="h-[34px] w-[34px] rounded-full bg-white flex justify-center items-center mt-2
             cursor-pointer"
                >
                  <FiEye size={16} color="black" />
                </div>
              </div>
              <div className="bg-products rounded flex items-center justify-center w-[270px] h-[250px]">
                <img src={product.img} alt="" />
              </div>
              <div>
                <p className="font-primary font-medium text-[16px] leading-6 text-black pt-4 pb-2">
                  {product.name}
                </p>
                <p className="font-primary font-medium text-[16px] leading-6 text-primary">
                  {product.price}
                  <del className="font-primary font-medium text-[16px] leading-6 text-[#979797] pl-3">
                    {product.prevprice}
                  </del>
                </p>
                <div className="flex items-center pt-2">
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <p className="ml-2 font-primary font-semibold text-[14px] leading-[21px] text-[#979797]">
                    {product.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Containar>
    </section>
  );
};

export default BestSellingProducts;
