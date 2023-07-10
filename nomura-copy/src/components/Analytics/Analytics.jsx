import React from "react";
import Layout from "../Layout/Layout";
import styles from "./Analytics.module.scss";

function Analytics() {
  return (
    <Layout currentPage={"analytics"}>
      <div className={styles.contentWrapper}>analytics</div>
    </Layout>
  );
}

export default Analytics;
