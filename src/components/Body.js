import React, { useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import Card, {withPromotedLabel} from "./Card";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [list, setList] = useState(() => []);
  const [filteredList, setFilteredList] = useState(() => []);
  const [searchText, setSearchText] = useState("");
  const PromotedLabelComponent = withPromotedLabel(Card);
  const {loggedInUser,setUserName} = useContext(UserContext);
  async function fetchData() {
    let data = await fetch(API_URL);
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
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return <h1>Looks like you are offline. Please check you interent.</h1>
  }
  if (list.length === 0) {
    return <Shimmer />;
  }
  
  return (
    <div className="flex flex-wrap justify-center">
      <input
        className="p-3 m-4 w-48 border-slate-200 bg-gray-100 text-black-500 rounded-sm hover:font-semibold lg:w-96"
        type="text"
        value={searchText}
        placeholder="KFC"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="px-4 bg-gray-300 py-2 m-4 rounded-sm hover:shadow-md hover:bg-slate-400 hover:font-semibold"
        onClick={() => {
          let filteredData = list.filter((rest) =>
            rest.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredList(filteredData);
        }}
      >
        Search
      </button>
      <button className="px-5 bg-gray-300 py-2 m-4 rounded-sm hover:shadow-md hover:bg-slate-400 hover:font-semibold" onClick={filter}>
        Top Rated
      </button>
      <button className="px-5 bg-gray-300 py-2 m-4 rounded-sm hover:shadow-md hover:bg-slate-400 hover:font-semibold" onClick={clearFilter}>
        Clear Filter
      </button>
      <input
        className="p-3 m-4 w-48 border-slate-200 bg-gray-100 text-black-500 rounded-sm hover:font-semibold lg:w-96"
        type="text"
        placeholder="User Name"
        value={loggedInUser}
        onChange={(e)=> setUserName(e.target.value)}
      />
      <div className="flex justify-center flex-wrap">
        {filteredList.map((rest) => (
          <Link key={rest.id} to = {"/menu/"+rest.id}>
          {(rest.promoted === true) ? <PromotedLabelComponent resData={rest}/> : <Card key={rest.id} resData={rest} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
