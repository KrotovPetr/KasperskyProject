import React, { FC, useState } from 'react';
import styles from './personCard.module.scss';
import Account from '../../Utils/icons/account.png';
import Upload from '../../Utils/icons/upload.png';
import { getGroups } from '../../Utils/functions/getGroups';
import { TData } from '../../Utils/Types/types';

type TPersonCard = {
    data: TData;
};

const PersonCard: FC<TPersonCard> = ({ data }) => {
    const [isChecked, changeCheck] = useState<boolean>(false);

    const inputOnChangeHandler: () => void = (): void => {
        changeCheck(!isChecked);
    };

    return (
        <div
            className={`${isChecked ? styles.personCardChecked : ''} ${
                styles.personCard
            }`}
        >
            <div className={styles.topLevel}>
                <input type={'checkbox'} onChange={inputOnChangeHandler} />
                {!isChecked && (
                    <img
                        src={Upload}
                        className={styles.uploadImg}
                        alt={'upload'}
                    />
                )}
            </div>
            <div className={styles.cardInfo}>
                <p className={styles.pTextName}>{data.name}</p>
                <img
                    src={Account}
                    alt={'account'}
                    className={styles.accountImg}
                />
                <p className={styles.pText}>{getGroups(data.groups)}</p>
                <p className={styles.pText}>{data.phone}</p>
            </div>
        </div>
    );
};

export default PersonCard;
