import React, { FC, useEffect, useRef } from 'react';
import styles from './settingsBar.module.scss';
import Rows from '../../Utils/icons/rows.png';
import Grid from '../../Utils/icons/grid.png';
import Groups from '../../Utils/icons/groups.png';
import queryString from 'query-string';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/store';
import {
    setSortGroupType,
    setSortType,
} from '../../Store/usersSlice/usersSlice';
import SettingBarSelector from '../settingBarSelector/settingBarSelector';

type TSettingsBar = {
    toMoves: {
        toRows: () => void;
        toGrid: () => void;
        toGroups: () => void;
    };
    typeOfView: string;
};
const SettingsBar: FC<TSettingsBar> = ({ toMoves, typeOfView }) => {
    const sortType = useAppSelector((state) => state.usersReducer.typeOfSort);
    const dispatch = useAppDispatch();
    const currentSortObject = queryString.parse(sortType);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = queryString.stringify({
            ...currentSortObject,
            searchPattern: event.target.value,
        });
        if (typeOfView !== 'groups') {
            dispatch(setSortType(newObj));
        } else {
            dispatch(setSortGroupType(newObj));
        }
    };
    const inputRef = useRef(null);

    return (
        <div className={styles.settingsBar}>
            <input
                className={styles.input}
                placeholder={'Найти пользователя'}
                ref={inputRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleInputChange(event);
                }}
            />
            {typeOfView === 'grid' && <SettingBarSelector />}
            <div className={styles.typeContainer}>
                <img
                    src={Rows}
                    className={styles.typeImg}
                    alt={'rows'}
                    onClick={() => {
                        toMoves.toRows();
                        // @ts-ignore
                        inputRef.current.value = '';
                    }}
                />
                <img
                    src={Grid}
                    className={styles.typeImg}
                    alt={'grid'}
                    onClick={() => {
                        toMoves.toGrid();
                        // @ts-ignore
                        inputRef.current.value = '';
                    }}
                />
                <img
                    src={Groups}
                    className={styles.typeImg}
                    alt={'groups'}
                    onClick={() => {
                        toMoves.toGroups();
                        // @ts-ignore
                        inputRef.current.value = '';
                    }}
                />
            </div>
        </div>
    );
};

export default SettingsBar;
