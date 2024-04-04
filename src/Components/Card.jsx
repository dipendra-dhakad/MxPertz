import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((response) => {
        console.log("response", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4  items-center justify-center w-full mt-3 p-2 ">
      {loading ? ( 
        <div className="flex justify-center items-center"><Spinner /></div>
        
      ) : (
        data.map((card, index) => (
          <Link key={index} to={`/cardDetails/${card._id}`}>
            <div className="w-[250px] h-[350px] border rounded-md border-slate-700">
              <div className="relative h-[70%]">
                <img
                  src={`https://ik.imagekit.io/dev24/${card?.Image[0]}`}
                  alt="movie image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4  text-center">
                <p className="text-lg font-bold">{card.Title}</p>
                <p className="text-sm">{card.Status}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Card;
