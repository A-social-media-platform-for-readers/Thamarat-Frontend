import styles from "./AUserMSG.module.css";

const AUserMSG = (props) => {
  return (
    <div className={`${styles.container}`}>
      {/* <div>{props.name}</div> */}
      <div className={`${styles.messege}`}>{props.msg}</div>
    </div>
  );
};

export default AUserMSG;
