import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statictics = ({ statictics, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {statictics.map(({ id, label, percentage }) => (
        <li key={id} className={styles.item}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statictics.defaultProps = { title: "Upload stats" };

Statictics.propTypes = {
  title: PropTypes.string.isRequired,
  statictics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
};

export default Statictics;
