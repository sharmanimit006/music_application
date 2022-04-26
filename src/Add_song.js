import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    ProductName: "",
    ProductPrice: "",
  });
  const navigate=useNavigate()

  const setData =(e)=>{
    // console.log(e.target.value);
   setAddProduct({...addProduct,[e.target.name]:e.target.value})
  }

  const addProductData = async ()=>{
 const productData = await axios.post("http://practical.esmsys.in/api/product/add",addProduct)
 setAddProduct(productData)
 navigate("/list")
  }

  return (
    <>
      <label>Song Name</label>
      <input type="text" name="ProductName" onChange={setData} />
      <label>Song Duration</label>
      <input type="number" name="ProductPrice" onChange={setData} />
      <button type="submit" onClick={addProductData}>Submit</button>
    </>
  );
};
//name state sam..

export default AddProduct;