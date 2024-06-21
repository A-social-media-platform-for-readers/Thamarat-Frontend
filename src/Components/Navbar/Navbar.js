import React, { useState, useEffect } from "react";
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
        navigate("/thamarat-frontend");
      } else {
        console.log("error");
      }
    })();
  };

  // Search

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [debounce, setDebounce] = useState(term);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(term);
    }, 500);
    return () => clearTimeout(timeout);
  }, [term]);

  const searchInput = React.useRef(null);

  useEffect(() => {
    if (
      document.activeElement === searchInput.current &&
      searchInput.current.value !== ""
    ) {
      (async () => {
        const response = await fetch(
          `https://backend-9s26.onrender.com/books/search/${debounce}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${jwt}`,
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const content = await response.json();
        setResults(content.results);
        document.querySelector(`.${styles.searchResults}`).style.display =
          "block";
        document.querySelector(`.${styles.closeSearch}`).style.display =
          "block";
      })();
    }
  }, [debounce, jwt]);

  const searchResults = results.map((result) => {
    return (
      <tr>
        <th scope="row">{result.id}</th>
        <td>{result.title}</td>
        <td>{result.author}</td>
        <td>{result.rate}</td>
      </tr>
    );
  });
  return (
    <>
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
              className={`form-control me-2 rounded-pill`}
              type="search"
              placeholder="بحث"
              aria-label="Search"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              id="searchBar"
              ref={searchInput}
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
            style={{ top: 780, left: 0 }}
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
      <div className={`${styles.searchResults}`}>
        <button
          className={`${styles.closeSearch} bg-danger`}
          onClick={(e) => {
            document.querySelector(`.${styles.searchResults}`).style.display =
              "none";
            e.target.style.display = "none";
          }}
        >
          X
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">رقم الكتاب</th>
              <th scope="col">إسم الكتاب</th>
              <th scope="col">المؤلف</th>
              <th scope="col">التقييم</th>
            </tr>
          </thead>
          <tbody>{searchResults}</tbody>
        </table>
      </div>
    </>
  );
};

export default Navbar;
