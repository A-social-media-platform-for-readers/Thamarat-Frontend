import React, { useEffect, useState } from "react";
import styles from "./SideBar.module.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Home") {
      setActiveSection(0);
    } else if (location.pathname === "/SocialMedia") {
      setActiveSection(1);
    } else if (location.pathname === "/Challanges") {
      setActiveSection(2);
    }
  }, [activeSection, location.pathname]);

  return (
    <div>
      <div
        className={`${styles.sidebar} position-fixed d-flex flex-column justify-content-start align-items-end`}
        style={{ maxWidth: 170, top: 64 }}
      >
        <div className={`${styles.types} w-100`}>
          <span className={`text-secondary ${styles.sectionTitle}`}>
            الأقسام
          </span>
          <ul className={`mt-3`}>
            <li>
              <img src={require("../../imgs/home.png")} alt="home" />
              <Link
                to="/Home"
                className="text-decoration-none"
                style={
                  activeSection === 0
                    ? { color: "#92E3A9" }
                    : { color: "black" }
                }
              >
                متجر الكتب
              </Link>
            </li>
            <li>
              <img
                src={require("../../imgs/socialMedia.png")}
                alt="social media"
              />
              <Link
                to="/SocialMedia"
                className="text-decoration-none"
                style={
                  activeSection === 1
                    ? { color: "#699CFF" }
                    : { color: "black" }
                }
              >
                مجتمع الثمرات
              </Link>
            </li>
            <li>
              <img
                src={require("../../imgs/challanges.png")}
                alt="challanges"
              />
              <Link
                to=""
                className="text-decoration-none"
                style={
                  activeSection === 2
                    ? { color: "#FBBC05" }
                    : { color: "black" }
                }
              >
                التحديات
              </Link>
            </li>
          </ul>
        </div>
        <div className={`w-100 mt-4 ${styles.catigories}`}>
          <span className={`text-secondary ${styles.sectionTitle}`}>
            التصنيفات
          </span>
          <ul className={`mt-3`}>
            <li>
              <Link to="/AddBook" className="text-decoration-none text-black">
                إضافة كتاب
              </Link>
            </li>
            <li>
              <Link to="" className="text-decoration-none text-black">
                أفضل التصنيفات
              </Link>
            </li>
            <li>
              <Link to="" className="text-decoration-none text-black">
                أخرى
              </Link>
            </li>
            <li>
              <Link to="" className="text-decoration-none text-black">
                أخرى
              </Link>
            </li>
            <li>
              <Link to="" className="text-decoration-none text-black">
                أخرى
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
