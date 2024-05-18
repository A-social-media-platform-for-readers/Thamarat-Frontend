const BookLinks = (props) => {
  return (
    <div className={`${props.linksStyle}`}>
      <div className="text-center">
        <h6>Share this book</h6>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <img
            src={`${require("../../imgs/facebook.png")}`}
            alt="facebook"
            className=""
          />
        </div>
        <div>
          <img
            src={`${require("../../imgs/instagram.png")}`}
            alt="instagram"
            className=""
          />
        </div>
        <div>
          <img
            src={`${require("../../imgs/twitter.png")}`}
            alt="twitter"
            className=""
          />
        </div>
        <div>
          <img
            src={`${require("../../imgs/email.png")}`}
            alt="email"
            className=""
          />
        </div>
        <div>
          <img
            src={`${require("../../imgs/link.png")}`}
            alt="likes"
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default BookLinks;
