import React, { Fragment } from "react";
import Achievments from "../Achievements/Achievements";
import FeedSection from "../FeedSection/FeedSection";

import styles from "./BookStore.module.css";

const BookStore = () => {
  return (
    <Fragment>
      <FeedSection />
      <Achievments />
    </Fragment>
  );
};

export default BookStore;
