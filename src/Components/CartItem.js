import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  // const subtotal = item.price * item.quantity;

  return (
   
    <div className="flex flex-col items-center justify-between ">
       
        <div className="flex flex-row items-center justify-between mt-5">
        <div className="w-[15%]">
          <img className="object-cover" alt="cart-item" src={item.Image} />

    </div>
    <div>  <p className="font-bold text-lg text-green-600">product</p></div>
            {/* <div>  <p className="font-bold text-lg text-green-600">{item.price}</p></div> */}
            <div><p className="font-semibold text-gray-700"> {item.quantity}</p></div>
            {/* <div><p className="font-semibold text-gray-700"> ${subtotal}</p></div> */}
            <div
               className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 text-red-800 cursor-pointer rounded-full p-3 mr-3"
               onClick={removeFromCart}
            >
             <MdDelete />
          </div>
        </div>
    </div>
  );
};

export default CartItem;