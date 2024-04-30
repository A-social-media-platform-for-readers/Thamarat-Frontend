import styles from "./PrimaryBtn.module.css";

const PrimaryBtn = (props) => {
  return <div className={`${styles.primaryBtn}`}>{props.text}</div>;
};
export default PrimaryBtn;
