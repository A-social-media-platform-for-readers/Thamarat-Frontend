import { useState } from "react";

import styles from "./Comment.module.css";
const Comment = (props) => {
  const jwt = localStorage.getItem("token");

  const [liked, setLiked] = useState(props.liked);
  const [likesCount, setLikesCount] = useState(props.likesCount);

  const handleLike = async () => {
    if (liked) {
      let response = await fetch(
        `https://backend-9s26.onrender.com/social-media/posts/comments/${props.id}/likes/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          body: JSON.stringify(props.id),
        }
      );
      let content = await response.json();
      console.log(content);
      setLikesCount(likesCount - 1);
      setLiked(false);
    } else {
      let response = await fetch(
        `https://backend-9s26.onrender.com/social-media/posts/comments/${props.id}/likes/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          body: JSON.stringify(props.id),
        }
      );
      let content = await response.json();
      console.log(content);
      setLikesCount(likesCount + 1);
      setLiked(true);
    }
  };

  return (
    <div className={`${styles.comment}`}>
      <img
        className={`${styles.img}`}
        src={require("../../imgs/aymon.png")}
        alt="img"
      />
      <div className={`${styles.content}`}>
        <span>1hr</span>
        <span className="fw-bold">{props.user.name}</span>
        <div className="mt-2">{props.commentContent}</div>
      </div>
      <div className={`position-absolute ${styles.commentInteract}`}>
        <div className="d-flex align-items-center">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleLike}
          >
            <path
              d="M7.08447 13.5L6.05722 12.5649C2.40872 9.2564 0 7.07439 0 4.39646C0 2.21444 1.71444 0.5 3.89646 0.5C5.12916 0.5 6.31226 1.07384 7.08447 1.98065C7.85668 1.07384 9.03978 0.5 10.2725 0.5C12.4545 0.5 14.1689 2.21444 14.1689 4.39646C14.1689 7.07439 11.7602 9.2564 8.11172 12.5719L7.08447 13.5Z"
              fill={liked ? "#EA4335" : "#9f9f9f"}
            />
          </svg>
          <div>
            <span className="ms-2 me-2">{likesCount}</span>
            أعجبني
          </div>
        </div>
        <div className="me-3">رد</div>
      </div>
    </div>
  );
};

export default Comment;
