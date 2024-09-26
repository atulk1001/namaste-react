import {useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    // Subscribing to store using selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-slate-100 shadow-lg"> 
            <div className="w-28">
                <img
                    className="rounded-full"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex item-center">
                <ul className="flex p-4 m-5">
                    <li className="px-4 hover:font-semibold hover:text-lg"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:font-semibold hover:text-lg"><Link to="about">About Us</Link></li>
                    <li className="px-4 hover:font-semibold hover:text-lg"><Link to="contact-us">Contact Us</Link></li>
                    <li className="px-4 hover:font-semibold hover:text-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:font-semibold hover:text-lg"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <li className="px-4 hover:font-semibold text-green-500">{loggedInUser}</li>
                    <li className="px-4 hover:font-semibold hover:text-lg">{onlineStatus?<span className="flex w-5 h-5 me-5 bg-green-600 rounded-full"></span> : <span className="flex w-5 h-5 me-5 bg-red-600 rounded-full"></span>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;