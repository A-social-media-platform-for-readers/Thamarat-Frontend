import { Outlet, useLocation } from "react-router-dom";
import styles from "../styles/RegisterStyle.module.css";

//Components

const Root = () => {
  const location = useLocation();

  const imgs = [
    require("../imgs/ReadingIll.png"),
    require("../imgs/forgotPassword.png"),
    require("../imgs/signupImg.png"),
  ];

  let imgSrc;

  if (location.pathname === "/thamarat-frontend") {
    imgSrc = imgs[0];
  } else if (location.pathname === "/thamarat-frontend/ForgotPassword") {
    imgSrc = imgs[1];
  } else if (location.pathname === "/thamarat-frontend/SignUp1") {
    imgSrc = imgs[2];
  } else {
    imgSrc = null; // Set a default or handle other cases as needed
  }

  return (
    <div className={`${styles.registerContainer}`}>
      <div
        className={`${styles.formContainer} bg-white rounded-3 p-4 me-0 ms-lg-auto me-xl-auto `}
      >
        <div className={`${styles.formTitle} text-center mt-3`}>
          <h5 className="fw-bold">أهلا بك في ثمرات</h5>
          <p className="fs-5">طيب المذاق من ثمرات الاوراق</p>
        </div>
        <Outlet />
      </div>

      {imgSrc && (
        <img
          src={imgSrc}
          alt="Hello"
          style={{ maxWidth: "50%" }}
          className="d-none d-md-block ms-auto me-auto"
        />
      )}
      {/* <img
        src={require("../imgs/ReadingIll.png")}
        alt="Hello"
        style={{ maxWidth: "50%" }}
        className="d-none d-md-block ms-auto me-auto"
      /> */}
    </div>
  );
};

export default Root;
