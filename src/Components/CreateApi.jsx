import React, { useEffect, useState } from "react";
import "./CreateApiStyle.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function CreateApi() {
  let navigate = useNavigate();
  let {id} = useParams();
  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    rating: "",
    image: "",
  });
  
    
  
  useEffect(() => {
   
    
      axios
        .get("https://6592473ebb129707198f9c8a.mockapi.io/React/footwear/" + id)
        .then((res) => {
          console.log(res.data);
          setData({
            title: res.data.title,
            category: res.data.category,
            price: res.data.price,
            rating: res.data.rating,
            image: res.data.image,
          });
        });
      
    
       
  }, []);
  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value });
    console.log("data:",data);
  }
  function handleSubmit(e) {
    if (id === undefined) {
      axios
        .post(
          "https://6592473ebb129707198f9c8a.mockapi.io/React/footwear",
          data
        )
        .then((res) => {
          console.log(data);
          navigate("/products");
        });
    } else {
      axios
        .put(
          "https://6592473ebb129707198f9c8a.mockapi.io/React/footwear/" + id,
          data
        )
        .then((res) => {
          console.log(res.data);
          navigate("/products");
        });
    }
  }
  return (
    <>
      <div className="main-head">
        <h1>Add Products</h1>
        <div className="container-add">
          <div className="inner-add">
            <span>
              Title:{" "}
              <input
                onChange={(e) => handleChange(e)}
                id="title"
                value={data.title}
                type="text"
                placeholder="Enter Title"
              />
            </span>
            <span>
              Category:{" "}
              <input
                onChange={(e) => handleChange(e)}
                id="category"
                value={data.category}
                type="text"
                placeholder="Enter Category"
              />
            </span>
            <span>
              Price:{" "}
              <input
                onChange={(e) => handleChange(e)}
                id="price"
                value={data.price}
                type="text"
                placeholder="Enter Price"
              />
            </span>
            <span>
              Rating:{" "}
              <input
                onChange={(e) => handleChange(e)}
                id="rating"
                value={data.rating}
                type="text"
                placeholder="Enter Rating"
              />
            </span>
            <span>
              image(Upload URL):{" "}
              <input
                onChange={(e) => handleChange(e)}
                id="image"
                value={data.image}
                type="text"
                placeholder="Paste url Here "
              />
            </span>
            <span>
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-success"
              >
                Submit
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
