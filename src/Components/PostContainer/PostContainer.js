import { useRef, useState } from "react";
import Comment from "../Comment/Comment";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import styles from "./PostContainer.module.css";
import BookCommentInput from "../BookCommentInput/BookCommentInput";
const PostContainer = (props) => {
  const jwt = localStorage.getItem("token");

  let liked = useRef(false);
  const [likesCount, setLikesCount] = useState(props.like_count);

  const handleLike = async () => {
    await fetch(
      "https://backend-9s26.onrender.com/social-media/posts/1/likes/",
      {
        method: liked.current === false ? "POST" : "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
        body: JSON.stringify(props.id),
      }
    );
    if (liked.current === false) {
      setLikesCount(likesCount + 1);
      liked.current = true;
    } else {
      setLikesCount(likesCount - 1);
      liked.current = false;
    }
  };

  const [comments, setComments] = useState([]);

  const handleComment = async () => {
    document
      .querySelector(`.post${props.id}`)
      .classList.toggle(`${styles.activePost}`);
    document
      .querySelector(`.${styles.overlay}`)
      .classList.toggle(`${styles.activeOverlay}`);

    let response = await fetch(
      `https://backend-9s26.onrender.com/social-media/posts/comments/${props.id}/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
      }
    );
    let content = await response.json();
    setComments(content.results);
    console.log(content);
  };

  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.postContent} post${props.id} mb-4`}>
        <div className={`${styles.commentSection}`}>
          <BookCommentInput
            desc="أضف تعليقك..."
            eleWidth="100%"
            postId={props.id}
          />
          {comments.map((comment, id) => (
            <Comment
              key={id}
              commentContent={comment.content}
              likesCount={comment.like_count}
            />
          ))}
        </div>
        <div
          className={`${styles.firstPostSec} d-flex justify-content-between p-3`}
        >
          <div className="d-flex align-items-center">
            <ToggleBtn />
            <div className={`${styles.followBtn} btn btn-light rounded-2`}>
              Follow
            </div>
          </div>
          <div
            className={`${styles.userInfo} d-flex align-items-center text-start `}
          >
            <div className="ms-3">
              <div className="">{props.name}</div>
              <div className="text-secondary">Auther and Reader</div>
            </div>
            <img
              src={require("../../imgs/aymon.png")}
              alt="userImg"
              style={{
                width: 60,
                border: "1.5px solid #095dff",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <div className={`${styles.postText}`}>
          <p>{props.content}</p>
          <div className={`${styles.postImg}`}>
            {props.postImage !== undefined ? (
              <img
                src={props.postImage}
                alt="post"
                style={{ maxWidth: "100%" }}
              />
            ) : (
              false
            )}
          </div>
        </div>
        <div
          className={`${styles.postFooter} d-flex justify-content-between align-items-center p-3 `}
        >
          <div className="d-flex align-items-center">
            <img
              src={require("../../imgs/share.png")}
              alt="share"
              style={{ width: 20, cursor: "pointer" }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className={`d-flex align-items-center`}>
              <div className="ms-2">Comment</div>
              <span className="me-2 ms-2">{props.comment_count}</span>
              <img
                src={require("../../imgs/comment.png")}
                alt="comment"
                style={{ width: 20, cursor: "pointer" }}
                onClick={handleComment}
              />
            </div>
            <div className="d-flex align-items-center me-4">
              <div>Like</div>
              <span className="me-2 ms-2">{likesCount}</span>
              <img
                src={require("../../imgs/love.png")}
                alt="like"
                style={{ width: 20, cursor: "pointer" }}
                onClick={handleLike}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContainer;
