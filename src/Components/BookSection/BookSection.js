import React, { useEffect, useState } from "react";
import sectionStyles from "./BookSection.module.css";

import { Link } from "react-router-dom";

const BookSection = ({ sectionName, content }) => {
  console.log(content);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    content === undefined ? setReady(false) : setReady(true);
  }, [content]);

  return (
    <div className={`${sectionStyles.bookSection}`}>
      <div
        className={`d-flex justify-content-between align-items-center mb-3 ps-2 pe-2`}
      >
        <p className={`m-0 fs-5`}>{sectionName}</p>
        <span className={`text-secondary fs-6`}>عرض المزيد</span>
      </div>
      <div className={`${sectionStyles.imgContainer} row`}>
        {ready
          ? content.map((e, i) => (
              <Link
                to={`BookPage/${content[i].id}/`}
                key={i}
                className="col p-0"
              >
                <img src={require("../../imgs/book1.png")} alt="Book" />
                <span className={`${sectionStyles.bookAuthor}`}>
                  {content[i].author}
                </span>
                <span className={`${sectionStyles.bookTitle}`}>
                  {content[i].title}
                </span>
              </Link>
            ))
          : console.log("Error")}
      </div>
    </div>
  );
};

export default BookSection;
