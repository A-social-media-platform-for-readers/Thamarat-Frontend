import styles from "./Loading.module.css";
const Loading = (props) => {
  return (
    <div className={`${styles.loadingContainer} d-${props.display}`}>
      <div className={`${styles.loader}`}></div>
    </div>
  );
};

export default Loading;
