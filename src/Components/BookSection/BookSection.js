import React from "react";
import sectionStyles from "./BookSection.module.css";

import { Link } from "react-router-dom";

const BookSection = ({ sectionName, booksNumber = [] }) => {
  console.log(booksNumber);
  console.log(document.getElementById("imgContainer"));
  // document.getElementById(
  //   "imgContainer"
  // ).style.gridTemplateColumns = `repeat(${booksNumber.length}, 1fr)`;
  return (
    <div className={`${sectionStyles.bookSection}`}>
      <div
        className={`d-flex justify-content-between align-items-center mb-3 ps-2 pe-2`}
      >
        <p className={`m-0 fs-5`}>{sectionName}</p>
        <span className={`text-secondary fs-6`}>عرض المزيد</span>
      </div>
      <div className={`${sectionStyles.imgContainer} row`}>
        {booksNumber.length > 0 &&
          booksNumber.map((e) => (
            <Link to="BookPage" key={e} className="col p-0">
              <img src={require("../../imgs/book1.png")} alt="Book" />
              <span className={`${sectionStyles.bookAuthor}`}>
                Author{`${e}`}
              </span>
              <span className={`${sectionStyles.bookTitle}`}>
                Book Title{`${e}`}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookSection;
