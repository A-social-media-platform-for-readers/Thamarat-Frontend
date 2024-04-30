import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const RegisterTitle = (props) => {
  return (
    <div className={`steptitle`}>
      <p className="fs-5  mb-1">{props.title}</p>
      <div className={`${styles.newUser} d-flex flex-row`}>
        <p className="fd-6 text-secondary ms-1">{props.desc}</p>
        <Link to={props.link} className="text-decoration-none">
          {props.linkText}
        </Link>
      </div>
    </div>
  );
};

export default RegisterTitle;
