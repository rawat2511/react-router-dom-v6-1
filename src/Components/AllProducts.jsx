import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const AllProducts = () => {

  const [prudcts, setPrudcts] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(res => setPrudcts(res))
  }, [])

  return (
    <div>
        <h1>All Products</h1>
        <table border="1" style={{margin : "0 auto"}}>
            <tr style={{padding: "22px"}}>
                <th style={{padding: "22px"}}>SNo.</th>
                <th>Product</th>
                <th>Price</th>
                <th>For More Details</th>
            </tr>
        {
            prudcts.map(({id, name, price}) => <tr key={id}>
                <th style={{padding: "22px", margin: "20px"}}>{id + 1}. </th>
                <th> {name} </th>
                <th> Rs.{price}</th>
                <th><Link to={`/products/${id}`}>more details...</Link></th> 
            </tr>)
        }
        </table>
    </div>
  )
}

export default AllProducts;
