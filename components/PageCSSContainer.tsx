import type { FC } from "react";
import React from "react";
import styles from "./Page.module.css";

const PageCSSContainer: FC = ({ children }) => {
  return <main className={styles.page}>{children}</main>;
};

export default PageCSSContainer;
