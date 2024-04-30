import AttributeBox from "../Components/AttributeBox/AttributeBox";
import BookSection from "../Components/BookSection/BookSection";
import PrimaryBtn from "../Components/PrimaryBtn/PrimaryBtn";
import SecondaryBtn from "../Components/SecondaryBtn/SecondaryBtn";
import styles from "../styles/BookPage.module.css";

const BookPage = (props) => {
  const booksNumberArr = [1, 2, 3, 4, 5, 6];
  return (
    <div
      className={`d-flex flex-column position-relative ${styles.bookPageContainer}`}
      style={{ top: 70 }}
    >
      <div className="d-flex justify-content-center align-items-center"></div>
      <div className="row mb-5 g-lg-5">
        <div className={`col-3 ${styles.bookImgContainer}`}>
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
        <div className="col-6 position-relative">
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
            <p className={`m-0 fs-5`}>المؤلف</p>
            <p className={`fs-3 mb-5 position-relative ${styles.bookTitle}`}>
              اسم الكتاب
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
        <div className={`col-3 ${styles.purchaseBox}`}>
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
          <SecondaryBtn text="إضافة الي السلة" />
          <PrimaryBtn text="اشتتري الان" />
        </div>
      </div>
      <BookSection
        sectionName="القراء بحثوا ايضا عن هذه الكتب"
        booksNumber={booksNumberArr}
      />
      <BookSection sectionName="عناصر مشابهة" booksNumber={booksNumberArr} />
    </div>
  );
};

export default BookPage;
