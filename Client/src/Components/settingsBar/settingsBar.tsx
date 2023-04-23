import React, { FC } from 'react';
import styles from './settingsBar.module.scss';
import Rows from '../../Utils/icons/rows.png';
import Grid from '../../Utils/icons/grid.png';
import Groups from '../../Utils/icons/groups.png';
import queryString from 'query-string';

type TSettingsBar = {
    toMoves: {
        toRows: () => void;
        toGrid: () => void;
        toGroups: () => void;
    };

    typeOfSort: string;
    changeSort: (newObj: string) => void;
    typeOfView: string;
};
const SettingsBar: FC<TSettingsBar> = ({
    toMoves,
    typeOfSort,
    changeSort,
    typeOfView,
}) => {
    const currentSortObject = queryString.parse(typeOfSort);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = queryString.stringify({
            ...currentSortObject,
            searchPattern: event.target.value,
        });
        changeSort(newObj);
    };

    const handleSelectColumnChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newObj = queryString.stringify({
            ...currentSortObject,
            currentColumnSort: event.target.value,
        });
        changeSort(newObj);
    };

    const handleSelectDirectionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newObj = queryString.stringify({
            ...currentSortObject,
            sortDirection: event.target.value,
        });
        changeSort(newObj);
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
            {typeOfView === 'grid' && (
                <div className={styles.sortGridParams}>
                    <div className={styles.selectContainer}>
                        <p>Column</p>
                        <select onChange={handleSelectColumnChange}>
                            <option defaultValue={''}></option>
                            <option value={'name'}>Name</option>
                            <option value={'domain'}>Domain</option>
                            <option value={'email'}>Email</option>
                            <option value={'phone'}>Phone</option>
                        </select>
                    </div>
                    <div className={styles.selectContainer}>
                        <p>Direction</p>
                        <select onChange={handleSelectDirectionChange}>
                            <option defaultValue={''}></option>
                            <option value={'DESC'}>Descending order</option>
                            <option value={'ASC'}>Ascending order</option>
                        </select>
                    </div>
                </div>
            )}
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
