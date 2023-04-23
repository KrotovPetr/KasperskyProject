// Arrange-Act-Assert-Teardown pattern
import { setSortGroupType, setSortType, usersSlice } from './usersSlice';

interface IUser {
    typeOfSort: string;
    sortGroupQuery: string;
}

const initialState: IUser = {
    typeOfSort: '',
    sortGroupQuery: '',
};

describe('user reducer tests', () => {
    it('should check initial state', () => {
        expect(usersSlice.reducer(undefined, { type: 'unknown' })).toEqual({
            typeOfSort: '',
            sortGroupQuery: '',
        });
    });
    it('should handle typeOfSort', () => {
        expect(
            usersSlice.reducer(initialState, {
                type: setSortType,
                payload: 'hello',
            })
        ).toEqual({
            typeOfSort: 'hello',
            sortGroupQuery: '',
        });
    });
    it('should handle sortGroup', () => {
        expect(
            usersSlice.reducer(initialState, {
                type: setSortGroupType,
                payload: 'hello',
            })
        ).toEqual({
            typeOfSort: '',
            sortGroupQuery: 'hello',
        });
    });
});

export {};
