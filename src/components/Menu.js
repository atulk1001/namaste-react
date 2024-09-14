import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


export default Menu = () => {
  const { id } = useParams();
  const item = useRestaurantMenu();
  return item === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="content">
        <h1>{item[0].name}</h1>
        <h3>Menus</h3>
        {item[0].menus.map((itm, ind) => {
          return <div key={ind} className="menu-container">
            <div>
              <div>
                <h3>{itm.name}</h3>
              </div>
              <div>
                <h4> ₹ {itm.price}</h4>
              </div>
              <div>
                <h5>{itm.rating} Stars</h5>
              </div>
              <div>{itm.desc}</div>
            </div>
            <div>
              <div>
                <img src={itm.image} />
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
