import React from 'react'
import './Product_item.css' 
const Button =()=>{
return (
  <div>
    <button className="btn_color">Click me</button>
  </div>
);
} 

function Product_Item({Product_name,key}) {
  return (
    <div key={key}>
      <p> {Product_name}</p>
      <Button />
    </div>
  );
}

export default Product_Item
