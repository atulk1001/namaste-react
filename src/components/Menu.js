import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


export default Menu = () => {
  const { id } = useParams();
  const item = useRestaurantMenu(id);
  return item === null ? (
    <Shimmer />
  ) : (
    <div>

      <div className="flex justify-center p-4 m-4 ">
      <h1 className="font-bold">{item[0].name}</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {item[0].menus.map((itm, ind) => {
          return <div key={ind} className="w-full bg-zinc-100 p-5 ml-16 mr-16 mb-5">
            <div className="float-left max-w-96">
              <div>
                <h3 className="font-semibold mt-5">{itm.name}</h3>
              </div>
              <div>
                <h4 className="font-semibold mt-5"> ₹ {itm.price}</h4>
              </div>
              <div>
                <h5 className="font-semibold mt-5">{itm.rating} Stars</h5>
              </div>
              <div className="font-semibold mt-5"><p>{itm.desc}</p></div>
            </div>
            <div className="float-right">
              <div>
                <img className="w-96 rounded-md" src={itm.image} />
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
