import { useState } from "react";

import Comment from "../Comment/Comment";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import styles from "./PostContainer.module.css";
import BookCommentInput from "../BookCommentInput/BookCommentInput";
import Loading from "../Loading/Loading";
const PostContainer = (props) => {
  const jwt = localStorage.getItem("token");

  const [liked, setLiked] = useState(props.liked);
  const [likesCount, setLikesCount] = useState(props.like_count);

  const handleLike = async () => {
    if (liked) {
      await fetch(
        `https://backend-9s26.onrender.com/social-media/posts/${props.id}/likes/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          body: JSON.stringify(props.id),
        }
      );
      setLikesCount(likesCount - 1);
      setLiked(false);
    } else {
      let response = await fetch(
        `https://backend-9s26.onrender.com/social-media/posts/${props.id}/likes/`,
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

  const [commentsCount, setCommentsCount] = useState(props.comment_count);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  };

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
    setCommentsCount(commentsCount + 1);
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
            addComment={addComment}
          />
          {isLoading ? (
            <Loading />
          ) : (
            comments.map((comment, id) => (
              <Comment
                key={id}
                id={comment.id}
                commentContent={comment.content}
                likesCount={comment.like_count}
                user={comment.user}
                liked={comment.you_liked}
              />
            ))
          )}
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
              <div className="">{props.user.name}</div>
              <div className="text-secondary">{props.user.identity}</div>
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
              <span className="me-2 ms-2">{commentsCount}</span>
              <img
                src={require("../../imgs/comment.png")}
                alt="comment"
                style={{ width: 20, cursor: "pointer" }}
                onClick={handleComment}
              />
            </div>
            <div className="d-flex align-items-center me-4">
              <div className="text-black">Like</div>
              <span className="me-2 ms-2 text-black">{likesCount}</span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContainer;
