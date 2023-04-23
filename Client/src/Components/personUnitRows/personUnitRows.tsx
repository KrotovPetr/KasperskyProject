import React, { FC, useState } from "react";
import styles from "./personUnitRows.module.scss";
import { v4 as uuidv4 } from "uuid";
import PersonRow from "../personRow/personRow";
import queryString from "query-string";
import { useFetchAllUsersQuery } from "../../Store/apiQuery/userService";
import { TClient } from "../../Utils/Types/types";
import Arrow from "../arrow/arrow";

const PersonUnitRows: FC<any> = ({ changeActive, typeOfSort }) => {
  const [isChecked, setCheck] = useState<boolean>(false);
  const { data } = useFetchAllUsersQuery(typeOfSort);
  const currentSortObject = queryString.parse(typeOfSort);

  return (
    <div className={styles.personUnit}>
      <div className={styles.header}>
        <input type="checkbox" onChange={(): void => setCheck(!isChecked)} />
        <div
          className={styles.nameContainer}
          onClick={() => {
            changeActive("name");
          }}
        >
          <div className={styles.name}>{"Полное имя"}</div>
          <Arrow currentSortObject={currentSortObject} columnName={"name"} />
        </div>
        <div
          className={styles.domainContainer}
          onClick={() => {
            changeActive("domain");
          }}
        >
          <div className={styles.domain}>{"Учётная запись"}</div>
          <Arrow currentSortObject={currentSortObject} columnName={"domain"} />
        </div>
        <div
          className={styles.emailContainer}
          onClick={() => {
            changeActive("email");
          }}
        >
          <div className={styles.email}>{"Электронная почта"}</div>
          <Arrow currentSortObject={currentSortObject} columnName={"email"} />
        </div>
        <div className={styles.groupsContainer}>
          <div className={styles.groups}>{"Группы"}</div>
          <div className={styles.arrow}></div>
        </div>
        <div
          className={styles.phoneContainer}
          onClick={() => {
            changeActive("phone");
          }}
        >
          <div className={styles.phone}>{"Номер телефона"}</div>
          <Arrow currentSortObject={currentSortObject} columnName={"phone"} />
        </div>
      </div>
      {data &&
        data.users.map((person: TClient, index: any) => {
          return (
            <PersonRow
              person={person}
              index={index}
              key={uuidv4()}
              isChecked={isChecked}
            />
          );
        })}
    </div>
  );
};

export default PersonUnitRows;
