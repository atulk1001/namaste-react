import { useState,useMemo } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


export default Menu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const item = useRestaurantMenu(id);
  let categories = new Set()
  item && item[0].menus.forEach((ele) => categories.add(ele.category));
  let listOfCat = [...categories];
  return item === null ? (
    <Shimmer />
  ) : (
    <div>

      <div className="flex justify-center p-2 m-2">
      <h1 className="font-bold">{item[0].name}</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {item && listOfCat.map((ele,index) =>  <RestaurantCategory key={ele} data={ele} menuList={item[0].menus} show={index===showIndex ? true :false } setShowIndex={()=> setShowIndex(index)}/>)}
      </div>
    </div>
  );
};
