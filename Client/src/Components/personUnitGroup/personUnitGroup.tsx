import React, { FC } from 'react';
import styles from './personUnitGroup.module.scss';
import { StyledSlider } from '../styledSlider/styledSlider';
import Group from '../group/group';
import { staffGroupSliderSettings } from '../../Utils/settings/sliderSettings';
import { v4 as uuidv4 } from 'uuid';
import GroupForm from '../groupForm/groupForm';
import { TGroup } from '../../Utils/Types/types';
import {useFetchAllGroupQuery} from "../../Store/apiQuery/groupService";
import {useAppSelector} from "../../Store/hooks/store";


const PersonUnitGroup: FC = () => {
    const sortGroupQuery = useAppSelector(state=>state.usersReducer.sortGroupQuery);
    const {data} = useFetchAllGroupQuery(sortGroupQuery);
    console.log(data);
    return (
        <div className={styles.unitGroup}>
            {data && (
                <StyledSlider {...staffGroupSliderSettings}>
                    {data.groups.map((group: TGroup) => {
                        return (
                            <div
                                className={styles.groupContainer}
                                key={uuidv4()}
                            >
                                <Group group={group} />
                            </div>
                        );
                    })}

                    <div className={styles.groupContainer}>
                        <div className={styles.newGroupAddition}>
                            <h1 className={styles.header}>New group</h1>
                            <GroupForm />
                        </div>
                    </div>
                </StyledSlider>
            )}
        </div>
    );
};

export default PersonUnitGroup;
