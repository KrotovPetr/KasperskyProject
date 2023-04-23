import React, {useState} from 'react';
import styles from './personUnitGroup.module.scss';
import {StyledSlider} from "../styledSlider/styledSlider";
import Group from "../group/group";
import {useFetchAllGroupQuery} from "../../Store/apiQuery/groupService";
import {staffGroupSliderSettings} from "../../Utils/settings/sliderSettings";
import {v4 as uuidv4} from 'uuid';

import GroupForm from "../groupForm/groupForm";

const PersonUnitGroup = () => {
    const [groupData, setNewGroupData] = useState<string>("");
    const {data} = useFetchAllGroupQuery(groupData);


    return (
        <div className={styles.unitGroup}>
            {data && <StyledSlider {...staffGroupSliderSettings}>
                {data.groups.map((group: any)=>{
                    return  <div className={styles.groupContainer} key={uuidv4()}>
                        <Group group={group}/>
                    </div>
                })}

                <div className={styles.groupContainer}>
                    <div className={styles.newGroupAddition}>
                        <h1 className={styles.header}>New group</h1>
                        <GroupForm/>
                    </div>
                </div>
            </StyledSlider>}
        </div>
    );
};

export default PersonUnitGroup;