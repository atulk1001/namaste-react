const MenuItem = ({ categoryData }) => {
    console.log('CategoryData',categoryData)
  return (
    <div className="flex justify-between flex-wrap">
      {categoryData && categoryData.map((itm, ind) => {
        return (
          <div key={ind} className="w-full p-2 ml-2 mr-2 mb-2 border-b-4">
  
            <span className="w-6/12 float-left">
              <div>
                <h3 className="font-semibold">{itm.name}</h3>
              </div>
              <div>
                <h4 className="font-semibold mt-1"> ₹ {itm.price}</h4>
              </div>
              <div>
                <h5 className="font-semibold mt-1">{itm.rating} Stars</h5>
              </div>
              <div className="font-light mt-1">
                <p>{itm.desc}</p>
              </div>
            </span>
            <span>
              <div>
                <img className="w-44 rounded-md float-right" src={itm.image} />
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default MenuItem;
