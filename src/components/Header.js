import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div>
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="contact-us">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li>{onlineStatus?<span className="circle-green"></span> : <span className="circle-red"></span>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;