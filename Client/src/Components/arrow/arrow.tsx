import React, { FC } from "react";
import styles from "../personUnitRows/personUnitRows.module.scss";
import ArrowImg from "../../Utils/icons/arrow.png";

const Arrow: FC<any> = ({ currentSortObject, columnName }) => {
  return (
    <div className={styles.arrow}>
      {currentSortObject.currentColumnSort !== columnName ? null : (
        <img
          src={ArrowImg}
          className={
            currentSortObject.sortDirection === "ASC"
              ? styles.arrowImgUp
              : styles.arrowImgDown
          }
          alt={"arrow"}
        />
      )}
    </div>
  );
};

export default Arrow;
