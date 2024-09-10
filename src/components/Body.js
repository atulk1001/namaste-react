import React, { useState, useEffect } from "react";
import Card from "./Card";
import restaurantData from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [list, setList] = useState(() => []);
  const [filteredList, setFilteredList] = useState(() => []);
  const [searchText, setSearchText] = useState("");

  async function fetchData() {
    let data = await fetch("http://localhost:3000/swiggy/restaurants");
    let json = await data.json();
    setList(json);
    setFilteredList(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filter = () => {
    let filList = list.filter((ele) => ele.stars >= 4);
    setFilteredList(filList);
  };

  const clearFilter = () => {
    setFilteredList(list);
    setSearchText("");
  };

  if (list.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <input
        className="search-bar"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="filter-btn"
        onClick={() => {
          let filteredData = list.filter((rest) =>
            rest.name.toLowerCase().includes(searchText.toLowerCase())
          );
          console.log(filteredData)
          setFilteredList(filteredData);
        }}
      >
        Search
      </button>
      <button className="filter-btn" onClick={filter}>
        Top Rated Restaurants
      </button>
      <button className="filter-btn" onClick={clearFilter}>
        Clear Filter
      </button>
      <div className="restaurant-container">
        {filteredList.map((rest) => (
          <Card key={rest.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
