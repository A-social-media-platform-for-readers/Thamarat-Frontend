import styles from "./FeedSection.module.css";

import BookSection from "../BookSection/BookSection";
import SpreadedSection from "../SpreadedSection/SpreadedSection";

const FeedSection = () => {
  const booksNumberArr = ["1", "2", "3", "4"];
  return (
    <div className={`${styles.feedSection}`}>
      <BookSection sectionName="كتاب اليوم" booksNumber={booksNumberArr} />
      <SpreadedSection sectionName="الأكثر وراجاً لهذا الإسبوع" />
      <BookSection sectionName="الأعلى تقييماً" booksNumber={booksNumberArr} />
    </div>
  );
};

export default FeedSection;
