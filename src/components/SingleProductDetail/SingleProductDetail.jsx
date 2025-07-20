import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import SingleProductRating from "./SingleProductRating";
import { FiEye, FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import MainHeading from "../../layout/MainHeading";
import { FaRegHeart } from "react-icons/fa6";
import ProductRating from "../ProductsPage/ProductRating";
import { cartTotal } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

const SingleProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const singleProduct = productData.find((product) => product.id == id);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [visible, setVisible] = useState(4);
  const [selectedImg, setSelectedImg] = useState();
  const [count, setCount] = useState(0);
  const dispatch = useDispatch()
  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClick1 = () => {
    setClicked1(true);
    setClicked2(false);
  };
  const handleClick2 = () => {
    setClicked1(false);
    setClicked2(true);
  };

  useEffect(() => {
    if (singleProduct?.thumbnail) {
      setSelectedImg(singleProduct?.thumbnail);
    }
  }, [singleProduct]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  const handleBuyNow = (product) => {
    dispatch(cartTotal(product))
    
  }
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
            {/* <div className="py-[16px] px-6 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div>
            <div className="py-[16px] px-6 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div>
            <div className="py-[16px] px-6 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div>
            <div className="py-[16px] px-6 bg-[#F5F5F5] rounded flex justify-center items-center">
              <img src={singleProduct?.images[0]} alt="" />
            </div> */}
            {singleProduct?.images.map((img) => (
              <div className="py-[16px] px-6 bg-[#F5F5F5] rounded flex justify-center items-center cursor-pointer">
                <img onClick={() => setSelectedImg(img)} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-6 mr-[70px]">
          <div className="pt-[160px] pb-[173px] px-[27px] bg-[#F5F5F5] rounded flex items-center justify-center">
            <img className="w-[300px]" src={selectedImg} alt="" />
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
              <div
                className="w-[20px] h-[20px] rounded-full bg-[#A0BCE0]"
                onClick={handleClick1}
                style={{ border: clicked1 ? "3px solid #000000" : "none" }}
              ></div>
              <div
                className="w-[20px] h-[20px] rounded-full bg-[#E07575]"
                onClick={handleClick2}
                style={{ border: clicked2 ? "3px solid #000000" : "none" }}
              ></div>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <p className="font-secondary text-[20px] leading-[20px] text-black">
              Size:
            </p>
            <div className="flex items-center gap-x-4 ml-6">
              <p className="py-1.5 px-[7px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">
                XS
              </p>
              <p className="py-1.5 px-[12px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">
                S
              </p>
              <p className="py-1.5 px-[10px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">
                M
              </p>
              <p className="py-1.5 px-[13px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">
                L
              </p>
              <p className="py-1.5 px-[7px] border border-[#00000080] rounded font-primary font-medium text-[14px] leading-[21px] text-black">
                XL
              </p>
            </div>
          </div>
          <div className="flex mt-6 items-center">
            <div className="flex border rounded border-[#00000080] overflow-hidden">
              <div
                className="flex items-center py-[10px] px-2 group hover:bg-primary ease-in-out duration-100 cursor-pointer"
                onClick={Decrease}
              >
                <LuMinus
                  size={16}
                  className="group-hover:text-white ease-in-out duration-100"
                />
              </div>
              <div className="flex items-center py-2 px-8.5 relative after:absolute after:content-[''] after:h-full after:w-[1px] after:bg-[#00000080] after:left-0 after:top-0 before:absolute before:content-[''] before:h-full before:w-[1px] before:bg-[#00000080] before:right-0 before:top-0">
                <p className="font-primary font-medium text-[20px] leading-7 text-black">
                  {count}
                </p>
              </div>
              <div
                className="py-[10px] px-2 flex items-center group hover:bg-primary ease-in-out duration-100 cursor-pointer"
                onClick={Increase}
              >
                <FiPlus
                  size={16}
                  className="group-hover:text-white ease-in-out duration-100"
                />
              </div>
            </div>
            <div className="ml-4 mr-[19px]">
              <Link to="/cart">
                <button onClick={()=>handleBuyNow(singleProduct)} className="py-2.5 px-12 bg-primary text-white font-primary font-medium text-[16px] cursor-pointer leading-6 rounded">
                  Buy Now
                </button>
              </Link>
            </div>
            <div className="py-[11px] px-[10px] border border-[#00000080] rounded ">
              <IoMdHeartEmpty size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="border border-[#00000080] rounded mt-[40px]">
            <div className="pt-6 pb-4 pr-[52px] pl-4 relative after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#00000080] after:bottom-0 after:left-0">
              <div className="flex items-center gap-x-4">
                <TbTruckDelivery size={40} />
                <div>
                  <h2 className="font-primary font-medium text-[16px] leading-6 text-black">
                    Free Delivery
                  </h2>
                  <p className="font-primary font-medium text-[11px] leading-4.5 text-black mt-2 max-w-[276px] underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-6 pl-4">
              <div className="flex items-center gap-x-4">
                <TbTruckReturn size={40} />
                <div>
                  <h2 className="font-primary font-medium text-[16px] leading-6 text-black">
                    Return Delivery
                  </h2>
                  <p className="font-primary font-medium text-[11px] leading-4.5 text-black mt-2 max-w-[276px]">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[140px]">
        <div>
          <MainHeading>Related Item</MainHeading>
        </div>
        <div className="flex flex-wrap gap-x-[30px] gap-y-[40px] justify-end mt-[30px]">
          {productData.slice(0, visible).map((product) => (
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
      </div>
    </div>
  );
};

export default SingleProductDetail;
