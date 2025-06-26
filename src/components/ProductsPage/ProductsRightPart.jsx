import React, { use, useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import ourproduct1 from "../../assets/Our-Product1.png";
import ourproduct2 from "../../assets/Our-Product2.png";
import ourproduct3 from "../../assets/Our-Product3.png";
import ourproduct4 from "../../assets/Our-Product4.png";

const ProductsRightPart = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);
  //   const ProductsData = [
  //     {
  //       img: ourproduct1,
  //       name: "Breed Dry Dog Food",
  //       price: "$100",
  //       amount: "(35)",
  //     },
  //     {
  //       img: ourproduct2,
  //       name: "Breed Dry Dog Food",
  //       price: "$100",
  //       amount: "(35)",
  //     },
  //     {
  //       img: ourproduct3,
  //       name: "Breed Dry Dog Food",
  //       price: "$100",
  //       amount: "(35)",
  //     },
  //     {
  //       img: ourproduct4,
  //       name: "Breed Dry Dog Food",
  //       price: "$100",
  //       amount: "(35)",
  //     },
  //   ];
  return (
    <div className="w-[80%]">
      <div className="flex flex-wrap gap-x-[30px] gap-y-[40px] justify-end mt-[210px]">
        {productData.map((product) => (
          <div className="relative">
            <div className="absolute top-3 right-3 z-10">
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
            <div className="relative group ease-in-out duration-200 bg-products rounded flex items-center justify-center w-[270px] h-[250px]">
              <img src={product.thumbnail} alt="" />
              <div className="absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-[100%] ease-in-out duration-200">
                <button className="w-full font-primary font-medium text-[16px] leading-6 text-white bg-black py-2 rounded-b cursor-pointer">
                  Add To Cart
                </button>
              </div>
            </div>
            <div>
              <p className="font-primary font-medium text-[16px] leading-6 text-black pt-4 pb-2 max-w-[200px]">
                {product.title}
              </p>
              <div className="flex items-center">
                <p className="font-primary font-medium text-[16px] leading-6 text-primary mr-2">
                  {product.price}
                </p>
                <div className="flex">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsRightPart;
