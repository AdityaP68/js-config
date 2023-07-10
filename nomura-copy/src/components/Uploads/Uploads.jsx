import React from "react";
import Layout from "../Layout/Layout";
import styles from "./Uploads.module.scss";

function Uploads() {
  return (
    <Layout currentPage={"uploads"}>
      <div className={styles.contentWrapper}>Uploads</div>
    </Layout>
  );
}

export default Uploads;
