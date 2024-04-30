import React, { useState, useEffect } from "react";
import styles from "./SpreadedSecCard.module.css";
import { Link } from "react-router-dom";

const SpreadedSecCard = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function ellipsify(str) {
    if (str.length > 100 && windowWidth < 992) {
      return str.substring(0, 100) + "...";
    } else if (str.length > 150) {
      return str.substring(0, 150) + "...";
    } else {
      return str;
    }
  }
  return (
    <div
      className={`${styles.bookCard} position-relative d-flex rounded-4 align-items-center mb-3`}
    >
      <span className={`${styles.views} position-absolute`}>
        1.2k
        <img
          src={require("../../imgs/views.png")}
          alt="icon"
          className="me-2"
        />
      </span>
      <span className={`${styles.likes} position-absolute`}>
        100
        <img
          src={require("../../imgs/likes.png")}
          alt="icon"
          className="me-2"
        />
      </span>
      <Link to="BookPage">
        <img src={require("../../imgs/book1.png")} alt="Book" />
      </Link>
      <div className={`${styles.bookDetails} p-3 pb-1`}>
        <p className={`m-0`}>{props.author}</p>
        <p className={`fs-5`}>{props.title}</p>
        <p className={`${styles.bookDesc} mb-2 mb-lg-3`}>
          {ellipsify(`يت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم
          أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم.`)}
        </p>
        <span className={`${styles.catigory}`}>
          <img
            src={require("../../imgs/catigory.png")}
            alt="catigory"
            className="ms-2"
          />
          التصنيف
        </span>
        <span className={`${styles.features}`}>
          <img
            src={require("../../imgs/headphone-sound.png")}
            alt="Listnable"
          />
        </span>
        <span className={`${styles.features}`}>
          <img src={require("../../imgs/translate.png")} alt="Trnaslated" />
        </span>
      </div>
      <span className={`${styles.price} position-absolute`}>السعر: 120جـ</span>
    </div>
  );
};

export default SpreadedSecCard;
