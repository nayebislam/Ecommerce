import React, { useState } from "react";
import Containar from "../../layout/Containar";
import MainHeading from "../../layout/MainHeading";
import SubHeading from "../../layout/SubHeading";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import ourproduct1 from "../../assets/Our-Product1.png";
import ourproduct2 from "../../assets/Our-Product2.png";
import ourproduct3 from "../../assets/Our-Product3.png";
import ourproduct4 from "../../assets/Our-Product4.png";
import {Link} from "react-router";

const OurProducts = () => {
  const [visible, setVisible] = useState(8);
  const ProductsData = [
    {
      img: ourproduct1,
      name: "Breed Dry Dog Food",
      price: "$100",
      amount: "(35)",
    },
    {
      img: ourproduct2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      amount: "(95)",
    },
    {
      img: ourproduct3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      amount: "(325)",
    },
    {
      img: ourproduct4,
      name: "Curology Product Set ",
      price: "$500",
      amount: "(145)",
    },
    {
      img: ourproduct1,
      name: "Breed Dry Dog Food",
      price: "$100",
      amount: "(35)",
    },
    {
      img: ourproduct2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      amount: "(95)",
    },
    {
      img: ourproduct3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      amount: "(325)",
    },
    {
      img: ourproduct4,
      name: "Curology Product Set ",
      price: "$500",
      amount: "(145)",
    },
    {
      img: ourproduct1,
      name: "Breed Dry Dog Food",
      price: "$100",
      amount: "(35)",
    },
    {
      img: ourproduct2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      amount: "(95)",
    },
    {
      img: ourproduct3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      amount: "(325)",
    },
    {
      img: ourproduct4,
      name: "Curology Product Set ",
      price: "$500",
      amount: "(145)",
    },
    {
      img: ourproduct1,
      name: "Breed Dry Dog Food",
      price: "$100",
      amount: "(35)",
    },
    {
      img: ourproduct2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      amount: "(95)",
    },
    {
      img: ourproduct3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      amount: "(325)",
    },
    {
      img: ourproduct4,
      name: "Curology Product Set ",
      price: "$500",
      amount: "(145)",
    },
    {
      img: ourproduct1,
      name: "Breed Dry Dog Food",
      price: "$100",
      amount: "(35)",
    },
    {
      img: ourproduct2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      amount: "(95)",
    },
    {
      img: ourproduct3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      amount: "(325)",
    },
    {
      img: ourproduct4,
      name: "Curology Product Set ",
      price: "$500",
      amount: "(145)",
    },
    {
      img: ourproduct1,
      name: "Breed Dry Dog Food",
      price: "$100",
      amount: "(35)",
    },
    {
      img: ourproduct2,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      amount: "(95)",
    },
    {
      img: ourproduct3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      amount: "(325)",
    },
    {
      img: ourproduct4,
      name: "Curology Product Set ",
      price: "$500",
      amount: "(145)",
    },
  ];
  const LoadData = () => {
    setVisible((prev) => prev + 4);
  };
  return (
    <section className="pb-[42px]">
      <Containar>
        <div>
          <MainHeading>Our Products</MainHeading>
          <SubHeading>Explore Our Products</SubHeading>
        </div>
        <div className="flex flex-wrap gap-y-[60px] justify-between mt-[60px]">
          {ProductsData.slice(0, visible).map((product) => (
            <div className="relative w-[270px]">
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
              <div className="relative group ease-in-out duration-200 bg-products rounded flex justify-center items-center h-[250px]">
                <img src={product.img} alt="" />
                <div className="absolute left-0 bottom-0 w-full opacity-0 group-hover:opacity-[100%] ease-in-out duration-200">
                  <Link to="/cart">
                    <button className="w-full font-primary font-medium text-[16px] leading-6 text-white bg-black py-2 rounded-b cursor-pointer">
                      Add To Cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-primary font-medium text-[16px] leading-6 text-black pt-4 pb-2">
                  {product.name}
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
        {visible < ProductsData.length && (
          <div className="mt-[60px] text-center">
            <button
              onClick={LoadData}
              className="font-primary font-medium text-[16px] leading-6 text-white py-4 px-12 bg-primary rounded cursor-pointer"
            >
              View All Products
            </button>
          </div>
        )}
      </Containar>
    </section>
  );
};

export default OurProducts;
