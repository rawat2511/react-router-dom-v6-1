import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const nevigate = useNavigate();

  const goToHome = () => {
      nevigate("/");
  }

  const goToProducts = () => {
      nevigate("/products");
  }
  
  return (
    <div>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToProducts}>Products</button>
    </div>
  )
}
