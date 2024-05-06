import styles from "./Notification.module.css";

const Notification = (props) => {
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
      <img src={require("../../imgs/yazood.png")} alt="Profile" />
      <div className={`${styles.notification} me-2`}>
        <div className="fw-bold">Yazood</div>
        <div>{ellipsify(props.text)}</div>
      </div>
      <span>1hr</span>
    </div>
  );
};

export default Notification;
