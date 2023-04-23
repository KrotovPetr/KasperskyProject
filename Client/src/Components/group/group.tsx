import React, { FC } from 'react';
import styles from './group.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { TGroup, TGroupUsers } from '../../Utils/Types/types';

type TGroupComponent = {
    group: TGroup;
};

const Group: FC<TGroupComponent> = ({ group }) => {
    return (
        <div className={styles.group}>
            <h1 className={styles.header}>{group.name}</h1>
            {group.users && group.users.length > 0 ? (
                group.users.map((person: TGroupUsers) => {
                    return (
                        <div className={styles.person} key={uuidv4()}>
                            <p className={styles.pName}>{person.name}</p>
                            <p className={styles.pPost}>{person.post}</p>
                        </div>
                    );
                })
            ) : (
                <p className={styles.pText}>There are no users yet</p>
            )}
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log(
                        "I'm sorry, I didn't have time to implement it, there was no condition about it in the terms of reference"
                    );
                }}
            >
                <input
                    className={styles.button}
                    type={'submit'}
                    value={'Add'}
                />
            </form>
        </div>
    );
};

export default Group;
