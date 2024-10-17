import React, { useEffect, useState } from "react";
import "./Allprod.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Allprod() {
  // let navigate = useNavigate();
  const [data, setData] = useState([]);
  let {id} = useParams();
  console.log(id)
  function temp() {
    axios
      .get("https://6592473ebb129707198f9c8a.mockapi.io/React/footwear")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function Delete(e, id) {
    e.preventDefault();
    alert("Data has been deleted.");
    axios.delete("https://6592473ebb129707198f9c8a.mockapi.io/React/footwear/"+ id)
    .then((res)=>{
      console.log(res.data);
      temp();
    })
  }
  useEffect(() => {
    temp();
  }, []);
  return (
    <>
      <div className="allProd-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachData, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{eachData.title}</td>
                  <td>
                    <img
                      style={{ width: "100px" }}
                      src={eachData.image}
                      alt="image"
                    />
                  </td>
                  <td>{eachData.category}</td>
                  <td>{eachData.rating}</td>

                  <td>
                    <Link to={"/addprod/"+eachData.id}>
                    <button className="btn btn-success">Edit</button>
                    </Link>
                    <button
                      onClick={(e) => Delete(e, eachData.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
