import React, { FC } from 'react';
import styles from './groupForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateGroupMutation } from '../../Store/apiQuery/groupService';

interface IGroupFormInput {
    name: string;
}

const GroupForm: FC = () => {
    const { register, handleSubmit } = useForm<IGroupFormInput>();
    const [createNewGroup, { data, error, isLoading }] =
        useCreateGroupMutation();

    const onSubmit: SubmitHandler<IGroupFormInput> = async (inputValue) => {
        await createNewGroup(inputValue);
    };

    return (
        <form className={styles.groupForm} onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <p className={styles.warningP}>This group has already exist!</p>
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
