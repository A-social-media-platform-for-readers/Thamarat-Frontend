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
      setUserName(content.name);
    })();
  });

  const [books, setBooks] = useState([
    {
      id: 0,
      title: "string",
      author: "string",
      rate: 5,
      price: 10000,
      genre: "string",
      publisher: "string",
      publication_date: "2024-04-22",
      description: "string",
      readers_count: 2147483647,
      to_read_count: 2147483647,
      cover_image: "string",
      pdf_file: "string",
    },
    {
      id: 0,
      title: "string",
      author: "string",
      rate: 5,
      price: 10000,
      genre: "string",
      publisher: "string",
      publication_date: "2024-04-22",
      description: "string",
      readers_count: 2147483647,
      to_read_count: 2147483647,
      cover_image: "string",
      pdf_file: "string",
    },
    {
      id: 0,
      title: "string",
      author: "string",
      rate: 5,
      price: 10000,
      genre: "string",
      publisher: "string",
      publication_date: "2024-04-22",
      description: "string",
      readers_count: 2147483647,
      to_read_count: 2147483647,
      cover_image: "string",
      pdf_file: "string",
    },
    {
      id: 0,
      title: "string",
      author: "string",
      rate: 5,
      price: 10000,
      genre: "string",
      publisher: "string",
      publication_date: "2024-04-22",
      description: "string",
      readers_count: 2147483647,
      to_read_count: 2147483647,
      cover_image: "string",
      pdf_file: "string",
    },
  ]);

  // Request book data from backend
  useEffect(() => {
    (async () => {
      const response = await fetch("https://backend-9s26.onrender.com/books/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const content = await response.json();
      setBooks(content.results);
    })();
  }, [jwt]);

  return (
    <div
      className="container-md pt-5 d-flex justify-content-between position-relative"
      style={{ height: "100vh" }}
    >
      <Navbar userName={userName} />
      <Sidebar />
      <Outlet context={[books]} />
    </div>
  );
};

export default Home;
