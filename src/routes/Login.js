import React, { useEffect, useState } from "react";
import styles from "../Components/RegisterTitle/Register.module.css";
import RegisterTitle from "../Components/RegisterTitle/RegisterTitle";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../Components/Loading/Loading";

const emailRE = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

let user = {
  email: "",
  password: "",
}; // store user data in object

const Login = () => {
  const [loading, setLoading] = useState("none");
  // handle email change and email validation
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    if (email.length > 0) {
      setValidEmail(emailRE.test(email));
    }
  }, [email]);

  // Handle password change and password validation
  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(true);
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  useEffect(() => {
    if (pass.length > 0) {
      setValidPass(passRE.test(pass));
    }
  }, [pass]);

  // Navigating to the Home page if email and passowrd are valid and authenticated

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("flex");
    if (validEmail && validPass) {
      user.email = email;
      user.password = pass;
      console.log(user);

      // Post request email and passowrd authentication
      const response = await fetch(
        "https://backend-9s26.onrender.com/auth/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(user),
        }
      );
      const content = await response.json();
      localStorage.setItem("token", content.jwt);
      navigate("/Home");
      setLoading("none");
    } else {
      alert("Enter data correctly");
    }
  };

  // Toggle active attribute on the remember me button
  const handleToggle = (e) => {
    if (e.target.getAttribute("active") === "false") {
      e.target.setAttribute("active", "true");
    } else {
      e.target.setAttribute("active", "false");
    }
  };

  return (
    <>
      <Loading display={loading} />
      <div style={{ marginTop: "60px" }}>
        <div className={`${styles.form}`}>
          <RegisterTitle
            title="تسجيل الدخول"
            desc="هل أنت مستخدم جديد؟"
            link="SignUp1"
            linkText="إنشاء حساب"
          />
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="البريد الإلكتروني"
              className={`d-block w-100 form-control`}
              required
              autoComplete="address-level1 webauthn"
              style={
                !validEmail
                  ? { borderColor: "red" }
                  : { borderColor: "#92e3a9" }
              }
            />
            <input
              type="password"
              id="password"
              name="password"
              value={pass}
              onChange={handlePassChange}
              placeholder="كلمة المرور"
              className={`d-block w-100 mt-3 form-control`}
              required
              style={
                !validPass ? { borderColor: "red" } : { borderColor: "#92e3a9" }
              }
            />
            <div
              className={`${styles.forgotRem} d-flex flex-row justify-content-between mt-1`}
            >
              <div className={`d-flex flex-row align-items-center`}>
                <img
                  src={require("../imgs/rememberCheck.png")}
                  alt="remember"
                  active="false"
                  onClick={handleToggle}
                />
                <p className="m-0 me-2">تذكرني</p>
              </div>
              <div className={`${styles.forgotPass} `}>
                <Link to="ForgotPassword" className="text-decoration-none">
                  هل نسيت كلمة المرور؟
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className={`${styles.register} rounded-pill fw-bold mt-3 pt-2 pb-2 pe-3 ps-3 `}
            >
              تسجيل الدخول
            </button>
          </form>
          <div className={`${styles.registerWith}`}>
            <p>أو من خلال</p>
            <div
              className={`${styles.google} d-flex justify-content-center align-items-center w-100 rounded-pill mb-3`}
            >
              <p className="m-0">Login with google</p>
              <img
                src={require("../imgs/google.png")}
                alt="google"
                className="me-3"
              />
            </div>
            <div
              className={`${styles.facebook} d-flex justify-content-center align-items-center w-100 rounded-pill`}
            >
              <p className="m-0">Login with Facebook</p>
              <img
                src={require("../imgs/facebook.png")}
                alt="facebook"
                className="me-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
