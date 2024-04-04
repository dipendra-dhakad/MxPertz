
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast'
import {add,remove} from '../redux/slices/cartSlice'
import { useState } from "react";

const Products = ({item}) => {
  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const AddToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  }

  const RemoveFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div 
      className="group  transition duration-300 ease-in flex flex-col items-center justify-between border border-gray-950 gap-3 p-4 mt-10 ml-5 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div>
        {/* <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p> */}
      </div>
      <div className="h-[180px] w-[180px]">
        <img className="h-full w-full " src={item.Image} alt="image" />
      </div>

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.Title}</p>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          {/* <p className="text-green-600 font-semibold">${item.price}</p> */}
          </div>
        {isHovered && (
          cart.some((i) => i.Id === item.Id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
              onClick={RemoveFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
              onClick={AddToCart}
            >
              New
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Products;