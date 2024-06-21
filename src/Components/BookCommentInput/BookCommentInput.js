import styles from "./BookCommentInput.module.css";

const BookCommentInput = (props) => {
  const jwt = localStorage.getItem("token");

  let newComment = {
    content: "",
    user: 3,
    post: props.postId,
  };
  const handleComment = async () => {
    newComment.content = document.getElementById("uploadComment").value;
    await fetch(
      `https://backend-9s26.onrender.com/social-media/posts/comments/${props.postId}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
        body: JSON.stringify(newComment),
      }
    );
    document.getElementById("uploadComment").value = "";
  };

  return (
    <div
      className={`${styles.bookCommentInput}`}
      style={{ width: `${props.eleWidth}` }}
    >
      <input type="text" placeholder={props.desc} id="uploadComment" />
      <img
        src={require("../../imgs/upload.png")}
        alt="uploadIcon"
        onClick={handleComment}
      />
      <img src={require("../../imgs/paperclip.png")} alt="paperclip" />
    </div>
  );
};

export default BookCommentInput;
