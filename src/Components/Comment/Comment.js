import styles from "./Comment.module.css";
const Comment = (props) => {
  return (
    <div className={`${styles.comment}`}>
      <img
        className={`${styles.img}`}
        src={require("../../imgs/aymon.png")}
        alt="img"
      />
      <div className={`${styles.content}`}>
        <span>1hr</span>
        <span className="fw-bold">Ayman Ehab</span>
        <div className="mt-2">{props.commentContent}</div>
      </div>
      <div className={`position-absolute ${styles.commentInteract}`}>
        <div className="d-flex align-items-center">
          <img
            className={`${styles.img} ms-2`}
            src={require("../../imgs/heart.png")}
            alt="img"
          />
          <div>
            <span className="ms-2">3</span>
            أعجبني
          </div>
        </div>
        <div>رد</div>
      </div>
    </div>
  );
};

export default Comment;
