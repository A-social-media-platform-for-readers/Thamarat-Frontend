import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const jwt = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleClick = () => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/auth/logout/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        const content = await response.json();
        console.log(content);
        localStorage.removeItem("token");
        navigate("/");
      } else {
        console.log("error");
      }
    })();
  };
  return (
    <div className={`container-fluid position-fixed ${styles.navContainer}`}>
      <div
        className={`navbar container-md p-0 ps-2 pe-2 ${styles.navbarPostion}`}
      >
        <Link
          to="Home"
          className="navbar-brand fw-bold"
          style={{ color: "#92e3a9", margin: 0 }}
        >
          ثمرات
        </Link>
        <form
          className={`d-flex ${styles.searchBar}`}
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2 rounded-pill"
            type="search"
            placeholder="بحث"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success rounded-circle"
            type="submit"
          >
            <img src={require("../../imgs/search.png")} alt="search" />
          </button>
        </form>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-danger rounded-pill position-absolute"
          style={{ top: 560, left: 0 }}
        >
          Logout
        </button>
        <div
          className={`links d-flex justify-content-between align-items-center`}
        >
          <div style={{ height: 45 }}>
            <Link
              to="ShopingCart"
              className={`text-decoration-none text-black`}
            >
              عربة التسوق
            </Link>
          </div>
          <div style={{ height: 45 }}>
            <Link
              to="Library"
              className={`text-decoration-none text-black me-4 me-lg-5`}
            >
              المكتبة
            </Link>
          </div>
          <div className={`me-4 me-lg-5`} style={{ height: 45 }}>
            <Link to="Profile" className={`text-decoration-none text-black`}>
              {props.userName}
            </Link>
            <img
              src={require("../../imgs/profileImg.jpg")}
              alt="ProfileImage"
              className={`me-2 rounded-circle`}
              style={{ width: 45, height: 45 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
