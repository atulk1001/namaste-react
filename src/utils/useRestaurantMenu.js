// Custom Hook
import {useEffect,useState} from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (id) => {
    const[resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        let data = await fetch(`${MENU_URL}${id}`);
        let json = await data.json();
        setResInfo(json);
      };
    return resInfo;
}

export default useRestaurantMenu;