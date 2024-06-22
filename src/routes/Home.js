import { useState, useEffect } from "react";

//Components
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState(""); // Set the user name according to the user data sent back

  const jwt = localStorage.getItem("token");

  // request user data from backend

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/auth/user/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include", // Include cookies with the request
        }
      );

      const content = await response.json();
      setUserName(content);
    })();
  }, [jwt]);

  return (
    <div
      className="container-md pt-5 d-flex justify-content-between position-relative"
      style={{ height: "100vh" }}
    >
      <Navbar userName={userName.name} sIconColor={"Home"} />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
