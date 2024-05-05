import React from "react";

import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div
        className={`${styles.sidebar} position-fixed d-flex flex-column justify-content-start align-items-end`}
        style={{ maxWidth: 170, top: 64 }}
      >
        <div className={`${styles.types} w-100`}>
          <span className={`text-secondary ${styles.sectionTitle}`}>
            الفئات
          </span>
          <ul className={`mt-3`}>
            <li>
              <Link to="" className="text-decoration-none text-black">
                أخبار
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
          </ul>
        </div>
        <div className={`w-100 mt-4 ${styles.catigories}`}>
          <span className={`text-secondary ${styles.sectionTitle}`}>
            التصنيفات
          </span>
          <ul className={`mt-3`}>
            <li>
              <Link to="" className="text-decoration-none text-black">
                أخبار
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
        <div className={`${styles.allCatigories} w-100 mt-4`}>
          <span className={`text-secondary ${styles.sectionTitle}`}>
            جميع الأنواع
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
