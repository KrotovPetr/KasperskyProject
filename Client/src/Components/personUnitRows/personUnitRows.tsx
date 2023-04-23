import React, { FC, useState } from 'react';
import styles from './personUnitRows.module.scss';
import { v4 as uuidv4 } from 'uuid';
import PersonRow from '../personRow/personRow';
import { TData } from '../../Utils/Types/types';
import PersonUnitRowsHeader from "../personUnitRowsHeader/personUnitRowsHeader";

type TPersonUnitRows = { changeActive: (columnName: string) => void; data: any};

const PersonUnitRows: FC<TPersonUnitRows> = ({ changeActive, data }) => {
    const [isChecked, setCheck] = useState<boolean>(false);

    return (
        <div className={styles.personUnit}>
           <PersonUnitRowsHeader isChecked={isChecked} setCheck={setCheck} changeActive={changeActive}/>
            {data &&
                data.users.map((person: TData, index: number): JSX.Element => {
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
