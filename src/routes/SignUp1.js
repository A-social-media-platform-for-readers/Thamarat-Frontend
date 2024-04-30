import React, { useState } from "react";
import RegisterTitle from "../Components/RegisterTitle/RegisterTitle";
import NextBtn from "../Components/NextBtn/NextBtn";
import styles from "../styles/SignUp1.module.css";

const emailRE = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function StepsProgressBar({ steps, currentStep, setCurrentStep }) {
  return (
    <div className={`${styles.stepsProgressBar}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${styles.step} ${
            index === currentStep ? `${styles.active}` : ""
          } ${index < currentStep ? `${styles.checked}` : ""}`}
        >
          {index === currentStep ? step : ""}
        </div>
      ))}
    </div>
  );
}

let newUser = {
  identity: "",
  name: "",
  email: "",
  password: "",
  date_joined: "",
  birth_date: "",
  gender: "",
  phone: "",
};

const SignUp1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  const steps = ["1", "2", "3"];

  const handleIdentityChange = (e) => {
    setSelectedIdentity(e.target.value);
  };

  // Create a new Date object
  const currentDate = new Date();

  // Get the current date, month, and year
  const day = currentDate.getDate(); // Day (1-31)
  const month = currentDate.getMonth() + 1; // Month (0-11, add 1 for human-readable format)
  const year = currentDate.getFullYear(); // Full year (e.g., 2024)

  // Optionally, you can format the date as desired
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  const handleButton1Click = () => {
    let signupSteps = document.querySelectorAll(".signUpStep");
    let identities = document.querySelectorAll(
      ".signUpStep input[type='radio']"
    );
    console.log(identities);
    for (let i = 0; i < identities.length; i++) {
      if (identities[i].checked) {
        newUser.identity = identities[i].getAttribute("identity");
        newUser.date_joined = formattedDate;
        console.log(newUser);
      }
    }

    if (selectedIdentity != null) {
      signupSteps[0].classList.remove(styles.activeStep);
      signupSteps[1].classList.add(styles.activeStep);
      setCurrentStep(1);
    }
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validUsername, setValidUsername] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Validate username
    setValidUsername(e.target.value.trim() !== "");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Validate email
    setValidEmail(emailRE.test(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Validate password
    setValidPassword(passRE.test(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Validate confirm password
    setValidConfirmPassword(e.target.value === password);
  };

  const handleButton2Click = (e) => {
    const allFieldsValid =
      username &&
      email &&
      password &&
      confirmPassword &&
      validUsername &&
      validEmail &&
      validPassword &&
      validConfirmPassword;
    let signupSteps = document.querySelectorAll(".signUpStep");
    if (allFieldsValid) {
      newUser.name = username;
      newUser.email = email;
      newUser.password = password;
      console.log(newUser);
      signupSteps[1].classList.remove(styles.activeStep);
      signupSteps[2].classList.add(styles.activeStep);
      setCurrentStep(2);
    }
  };

  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("M");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handlBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };
  const handlGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleButton3Click = async () => {
    newUser.birth_date = birthdate;
    newUser.gender = gender;
    console.log(newUser);

    await fetch("https://backend-9s26.onrender.com/auth/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
  };

  const handleBlur = () => {
    setShowPlaceholder(true);
  };

  const handleFocus = () => {
    setShowPlaceholder(false);
  };

  return (
    <div
      style={{ marginTop: "60px" }}
      className={`d-flex flex-column ${styles.signUp1}`}
    >
      <RegisterTitle
        title="إنشاء حساب"
        desc="اختر هويتك لتجعلنا نبسط لك الدخول"
      />
      <StepsProgressBar
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      <div
        className={`signUpStep ${styles.selectIdentity} mt-4 ${styles.activeStep}`}
      >
        <input
          name="identity"
          type="radio"
          id="reader"
          identity="READER"
          className={`${styles.identityRadio}`}
          onChange={handleIdentityChange}
        />
        <label
          htmlFor="reader"
          className={`card d-flex justify-content-evenly align-items-center m-auto rounded-3 flex-row mb-3 p-3 pe-5 ${styles.identityLabel}`}
        >
          قارئ
          <img src={require("../imgs/readerIcon.png")} alt="reader" />
        </label>

        <input
          name="identity"
          type="radio"
          id="auther"
          identity="AUTHOR"
          className={`${styles.identityRadio}`}
          onChange={handleIdentityChange}
        />
        <label
          htmlFor="auther"
          className={`card d-flex justify-content-evenly align-items-center m-auto rounded-3 flex-row mb-3 p-3 pe-5 ${styles.identityLabel}`}
        >
          مؤلف
          <img src={require("../imgs/authorIcon.png")} alt="auther" />
        </label>

        <input
          name="identity"
          type="radio"
          id="publisher"
          identity="PUBLISHER"
          className={`${styles.identityRadio}`}
          onChange={handleIdentityChange}
        />
        <label
          htmlFor="publisher"
          className={`card d-flex justify-content-evenly align-items-center m-auto rounded-3 flex-row mb-5 p-3 pe-5 ${styles.identityLabel}`}
        >
          دار نشر
          <img src={require("../imgs/publisherIcon.png")} alt="publisher" />
        </label>

        <NextBtn
          onClick={() => handleButton1Click()}
          value="التالي"
          icon="true"
        />
      </div>

      <div
        style={{ height: "75%" }}
        className={`${styles.details1} flex-column justify-content-center signUpStep`}
      >
        <label htmlFor="username" className="d-block w-100 mt-3">
          <input
            type="text"
            placeholder="اسم المستخدم"
            id="username"
            className="d-block w-100 form-control"
            style={{ borderColor: "#92e3a9" }}
            onChange={handleUsernameChange}
          />
        </label>
        <label htmlFor="email" className="d-block w-100">
          <input
            type="email"
            value={email}
            placeholder="البريد الإلكتروني"
            id="email"
            onChange={handleEmailChange}
            className={`d-block w-100 form-control mt-3`}
            required
            style={
              !validEmail ? { borderColor: "red" } : { borderColor: "#92e3a9" }
            }
          />
        </label>
        <label htmlFor="password" className="d-block w-100">
          <input
            type="password"
            placeholder="كلمة المرور"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={`d-block w-100 mt-3 form-control`}
            required
            style={
              !validPassword
                ? { borderColor: "red" }
                : { borderColor: "#92e3a9" }
            }
          />
        </label>
        <label htmlFor="confirmPassword" className="d-block w-100">
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            id="confirmPassword"
            className={`d-block w-100 mt-3 form-control`}
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={
              !validConfirmPassword
                ? { borderColor: "red" }
                : { borderColor: "#92e3a9" }
            }
          />
        </label>
        <NextBtn
          onClick={() => handleButton2Click()}
          value="التالي"
          icon="true"
        />
      </div>

      <div
        style={{ height: "75%" }}
        className={`${styles.details2} signUpStep`}
      >
        <label htmlFor="birthdate" className="w-100">
          {showPlaceholder ? (
            <input
              placeholder="تاريخ الميلاد"
              className="textbox-n w-100"
              type="text"
              id="birthdate"
              onFocus={handleFocus}
              value={birthdate}
              onChange={handlBirthdateChange}
            />
          ) : (
            <input
              placeholder="تاريخ الميلاد"
              className="textbox-n w-100"
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={handlBirthdateChange}
              onBlur={handleBlur}
            />
          )}
        </label>
        <select
          className="w-100"
          required
          value={gender}
          onChange={handlGenderChange}
        >
          <option value="M">ذكر</option>
          <option value="F">أنثى</option>
        </select>
        <NextBtn value="التالي" icon="true" onClick={handleButton3Click} />
      </div>
    </div>
  );
};

export default SignUp1;
