import styles from "./SecondaryBtn.module.css";

const SecondaryBtn = (props) => {
  return <div className={`${styles.secondaryBtn}`}>{props.text}</div>;
};
export default SecondaryBtn;
