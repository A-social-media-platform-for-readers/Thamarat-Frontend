import styles from "./PrimaryBtn.module.css";

const PrimaryBtn = (props) => {
  return (
    <div className={`${styles.primaryBtn}`} onClick={props.onFunction}>
      {props.text}
    </div>
  );
};
export default PrimaryBtn;
