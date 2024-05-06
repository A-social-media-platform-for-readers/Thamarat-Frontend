import styles from "./PostContainer.module.css";
const PostContainer = (props) => {
  return (
    <div className={`${styles.postContainer} mb-4`}>
      <div className={`row`}>
        <div className={`col-8 ${styles.postContent}`}>
          <div className={`d-flex justify-content-between me-4 ms-4`}>
            <div className={`${styles.followBtn}`}>Follow</div>
            <div
              className={`${styles.userInfo} d-flex align-items-center text-start `}
            >
              <div className="ms-3">
                <div className="">Ayman Ehab</div>
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
            <p>
              تعتبر القراءة من أهمّ المهارات المكتسبة التي تحقق النجاح والمتعة
              لكل فرد خلال حياته، وذلك انطلاقاً من أن القراءة هي الجزء المكمل
              للحياة الشخصية والعملية وهي مفتاح أبواب العلوم والمعارف المتنوعة.
              مهارة القراءة لا يكفي بذكاء الطالب، بل يهتمّ بوجود العوامل
              الخارجية والداخلية المشجّعة على القراءة.
            </p>
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
            className={`${styles.postFooter} ms-4 me-4 d-flex justify-content-between align-items-center`}
          >
            <div className="d-flex align-items-center">
              <img
                src={require("../../imgs/share.png")}
                alt="share"
                style={{ width: 20 }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="ms-2">Comment</div>
                <img
                  src={require("../../imgs/comment.png")}
                  alt="comment"
                  style={{ width: 20 }}
                />
              </div>
              <div className="d-flex align-items-center me-4">
                <div>Like</div>
                <span className="me-2 ms-2">2</span>
                <img
                  src={require("../../imgs/love.png")}
                  alt="like"
                  style={{ width: 20 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
