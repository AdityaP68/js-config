import React from "react";
import styles from "./Layout.module.scss";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

function Layout({ currentPage, children }) {
  return (
    <div className={styles.body}>
      <aside className={styles.sidebarWrapper}>
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <div className={styles.logoWrapper}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.appTitle}>Turing+</div>
          </div>
          <div className={styles.menuWrapper}>
            <span>main menu</span>
            <div className={styles.menu}>
              <div
                className={`${styles.menuItem} ${
                  currentPage === "home" && styles.selected
                }`}
              >
                <Link to={"/"} className={styles.link}>
                  <small>dashboard</small>
                </Link>
              </div>
              <div
                className={`${styles.menuItem} ${
                  currentPage === "uploads" && styles.selected
                }`}
              >
                <Link to={"/uploads"}>
                  {" "}
                  <small>uploads</small>
                </Link>
              </div>
              <div
                className={`${styles.menuItem} ${
                  currentPage === "vendors" && styles.selected
                }`}
              >
                <Link to={"/vendors"}>
                  <small>vendors</small>
                </Link>
              </div>
              <div
                className={`${styles.menuItem} ${
                  currentPage === "hiring" && styles.selected
                }`}
              >
                <Link to={"/hiring"}>
                  <small>hiring</small>
                </Link>
              </div>
              <div
                className={`${styles.menuItem} ${
                  currentPage === "analytics" && styles.selected
                }`}
              >
                <Link to={"/analytics"}>
                  <small>analytics</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;
