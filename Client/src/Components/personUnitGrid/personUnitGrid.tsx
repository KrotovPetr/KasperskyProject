import React, { FC, useEffect } from 'react';
import styles from './personUnitGrid.module.scss';
import PersonCard from '../personCard/personCard';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/store';
import { setSortType } from '../../Store/usersSlice/usersSlice';
import { TData } from '../../Utils/Types/types';

type TPersonUnit = {
    data: {
        users: TData[];
    };
};

const PersonUnitGrid: FC<TPersonUnit> = ({ data }) => {
    const dispatch = useAppDispatch();
    const { sortGroupQuery } = useAppSelector((state) => state.usersReducer);
    useEffect(() => {
        dispatch(setSortType(sortGroupQuery));
    }, []);
    return (
        <div className={styles.personUnitGrid}>
            {data &&
                data.users.map((person: TData) => {
                    return <PersonCard data={person} key={uuidv4()} />;
                })}
        </div>
    );
};

export default PersonUnitGrid;
