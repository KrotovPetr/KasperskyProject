import React, {FC} from 'react';
import styles from "./barSelector.module.scss";
import queryString from "query-string";
import {setSortType} from "../../Store/usersSlice/usersSlice";
import {useAppDispatch, useAppSelector} from "../../Store/hooks/store";

const SettingBarSelector:FC = () => {
    const sortType = useAppSelector(state => state.usersReducer.typeOfSort);
    const dispatch = useAppDispatch();
    const currentSortObject = queryString.parse(sortType);
    const handleSelectColumnChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newObj = queryString.stringify({
            ...currentSortObject,
            currentColumnSort: event.target.value,
        });
        dispatch(setSortType(newObj))
    };

    const handleSelectDirectionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newObj = queryString.stringify({
            ...currentSortObject,
            sortDirection: event.target.value,
        });
        dispatch(setSortType(newObj))
    };

    return (
        <div className={styles.sortGridParams}>
            <div className={styles.selectContainer}>
                <p className={styles.pText}>Column</p>
                <select onChange={handleSelectColumnChange} className={styles.selector}>
                    <option defaultValue={''} className={styles.selOption}>Default</option>
                    <option value={'name'} className={styles.selOption}>Name</option>
                    <option value={'domain'} className={styles.selOption}>Domain</option>
                    <option value={'email'} className={styles.selOption}>Email</option>
                    <option value={'phone'} className={styles.selOption}>Phone</option>
                </select>
            </div>
            <div className={styles.selectContainer}>
                <p className={styles.pText}>Direction</p>
                <select onChange={handleSelectDirectionChange} className={styles.selector}>
                    <option defaultValue={''} className={styles.selOption}>Default</option>
                    <option value={'DESC'} className={styles.selOption}>Descending order</option>
                    <option value={'ASC'} className={styles.selOption}>Ascending order</option>
                </select>
            </div>
        </div>
    );
};

export default SettingBarSelector;