import React, { FC, useState } from 'react';
import styles from './personRow.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { getGroups } from '../../Utils/functions/getGroups';
import { TData } from '../../Utils/Types/types';
import { getStyleForPosition } from '../../Utils/functions/getStyleForPosition';

type TPersonRow = {
    person: TData;
    index: number;
    isChecked: boolean;
};

const PersonRow: FC<TPersonRow> = ({ person, index, isChecked }) => {
    const [isPersonChecked, changeChecked] = useState<boolean>(false);

    const changeHandler: () => void = (): void => {
        changeChecked(!isPersonChecked);
    };

    return (
        <div
            className={getStyleForPosition(index, isPersonChecked, isChecked)}
            key={uuidv4()}
        >
            <input
                type="checkbox"
                checked={isChecked || isPersonChecked}
                onChange={changeHandler}
            />
            <div className={styles.name}>{person.name}</div>
            <div className={styles.domain}>{person.domain}</div>
            <div className={styles.email}>{person.email}</div>
            {person.groups && (
                <div className={styles.groups}>{getGroups(person.groups)}</div>
            )}
            <div className={styles.phone}>{person.phone}</div>
        </div>
    );
};

export default PersonRow;
