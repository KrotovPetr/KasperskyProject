import React, {FC, useState} from 'react';
import styles from './groupForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateGroupMutation } from '../../Store/apiQuery/groupService';

interface IGroupFormInput {
    name: string;
}

const GroupForm: FC = () => {
    const { register, handleSubmit } = useForm<IGroupFormInput>();
    const [createNewGroup, {}] =
        useCreateGroupMutation();
    const [isExist, checkExist] = useState<boolean>(false);
    const onSubmit: SubmitHandler<IGroupFormInput> = async (inputValue: IGroupFormInput) => {
        if(inputValue.name === ""){
            checkExist(true);
        } else {
            checkExist(false);
            await createNewGroup(inputValue);
        }

    };

    return (
        <form className={styles.groupForm} onSubmit={handleSubmit(onSubmit)}>
            {isExist && (
                <p className={styles.pError}>This group has already exist or input field is empty, try again!</p>
            )}
            <input
                placeholder={'Group Name'}
                {...register('name')}
                className={styles.input}
            />
            <input
                type="submit"
                value={'Create'}
                className={styles.submitInput}
            />
        </form>
    );
};

export default GroupForm;
