import React, {useState} from "react";
import Card from "./Card";
import restaurantData from "../utils/mockdata";

const Body = () => {
    let restList = [...restaurantData];
    const[list,setList] = useState(() => restList);
    const filter = () => {
        let filteredList = restList.filter((ele) => ele.stars >= 4);
        setList(filteredList);
    }
    const clearFilter = () => {
        setList(restList);
    }
    return (
        <div className="body">
            {/* <div className="search-bar">Search</div> */}
            <button className="filter-btn" onClick={filter}> Top Rated Restaurants </button>
            <button className="filter-btn" onClick={clearFilter}> Clear Filter </button>
            <div className="restaurant-container">
                {
                    list.map(rest => <Card key={rest.id} resData={rest} />)
                }
            </div>
        </div>
    );
};

export default Body;