import { useOutletContext } from "react-router-dom";

import SpreadedSecCard from "../SpreadedSecCard/SpreadedSecCard";
import styles from "./SpreadedSection.module.css";

const SpreadedSection = (props) => {
  const [books] = useOutletContext();
  console.log(books);

  return (
    <div className={`${styles.spreadSection}`}>
      <div className={`d-flex justify-content-between align-items-center mb-3`}>
        <p className={`m-0 fs-5`}>{props.sectionName}</p>
      </div>
      {books.map((ele, i) => (
        <SpreadedSecCard
          author={books[i].author}
          title={books[i].title}
          id={books[i].id}
          key={i}
        />
      ))}
    </div>
  );
};

export default SpreadedSection;
