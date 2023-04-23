import React, { FC } from 'react';
import styles from './arrow.module.scss';
import ArrowImg from '../../Utils/icons/arrow.png';
import { TCurrentSort } from '../../Utils/Types/types';

type TArrow = {
    columnName: string;
    currentSortObject: TCurrentSort;
};

const Arrow: FC<TArrow> = ({ currentSortObject, columnName }) => {
    return (
        <div className={styles.arrow}>
            {currentSortObject.currentColumnSort !== columnName ? null : (
                <img
                    src={ArrowImg}
                    className={
                        currentSortObject.sortDirection === 'ASC'
                            ? styles.arrowImgUp
                            : styles.arrowImgDown
                    }
                    alt={'arrow'}
                />
            )}
        </div>
    );
};

export default Arrow;
