import React, { FC, useState } from "react";
import styles from "./personCard.module.scss";
import Account from "../../Utils/icons/account.png";
import Upload from "../../Utils/icons/upload.png";
import { getGroups } from "../../Utils/functions/getGroups";
const PersonCard: FC<any> = (props) => {
  const [isChecked, changeCheck] = useState<boolean>(false);
  return (
    <div
      className={`${isChecked ? styles.personCardChecked : ""} ${
        styles.personCard
      }`}
    >
      <div className={styles.topLevel}>
        <input
          type={"checkbox"}
          onChange={(): void => {
            changeCheck(!isChecked);
          }}
        />
        {!isChecked && (
          <img src={Upload} className={styles.uploadImg} alt={"upload"} />
        )}
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.pTextName}>{props.data.name}</p>
        <img src={Account} alt={"account"} className={styles.accountImg} />
        <p className={styles.pText}>{getGroups(props.data.groups)}</p>
        <p className={styles.pText}>{props.data.phone}</p>
      </div>
    </div>
  );
};

export default PersonCard;
