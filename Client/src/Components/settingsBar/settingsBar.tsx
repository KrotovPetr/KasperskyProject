import React, { FC } from 'react';
import styles from './settingsBar.module.scss';
import Rows from '../../Utils/icons/rows.png';
import Grid from '../../Utils/icons/grid.png';
import Groups from '../../Utils/icons/groups.png';
import queryString from 'query-string';
import {useAppDispatch, useAppSelector} from "../../Store/hooks/store";
import {setSortGroupType, setSortType} from "../../Store/usersSlice/usersSlice";
import SettingBarSelector from "../settingBarSelector/settingBarSelector";

type TSettingsBar = {
    toMoves: {
        toRows: () => void;
        toGrid: () => void;
        toGroups: () => void;
    };
    typeOfView: string;
};
const SettingsBar: FC<TSettingsBar> = ({
                                           toMoves,
                                           typeOfView,
                                       }) => {
    const sortType = useAppSelector(state => state.usersReducer.typeOfSort);
    const dispatch = useAppDispatch();
    const currentSortObject = queryString.parse(sortType);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = queryString.stringify({
            ...currentSortObject,
            searchPattern: event.target.value,
        });
        if(typeOfView !== "groups") {
            dispatch(setSortType(newObj))}
        else {
            console.log(newObj)
            dispatch(setSortGroupType(newObj))
        }
    };


    return (
        <div className={styles.settingsBar}>
            <input
                className={styles.input}
                placeholder={'Найти пользователя'}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleInputChange(event);
                }}
            />
            {typeOfView === 'grid' && (<SettingBarSelector/>)}
            <div className={styles.typeContainer}>
                <img
                    src={Rows}
                    className={styles.typeImg}
                    alt={'rows'}
                    onClick={toMoves.toRows}
                />
                <img
                    src={Grid}
                    className={styles.typeImg}
                    alt={'grid'}
                    onClick={toMoves.toGrid}
                />
                <img
                    src={Groups}
                    className={styles.typeImg}
                    alt={'groups'}
                    onClick={toMoves.toGroups}
                />
            </div>
        </div>
    );
};

export default SettingsBar;
