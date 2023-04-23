import React, { FC } from "react";
import styles from "./group.module.scss";
import { v4 as uuidv4 } from "uuid";

const Group: FC<any> = ({ group }) => {
  return (
    <div className={styles.group}>
      <h1 className={styles.header}>{group.name}</h1>
      {group.users && group.users.length > 0 ? (
        group.users.map((person: any) => {
          return (
            <div className={styles.person} key={uuidv4()}>
              <p className={styles.pName}>{person.name}</p>
              <p className={styles.pPost}>{person.post}</p>
            </div>
          );
        })
      ) : (
        <h1>Данная группа пустая</h1>
      )}
      <button className={styles.button}> Добавить </button>
    </div>
  );
};

export default Group;
