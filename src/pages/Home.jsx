import { useEffect, useState } from "react";
import Spinner from '../Components/Spinner'
import '../Components/Spinner.css'
import Products from "../Components/Products";

const Home = () => {
  const API_URL = "https://child.onrender.com/api/sciencefiction";


  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchProductData() {
    
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    }
    catch (e) {
      console.log('error occured!');
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  },[])
  return (
    <div>
      {
        loading ? (<Spinner />) :
          items.length > 0 ? (
            <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">{items.map((item) => (
              <Products key={item.id} item={item} />
            ))}</div>

          ) :
            <div className="flex justify-center items-center">
              <p>No record Found</p></div>
      }
    </div>
  );
};

export default Home;