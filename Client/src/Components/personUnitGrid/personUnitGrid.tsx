import React, { FC } from 'react';
import styles from './personUnitGrid.module.scss';
import { useFetchAllUsersQuery } from '../../Store/apiQuery/userService';
import PersonCard from '../personCard/personCard';
import { v4 as uuidv4 } from 'uuid';

type TPersonUnit = {
    typeOfSort: string;
};

const PersonUnitGrid: FC<TPersonUnit> = ({ typeOfSort }) => {
    const { data } = useFetchAllUsersQuery(typeOfSort);
    return (
        <div className={styles.personUnitGrid}>
            {data &&
                data.users.map((person: any) => {
                    return <PersonCard data={person} key={uuidv4()} />;
                })}
        </div>
    );
};

export default PersonUnitGrid;
