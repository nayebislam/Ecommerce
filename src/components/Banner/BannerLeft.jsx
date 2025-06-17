import React from "react";

const BannerLeft = () => {
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
    <section className="w-[20%] relative after:absolute after:content-[''] after:w-[1px] after:h-[384px] after:bg-[#D9D9D9] after:top-[-40px] after:right-0">
      {CategorisData.map((item) => (
        <p className="font-primary text-base leading-[24px] text-black mb-4">
          {item.name}
        </p>
      ))}
    </section>
  );
};

export default BannerLeft;
