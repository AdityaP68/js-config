import React from "react";
import styles from "./Header.module.scss";

function Header({ title }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.profileOptionsWrapper}>
        <div className={styles.notification}></div>
        <div className={styles.profileImg}>
          <span>A</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
