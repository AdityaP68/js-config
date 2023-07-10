import React from "react";
import styles from "./StatsCard.module.scss";

function StatsCard({ className, statTitle, statValue, prediction }) {
  return (
    <div className={`${styles.statsCard} ${className || ""}`}>
      <div className={styles.statName}></div>
      <div className={styles.statValue}></div>
      <div className={styles.statPrediction}></div>
    </div>
  );
}

export default StatsCard;
