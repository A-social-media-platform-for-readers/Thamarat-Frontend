import styles from "./Notifications.module.css";

import Notification from "../Notification/Notification";

const Notifications = () => {
  return (
    <div className={`${styles.notificationContainer} col-4`}>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.sectionTitle}`}
      >
        <div>رسائل ثمرات</div>
        <div className={`${styles.functions}`}>
          <img src={require("../../imgs/dots.png")} alt="dots" />
          <img src={require("../../imgs/searchBlue.png")} alt="search" />
        </div>
      </div>
      <div className={`${styles.notification}`}>
        <Notification text="لقد حصل مشورك على إعجاب، إنقر على هذه الرسالة لترى من تفاعل مع منشوركإنقر على هذه الرسالة لترى من تفاعل مع منشوركإنقر على هذه الرسالة لترى من تفاعل مع منشورك" />
        <Notification text="لقد حصل مشورك على إعجاب، إنقر على هذه الرسالة لترى من تفاعل مع منشورك" />
        <Notification text="لقد حصل مشورك على إعجاب، إنقر على هذه الرسالة لترى من تفاعل مع منشورك" />
      </div>
    </div>
  );
};

export default Notifications;
