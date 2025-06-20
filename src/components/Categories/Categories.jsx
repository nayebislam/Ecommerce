import React from "react";
import Containar from "../../layout/Containar";
import MainHeading from "../../layout/MainHeading";
import SubHeading from "../../layout/SubHeading";
import CategoriesImg1 from "./CategoriesImg1";
import CategoriesImg2 from "./CategoriesImg2";
import CategoriesImg3 from "./CategoriesImg3";
import CategoriesImg4 from "./CategoriesImg4";
import CategoriesImg5 from "./CategoriesImg5";
import CategoriesImg6 from "./CategoriesImg6";

const Categories = () => {
  const CategoriesData = [
    {
      name: "Phones",
      Image: <CategoriesImg1 />,
    },
    {
      name: "Computers",
      Image: <CategoriesImg2 />,
    },
    {
      name: "SmartWatch",
      Image: <CategoriesImg3 />,
    },
    {
      name: "Camera",
      Image: <CategoriesImg4 />,
    },
    {
      name: "HeadPhones",
      Image: <CategoriesImg5 />,
    },
    {
      name: "Gaming",
      Image: <CategoriesImg6 />,
    },
  ];
  return (
    <section className="pt-[153px] pb-[95px]">
      <Containar>
        <MainHeading>Categories</MainHeading>
        <SubHeading>Browse By Category</SubHeading>
        <div className="flex justify-between mt-[60px]">
          {CategoriesData.map((category) => (
            <div className="py-5 w-[170px] flex border border-black/33 flex-col items-center rounded group hover:bg-primary hover:border-primary ease-in-out duration-200">
              <div>{category.Image}</div>
              <p className="font-primary text-base leading-6 text-black mt-4 group-hover:text-white ease-in-out duration-200">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </Containar>
    </section>
  );
};

export default Categories;
