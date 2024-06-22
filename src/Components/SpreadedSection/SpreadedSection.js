import SpreadedSecCard from "../SpreadedSecCard/SpreadedSecCard";
import styles from "./SpreadedSection.module.css";

const SpreadedSection = (props) => {
  return (
    <div className={`${styles.spreadSection}`}>
      <div className={`d-flex justify-content-between align-items-center mb-3`}>
        <p className={`m-0 fs-5`}>{props.sectionName}</p>
      </div>
      {props.content.map((ele, i) => (
        <SpreadedSecCard
          author={ele.author}
          title={ele.title}
          id={ele.id}
          key={i}
        />
      ))}
    </div>
  );
};

export default SpreadedSection;
