import styles from "./Comment.module.css";
const Comment = () => {
  return (
    <div className={`${styles.comment}`}>
      <div className={`${styles.img}`}></div>
    </div>
  );
};

export default Comment;
