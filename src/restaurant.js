import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/*
* Header
*   - Logo
*   - NavItems
* Body
*    -Search
*    - RestaurantContainer
*        - RestaurantCards
            - img, name,star rating, cuisine, delivery time
* Footer
*   - Copyright
*   - Links
*   - Address
*    - Contacts
*/

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
