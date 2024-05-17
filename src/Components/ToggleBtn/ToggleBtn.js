import styles from "./ToggleBtn.module.css";

const ToggleBtn = (props) => {
  return (
    <div className={`${styles.toggleBtn}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ToggleBtn;
