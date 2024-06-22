import { useState, useEffect } from "react";
import styles from "./BookCommentInput.module.css";

const BookCommentInput = (props) => {
  const jwt = localStorage.getItem("token");

  const [userName, setUserName] = useState(""); // Set the user name according to the user data sent back

  // request user data from backend

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/auth/user/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include", // Include cookies with the request
        }
      );

      const content = await response.json();
      setUserName(content);
    })();
  });

  let newComment = {
    content: "",
    user: userName.id,
    post: props.postId,
  };

  const [commentContent, setCommentContent] = useState("");

  const handleComment = async () => {
    newComment.content = commentContent;
    console.log(newComment);
    let response = await fetch(
      `https://backend-9s26.onrender.com/social-media/posts/comments/create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
        body: JSON.stringify(newComment),
      }
    );
    setCommentContent("");
    let content = await response.json();
    props.addComment(content);
  };

  return (
    <div
      className={`${styles.bookCommentInput}`}
      style={{ width: `${props.eleWidth}` }}
    >
      <input
        type="text"
        placeholder={props.desc}
        id="uploadComment"
        onChange={(e) => setCommentContent(e.target.value)}
        value={commentContent}
      />
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
