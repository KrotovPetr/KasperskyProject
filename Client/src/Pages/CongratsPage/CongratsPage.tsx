import React, { FC } from 'react';
import styles from './congratsPage.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Telegram from '../../Utils/icons/telegram.png';
import GitHub from '../../Utils/icons/github.png';
import Resume from '../../Utils/icons/file.png';
const CongratsPage: FC = () => {
    const navigate = useNavigate();
    const toStaff: () => void = (): void => {
        navigate('/staff');
    };
    return (
        <div className={styles.congratsPage}>
            <div className={styles.formCard}>
                <h1 className={styles.header}>Hello</h1>
                <p className={styles.pText}>Good to see you here!</p>
                <div className={styles.imgLinksContainer}>
                    <NavLink
                        className={styles.imgContainer}
                        to={'https://github.com/KrotovPetr'}
                    >
                        <img
                            src={GitHub}
                            className={styles.img}
                            alt={'GitHub'}
                        />
                        <p className={styles.pText}>GitHub</p>
                    </NavLink>
                    <NavLink
                        className={styles.imgContainer}
                        to={'https://disk.yandex.ru/i/R-azQi0urWp1pQ'}
                    >
                        <img
                            src={Resume}
                            className={styles.img}
                            alt={'Resume'}
                        />
                        <p className={styles.pText}>Resume</p>
                    </NavLink>
                    <NavLink
                        className={styles.imgContainer}
                        to={'https://t.me/peter40127'}
                    >
                        <img
                            src={Telegram}
                            className={styles.img}
                            alt={'Telegram'}
                        />
                        <p className={styles.pText}>Telegram</p>
                    </NavLink>
                </div>
                <button className={styles.button} onClick={toStaff}>
                    {' '}
                    Check staff{' '}
                </button>
            </div>
        </div>
    );
};

export default CongratsPage;
