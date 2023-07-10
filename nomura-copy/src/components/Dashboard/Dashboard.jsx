import React from "react";
import styles from "./Dashboard.module.scss";
import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import StatsCard from "./Widgets/StatsCard";
import BarChartCard from "./Widgets/BarChartCard";
import PieChartCard from "./Widgets/PieChartCard";

function Dashboard() {
  return (
    <Layout currentPage={"home"}>
      <Header title={"dashboard"} />
      <main className={styles.body}>
        <div className={styles.graphsGrid}>
          <StatsCard
            className={`${styles.statsWrapper} ${styles.gridCard}`}
            statTitle={"Current Total Male Employees"}
            statValue={"12,321"}
          />
          <StatsCard
            className={`${styles.statsWrapper} ${styles.gridCard}`}
            statTitle={"Current Total Female Employees"}
            statValue={"7,382"}
          />
          <StatsCard
            className={`${styles.statsWrapper} ${styles.gridCard}`}
            statTitle={"Diversity Ratio"}
            statValue={"0.89"}
          />

          <div className={`${styles.barGraphWrapper} ${styles.gridCard}`}>
            <div className={styles.cardTitle}>
              <h2>Distribution of Employees based on Gender </h2>
            </div>
            <div className={styles.graphWrapper}>
              <BarChartCard />
            </div>
          </div>
          <div className={`${styles.pieGraphsWrapper} ${styles.gridCard}`}>
            <div className={styles.graphWrapper}>
                <PieChartCard/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Dashboard;
