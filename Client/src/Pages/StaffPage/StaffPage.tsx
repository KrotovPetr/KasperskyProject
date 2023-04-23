import React, {useState} from 'react';
import PersonUnitRows from "../../Components/personUnitRows/personUnitRows";
import styles from './staffPage.module.scss';
import PersonUnitGrid from "../../Components/personUnitGrid/personUnitGrid";
import PersonUnitGroup from "../../Components/personUnitGroup/personUnitGroup";
import SettingsBar from "../../Components/settingsBar/settingsBar";
import {useFetchAllUsersQuery} from "../../Store/apiQuery/userService";
import queryString from "query-string";


const StaffPage = () => {
    const [typeOfView, changeView] = useState<string>("rows");
    const [typeOfSort, changeSort] = useState<string>("");
    const { data }= useFetchAllUsersQuery(typeOfSort);

    const changeActive = (columnName: string): void =>{
        let query: string = "";
        let currentSortObject = queryString.parse(typeOfSort);
        if(currentSortObject.currentColumnSort === columnName){
            let sortDirection:string = currentSortObject.sortDirection === 'ASC' ? 'DESC' : 'ASC';
            query = queryString.stringify({currentColumnSort: columnName, sortDirection , searchPattern: currentSortObject.searchPattern})
        } else {
            query = queryString.stringify({currentColumnSort: columnName, sortDirection: 'DESC' , searchPattern: currentSortObject.searchPattern})
        }
        changeSort(query)
    }

    const toRows: () => void = (): void => {
        changeView("rows");
    }

    const toGrid: () => void = (): void => {
        changeView("grid");
    }

    const toGroups: () => void = (): void => {
        changeView("groups");
    }

    const toMoves = {
        toGrid,
        toRows,
        toGroups
    }

    const getType: () => JSX.Element = ():JSX.Element => {
        if (typeOfView.localeCompare("rows") === 0){
            return <PersonUnitRows changeActive={changeActive} typeOfSort={typeOfSort}/>
        } else if (typeOfView.localeCompare("grid") === 0){
            return <PersonUnitGrid typeOfSort={typeOfSort}/>
        } else {
            return <PersonUnitGroup/>
        }
    }

    return (
        <div className={styles.staffPage}>
            <SettingsBar toMoves={toMoves} typeOfSort={typeOfSort} changeSort={changeSort}/>
            <div className={styles.contentStaff}>
                {
                    getType()
                }
            </div>
        </div>
    );
};

export default StaffPage;