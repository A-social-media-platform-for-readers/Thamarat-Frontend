import { useState, useEffect } from "react";

import styles from "../styles/Library.module.css";
import MyBook from "../Components/MyBook/MyBook";
import Seperator from "../Components/Seperator/Seperator";

const Library = () => {
  const jwt = localStorage.getItem("token");

  const [toReadBooks, setToReadBooks] = useState([]);
  // const [toReadId, setToReadId] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/books/to-read/",
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
      setToReadBooks(content);
    })();
  }, [jwt]);

  const [readingBooks, setReadingBooks] = useState([]);
  // const [readingId, setReadingId] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/books/reading/",
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
      setReadingBooks(content);
    })();
  }, [jwt]);

  const [readedBooks, setReadedBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/books/readed/",
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
      setReadedBooks(content);
    })();
  }, [jwt]);

  return (
    <div className={`container ${styles.libraryContainer}`}>
      <Seperator width="w-100 mt-3 mb-3" />
      <h5 className="text-center mt-4 mb-4">كتب سأقرأها</h5>
      <Seperator width="w-100 mt-3 mb-3" />
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {toReadBooks.map((toReadBook) => {
          return (
            <MyBook
              key={toReadBook.id}
              bookId={toReadBook.id}
              bookName={toReadBook.title}
              author={toReadBook.author}
              list={"toRead"}
            />
          );
        })}
      </div>
      <Seperator width="w-100 mt-3 mb-3" />
      <h5 className="text-center mt-4 mb-4">كتب أقرأها</h5>
      <Seperator width="w-100 mt-3 mb-3" />
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {readingBooks.map((readingBook) => {
          return (
            <MyBook
              key={readingBook.id}
              bookId={readingBook.id}
              bookName={readingBook.title}
              author={readingBook.author}
              list={"reading"}
            />
          );
        })}
      </div>
      <Seperator width="w-100 mt-3 mb-3" />
      <h5 className="text-center mt-4 mb-4">كتب قرأتها</h5>
      <Seperator width="w-100 mt-3 mb-3" />
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {readedBooks.map((readedBook) => {
          return (
            <MyBook
              key={readedBook.id}
              bookId={readedBook.id}
              bookName={readedBook.title}
              author={readedBook.author}
              list={"readed"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
