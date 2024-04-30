import React from "react";
import styles from "./NextBtn.module.css";

const NextBtn = (props) => {
  return (
    <div className={`d-flex align-items-end mt-auto ${props.specialClass}`}>
      <button
        className={`btn btn-primary rounded-3 ${styles.nextBtn}`}
        onClick={props.onClick}
      >
        {props.icon === "true" ? (
          <img
            src={require("../../imgs/next.png")}
            alt="next"
            className={`ms-2`}
          />
        ) : (
          false
        )}
        {props.value}
      </button>
    </div>
  );
};

export default NextBtn;
