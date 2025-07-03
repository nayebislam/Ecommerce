import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleProductRating from "./SingleProductRating";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

const SingleProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const singleProduct = productData.find((product) => product.id == id);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  return (
    <div className="pb-[140px]">
      <div className="py-[80px]">
        <p className="font-primary text-[14px] leading-[21px] text-[#808080]">
          Account / Gaming /
          <span className="font-primary text-[14px] leading-[21px] text-black ml-1.5">
            {singleProduct?.title}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <div className="flex flex-col gap-y-3 mr-[30px]">
            <div className="py-1.5 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div>
            <div className="py-1.5 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div>
            <div className="py-1.5 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div>
            <div className="py-1.5 px-5 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-6 mr-[70px]">
          <div className="pt-[133px] pb-[152px] px-[27px] bg-[#F5F5F5] rounded flex items-center justify-center">
            <img src={singleProduct?.thumbnail} alt="" />
          </div>
        </div>
        <div className="col-span-4">
          <h3 className="font-secondary font-semibold text-2xl leading-6 text-black">
            {singleProduct?.title}
          </h3>
          <div className="flex items-center my-4">
            <SingleProductRating rating={singleProduct?.rating} />
            <p className="ml-2 font-primary text-[14px] leading-[21px] text-[#808080]">{`(${singleProduct?.reviews.length}Reviews)`}</p>
            <p className="px-4 text-[#808080]">|</p>
            <p className="font-primary text-[14px] leading-[21px] text-[#00FF66]">
              In Stock
            </p>
          </div>
          <p className="font-secondary text-2xl leading-6 tracking-[3%]">
            ${singleProduct?.price}
          </p>
          <p className="font-primary text-[14px] leading-[21px] text-black max-w-[373px] mt-6">
            {singleProduct?.description}
          </p>
          <div className="border border-[#808080] my-6"></div>
          <div className="flex">
            <p className="font-secondary text-[20px] leading-[20px] text-black">
              Colours:
            </p>
            <div className="flex items-center gap-x-2 ml-6">
              <div className="w-[20px] h-[20px] rounded-full bg-[#E07575]"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[#E07575]"></div>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <p className="font-secondary text-[20px] leading-[20px] text-black">
              Size:
            </p>
            <div className="flex items-center gap-x-4 ml-6">
              <p className="py-1.5 px-[7px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">XS</p>
              <p className="py-1.5 px-[12px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">S</p>
              <p className="py-1.5 px-[10px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">M</p>
              <p className="py-1.5 px-[13px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">L</p>
              <p className="py-1.5 px-[7px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">XL</p>
            </div>
          </div>
          <div className="flex mt-6 items-center">
            <div className="flex border rounded border-[#00000080] items-center overflow-hidden">
            <div className="py-[22px] px-3 group hover:bg-primary ease-in-out duration-100 cursor-pointer">
              <LuMinus size={16} className="group-hover:text-white ease-in-out duration-100" />
            </div>
            <p className="font-primary font-medium text-[20px] leading-7 text-black py-2 px-8.5 h-full border-l border-l-[#00000080] border-r border-r-[#00000080] flex items-center">1</p>
            <div className="py-3.5 px-3 group hover:bg-primary ease-in-out duration-100 cursor-pointer">
              <FiPlus size={16} className="group-hover:text-white ease-in-out duration-100" />
            </div>
          </div>
          <div className="ml-4 mr-[19px]">
            <button className="py-2.5 px-12 bg-primary text-white font-primary font-medium text-[16px] leading-6 rounded">Buy Now</button>
          </div>
          <div>
            ffgj
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
