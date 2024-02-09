import React from "react";
import styles from "./water_mark.module.scss";

interface WaterMarkProps {
  label: string;
}

export default function WaterMark({ label}: WaterMarkProps) {
  return (
    <div className={styles.water_mark_container}>
      <div className={styles.water_mark_item}>
        <div className={styles.water_mark_text}>{label}</div>
        <div className={styles.water_mark_overlay}>{label}</div>
      </div>
    </div>
  );
}
