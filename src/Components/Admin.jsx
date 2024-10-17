import React, { useEffect } from "react";
import "../Components/AdminStyle.css";
import { Link, useNavigate } from "react-router-dom";
export default function Admin() {
  let navigate = useNavigate();

  useEffect(() => {
    let credential = localStorage.getItem("data");

    if (credential === null) {
      navigate("/login");
    }
  });

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div>
      <div className="row">
        <div className="left">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <span>
                {" "}
                <i class="fa-solid fa-house"></i> | Main dashboard
              </span>
            </a>

            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Product</span>
            </a>
            <Link to={"/addprod"}>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-line fa-fw me-3"></i>
              <span>Add Product</span>
            </a></Link>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-pie fa-fw me-3"></i>
              <span>Order</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-bar fa-fw me-3"></i>
              <span>Sidebar</span>
            </a>
            <button onClick={(e) => handleLogout(e)}>
              <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fas fa-globe fa-fw me-3"></i>
                <span>Logout</span>
              </a>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="Admin-container">
            <div className="card">
              <i class="fa-solid fa-user"></i>
              <a href="#">User</a>
            </div>

            <div className="card">
              <i class="fa-brands fa-product-hunt"></i>
              <Link to={"/allprod"}>
                <a href="#">Product</a>
              </Link>
            </div>

            <div className="card">
              <i class="fa-solid fa-cart-shopping"></i>
              <a href="#">Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
