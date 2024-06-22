import React from "react";
import sectionStyles from "./BookSection.module.css";

import { Link } from "react-router-dom";

const BookSection = ({ sectionName, content }) => {
  return (
    <div className={`${sectionStyles.bookSection}`}>
      <div
        className={`d-flex justify-content-between align-items-center mb-3 ps-2 pe-2`}
      >
        <p className={`m-0 fs-5`}>{sectionName}</p>
        <span className={`text-secondary fs-6`}>عرض المزيد</span>
      </div>
      <div className={`${sectionStyles.imgContainer} row`}>
        {content.map((e, i) => (
          <Link to={`BookPage/${e.id}/`} key={i} className="col p-0">
            <img src={require("../../imgs/book1.png")} alt="Book" />
            <span className={`${sectionStyles.bookAuthor}`}>{e.author}</span>
            <span className={`${sectionStyles.bookTitle}`}>{e.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookSection;
