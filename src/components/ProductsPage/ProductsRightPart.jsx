import React, { use, useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import ProductRating from "./ProductRating";
import { Link } from "react-router";

const ProductsRightPart = () => {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 9;
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);
  const totalProducts = productData.length;
  const totalPages = Math.ceil(totalProducts / productPerPage);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFristProduct = indexOfLastProduct - productPerPage;
  const currentProduct = productData.slice(
    indexOfFristProduct,
    indexOfLastProduct
  );
  const data = [...Array(totalPages).keys()].map((page) => page + 1);
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
      <div className="flex items-center mt-[172px] gap-x-3 justify-end">
        <p className="font-primary text-[16px] leading-6 text-black">Show :</p>
        <p className="py-[2px] px-[42px] border border-[#D9D9D9] rounded">
          {currentProduct.length}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-[30px] gap-y-[40px] justify-end mt-[30px]">
        {currentProduct.map((product) => (
          <Link to={`/product/${product.id}`} className="relative w-[270px]">
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
            <div className="relative group ease-in-out duration-200 bg-products rounded py-[52px] px-[65px]">
              <img src={product.thumbnail} alt="" />
              <div className="absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-[100%] ease-in-out duration-200">
                <button className="w-full font-primary font-medium text-[16px] leading-6 text-white bg-black py-2 rounded-b cursor-pointer">
                  Add To Cart
                </button>
              </div>
            </div>
            <div>
              <p className="font-primary font-medium text-[16px] leading-6 text-black pt-4 pb-2">
                {product.title}
              </p>
              <div>
                <p className="font-primary font-medium text-[16px] leading-6 text-primary mr-2">
                  ${product.price}
                </p>
                {/* <div className="flex">
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <TiStarFullOutline size={20} color="#FFAD33" />
                  <p className="ml-2 font-primary font-semibold text-[14px] leading-[21px] text-[#979797]">
                    {product.amount}
                  </p>
                </div> */}
                <div className="flex items-center mt-2">
                  <ProductRating rating={product.rating} />
                  <p className="ml-2 font-primary font-semibold text-[14px] leading-[21px] text-[#979797]">
                    {`(${product.stock})`}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex gap-x-2.5 pt-[40px] pb-[104px] ml-16.5">
        {data.map((item) => (
          <div
            className={`font-primary text-[16px] leading-6 px-[25px] py-[2px] cursor-pointer ${
              currentPage === item
                ? "bg-black text-white"
                : "text-black bg-gray-200"
            }`}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </div>
          //  <button className='font-primary font-bold px-4'
          //       onClick={()=>setCurrentPage(prev => Math.max(prev-1 ,1))}
          //       disabled ={currentPage === 1}
          //       >
          //        Prev
          //       </button>
          //      <button className='font-primary font-bold px-4'
          //      onClick={()=>setCurrentPage(prev=> Math.min(prev+1 , data.length))}
          //      disabled={currentPage === data.length}
          //      >
          //       Next
          //      </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsRightPart;
