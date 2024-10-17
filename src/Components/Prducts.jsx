import React, { useEffect, useState } from "react";
import men from "../assets/images/men.jpg";
import "./productsStyle.css";
import axios from "axios";
export default function Men() {
  const [data, setData] = useState([]);
  function temp() {
    axios
      .get("https://6592473ebb129707198f9c8a.mockapi.io/React/footwear")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  useEffect(() => {
    temp();
  }, []);

  return (
    <>
      <div className="colorlib-product">
        <div className="allprodback">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                <h2> Our all Products</h2>
              </div>
            </div>
			<div className="row row-pb-md">
            {data.map((eachData) => {
              return (
                
                  <div className="col-lg-3 mb-4 text-center">
                    <div className="border01" >
                    <div className="product-entry border">
                      <a href="#" className="prod-img">
                        <img style={{width:"250px", height:"250px"}}
                          src={eachData.image}
                          className="img-fluid"
                          alt="Free html5 bootstrap 4 template"
                        />
                      </a>
                      <div className="desc">
                        <h2>
                          <a href="#">
                            <b>{eachData.title}</b>
                          </a>
                        </h2>
                        <span className="price">Price: ₹ {eachData.price}</span>
                        <span className="price">Rating: {eachData.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                
              );
            })}
			</div>
          </div>
        </div>
      </div>
    </>
  );
}
