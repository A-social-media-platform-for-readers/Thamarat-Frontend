import NotificationSec from "../NotificationSec/NotificationSec";
import styles from "./NotificationSecContainer.module.css";

const NotificationContainer = () => {
  return (
    <div className={`${styles.notificationContainer} col-4`}>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.sectionTitle}`}
      >
        <div>الإشعارات</div>
        <div className={`${styles.functions}`}>
          <span>تحديد الكل كمقروء</span>
        </div>
      </div>
      <div className={`${styles.notification}`}>
        <NotificationSec text="Adasdfsd alskdfj alsdkfj asdksdf asdksdf" />
        <NotificationSec text="Adasdfsd alskdfj alsdkfj asdksdf asdksdf" />
        <NotificationSec text="Adasdfsd alskdfj alsdkfj asdksdf asdksdf" />
      </div>
    </div>
  );
};

export default NotificationContainer;
