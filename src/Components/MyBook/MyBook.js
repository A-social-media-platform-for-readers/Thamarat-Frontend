import { Link } from "react-router-dom";

const MyBook = (props) => {
  return (
    <Link
      to={`/BookPage/${props.bookId}/`}
      className="col text-center"
      style={{ cursor: "pointer" }}
    >
      <img
        src={require("../../imgs/book1.png")}
        alt="cover"
        className="img-fluid"
      />
      <div className="fw-bold">{props.bookName}</div>
      <div>{props.author}</div>
    </Link>
  );
};

export default MyBook;
