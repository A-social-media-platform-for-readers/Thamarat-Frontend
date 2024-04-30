import styles from "./Achievements.module.css";
import Achievement from "../Achievement/Achievement";

const Achievments = () => {
  return (
    <div className={`${styles.achievmentsSec}`}>
      <div className={``}>
        <div
          className={`title d-flex justify-content-between align-items-center mb-3`}
        >
          <p className="m-0 fw-bold fs-5">الإنجازات</p>
          <span className={`text-secondary`} style={{ fontSize: 18 }}>
            عرض الكل
          </span>
        </div>
        <div>
          <Achievement percent="85%" complete="false" />
          <Achievement percent="40%" complete="false" />
          <Achievement percent="30%" complete="false" />
          <Achievement percent="70%" complete="false" />
        </div>
      </div>
      <div>
        <div
          className={`title d-flex justify-content-between align-items-center mb-3 mt-4`}
        >
          <p className="m-0 fw-bold fs-5">المكتملة</p>
          <span className={`text-secondary`} style={{ fontSize: 18 }}>
            عرض الكل
          </span>
        </div>
        <div>
          <Achievement complete="true" />
        </div>
      </div>
    </div>
  );
};

export default Achievments;
