import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Menu from "./components/Menu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
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
const Body = lazy(()=>import("./components/Body"));
const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout = () => {
    const [userName, setUserName] = useState(null);
    useEffect(() => {
        data = {
            "name" : "Atul K Verma"
        }
        setUserName(data.name);
    },[]);

    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
                <Header></Header>
            <Outlet/>
        </div>

        </UserContext.Provider>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path: "/",
                element: <Suspense fallback={<Shimmer/>}><Body/></Suspense>
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
