import React, { FC } from 'react';
import styles from './header.module.scss';
import KaspLogo from '../../Utils/icons/kaspLogo.png';
import { NavLink, useNavigate } from 'react-router-dom';
const Header: FC = () => {
    const navigate = useNavigate();
    const toCongrats: () => void = (): void => {
        navigate('/');
    };

    return (
        <div className={styles.header}>
            <img
                src={KaspLogo}
                className={styles.image}
                alt="KasperskyLogo"
                onClick={toCongrats}
            />
            <div className={styles.linksContainer}>
                <NavLink to="/" className={styles.link}>
                    Home
                </NavLink>
                <NavLink to="/staff" className={styles.link}>
                    Staff
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
