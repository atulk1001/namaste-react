import { useState } from "react";
import MenuItem from "./MenuItems";
const RestaurantCategory = ({ data, menuList, show, setShowIndex }) => {
 
  let categoryData = menuList.filter((menu) => menu.category === data);
  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div className="w-4/6 bg-slate-100 p-4 m-3 cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between">
        <span className="font-bold">
          {data.charAt(0).toUpperCase() + data.slice(1)}
        </span>
        {!show?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="green"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg> }

      </div>
      {show && <MenuItem categoryData={categoryData} />}
    </div>
  );
};

export default RestaurantCategory;
