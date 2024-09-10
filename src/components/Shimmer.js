import React, { useState, useEffect } from "react";

const Shimmer = () => {
  return (
    <>
      <button className="filter-btn" disabled> Top Rated Restaurants </button>
      <button className="filter-btn" disabled> Clear Filter </button>
      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </>
  );
};
export default Shimmer;
