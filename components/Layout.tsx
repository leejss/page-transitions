import type { FC } from "react";
import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.Container}>
      <nav className={styles.Nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/example">Example</Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
