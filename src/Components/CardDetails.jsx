import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState("");

  useEffect(() => {
    axios
      .get(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then((response) => {
        console.log("response", response);
        setCard(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  console.log("card", card);
  if (!card) {
    return (
      <div className="flex justify-center items-center w-full h-screen text-4xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full">
      <Link to="/" className="flex items-center mt-3 pl-5">
        <IoArrowBack className="mr-2" />
        Back
      </Link>
      <h1 className="text-2xl mt-3 pl-5 font-bold">{card.Title} Details</h1>
      <div className="grid  w-full mt-3 p-3 gap-4 items-center">
        {card.Wordexplore.length === 0? (
          <div className={`flex justify-center items-center w-full h-screen text-4xl ${card.Wordexplore.length === 0 ? 'bg-gray-200' : 'bg-white'}`}>
          {card.Wordexplore.length === 0 ? 'No data Found, Try Another Story' : 'Loading...'}
        </div>
        ) : (
          card.Wordexplore.map((item, index) => (
            <div key={index} className="relative flex justify-center">
              <img
                src={`https://ik.imagekit.io/dev24/${item.Storyimage[0]}`}
                alt={item.Storytitle}
                className="w-[80%] h-[300px] object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 text-center">
                <h2 className="text-lg font-semibold">{item.Storytitle}</h2>
                <p className="text-sm">{item.Storyttext}</p>
                <p className="text-xs">{item.Storyitext}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardDetails;
