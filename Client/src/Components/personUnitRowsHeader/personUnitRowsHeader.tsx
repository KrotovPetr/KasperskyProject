import React, { FC } from 'react';
import styles from './unitRowsHeader.module.scss';
import Arrow from '../arrow/arrow';
import queryString from 'query-string';
import { useAppSelector } from '../../Store/hooks/store';

const PersonUnitRowsHeader: FC<any> = ({
    isChecked,
    setCheck,
    changeActive,
}) => {
    const sortType = useAppSelector((state) => state.usersReducer.typeOfSort);
    const currentSortObject = queryString.parse(sortType);

    return (
        <div className={styles.header}>
            <input
                type="checkbox"
                onChange={(): void => setCheck(!isChecked)}
            />
            <div
                className={styles.nameContainer}
                onClick={() => {
                    changeActive('name');
                }}
            >
                <div className={styles.name}>{'Полное имя'}</div>
                <Arrow
                    currentSortObject={currentSortObject}
                    columnName={'name'}
                />
            </div>
            <div
                className={styles.domainContainer}
                onClick={() => {
                    changeActive('domain');
                }}
            >
                <div className={styles.domain}>{'Учётная запись'}</div>
                <Arrow
                    currentSortObject={currentSortObject}
                    columnName={'domain'}
                />
            </div>
            <div
                className={styles.emailContainer}
                onClick={() => {
                    changeActive('email');
                }}
            >
                <div className={styles.email}>{'Электронная почта'}</div>
                <Arrow
                    currentSortObject={currentSortObject}
                    columnName={'email'}
                />
            </div>
            <div className={styles.groupsContainer}>
                <div className={styles.groups}>{'Группы'}</div>
                <div className={styles.arrow}></div>
            </div>
            <div
                className={styles.phoneContainer}
                onClick={() => {
                    changeActive('phone');
                }}
            >
                <div className={styles.phone}>{'Номер телефона'}</div>
                <Arrow
                    currentSortObject={currentSortObject}
                    columnName={'phone'}
                />
            </div>
        </div>
    );
};

export default PersonUnitRowsHeader;
