import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Menu from "./components/Menu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
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

/*
* 
*Chunking
*lazy loading
*dynamic import
*code splitting
*on demand loading
*/
const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Outlet/>
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact-us",
                element: <Contact/>
            },
            {
                path: "/menu/:id",
                element: <Menu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            }
        ],
        errorElement:<ErrorPage/>
    }
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
