import React, {FC} from 'react';
import styles from "../../Pages/StaffPage/staffPage.module.scss";
import Rows from "../../Utils/icons/rows.png";
import Grid from "../../Utils/icons/grid.png";
import Groups from "../../Utils/icons/groups.png";
import queryString from "query-string";

type TSettingsBar = {
    toMoves: {
        toRows:  () => void,
        toGrid: ()=> void,
        toGroups: ()=>void
    }
    typeOfSort: any,
    changeSort: any
}
const SettingsBar: FC<TSettingsBar> = ({toMoves, typeOfSort, changeSort}) => {
    const currentSortObject = queryString.parse(typeOfSort);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = queryString.stringify({...currentSortObject, searchPattern: event.target.value})
        changeSort(newObj)
    };

    return (
        <div className={styles.settingsBar}>
            <input className={styles.input} placeholder={"Найти пользователя"} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
               handleInputChange(event)
            }}/>
            <div className={styles.typeContainer}>
                <img src={Rows} className={styles.typeImg} alt={"rows"} onClick={toMoves.toRows}/>
                <img src={Grid} className={styles.typeImg} alt={"grid"} onClick={toMoves.toGrid}/>
                <img src={Groups} className={styles.typeImg} alt={"groups"} onClick={toMoves.toGroups}/>
            </div>
        </div>
    );
};

export default SettingsBar;