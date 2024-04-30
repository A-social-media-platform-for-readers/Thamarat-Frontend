import { useState, useEffect } from "react";

import SpreadedSecCard from "../SpreadedSecCard/SpreadedSecCard";
import styles from "./SpreadedSection.module.css";

const SpreadedSection = (props) => {
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
  const jwt = localStorage.getItem("token");

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
      console.log(content);
      console.log(books);
    })();
  }, []);

  return (
    <div className={`${styles.spreadSection}`}>
      <div className={`d-flex justify-content-between align-items-center mb-3`}>
        <p className={`m-0 fs-5`}>{props.sectionName}</p>
      </div>
      <SpreadedSecCard author={books[0].author} title={books[0].title} />
      <SpreadedSecCard author={books[1].author} title={books[1].title} />
      <SpreadedSecCard author={books[2].author} title={books[2].title} />
      <SpreadedSecCard author={books[3].author} title={books[3].title} />
    </div>
  );
};

export default SpreadedSection;
