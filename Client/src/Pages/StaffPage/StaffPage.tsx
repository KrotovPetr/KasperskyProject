import React, { FC, useEffect, useState } from 'react';
import PersonUnitRows from '../../Components/personUnitRows/personUnitRows';
import styles from './staffPage.module.scss';
import PersonUnitGrid from '../../Components/personUnitGrid/personUnitGrid';
import PersonUnitGroup from '../../Components/personUnitGroup/personUnitGroup';
import SettingsBar from '../../Components/settingsBar/settingsBar';
import { useFetchAllUsersQuery } from '../../Store/apiQuery/userService';
import {
    setSortGroupType,
    setSortType,
} from '../../Store/usersSlice/usersSlice';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/store';
import { setActive } from '../../Utils/functions/setActive';
import { type } from 'os';

const StaffPage: FC = () => {
    const [typeOfView, changeView] = useState<string>('rows');
    const dispatch = useAppDispatch();
    const { typeOfSort, sortGroupQuery } = useAppSelector(
        (state) => state.usersReducer
    );
    const { data } = useFetchAllUsersQuery(typeOfSort);

    const changeActive = (columnName: string): void => {
        const query: string = setActive(columnName, typeOfSort);
        if (typeOfView === 'groups') {
            dispatch(setSortGroupType(query));
        } else {
            dispatch(setSortType(query));
        }
    };

    useEffect(() => {}, [typeOfSort, sortGroupQuery]);

    const toRows: () => void = (): void => {
        changeView('rows');
    };

    const toGrid: () => void = (): void => {
        changeView('grid');
    };

    const toGroups: () => void = (): void => {
        changeView('groups');
    };

    const toMoves = {
        toGrid,
        toRows,
        toGroups,
    };

    const getType: () => JSX.Element = (): JSX.Element => {
        if (typeOfView.localeCompare('rows') === 0) {
            return <PersonUnitRows changeActive={changeActive} data={data} />;
        } else if (typeOfView.localeCompare('grid') === 0) {
            return <PersonUnitGrid data={data} />;
        } else {
            return <PersonUnitGroup />;
        }
    };

    return (
        <div className={styles.staffPage}>
            <SettingsBar toMoves={toMoves} typeOfView={typeOfView} />
            <div className={styles.contentStaff}>{getType()}</div>
        </div>
    );
};

export default StaffPage;
