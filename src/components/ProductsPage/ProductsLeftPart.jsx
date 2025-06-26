import React from "react";

const ProductsLeftPart = () => {
  const CategorisData = [
    {
      name: "Woman’s Fashion",
    },
    {
      name: "Men’s Fashion",
    },
    {
      name: "Electronics",
    },
    {
      name: "Home & Lifestyle",
    },
    {
      name: "Medicine",
    },
    {
      name: "Sports & Outdoor",
    },
    {
      name: "Baby’s & Toys",
    },
    {
      name: "Groceries & Pets",
    },
    {
      name: "Health & Beauty",
    },
  ];
  return (
    <div className="w-[20%]">
      <p className="font-primary text-[14px] leading-[21px] text-[#808080] pt-[80px] pb-[50px]">
        home / shop
      </p>
      <h3 className="font-primary font-bold text-[20px] mb-4">
        Shop by Category
      </h3>
      <div>
        {CategorisData.map((item) => (
          <p className="font-primary text-base leading-[24px] text-black mb-4">
            {item.name}
          </p>
        ))}
      </div>
      <h3 className="font-primary font-bold text-[20px] mt-[40px] mb-[15px]">Shop by Color</h3>
      <div>
        <div className="flex items-center gap-x-[10px]">
            <div className="w-[11px] h-[11px] rounded-full bg-black"></div>
            <span className="font-primary text-[16px] leading-[30px] text-[#767676]">Color 1</span>
        </div>
        <div className="flex items-center gap-x-[10px] my-[18px]">
            <div className="w-[11px] h-[11px] rounded-full bg-[#FF0000]"></div>
            <span className="font-primary text-[16px] leading-[30px] text-[#767676]">Color 2</span>
        </div>
        <div className="flex items-center gap-x-[10px]">
            <div className="w-[11px] h-[11px] rounded-full bg-[#00FF38]"></div>
            <span className="font-primary text-[16px] leading-[30px] text-[#767676]">Color 3</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsLeftPart;
