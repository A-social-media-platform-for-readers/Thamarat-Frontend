import styles from "./BookCommentInput.module.css";

const BookCommentInput = (props) => {
  return (
    <div className={`${styles.bookCommentInput}`}>
      <input type="text" placeholder="أضف تعليقك أو ملخصك..." />
      <img src={require("../../imgs/upload.png")} alt="uploadIcon" />
      <img src={require("../../imgs/paperclip.png")} alt="paperclip" />
    </div>
  );
};

export default BookCommentInput;
