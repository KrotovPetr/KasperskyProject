export type TCurrentSort = {
    currentColumnSort?: string;
    searchPattern?: string;
    sortDirection?: string;
};

export type TThroughGroupsUsers = {
    userIdUser: string;
    groupIdGroup: string;
};
export type TGroupUsers = {
    name: string;
    post: string;
    groups_users: TThroughGroupsUsers;
};

export type TGroup = {
    idGroup: number;
    name: string;
    users: TGroupUsers[];
};

export type TPersonGroups = {
    name: string;
    groups_users: TThroughGroupsUsers;
};

export type TData = {
    domain: string;
    email: string;
    idUser: string;
    name: string;
    phone: string;
    post: string;
    groups?: TPersonGroups;
};

export interface IUserDto extends Omit<string, any> {
    users: TData[];
}
