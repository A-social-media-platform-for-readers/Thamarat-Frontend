import styles from "./Seperator.module.css";

const Seperator = (props) => {
  return <div className={`${styles.seperator} ${props.width}`}></div>;
};

export default Seperator;
