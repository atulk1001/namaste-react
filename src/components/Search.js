import React, {useState } from "react";
const Search = ({searchRestaurant}) => {
    const [searchText, setSearchText] = useState("");
    const updateSearchText = (e) => {
        setSearchText(e.target.value);
    }   
  return (
    <>
      <input
        className="p-3 m-4 w-48 border-slate-200 bg-gray-100 text-black-500 rounded-sm hover:font-semibold lg:w-96"
        type="text"
        value={searchText}
        placeholder="KFC"
        onChange={(e) => updateSearchText(e)}
      />
      <button
        className="px-4 bg-gray-300 py-2 m-4 rounded-sm hover:shadow-md hover:bg-slate-400 hover:font-semibold"
        onClick = {() => searchRestaurant(searchText)}
      >
        Search
      </button>
    </>
  );
};
export default React.memo(Search);