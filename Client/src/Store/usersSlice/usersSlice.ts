import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
    typeOfSort: string;
    sortGroupQuery: string;
}

const initialState: IUser = {
    typeOfSort: '',
    sortGroupQuery: '',
};

export const usersSlice = createSlice({
    name: 'fetchSlice',
    initialState,
    reducers: {
        setSortType(state, action: PayloadAction<string>) {
            state.typeOfSort = action.payload;
        },
        setSortGroupType(state, action: PayloadAction<string>) {
            state.sortGroupQuery = action.payload;
        },
    },
});
export const { setSortType, setSortGroupType } = usersSlice.actions;
export default usersSlice.reducer;
