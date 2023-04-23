import { TPersonGroups } from '../Types/types';

export const getGroups = (array: any): string => {
    console.log(array);
    if (array.length === 0) {
        return 'Unmanaged';
    } else {
        let str = '';
        array.forEach((group: TPersonGroups, current: number) => {
            if (current === 0) {
                str += group.name;
            } else {
                str += ' / ' + group.name;
            }
        });
        return str;
    }
};
