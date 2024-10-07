import React from "react";
import styles from "./styles.module.scss";
import Barmetrics from "./bar-metrics/Barmetrics";
import Linemetrics from "./line-metrics/Linemetrics";
import Metricsdatatable from "./metrics-datatable/Metricsdatatable";

const Scorecardmetrics = () => {
  return (
    <div className={styles.Metrics}>
      <div className={styles.graphcont}>
        <div className={styles.graph}>
          <Barmetrics />
        </div>
        <div className={styles.graph}>
          <Linemetrics />
        </div>
        <div className={styles.graph}>
        <Metricsdatatable/>
        </div>
      </div>
    </div>
  );
};

export default Scorecardmetrics;
