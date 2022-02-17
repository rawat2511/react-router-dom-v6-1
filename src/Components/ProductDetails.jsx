import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();


  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products/" + id )
      .then((res) => res.json())
      .then((res) => setState([res]));
  }, []);

  console.log("State => ", state);

  return (
    <div>
      <h1>Product Details</h1>
      {
          state &&
      state.map(({ id, name, image, price }) => {
        return <div>
            <h1>{`${id+1}. ${name}`}</h1>
            <h1>{`Cost : Rs.${price}`}</h1>
            <img style={{height: "300px", width: "300px"}} src={image} alt={name} />
        </div>;
      })}
    </div>
  );
};

export default ProductDetails;
