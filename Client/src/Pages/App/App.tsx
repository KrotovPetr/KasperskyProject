import React, { useEffect } from "react";
import styles from "./appPage.module.scss";
import Header from "../../Components/header/header";
import { Route, Routes } from "react-router-dom";
import CongratsPage from "../CongratsPage/CongratsPage";
import StaffPage from "../StaffPage/StaffPage";
function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<CongratsPage />} />
        <Route path="staff" element={<StaffPage />} />
      </Routes>
    </div>
  );
}

export default App;
