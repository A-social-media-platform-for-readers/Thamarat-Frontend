import styles from "./BUserMSG.module.css";

const BUserMSG = (props) => {
  return (
    <div className={`${styles.container}`}>
      {/* <div>{props.name}</div> */}
      <div className={`${styles.messege}`}>{props.msg}</div>
    </div>
  );
};

export default BUserMSG;
