import styles from "./NotificationSec.module.css";

const NotificationSec = (props) => {
  function ellipsify(str) {
    if (str.length > 50) {
      return str.substring(0, 50) + "...";
    } else {
      return str;
    }
  }

  return (
    <div
      className={`${styles.notificationContainer} d-flex justifiy-content-around align-items-center mb-3 position-relative`}
    >
      <img src={require("../../imgs/notification.jpg")} alt="Profile" />
      <div className={`${styles.notification} me-2`}>
        <div className="fs-5">Offer 50%</div>
        <div>{ellipsify(props.text)}</div>
      </div>
    </div>
  );
};

export default NotificationSec;
