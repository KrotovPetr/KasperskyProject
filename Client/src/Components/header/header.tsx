import React from "react";
import styles from "./header.module.scss";
import KaspLogo from "../../Utils/icons/kaspLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <img src={KaspLogo} className={styles.image} alt="KasperskyLogo" />
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
