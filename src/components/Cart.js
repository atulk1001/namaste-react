import { useSelector,useDispatch } from "react-redux";
import MenuItem from "./MenuItems";
import { clearCart } from "../utils/cartSlice";
export default Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const onHandleClear = () => {
    dispatch(clearCart())
  }
  return (
    <div className="m-5 p-5">
         <button className = "m-auto p-4 bg-slate-300 float-right" onClick={onHandleClear}>Clear</button>
      <div className="w-3/4 border border-b-black border-t-0 border-l-0 border-r-0 m-auto">
        <h1 className = "font-bold underline-offset-2">Cart Items</h1>
       
      </div>
      <div className="flex flex-row flex-wrap mt-10 w-3/4 m-auto">
        {cartItems.length > 0 ?  <MenuItem categoryData={cartItems} /> : <h1>Add Items to Cart!</h1>}
       
      </div>
    </div>
  );
};