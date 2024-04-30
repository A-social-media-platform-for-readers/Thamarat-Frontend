import styles from "./Achievement.module.css";

const Achievement = (props) => {
  document.querySelectorAll(".bookProgress").forEach(function (container) {
    var width = container.getAttribute("percentage");
    container.style.setProperty("--width", width + "px");
  });

  return (
    <div
      className={`${styles.achievement} d-flex rounded-3 align-items-center mb-2`}
      style={
        props.complete === "true"
          ? { backgroundColor: "#92E3A9" }
          : { backgroundColor: "#F6E7AE66" }
      }
    >
      <img
        src={require("../../imgs/book.png")}
        alt="Book"
        style={{ width: 50, height: 55, aspectRatio: 1 / 1, marginLeft: 5 }}
      />
      <div className={`bookProgress flex-grow-1`}>
        <div className={`${styles.details} me-1 mb-2 lh-1`}>
          <div style={{ fontSize: 10 }}>auther</div>
          <div className="fw-bold">book title</div>
        </div>
        <div
          className={`${styles.achievementProgress}`}
          percentage={props.percent}
          style={props.complete === "true" ? { opacity: 0 } : { opacity: 1 }}
        >
          <div style={{ width: props.percent }}></div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
