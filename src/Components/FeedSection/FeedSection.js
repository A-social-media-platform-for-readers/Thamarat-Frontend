import { useState, useEffect } from "react";
import styles from "./FeedSection.module.css";

import BookSection from "../BookSection/BookSection";
import SpreadedSection from "../SpreadedSection/SpreadedSection";

const FeedSection = () => {
  const jwt = localStorage.getItem("token");

  const [popularContent, setPopularContent] = useState([
    {
      id: 0,
      title: "string1",
      author: "string1",
      rate: 5,
      price: 10000,
      genre: "string",
      publisher: "string",
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
      description: "string",
      readers_count: 2147483647,
      to_read_count: 2147483647,
      cover_image: "string",
      pdf_file: "string",
    },
  ]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/books/free-books/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include", // Include cookies with the request
        }
      );

      const content = await response.json();
      setPopularContent(content.results);
    })();
  }, [jwt]);

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
      const response = await fetch(
        "https://backend-9s26.onrender.com/books/popular-books/",
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
      setBooks(content.results);
    })();
  }, [jwt]);

  const [mostRatedContent, setMostRatedContent] = useState([
    {
      id: 0,
      title: "string1",
      author: "string1",
      rate: 5,
      price: 10000,
      genre: "string",
      publisher: "string",
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
      description: "string",
      readers_count: 2147483647,
      to_read_count: 2147483647,
      cover_image: "string",
      pdf_file: "string",
    },
  ]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/books/high-rate/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include", // Include cookies with the request
        }
      );

      const content = await response.json();
      setMostRatedContent(content.results);
    })();
  }, [jwt]);

  const [religiousContent, setReligiousContent] = useState([
    {
      id: 0,
      title: "string1",
      author: "string1",
      rate: 5,
      price: 10000,
      genre: "string",
      publisher: "string",
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
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
      publication_date: "2024-05-07",
      description: "string",
      readers_count: 2147483647,
      to_read_count: 2147483647,
      cover_image: "string",
      pdf_file: "string",
    },
  ]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://backend-9s26.onrender.com/books/filter-genre/دين/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include", // Include cookies with the request
        }
      );

      const content = await response.json();
      setReligiousContent(content.results);
    })();
  }, [jwt]);

  return (
    <div className={`${styles.feedSection} position-relative`}>
      <BookSection sectionName="الكتب المجانية" content={popularContent} />
      <SpreadedSection
        sectionName="الأكثر وراجاً لهذا الإسبوع"
        content={books}
      />
      <BookSection sectionName="الأعلى تقييماً" content={mostRatedContent} />
      <BookSection sectionName="دين" content={religiousContent} />
    </div>
  );
};

export default FeedSection;
