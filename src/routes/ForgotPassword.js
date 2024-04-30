import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import RegisterTitle from "../Components/RegisterTitle/RegisterTitle";
import NextBtn from "../Components/NextBtn/NextBtn";

import styles from "../styles/ForgotPassword.module.css";

const ForgotPassword = () => {
  const emailRE = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [email, setEmail] = useState(""); // handle email input change
  const [validEmail, setValidEmail] = useState(false); // email is valid or not
  // Function to handle email change that updates "email" is the useState
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // Validate the email onChange
  useEffect(() => {
    if (email.length > 0) {
      setValidEmail(emailRE.test(email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  // Handle button click to direct the user to the next step if email is valid

  const handleClick = () => {
    if (validEmail) {
      const forgotPasswordSteps = document.querySelectorAll(
        ".forgotPasswordStep"
      );
      forgotPasswordSteps[0].classList.remove(styles.activeStep);
      forgotPasswordSteps[1].classList.add(styles.activeStep);
    }
  };

  // Handle moveing to the next box the otp code entry after insering on digit

  let otpBoxs = document.querySelectorAll(".otpCode input"); // Get all input fields of otp code
  let confirmBtn = document.querySelector(".confirm button"); // Confirm button
  console.log(confirmBtn);
  // Handle change in every input field of the otp code
  const [otpBox1, setOtpBox1] = useState("");
  const [otpBox2, setOtpBox2] = useState("");
  const [otpBox3, setOtpBox3] = useState("");
  const [otpBox4, setOtpBox4] = useState("");

  // useEffect to fucus on confirm button after entring a digit the last nput field and blur the current
  useEffect(() => {
    if (otpBox1.length > 0) {
      otpBoxs[3].blur();
      confirmBtn.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpBox1]);
  useEffect(() => {
    if (otpBox2.length > 0) {
      otpBoxs[0].focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpBox2]);
  useEffect(() => {
    if (otpBox3.length > 0) {
      otpBoxs[1].focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpBox3]);
  useEffect(() => {
    if (otpBox4.length > 0) {
      otpBoxs[2].focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpBox4]);

  return (
    <div className={`container bg-subtle w-100 ${styles.forgContainer}`}>
      {/*Enter Email to retrieve the password */}
      <div
        className={`${styles.forgotPass} ${styles.activeStep} forgotPasswordStep`}
        style={{ textAlign: "center", marginTop: "30%" }}
      >
        <RegisterTitle
          title="نسيت كلمة المرور"
          desc="أدخل عنوان بريدك الإلكتروني"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="البريد الإلكتروني"
          className="mt-4"
          style={
            !validEmail ? { borderColor: "red" } : { borderColor: "#92e3a9" }
          }
        />
        <NextBtn value="ارسال رمز التحقق" icon="false" onClick={handleClick} />
      </div>
      {/*Enter OTP code to validate the email to retrieve passowrd */}
      <div
        className={`${styles.forgotPass2} forgotPasswordStep`}
        style={{ textAlign: "center", marginTop: "25%" }}
      >
        <RegisterTitle
          title="أدخل OTP"
          desc="تم إرسال رمز مكون من 4 أرقام إلى بريدك الإلكتروني"
        />
        <div className="otpCode d-flex justify-content-center gap-2 align-content-center mt-4 ">
          <input
            type="number"
            className={`${styles.otpBox} rounded text-center`}
            maxLength="1"
            value={otpBox1}
            onChange={(e) => setOtpBox1(e.target.value)}
          />
          <input
            type="number"
            className={`${styles.otpBox} rounded text-center`}
            value={otpBox2}
            onChange={(e) => setOtpBox2(e.target.value)}
          />
          <input
            type="number"
            className={`${styles.otpBox} rounded text-center`}
            value={otpBox3}
            onChange={(e) => setOtpBox3(e.target.value)}
          />
          <input
            type="number"
            className={`${styles.otpBox} rounded text-center`}
            value={otpBox4}
            onChange={(e) => setOtpBox4(e.target.value)}
          />
        </div>
        <div className={`${styles.timeLeft}`}>
          <p>يجب أن تتلقى كلمة المرور OTP خلال </p>
          <Link to="">30 ثانية</Link>
        </div>
        <NextBtn value="تحقق" icon="false" specialClass="confirm" />
      </div>
      <div className={`${styles.smallText}`}>
        <p>هل أنت مستخد جديد؟</p>
        <Link to="../SignUp1">انشاء حساب</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
