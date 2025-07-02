import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleProductRating from "./SingleProductRating";

const SingleProductDetail = () => {
  const {id} = useParams()
  const [productData, setProductData] = useState([]);
  const singleProduct = productData.find((product) => product.id == id)
  

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
          <h3 className="font-secondary font-semibold text-2xl leading-6 text-black">{singleProduct?.title}</h3>
          <div className="flex items-center my-4">
            <SingleProductRating rating={singleProduct?.rating} />
            <p className="ml-2 font-primary text-[14px] leading-[21px] text-[#808080]">{`(${singleProduct?.reviews.length}Reviews)`}</p>
            <p className="px-4 text-[#808080]">|</p>
            <p className="font-primary text-[14px] leading-[21px] text-[#00FF66]">In Stock</p>
          </div>
          <p className="font-secondary text-2xl leading-6 tracking-[3%]">${singleProduct?.price}</p>
          <p className="font-primary text-[14px] leading-[21px] text-black max-w-[373px] mt-6">{singleProduct?.description}</p>
          <div className="border border-[#808080] my-6"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
