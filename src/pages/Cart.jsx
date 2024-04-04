import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Cart = () => {
  const {cart}=useSelector((state)=> state)
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])
  return (<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
    {
      cart.length > 0 ?
      (
        <div className="flex justify-between gap-[80px] ">
          
          <div className="md:w-[60%] flex flex-col p-2">
          <div className="flex bg-orange-50 flex-row items-center justify-between w-full font-bold texl mt-3 p-2">
            {/* <div className="text-2xl">Image</div>
            <div className="text-2xl">Product title</div>
            <div className="text-2xl">Price</div>
            <div className="text-2xl">Quntity</div>
            <div className="text-2xl">SubTotal</div> */}
        </div>
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>
          <div className=" p-5 gap-5 my-14 h-full justify-between w-[100%] md:w-[40%] mt-5  flex flex-col  bg-orange-100 border-gray-950 ">
            <div className="flex flex-col gap-5">
              <div className="text-black font-semibold text-5xl"> Cart Totals</div>

             
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold text-3xl ">Total :</span>  {totalAmount}</p>
                <button className=" hover:bg-purple-50 rounded-lg text-black transition duration-300 ease-linear mt-5 border-2  font-bold  hover:scale-110 p-3 text-3xl border-black">Checkout Now</button>
              
            </div>
          </div>
          </div>

          
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your Cart is Empty!</h1>
          <Link to="/">
          <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button></Link>
        </div>
      )
    }
  </div>
  )
};

export default Cart;