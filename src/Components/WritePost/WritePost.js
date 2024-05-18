import styles from "./WritePost.module.css";

const WritePost = (props) => {
  return (
    <div
      className={`${styles.writePost}`}
      style={{
        width: "100%",
        height: "10%",
        position: "relative",
        background: "white",
        boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.03)",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px #F1F1F2 solid",
        direction: "ltr",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          left: 20,
          top: 10,
          position: "absolute",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "inline-flex",
          width: "90%",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            style={{
              width: 40,
              height: 40,
              borderRadius: 6,
              marginTop: "20px",
            }}
            src={require("../../imgs/profileImg.jpg")}
            alt="identity"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: 100,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 17,
            paddingBottom: 17,
            borderRadius: 6,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <textarea
            className={`${styles.postText}`}
            style={{
              color: "black",
              fontSize: 13,
              fontWeight: "600",
              lineHeight: 1.6,
              wordWrap: "break-word",
            }}
            placeholder="What’s on your mind, Jerry?"
          ></textarea>
        </div>
      </div>
      <div
        style={{
          height: "32px",
          padding: "9px 12px",
          right: "20px",
          bottom: "20px",
          position: "absolute",
          background: "rgb(62, 151, 255)",
          borderRadius: "6px",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          display: "inline-flex",
          width: "60px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 12,
            fontWeight: "600",
            lineHeight: 12,
            wordWrap: "break-word",
          }}
        >
          Post
        </div>
      </div>
    </div>
  );
};

export default WritePost;
