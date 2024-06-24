import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AttributeBox from "../Components/AttributeBox/AttributeBox";
import BookCommentInput from "../Components/BookCommentInput/BookCommentInput";
import Loading from "../Components/Loading/Loading";
import BookDetails from "../Components/BookDetails/BookDetails";
import BookLinks from "../Components/BookLinks/BookLinks";
import BookSection from "../Components/BookSection/BookSection";
import PrimaryBtn from "../Components/PrimaryBtn/PrimaryBtn";
import Comment from "../Components/Comment/Comment";
import Seperator from "../Components/Seperator/Seperator";
import styles from "../styles/BookPage.module.css";

const BookPage = (props) => {
  const booksNumberArr = [1, 2, 3, 4, 5, 6];

  const { id } = useParams();

  const jwt = localStorage.getItem("token");

  const [book, setBook] = useState({
    id: 0,
    title: "string",
    author: "string",
    rate: 5,
    price: 10000,
    genre: "string",
    publisher: "string",
    publication_date: "2024-05-17",
    description: "string",
    readers_count: 2147483647,
    to_read_count: 2147483647,
    cover_image: "string",
    pdf_file: "string",
  });

  // Request book data from backend
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://backend-9s26.onrender.com/books/${id}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const content = await response.json();
      setBook(content);
    })();
  }, [jwt, id]);

  const [commentsCount, setCommentsCount] = useState(props.comment_count);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://backend-9s26.onrender.com/books/reviews/${id}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );
      let content = await response.json();
      setComments(content);
      setIsLoading(false);
    })();
  }, [jwt, id]);

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
    setCommentsCount(commentsCount + 1);
  };

  const handlePurchase = async () => {
    let response = await fetch(
      `https://backend-9s26.onrender.com/books/to-read/${id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
      }
    );
    let content = await response.json();
    console.log(content);
  };

  return (
    <div
      className={`d-flex flex-column position-relative ${styles.bookPageContainer}`}
      style={{ top: 70, height: "fit-content" }}
    >
      <div className="d-flex justify-content-center align-items-center"></div>
      <div className="row m-0 mb-3 g-lg-5">
        <div className={`col-3 ${styles.bookImgContainer} m-0`}>
          <span className={`${styles.features}`}>
            <img
              src={require("../imgs/headphone-sound.png")}
              alt="Listnable"
              style={{ width: 25 }}
            />
            <img
              src={require("../imgs/translate.png")}
              alt="Trnaslated"
              style={{ width: 25 }}
            />
          </span>
          <img src={require("../imgs/book1.png")} alt="Book" />
        </div>
        <div className="col-6 position-relative m-0">
          <span className={`${styles.views} position-absolute`}>
            1.2k
            <img
              src={require("../imgs/views.png")}
              alt="icon"
              className="me-2"
            />
          </span>
          <span className={`${styles.likes} position-absolute`}>
            100
            <img
              src={require("../imgs/likes.png")}
              alt="icon"
              className="me-2"
            />
          </span>
          <div className={`${styles.bookDetails}`}>
            <p className={`m-0 fs-5`}>{book.author}</p>
            <p className={`fs-3 mb-5 position-relative ${styles.bookTitle}`}>
              {book.title}
            </p>
            <p className={`${styles.bookDesc} mb-2 mb-lg-3`}>
              <strong> الوصف</strong>
              <br />
              يت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم
              أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم. يت
              يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم
              أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم. يت
              يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم
              أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم.
            </p>
            <span className={`${styles.catigory}`}>
              <img
                src={require("../imgs/catigory.png")}
                alt="catigory"
                className="ms-2"
              />
              التصنيف
            </span>
          </div>
        </div>
        <div className={`col-3 ${styles.purchaseBox} m-0`}>
          <p className={`${styles.price}`}>
            السعر:
            <span>120</span>
            .L.E
          </p>
          <div className={`${styles.purchaseFeatues}`}>
            <img
              src={require("../imgs/headphone-sound.png")}
              alt="Listnable"
              style={{ width: 24, marginLeft: 10 }}
            />
            <p>الكتاب مسموع</p>
          </div>
          <div className={`${styles.purchaseFeatues}`}>
            <img
              src={require("../imgs/translate.png")}
              alt="Trnaslated"
              style={{ width: 24, marginLeft: 10 }}
            />
            <p>الكتاب مترجم بلغات عديدة مثل</p>
          </div>
          <div>
            <AttributeBox attribute="عربي" />
            <AttributeBox attribute="عربي" />
            <AttributeBox attribute="عربي" />
          </div>
          <PrimaryBtn text="اشتتري الان" onFunction={handlePurchase} />
        </div>
      </div>
      <div className={`row `}>
        <BookDetails
          publisher="Faber & Faber"
          date="1 March 2018"
          iSBN13="9780571333134"
          styleElement="col-3"
        />
        <BookLinks linksStyle="col-3 me-auto" />
      </div>
      <Seperator width="col-11 mb-5 mt-5 ms-auto me-auto" />
      <h4 className="mb-5">التعليقات والملخصات</h4>
      <BookCommentInput
        desc="أضف تعليقك أو ملخصك..."
        eleWidth="70%"
        postId={id}
        addComment={addComment}
      />
      <Seperator width="col-7 mb-5 mt-5 me-5 ms-auto" />
      {isLoading ? (
        <Loading />
      ) : (
        comments.map((comment) => (
          <Comment
            commentContent={comment.content}
            key={comment.id}
            likesCount={comment.like_count}
          />
        ))
      )}
      <Seperator width="col-11 mb-5 mt-5 ms-auto me-auto" />
      <BookSection
        sectionName="القراء بحثوا ايضا عن هذه الكتب"
        content={booksNumberArr}
      />
      <Seperator width="col-11 mb-5 mt-5 ms-auto me-auto" />
      <BookSection sectionName="عناصر مشابهة" content={booksNumberArr} />
    </div>
  );
};

export default BookPage;
