import React, {useState} from 'react';
import styles from "./personRow.module.scss";
import {v4 as uuidv4} from "uuid";
import {getGroups} from "../../Utils/functions/getGroups";

const PersonRow = (props: any) => {
    const [isPersonChecked, changeChecked] = useState<boolean>(false);
    const getStyleForPosition: ()=>string = ():string =>{
        return `${styles.position} ${(props.isChecked || isPersonChecked) ? styles.checkedPosition : props.index%2 === 0 ? styles.oddPosition: ""} `
    }

    return (
        <div className={getStyleForPosition()} key={uuidv4()}>
            <input type="checkbox" checked={props.isChecked || isPersonChecked} onChange={():void=> changeChecked(!isPersonChecked)}/>
            <div className={styles.name}>{props.person.name}</div>
            <div className={styles.domain}>{props.person.domain}</div>
            <div className={styles.email}>{props.person.email}</div>
            <div className={styles.groups}>{getGroups(props.person.groups)}</div>
            <div className={styles.phone}>{props.person.phone}</div>
        </div>
    );
};

export default PersonRow;