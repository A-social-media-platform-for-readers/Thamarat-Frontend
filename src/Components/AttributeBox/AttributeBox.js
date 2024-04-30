import styles from "./AttributeBox.module.css";

const AttributeBox = (props) => {
  return <div className={`${styles.attributeBox}`}>{props.attribute}</div>;
};

export default AttributeBox;
